@echo off
echo 🚀 Deploying Service Hub to PRODUCTION environment...
echo.

echo 📦 Step 1: Deploy Container App to Production...
cd packages/container
npx vercel --prod
echo ✅ Container App deployed to production!
echo.

echo 🍽️ Step 2: Deploy Tap-to-Eat to Production...
cd ..\tap-to-eat-mfe
npx vercel --prod
echo ✅ Tap-to-Eat deployed to production!
echo.

echo 👨‍🍳 Step 3: Deploy Find-a-Chef to Production...
cd ..\find-a-chef-mfe
npx vercel --prod
echo ✅ Find-a-Chef deployed to production!
echo.

echo 🎉 Production deployment completed!
echo.
echo 🌐 Production URLs:
echo    Container: https://service-hub-container.vercel.app
echo    Tap-to-Eat: https://service-hub-tap-to-eat.vercel.app/tap-to-eat
echo    Find-a-Chef: https://service-hub-find-a-chef.vercel.app/find-a-chef
echo.
echo 📋 Post-Deployment Checklist:
echo    1. Verify all services are working
echo    2. Check health endpoints
echo    3. Monitor performance metrics
echo    4. Validate analytics tracking
echo    5. Collect user feedback
echo.
pause
