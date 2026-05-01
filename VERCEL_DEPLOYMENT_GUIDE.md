# 🚀 Vercel Deployment Guide for Service Hub MFEs

## 📋 Overview
This guide provides step-by-step instructions to deploy each micro-frontend (MFE) of the Service Hub platform to Vercel independently.

## 🏗 Architecture
- **Container App**: Main Service Hub (navigation hub)
- **Tap-to-Eat MFE**: Restaurant ordering service
- **Find-a-Chef MFE**: Chef booking service
- **Shared Package**: Common types and utilities

---

## 🌟 Step 1: Deploy Container App (Main Hub)

### Method 1: Vercel Dashboard (Recommended)
1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click**: "Add New Project" → "Import Git Repository"
3. **Repository**: `mananestham-app/Service-Hub-UI`
4. **Root Directory**: `packages/container`
5. **Project Name**: `service-hub-container`
6. **Framework**: Next.js (auto-detected)
7. **Build Command**: `npm run build`
8. **Output Directory**: `.next`
9. **Install Command**: `npm install`
10. **Click**: "Deploy"

### Method 2: Vercel CLI
```bash
# Navigate to container directory
cd packages/container

# Deploy to production
npx vercel --prod

# Follow prompts:
# - Link to existing project: No
# - Project name: service-hub-container
# - Deploy to production: Yes
```

**Expected URL**: `https://service-hub-container.vercel.app`

---

## 🍽️ Step 2: Deploy Tap-to-Eat MFE

### Method 1: Vercel Dashboard
1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click**: "Add New Project" → "Import Git Repository"
3. **Repository**: `mananestham-app/Service-Hub-UI`
4. **Root Directory**: `packages/tap-to-eat-mfe`
5. **Project Name**: `tap-to-eat-service`
6. **Framework**: Next.js (auto-detected)
7. **Build Command**: `npm run build`
8. **Output Directory**: `.next`
9. **Install Command**: `npm install`
10. **Click**: "Deploy"

### Method 2: Vercel CLI
```bash
# Navigate to tap-to-eat directory
cd packages/tap-to-eat-mfe

# Deploy to production
npx vercel --prod

# Follow prompts:
# - Link to existing project: No
# - Project name: tap-to-eat-service
# - Deploy to production: Yes
```

**Expected URL**: `https://tap-to-eat-service.vercel.app`

---

## 👨‍🍳 Step 3: Deploy Find-a-Chef MFE

### Method 1: Vercel Dashboard
1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click**: "Add New Project" → "Import Git Repository"
3. **Repository**: `mananestham-app/Service-Hub-UI`
4. **Root Directory**: `packages/find-a-chef-mfe`
5. **Project Name**: `find-a-chef-service`
6. **Framework**: Next.js (auto-detected)
7. **Build Command**: `npm run build`
8. **Output Directory**: `.next`
9. **Install Command**: `npm install`
10. **Click**: "Deploy"

### Method 2: Vercel CLI
```bash
# Navigate to find-a-chef directory
cd packages/find-a-chef-mfe

# Deploy to production
npx vercel --prod

# Follow prompts:
# - Link to existing project: No
# - Project name: find-a-chef-service
# - Deploy to production: Yes
```

**Expected URL**: `https://find-a-chef-service.vercel.app`

---

## 🔗 Step 4: Update Container Links (Optional)

After deploying all services, the container app will automatically use production URLs. If you need to update the URLs manually:

1. **Edit**: `packages/container/src/app/page.tsx`
2. **Update these lines**:
   ```typescript
   href={process.env.NODE_ENV === 'production' ? 'https://tap-to-eat-service.vercel.app' : 'http://localhost:3001'}
   href={process.env.NODE_ENV === 'production' ? 'https://find-a-chef-service.vercel.app' : 'http://localhost:3002'}
   ```

3. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "Update production URLs"
   git push origin master
   ```

---

## 📊 Deployment Summary

| Service | Root Directory | Vercel URL | Port (Local) |
|---------|---------------|------------|--------------|
| Container | `packages/container` | `https://service-hub-container.vercel.app` | 3000 |
| Tap-to-Eat | `packages/tap-to-eat-mfe` | `https://tap-to-eat-service.vercel.app` | 3001 |
| Find-a-Chef | `packages/find-a-chef-mfe` | `https://find-a-chef-service.vercel.app` | 3002 |

---

## 🎯 Benefits of MFE Deployment

### ✅ **Independent Scaling**
- Each service can scale based on its own traffic
- No single point of failure

### ✅ **Isolated Deployments**
- Updates to one service don't affect others
- Faster deployment cycles

### ✅ **Team Collaboration**
- Different teams can work on different services
- Clear ownership and responsibility

### ✅ **Performance Optimization**
- Smaller bundle sizes
- Faster load times
- Better caching strategies

---

## 🔧 Configuration Files

Each package has its own `vercel.json`:

```json
{
  "version": 2,
  "name": "service-name",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs",
  "rootDirectory": "packages/package-name"
}
```

---

## 🚀 Quick Deploy Script

For rapid deployment, create this script:

```bash
#!/bin/bash
# deploy-all.sh

echo "🚀 Deploying Container App..."
cd packages/container
npx vercel --prod

echo "🍽️ Deploying Tap-to-Eat..."
cd ../tap-to-eat-mfe
npx vercel --prod

echo "👨‍🍳 Deploying Find-a-Chef..."
cd ../find-a-chef-mfe
npx vercel --prod

echo "✅ All services deployed!"
```

---

## 🌐 Live URLs After Deployment

Once deployed, your Service Hub will be accessible at:

- **Main Hub**: https://service-hub-container.vercel.app
- **Restaurant Ordering**: https://tap-to-eat-service.vercel.app
- **Chef Booking**: https://find-a-chef-service.vercel.app

The container app will automatically link to the deployed MFEs when in production mode!

---

## 🎉 Congratulations!

Your Service Hub micro-frontend platform is now fully deployed and ready for production use! 🌟
