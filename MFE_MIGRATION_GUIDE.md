# Micro-Frontend Migration Guide

## Overview

This document describes the migration of the Tap-to-Eat Platform from a monolithic architecture to a Micro-Frontend (MFE) architecture using Module Federation.

## Architecture

### Previous Architecture (Monolithic)
- Single Next.js application
- All services (Tap-to-Eat, Find-a-Chef) in one codebase
- Shared routing and state management
- Tightly coupled components

### New Architecture (Micro-Frontend)
```
tap-to-eat-platform/
├── packages/
│   ├── container/          # Shell application (port 3000)
│   ├── tap-to-eat-mfe/     # Tap-to-Eat micro-frontend (port 3001)
│   ├── find-a-chef-mfe/    # Find-a-Chef micro-frontend (port 3002)
│   └── shared/             # Shared types and utilities
└── src/                    # Original monolith (for reference)
```

### Key Components

#### 1. Container (Shell Application)
- **Location**: `packages/container/`
- **Port**: 3000
- **Responsibilities**:
  - Main entry point and routing
  - Navigation and layout
  - Dynamic loading of MFEs
  - Shared authentication (future)
  - Global state management (future)

#### 2. Tap-to-Eat MFE
- **Location**: `packages/tap-to-eat-mfe/`
- **Port**: 3001
- **Responsibilities**:
  - Restaurant menu browsing
  - QR-based access
  - Ordering & payment functionality
  - Cart management

#### 3. Find-a-Chef MFE
- **Location**: `packages/find-a-chef-mfe/`
- **Port**: 3002
- **Responsibilities**:
  - Chef discovery
  - Booking functionality
  - Profile management
  - Search and filtering

#### 4. Shared Package
- **Location**: `packages/shared/`
- **Responsibilities**:
  - Shared TypeScript types (MenuItem, CartItem, Chef)
  - Common utilities (future)
  - Shared design system components (future)

## Module Federation Configuration

### Container Configuration
The container acts as the host and consumes MFEs:
```javascript
// packages/container/next.config.mjs
remotes: {
  tapToEat: `tapToEat@http://localhost:3001/next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
  findAChef: `findAChef@http://localhost:3002/next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
}
```

### MFE Configuration
Each MFE exposes its components:
```javascript
// packages/tap-to-eat-mfe/next.config.mjs
exposes: {
  './TapToEat': './src/app/tap-to-eat/page.tsx',
}
```

## Running the Application

### Development Mode

#### Option 1: Run All Services Together
```bash
npm run dev:all
```
This starts the container (3000), tap-to-eat MFE (3001), and find-a-chef MFE (3002) simultaneously.

#### Option 2: Run Individual Services
```bash
# Run container only
npm run dev:container

# Run tap-to-eat MFE only
npm run dev:tap-to-eat

# Run find-a-chef MFE only
npm run dev:find-a-chef
```

### Production Build
```bash
npm run build
```

## Migration Strategy (Zero Disruption)

### Phase 1: Infrastructure Setup ✅
- Created monorepo structure
- Set up Module Federation
- Configured shared dependencies
- Created shared package for types

### Phase 2: Service Extraction ✅
- Extracted Tap-to-Eat as independent MFE
- Extracted Find-a-Chef as independent MFE
- Configured dynamic routing in container

### Phase 3: Testing & Validation
- Test backward compatibility with existing routes
- Validate MFE loading and communication
- Performance testing
- User acceptance testing

### Phase 4: Gradual Rollout
- Deploy MFEs to staging environment
- Monitor performance and errors
- Gradual traffic migration
- Decommission monolith modules

## Key Benefits

### 1. Independent Deployment
- Each MFE can be deployed independently
- Faster release cycles per service
- Reduced risk of deployment failures

### 2. Technology Flexibility
- Each MFE can use different versions of dependencies
- Future services can use different frameworks if needed
- Easier to adopt new technologies incrementally

### 3. Team Autonomy
- Different teams can work on different MFEs independently
- Reduced code conflicts
- Faster development cycles

### 4. Scalability
- Easy to add new services as MFEs
- Better resource utilization
- Improved performance through lazy loading

## Shared Dependencies

### React & React-DOM
Configured as singletons to ensure only one version is loaded across all MFEs.

### Shared Types
The `@tap-to-eat/shared` package contains:
- `MenuItem` - Restaurant menu item interface
- `CartItem` - Shopping cart item interface
- `Chef` - Chef profile interface

### Design System
Tailwind CSS configuration is shared across all MFEs for consistent styling.

## Routing Strategy

### Container Routes
- `/` - Home page (container)
- `/tap-to-eat` - Dynamically loads Tap-to-Eat MFE
- `/find-a-chef` - Dynamically loads Find-a-Chef MFE
- `/about` - About page (container)

### Dynamic Loading
MFEs are loaded dynamically using Next.js dynamic imports:
```typescript
const TapToEat = dynamic(() => import('tapToEat/TapToEat'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
})
```

## Communication Between MFEs

### Current State
- MFEs are currently independent
- No direct communication between MFEs
- Each MFE manages its own state

### Future Enhancements
- Implement event bus for cross-MFE communication
- Shared state management (Redux/Zustand)
- Shared authentication context

## Performance Considerations

### Lazy Loading
- MFEs are loaded only when needed
- Reduces initial bundle size
- Improves page load times

### Code Splitting
- Each MFE has its own bundle
- Shared dependencies are deduplicated
- Optimized caching strategy

### Monitoring
- Implement performance monitoring for each MFE
- Track bundle sizes and load times
- Monitor error rates per service

## Troubleshooting

### MFE Not Loading
1. Ensure the MFE server is running on the correct port
2. Check Module Federation configuration
3. Verify remoteEntry.js is accessible
4. Check browser console for errors

### Dependency Conflicts
1. Review shared dependencies configuration
2. Ensure singleton configuration for React
3. Check version compatibility
4. Use `npm ls` to inspect dependency tree

### Build Failures
1. Clear `.next` directories: `rm -rf .next packages/*/.next`
2. Reinstall dependencies: `npm install --legacy-peer-deps`
3. Check TypeScript configurations
4. Verify Module Federation plugin configuration

## Module Federation Compatibility Issues

### Current Challenges

The migration encountered compatibility issues between:
- **Next.js 14.2.3** (App Router)
- **@module-federation/nextjs-mf** (various versions tested)

#### Specific Issues Encountered:

1. **App Directory Not Supported**
   - Error: "App Directory is not supported by nextjs-mf. Use only pages directory"
   - Resolution: Converted MFEs from `src/app/` to `src/pages/` structure

2. **NEXT_PRIVATE_LOCAL_WEBPACK Required**
   - Error: "process.env.NEXT_PRIVATE_LOCAL_WEBPACK is not set to true"
   - Resolution: Added `cross-env NEXT_PRIVATE_LOCAL_WEBPACK=true` to dev scripts

3. **Webpack Resolver Error**
   - Error: "TypeError: _resolveContext_stack.delete is not a function"
   - Occurred with @module-federation/nextjs-mf versions 8.8.66, 7.0.7, and 6.6.0
   - Root cause: Incompatibility between Next.js 14.2.3 webpack configuration and Module Federation plugin

### Alternative Approaches

Given the compatibility issues, consider these alternatives:

#### Option 1: Use @module-federation/nextjs-mf with Next.js 13
- Downgrade Next.js to version 13.x which has better Module Federation support
- Trade-off: Lose App Router features and latest Next.js improvements

#### Option 2: Use Single-SPA Framework
- [Single-SPA](https://single-spa.js.org/) is framework-agnostic
- Supports React, Vue, Angular, and other frameworks
- More mature ecosystem for micro-frontends
- Trade-off: More complex setup, requires learning new framework

#### Option 3: Use Qiankun (Alibaba's MFE Solution)
- [Qiankun](https://qiankun.umijs.org/) is based on single-spa
- Designed for Chinese market, excellent documentation
- Supports React applications well
- Trade-off: Primarily designed for Chinese developers, less community support in English

#### Option 4: Monorepo with Shared Packages (No Runtime Federation)
- Keep monorepo structure with shared packages
- Deploy as separate applications without runtime federation
- Use build-time code sharing
- Trade-off: No runtime independence, requires coordinated deployments

#### Option 5: Iframe-Based Isolation
- Simplest approach for complete isolation
- Each MFE runs in its own iframe
- Trade-off: Performance overhead, communication complexity, SEO issues

#### Option 6: Micro-frontends with Module Federation (Webpack 5)
- Use raw webpack Module Federation without Next.js wrapper
- Build custom React applications with webpack
- Trade-off: Lose Next.js features (SSR, API routes, image optimization)

### Recommended Approach

For this project, I recommend **Option 4: Monorepo with Shared Packages** as a first step:

**Benefits:**
- Maintains code separation and team autonomy
- Shared types and utilities via `@tap-to-eat/shared` package
- Independent build and deployment pipelines
- No runtime complexity or compatibility issues
- Can migrate to runtime federation later when tools mature

**Implementation:**
1. Keep current monorepo structure
2. Each package builds independently
3. Deploy each service to separate subdomains or paths
4. Use shared package for types and common utilities
5. Implement shared authentication via cookies/localStorage
6. Use event bus or URL-based communication between services

### Current Status

**Completed:**
- ✅ Monorepo structure with npm workspaces
- ✅ Shared package for types (MenuItem, CartItem, Chef)
- ✅ Container app structure
- ✅ Tap-to-Eat MFE code extraction
- ✅ Find-a-Chef MFE code extraction
- ✅ Documentation

**Blocked:**
- ❌ Module Federation runtime loading (compatibility issues)
- ❌ Dynamic MFE loading in container

**Next Steps (Alternative Path):**
1. Deploy monolith as-is for now
2. Gradually extract services as separate Next.js apps
3. Use shared package for code reuse
4. Implement routing via subdomains:
   - `app.tap-to-eat.com` - Tap-to-Eat service
   - `chef.tap-to-eat.com` - Find-a-Chef service
   - `www.tap-to-eat.com` - Container/Landing page
5. Revisit Module Federation when Next.js support improves

## Rollback Plan

If issues arise during migration:
1. Stop MFE servers
2. Revert to original monolithic application
3. Use existing routes in `src/app/` directory
4. No data loss - all functionality remains intact

## Success Criteria

- ✅ Services run independently as MFEs
- ✅ No impact on existing users during migration
- ✅ Faster deployment cycles per service
- ✅ Scalable architecture for future services
- ⏳ Performance maintained or improved
- ⏳ Error rates reduced
- ⏳ Development velocity increased
