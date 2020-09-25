# Deploy to Netlify

Netlify是部署和托管Gridsome站点优秀的解决方案， Netlify is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps. They provide continuous deployment (Git-triggered builds), an intelligent, global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and more.

Netlify是一个统一的平台，它可以自动编写代码，创建高性能、易于维护的网站和web应用程序。它们提供连续部署（Git触发的构建）、智能的全局CDN、完整的DNS（包括自定义域）、自动HTTPS、资产加速等等

Their free tier includes unlimited personal and commercial projects, HTTPS, continuous deployment from public or private repos and more.

To deploy your Gridsome site to Netlify, go to the create a new site page, select your project repo from GitHub, GitLab, or Bitbucket.

Add these build settings:
- **Build Command:** `gridsome build`
- **Publish directory:** `dist`

**Note:**

You do not need to setup any redirect rules for a Gridsome site to work with Netlify. Gridsome generates HTML files for every path on your site so rewrite rules aren't necessary (except for dynamic pages).

## 本地打包
`npm run` 看下打包命令，是 `yarn build`，先打包，打包比较费时，花了近4分钟

## netlify
- 官网：https://www.netlify.com/
- 注册：https://app.netlify.com/signup
## github
- 