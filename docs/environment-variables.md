# 环境变量

有时，想在不同的环境使用不同的变量，使用包 [dotenv](https://www.npmjs.com/package/dotenv) 就可以实现这点. 在项目的根目录创建文件 `.env` .

如果你想在开发环境使用不同的变量，那么就新建文件 `.env.development`. 同理，如果是在生产环境就新建文件 `.env.production` ，不同的环境调用不同的文件，如果没有定义这两个文件，会找.env文件，默认是没有环境文件.

```ini
GRIDSOME_API_URL=https://api.example.com
DB_USER=root
DB_PASS=s1mpl3
```

## 在服务器中使用

所有的变量都可以通过 `process.env.{name}` 获取

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-plugin',
      options: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS
      }
    }
  ]
}
```

## 在浏览器中使用

在服务器所有的环境变量都可以读取，但在浏览器，为了安全，只有 `GRIDSOME_` 开头的变量才可以读取. 如上例中，只有 `GRIDSOME_API_URL` 是以`GRIDSOME_` 开头的，这是因为不想将 `DB_USER` 和`DB_PASS` 编译到 JavaScript中.

```js
export default {
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    const res = await axios.get(process.env.GRIDSOME_API_URL)
    this.items = res.data
  }
}
```
