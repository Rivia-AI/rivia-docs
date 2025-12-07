---
sidebar_position: 3
---

# Versioning

We follow [Semantic Versioning](https://semver.org/) (SemVer) for all our modules.

## Version Format

Versions follow the format: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes that require user action
- **MINOR**: New features that are backward compatible
- **PATCH**: Bug fixes that are backward compatible

## Version Management

Each module repository includes:

- `VERSION` file: Contains the current version (e.g., `0.1.0`)
- `CHANGELOG.md`: Documents all changes per version
- Automated release workflow: Creates tags and GitHub releases

## Bumping Versions

### Using the Version Script

```bash
# Bump patch version (0.1.0 -> 0.1.1)
./scripts/bump-version.sh patch

# Bump minor version (0.1.0 -> 0.2.0)
./scripts/bump-version.sh minor

# Bump major version (0.1.0 -> 1.0.0)
./scripts/bump-version.sh major
```

### Manual Version Update

1. Update `VERSION` file
2. Update `CHANGELOG.md` with changes
3. Commit changes
4. Create a tag: `git tag v0.1.0`
5. Push tag: `git push origin v0.1.0`

## Release Workflow

Our automated release workflow:

1. Detects version changes in `VERSION` file
2. Creates a Git tag (`v*.*.*`)
3. Creates a GitHub release
4. Generates release notes from `CHANGELOG.md`

## Best Practices

1. **Update CHANGELOG.md** with every version bump
2. **Use conventional commits** for better changelog generation
3. **Tag releases** immediately after version bump
4. **Document breaking changes** clearly in CHANGELOG

## Learn More

- [Semantic Versioning Guide](https://semver.org/)
- [CI/CD Documentation](/devops-foundations/ci-cd)

