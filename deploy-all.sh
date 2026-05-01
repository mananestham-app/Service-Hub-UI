#!/bin/bash

echo "🚀 Deploying Service Hub MFEs to Vercel..."
echo ""

echo "📦 Step 1: Deploy Container App (Main Hub)"
cd packages/container
npx vercel --prod
echo "✅ Container App deployed!"
echo ""

echo "🍽️ Step 2: Deploy Tap-to-Eat Service"
cd ../tap-to-eat-mfe
npx vercel --prod
echo "✅ Tap-to-Eat Service deployed!"
echo ""

echo "👨‍🍳 Step 3: Deploy Find-a-Chef Service"
cd ../find-a-chef-mfe
npx vercel --prod
echo "✅ Find-a-Chef Service deployed!"
echo ""

echo "🎉 All services deployed successfully!"
echo ""
echo "🌐 Your live URLs:"
echo "   Main Hub: https://service-hub-container.vercel.app"
echo "   Tap-to-Eat: https://tap-to-eat-service.vercel.app"
echo "   Find-a-Chef: https://find-a-chef-service.vercel.app"
