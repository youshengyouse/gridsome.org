# 重写 Index.html
> 首页修改后，需要 gridsome develop重启服务器

通常是要重写index.html，如 adding CDN scripts to the footer of your markup can't be accomplished with Vue-Meta, so you would need to put these into the template yourself.

Gridsome中非常简单，在 `src` 目录中新建`index.html` 文件, Gridsome会自动检测到，并在网站中使用 `index.html` .

下面是gridsome默认的基本HTML模板结构，可以在此基础上进行修改:

```html
<!DOCTYPE html>
<html ${htmlAttrs}>
  <head>
    ${head}
  </head>
  <body ${bodyAttrs}>
    ${app}
    ${scripts}
  </body>
</html>
```
