@echo off
echo Setting up Git repository for Service Hub UI...

REM Initialize Git repository
git init

REM Add all files
git add .

REM Create initial commit
git commit -m "🚀 Initial commit: Service Hub micro-frontend platform

- Container app with service navigation
- Tap-to-Eat MFE (restaurant ordering)
- Find-a-Chef MFE (chef booking)
- Shared package for types and utilities
- Modern UI with animations and effects
- Complete documentation and deployment setup"

REM Add remote repository
git remote add origin https://mananestham-app:mananestham@123@github.com/mananestham-app/service-hub-ui.git

REM Push to GitHub
git push -u origin main

echo Repository setup complete!
echo Visit: https://github.com/mananestham-app/service-hub-ui
pause
