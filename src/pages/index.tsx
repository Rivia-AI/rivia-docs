import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/introduction">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>🚀 Getting Started</h3>
              <p>
                New to Rivia? Start here to learn the fundamentals and get up and running quickly.
              </p>
              <Link to="/getting-started/introduction">Learn More →</Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>🏗️ Infrastructure as Code</h3>
              <p>
                Production-ready Terraform modules for Azure, AWS, and GCP with security best practices built-in.
              </p>
              <Link to="/modules/azure-policy">Explore Modules →</Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>🔒 Security & Compliance</h3>
              <p>
                CIS benchmark compliant modules with automated security scanning and static analysis.
              </p>
              <Link to="/guides/security-compliance">Learn More →</Link>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <div className="col col--6">
            <div className={styles.featureCard}>
              <h3>📚 Documentation</h3>
              <p>
                Comprehensive guides, tutorials, and reference documentation for all our modules and tools.
              </p>
              <Link to="/getting-started/introduction">Browse Docs →</Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.featureCard}>
              <h3>🛠️ DevOps Foundations</h3>
              <p>
                Best practices for CI/CD, testing, versioning, and infrastructure management.
              </p>
              <Link to="/devops-foundations/ci-cd">Learn More →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Production-ready Terraform modules and infrastructure documentation for Azure, AWS, and GCP">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
