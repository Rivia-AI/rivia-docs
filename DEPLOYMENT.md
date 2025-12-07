# Deployment Guide for Self-Hosting

This guide covers deploying the Rivia documentation site to `docs.rivia.io`.

## Prerequisites

- Node.js >= 20.0
- npm or yarn
- Web server (nginx, Apache, or similar)
- DNS configured: `docs.rivia.io` → your server IP

## Build Process

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Site

```bash
npm run build
```

This creates a `build/` directory with all static files ready for deployment.

### 3. Test the Build Locally

```bash
npm run serve
```

This serves the built site at `http://localhost:3000` so you can verify everything works.

## Deployment Options

### Option 1: Nginx Configuration

Create an nginx configuration file at `/etc/nginx/sites-available/docs.rivia.io`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name docs.rivia.io;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name docs.rivia.io;

    # SSL certificates (adjust paths as needed)
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/key.pem;

    # Root directory (point to your build output)
    root /var/www/docs.rivia.io/build;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Serve static files
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Don't cache HTML files
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/docs.rivia.io /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Option 2: Apache Configuration

Create an Apache virtual host at `/etc/apache2/sites-available/docs.rivia.io.conf`:

```apache
<VirtualHost *:80>
    ServerName docs.rivia.io
    Redirect permanent / https://docs.rivia.io/
</VirtualHost>

<VirtualHost *:443>
    ServerName docs.rivia.io
    DocumentRoot /var/www/docs.rivia.io/build

    SSLEngine on
    SSLCertificateFile /path/to/ssl/cert.pem
    SSLCertificateKeyFile /path/to/ssl/key.pem

    <Directory /var/www/docs.rivia.io/build>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Enable compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>

    # Cache static assets
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType image/jpg "access plus 1 year"
        ExpiresByType image/jpeg "access plus 1 year"
        ExpiresByType image/gif "access plus 1 year"
        ExpiresByType image/png "access plus 1 year"
        ExpiresByType image/svg+xml "access plus 1 year"
        ExpiresByType text/css "access plus 1 year"
        ExpiresByType application/javascript "access plus 1 year"
        ExpiresByType text/html "access plus 0 seconds"
    </IfModule>
</VirtualHost>
```

Enable the site:

```bash
sudo a2ensite docs.rivia.io.conf
sudo a2enmod ssl rewrite deflate expires
sudo apache2ctl configtest
sudo systemctl reload apache2
```

## Deployment Script

Create a simple deployment script `deploy.sh`:

```bash
#!/bin/bash
set -e

echo "Building Docusaurus site..."
npm install
npm run build

echo "Copying build files to web server..."
sudo cp -r build/* /var/www/docs.rivia.io/build/

echo "Reloading web server..."
sudo systemctl reload nginx  # or apache2

echo "Deployment complete!"
```

Make it executable:

```bash
chmod +x deploy.sh
```

## CI/CD Integration

You can also set up automated deployment via GitHub Actions. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to docs.rivia.io

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build site
        run: npm run build
        
      - name: Deploy to server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.DEPLOY_HOST }}
          username: ${{ secrets.DEPLOY_USER }}
          key: ${{ secrets.DEPLOY_SSH_KEY }}
          source: "build/*"
          target: "/var/www/docs.rivia.io/"
          
      - name: Reload web server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.DEPLOY_HOST }}
          username: ${{ secrets.DEPLOY_USER }}
          key: ${{ secrets.DEPLOY_SSH_KEY }}
          script: sudo systemctl reload nginx
```

## DNS Configuration

Ensure your DNS has a CNAME or A record:

```
docs.rivia.io  CNAME  your-server-hostname
```

Or:

```
docs.rivia.io  A  your-server-ip-address
```

## SSL Certificate

Use Let's Encrypt for free SSL:

```bash
sudo certbot --nginx -d docs.rivia.io
```

Or for Apache:

```bash
sudo certbot --apache -d docs.rivia.io
```

## Troubleshooting

### Build fails
- Check Node.js version: `node --version` (should be >= 20.0)
- Clear cache: `npm run clear && npm install`

### 404 errors on routes
- Ensure your web server is configured to serve `index.html` for all routes
- Check that `try_files` (nginx) or `RewriteRule` (Apache) is configured correctly

### Assets not loading
- Verify `baseUrl` is set to `/` in `docusaurus.config.ts`
- Check that static files are being served correctly
- Clear browser cache

## Maintenance

- Regularly update dependencies: `npm update`
- Monitor site performance and errors
- Keep SSL certificates renewed (Let's Encrypt auto-renews if configured)

