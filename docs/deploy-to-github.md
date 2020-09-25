# 在GitHub Pages上部署

GitHub Pages提供了静态网站服务.请先将本地代码push到github上

步骤如下:

1. 安装 `gh-pages` ，使用 `yarn add gh-pages` 或 `npm i gh-pages`
2. 修改 `gridsome.config.js` ，添加下面内容:

```js
  siteUrl: 'https://<your-github-username>.github.io',
  pathPrefix: '/<your-gridsome-repo-name>',
```

3. 修改 `package.json`中的scripts部分，添加下面内容:

```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
```

4. 运行命令 `npm run deploy`

5. 在github网站，进入指定仓库页面，点解Settings，一直向下拉，找到`GitHub Pages`，在`Danger Zone`上面， Repo's settings under "GitHub Pages" show the `gh-pages` branch under "Source".

**Notes**

GitHub Pages allows you to have a "GitHub user page" that acts as a profile/main page on `<your-github-username>.github.io` by having a repo named `<your-github-username>.github.io`.
* If you are deploying to your GitHub user page (your main site on `<username>.github.io`):
  * Make the following adjustments to your `package.json`:
    ```json
    - "deploy": "gh-pages -d dist",
    + "deploy": "gh-pages -b master -d dist",
    ```
  * And Remove this line from `gridsome.config.js`:
    ```js
    - pathPrefix: '/<your-gridsome-repo-name>',
    ```
* If you are using a custom URL such as `www.yourname.com` you will need to change `gridsome.config.js` to:
  ```js
  siteUrl: 'https://www.yourname.com',
  ```
* If you are using an apex domain for your GitHub user page (ie. `https://yourname.com` points to all of your GitHub Pages sites), and your Gridsome project is *not* your GitHub user page (not on the root `https://yourname.com` page, but a separate repo), then you will need to make sure `pathPrefix` matches your Gridsome project's repo name in `gridsome.config.js`:
  ```js
  pathPrefix: '/<your-gridsome-repo-name>',
  ```
