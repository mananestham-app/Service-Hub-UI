# 🚀 Two-Phase Deployment Strategy Guide

## 📋 Overview
This guide outlines the two-phase deployment strategy for the Service Hub micro-frontend platform:
- **Phase 1: Staging (Non-Prod)** - Testing and validation environment
- **Phase 2: Production** - Live environment for end users

## 🏗 Environment Structure

### **Staging Environment (Non-Prod)**
- **Purpose**: Testing, validation, and quality assurance
- **URL Pattern**: `*-staging.vercel.app`
- **Environment**: `NODE_ENV=staging`
- **Features**: 
  - Full feature testing
  - Cross-service integration testing
  - Performance testing
  - User acceptance testing

### **Production Environment**
- **Purpose**: Live production for end users
- **URL Pattern**: `*.vercel.app`
- **Environment**: `NODE_ENV=production`
- **Features**:
  - Optimized performance
  - Production monitoring
  - Real user traffic
  - Production analytics

---

## 🌐 Environment URLs

### **Staging URLs**
- **Container**: `https://service-hub-container-staging.vercel.app`
- **Tap-to-Eat**: `https://service-hub-tap-to-eat-staging.vercel.app/tap-to-eat`
- **Find-a-Chef**: `https://service-hub-find-a-chef-staging.vercel.app/find-a-chef`

### **Production URLs**
- **Container**: `https://service-hub-container.vercel.app`
- **Tap-to-Eat**: `https://service-hub-tap-to-eat.vercel.app/tap-to-eat`
- **Find-a-Chef**: `https://service-hub-find-a-chef.vercel.app/find-a-chef`

---

## 📁 Environment Configuration Files

### **Staging Environment Files**
```
packages/container/.env.staging
packages/tap-to-eat-mfe/.env.staging
packages/find-a-chef-mfe/.env.staging
```

### **Production Environment Files**
```
packages/container/.env.production
packages/tap-to-eat-mfe/.env.production
packages/find-a-chef-mfe/.env.production
```

---

## 🔄 Deployment Process

### **Phase 1: Staging Deployment**
1. **Deploy to Staging**
   ```bash
   # Deploy all services to staging
   ./deploy-staging.sh
   ```

2. **Testing & Validation**
   - ✅ Cross-service navigation
   - ✅ Environment variable binding
   - ✅ Performance testing
   - ✅ User acceptance testing
   - ✅ Integration testing

3. **Approval Process**
   - QA team validation
   - Stakeholder review
   - Performance benchmarks
   - Security checks

### **Phase 2: Production Deployment**
1. **Deploy to Production**
   ```bash
   # Deploy all services to production
   ./deploy-production.sh
   ```

2. **Post-Deployment Checks**
   - ✅ Health checks
   - ✅ Monitoring setup
   - ✅ Analytics verification
   - ✅ User feedback collection

---

## 🛠 Deployment Scripts

### **Staging Deployment Script**
```bash
#!/bin/bash
# deploy-staging.sh

echo "🚀 Deploying Service Hub to STAGING environment..."
echo ""

# Deploy Container App
echo "📦 Deploy Container App to Staging..."
cd packages/container
npx vercel --alias service-hub-container-staging.vercel.app

# Deploy Tap-to-Eat
echo "🍽️ Deploy Tap-to-Eat to Staging..."
cd ../tap-to-eat-mfe
npx vercel --alias service-hub-tap-to-eat-staging.vercel.app

# Deploy Find-a-Chef
echo "👨‍🍳 Deploy Find-a-Chef to Staging..."
cd ../find-a-chef-mfe
npx vercel --alias service-hub-find-a-chef-staging.vercel.app

echo "✅ Staging deployment completed!"
echo ""
echo "🌐 Staging URLs:"
echo "   Container: https://service-hub-container-staging.vercel.app"
echo "   Tap-to-Eat: https://service-hub-tap-to-eat-staging.vercel.app/tap-to-eat"
echo "   Find-a-Chef: https://service-hub-find-a-chef-staging.vercel.app/find-a-chef"
```

### **Production Deployment Script**
```bash
#!/bin/bash
# deploy-production.sh

echo "🚀 Deploying Service Hub to PRODUCTION environment..."
echo ""

# Deploy Container App
echo "📦 Deploy Container App to Production..."
cd packages/container
npx vercel --prod

# Deploy Tap-to-Eat
echo "🍽️ Deploy Tap-to-Eat to Production..."
cd ../tap-to-eat-mfe
npx vercel --prod

# Deploy Find-a-Chef
echo "👨‍🍳 Deploy Find-a-Chef to Production..."
cd ../find-a-chef-mfe
npx vercel --prod

echo "✅ Production deployment completed!"
echo ""
echo "🌐 Production URLs:"
echo "   Container: https://service-hub-container.vercel.app"
echo "   Tap-to-Eat: https://service-hub-tap-to-eat.vercel.app/tap-to-eat"
echo "   Find-a-Chef: https://service-hub-find-a-chef.vercel.app/find-a-chef"
```

---

## 🔧 Environment Variables

### **Staging Environment Variables**
```bash
NODE_ENV=staging
NEXT_PUBLIC_ENVIRONMENT=staging
NEXT_PUBLIC_CONTAINER_URL=https://service-hub-container-staging.vercel.app
NEXT_PUBLIC_TAP_TO_EAT_URL=https://service-hub-tap-to-eat-staging.vercel.app/tap-to-eat
NEXT_PUBLIC_FIND_A_CHEF_URL=https://service-hub-find-a-chef-staging.vercel.app/find-a-chef
```

### **Production Environment Variables**
```bash
NODE_ENV=production
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_CONTAINER_URL=https://service-hub-container.vercel.app
NEXT_PUBLIC_TAP_TO_EAT_URL=https://service-hub-tap-to-eat.vercel.app/tap-to-eat
NEXT_PUBLIC_FIND_A_CHEF_URL=https://service-hub-find-a-chef.vercel.app/find-a-chef
```

---

## 📋 Deployment Checklist

### **Pre-Deployment Checklist**
- [ ] Code review completed
- [ ] Unit tests passing
- [ ] Integration tests passing
- [ ] Security scan completed
- [ ] Performance benchmarks met
- [ ] Documentation updated

### **Staging Validation Checklist**
- [ ] All services deployed successfully
- [ ] Cross-service navigation working
- [ ] Environment variables correct
- [ ] Performance metrics acceptable
- [ ] User acceptance testing completed
- [ ] QA team approval received

### **Production Deployment Checklist**
- [ ] Staging approval received
- [ ] Production deployment successful
- [ ] Health checks passing
- [ ] Monitoring configured
- [ ] Analytics tracking working
- [ ] User feedback collection setup

---

## 🎯 Benefits of Two-Phase Deployment

### **Risk Mitigation**
- Catch issues before production
- Reduce production downtime
- Minimize user impact
- Enable rollback capabilities

### **Quality Assurance**
- Comprehensive testing environment
- Real-world scenario validation
- Performance optimization
- Security verification

### **Team Collaboration**
- Clear approval process
- Defined responsibilities
- Better communication
- Structured feedback loop

---

## 🚨 Rollback Strategy

### **Staging Rollback**
```bash
# Redeploy previous staging version
npx vercel --alias service-hub-container-staging.vercel.app --pre
```

### **Production Rollback**
```bash
# Redeploy previous production version
npx vercel --prod --pre
```

---

## 📊 Monitoring & Analytics

### **Staging Monitoring**
- Performance metrics
- Error tracking
- Integration testing results
- User feedback collection

### **Production Monitoring**
- Real-time performance
- Error rates
- User analytics
- Business metrics

---

## 🎉 Success Criteria

### **Staging Success**
- All tests passing
- Performance benchmarks met
- Stakeholder approval received
- No critical issues identified

### **Production Success**
- Smooth deployment completed
- All services operational
- User experience optimal
- Business objectives met

---

## 📞 Support & Contact

### **Deployment Issues**
- Technical support: [Contact Info]
- Emergency rollback: [Contact Info]
- Monitoring alerts: [Contact Info]

### **Process Questions**
- Deployment strategy: [Contact Info]
- Environment setup: [Contact Info]
- Best practices: [Contact Info]
