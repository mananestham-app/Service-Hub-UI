@echo off
echo 🚀 Deploying Service Hub to STAGING environment...
echo.

echo 📦 Step 1: Deploy Container App to Staging...
cd packages/container
echo 🌐 Deploying to staging with domain-based URL resolution...
npx vercel --alias service-hub-container-staging.vercel.app
echo ✅ Container App deployed to staging!
echo.

echo 🍽️ Step 2: Deploy Tap-to-Eat to Staging...
cd ..\tap-to-eat-mfe
echo 🌐 Deploying to staging with domain-based URL resolution...
npx vercel --alias service-hub-tap-to-eat-staging.vercel.app
echo ✅ Tap-to-Eat deployed to staging!
echo.

echo 👨‍🍳 Step 3: Deploy Find-a-Chef to Staging...
cd ..\find-a-chef-mfe
echo 🌐 Deploying to staging with domain-based URL resolution...
npx vercel --alias service-hub-find-a-chef-staging.vercel.app
echo ✅ Find-a-Chef deployed to staging!
echo.

echo 🎉 Staging deployment completed!
echo.
echo 🌐 Staging URLs:
echo    Container: https://service-hub-container-staging.vercel.app
echo    Tap-to-Eat: https://service-hub-tap-to-eat-staging.vercel.app/tap-to-eat
echo    Find-a-Chef: https://service-hub-find-a-chef-staging.vercel.app/find-a-chef
echo.
echo 📋 Next Steps:
echo    1. Test all services in staging
echo    2. Validate cross-service navigation
echo    3. Run performance tests
echo    4. Get stakeholder approval
echo    5. Once approved, run deploy-production.bat
echo.
pause
