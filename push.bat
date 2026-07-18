@echo off
rmdir /s /q .git
git init
git add .
git commit -m "Update portfolio code with Graphite Lab theme"
git branch -M main
git remote add origin https://github.com/Harshitdubey-lab/portfolio.git
git push -u origin main -f
