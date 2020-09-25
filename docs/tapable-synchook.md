## 资源
- 官方网站：https://github.com/webpack/tapable
- 文章参考：https://www.jianshu.com/p/18ec490d16a4

## 准备工作
- 先本地安装，我安装在 `D:\www\common\source_js`目录下
- `git clone git@github.com:webpack/tapable.git`，下载源码
- `yarn link`,创建链接
- 新建项目 `D:\tutorial-tapable`
- `yarn init -y`
- `yarn link tapable`


## 第一个小例子
- 定义钩子，一般在类的构造函数中定义
- 钩子注册插件
- 执行钩子中注册的插件

```js
let { SyncHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new SyncHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
    }
    tap(){
        /**
         * tap方法有两个参数
         * 1.第一个参数 options: 是对象或字符串（字符串也会转为{name:字符串}），对象中必须包含name属性，也就是说每次tap都有一个name
         * 2.第二个参数 fn:      是函数，函数的参数与钩子实例时一样，有多少个尽量指定多少个
         * 
         * 工作流程
         * 1. 生成新的options，我称它为 拦截前选项，它的值为 { type: "sync", fn: fn ,其它是第一个参数options这个对象展开}
         * 2. 遍历所有拦截器中的register方法，经过所有的拦截器的register方法处理之后的options，我称它为 拦截后选项
         * 3. 将拦截后选项，添加到taps这个数组属性中，taps是一个索引数组，值是拦截后选项(是一个plain object)，每个拦截后选项的在数组中的
         *    的位置，由stage和before决定，stage数值越大越排在后面，数值相同的，就排在相同数字的最后，如果有before，会排在它指定的name前面
         * 
         * 总结：
         * tap方法只是向taps属性中添加一个options对象，options对象中，type,fn,name三个属性是一定会有的，其它属性是在tap({这里传入}，函数)
         * 
         */
        this.hooks.arch.tap('node',(name)=>{ 
            console.log('node',name)
        })
        //this.hooks.arch.tap({name:'react',before:'node'},function(name){
        this.hooks.arch.tap({name:'react'},(a,b,c,d,e,f)=>{
            console.log('react',a,b,c,d,e,f)
        })

        this.hooks.arch.tap({name:'php'},(name)=>{
            console.log('我喜欢php',name)
        })
    }
    start(){
        /**
         * 会先生成下面这个总匿名函数
         * 每个函数都是各干各的，互相之间没有任何关系，stage值小的先执行，也就是谁先tap，先执行谁
         * function anonymous(yousheng, youse, network) {
                "use strict";
                var _context;
                var _x = this._x;

                var _fn0 = _x[0];
                _fn0(yousheng, youse, network);   // 第1个tap的函数 

                var _fn1 = _x[1];                  // 第2个tap的函数 ,这个函数定义时有6个形参，但实际只会传入三个，也就是钩子实例时传入的三个
                _fn1(yousheng, youse, network);

                var _fn2 = _x[2];                  // 第3个tap的函数 
                _fn2(yousheng, youse, network);
            }
            下面的call就是执行上面这个匿名函数，只需要三个参数，但实际传入了5个，多余的会抛弃
         */
        // call时传入的参数个数与实例化时一致
        this.hooks.arch.call('jw','aa','bb','cc','dd' )

    }
}

let l = new lesson()
// console.log(l.hooks.arch._call.toString())
l.tap()
l.start()
````
























## 附件

Object.assign用法

```js
const a ="张三"
const b ="李四"
const c={
    h:"王五"
}
const d = Object.assign({a,b},c) // d的值为 { a: '张三', b: '李四', h: '王五' }
```



```js
options = Object.assign({ type, fn }, options);

```

util包用法

```js
const deprecateContext = require('util').deprecate(
    () => {console.log('我执行了')},
    "Hook.context 将在下一个版本中删除"
);
deprecateContext()
```
异步串行钩子
```js
AsyncSeriesHook {
  _args: [ 'app' ], // 参数，在实例化时传入，是一个数组
  name: undefined, // 钩子的名字，实例化时传入
  taps: [
    {
      type: 'promise',
      fn: [Function],
      name: 'loadSource',
      label: 'Load sources',
      phase: 1
    }
  ],
  interceptors: [],
      
  _call: undefined,
  call: undefined,
  _callAsync: [Function: CALL_ASYNC_DELEGATE],
  _x: undefined,
  _promise: [Function: PROMISE_DELEGATE],    
  callAsync: [Function: CALL_ASYNC_DELEGATE],
  promise: [Function: PROMISE_DELEGATE],
  compile: [Function: COMPILE],
  tap: [Function: tap],
  tapAsync: [Function: tapAsync],
  tapPromise(options, fn),  
      // 第1参数是对象或字符串，字符串转为{name:字符串}
      //       不能为非对象和null
      //       如果是对象，必须有 name 属性
      //       context 属性在新版本中会删除掉
      // 第2参数是一个函数
      // 实际调用内部 _tap("promise", options, fn)方法
  constructor: [Function: AsyncSeriesHook]
}

```

### 钩子中的_tap 方法

第一步：选项options处理

1. 将type，fn，与options合并成新的options对象，

2. 遍历拦截器(空数组就跳过)，如果拦截器定义了register方法，将上面合并后的options传进去，处理后返回新的options对象

第二步：插入第一步处理完后的选项

1. 选项如果有before属性，它的值可以是标量或数组

2. 选项如果有stage属性，它的值是数字，默认为0

3. this.taps是一个数组，如果之前为空，那么现在插入的选项就是第一个，其索引值为0

   ​                                      如果之前不为空，默认是将新的options对象放在索引值为0，原来的为1

   顺序与stage的值有关，在执行tapPromise，tap，tapAsync时，选项中可以带一个属性stage，它决定当前options对象的插入位置，最后的结果按stage从小到大排序，它会插在与自己stage值相同的最后一个，比如taps中各个options对象的stage值为[0,00,1,2,2,3,4,4,5]，现新插入一个stage值为0的，它会插在前面三个0，后面一个1之间，变成[0,00,**0**,1,2,2,3,4,4,5]，再插入一个stage值为2的变成，[0,00,0,1,2,2,**2**,3,4,4,5]

   顺序与before有关系，[0,00,0,1,2,2(name为hello),2,3,4,4,5]，现在插入一个stage为2，有before属性的options，before的值为['hello']

   [0,2,2(name=wang),2,3]，插入before的值为['wang'],stage=2，那么它就插在name=wang的这个前面，它们两个的stage是相等的

```
AsyncSeriesHook {
  _args: [ 'app' ],
  taps: [
    { type: 'promise', name: 'loadSource', fn: [Function: fn] },
    { type: 'promise', name: 'createSchema', fn: [Function: fn] },
    { type: 'promise', name: 'createPages', fn: [Function: fn] },
    { type: 'promise', name: 'GridsomeCodegen', fn: [Function: fn] }
  ],
  interceptors: [ { register: [Function: register] } ],
  call: undefined,
  promise: [Function: anonymous],
  callAsync: [Function: lazyCompileHook],
  _x: [ [Function: fn], [Function: fn], [Function: fn], [Function: fn] ]
}
```

```
// app.config.plugins标准化后的样子
[
  {
    use: 'gridsome目录lib\plugins\core',
    options: {
      context: 'gridsome的projects\gridsome.org',
      pkg: [Object],
      host: '0.0.0.0',
      port: undefined,
      plugins: [Circular],
      redirects: [],
      transformers: [Object],
      pathPrefix: '',
      _pathPrefix: '',
      publicPath: '/',
      staticDir: '项目根目录\static',
      outputDir: '项目根目录\dist',
      outDir: [Getter/Setter],
      assetsDir: '项目根目录\dist\assets',
      imagesDir: '项目根目录\dist\assets\static',
      filesDir: '项目根目录\dist\assets\files',
      dataDir: '项目根目录\dist\assets\data',
      appPath: 'gridsome目录app',
      tmpDir: '项目根目录\src\.temp',
      cacheDir: '项目根目录\.cache',
      imageCacheDir: '项目根目录\.cache\assets\static',
      maxImageWidth: 2560,
      imageExtensions: [Array],
      pagesDir: '项目根目录\src\pages',
      templatesDir: '项目根目录\src\templates',
      templates: [Object],
      permalinks: [Object],
      componentParsers: [],
      chainWebpack: [Function: chainWebpack],
      configureWebpack: undefined,
      configureServer: undefined,
      images: [Object],
      runtimeCompiler: false,
      transpileDependencies: [],
      maxCacheAge: 1000,
      siteUrl: 'https://www.gridsome.org',
      siteName: 'Gridsome官网',
      titleTemplate: '%s - 欢迎使用Gridsome',
      siteDescription: 'Gridsome基于Vue.js开发，用于构建静态网站和应用，速度超快的开源框架 �.',
      metadata: {},
      manifestsDir: '项目根目录\dist\assets\manifest',
      clientManifestPath: '项目根目录\dist\assets\manifest\client.json',
      serverBundlePath: '项目根目录\dist\assets\manifest\server.json',
      icon: [Object],
      templatePath: '项目根目录\src\index.html',
      htmlTemplate: index.html的内容,
      css: [Object],
      prefetch: {},
      preload: {},
      cacheBusting: true,
      catchLinks: true
    },
    server: true,
    clientOptions: undefined,
    name: undefined,
    entries: {
      clientEntry: null,
      serverEntry: 'gridsome目录lib\plugins\core\index.js'
    },
    index: 0,
    uid: 'faaf3d2d9d72e3f02931ac65f0b45df4'
  },
  {
    use: 'gridsome目录lib\plugins\vue-components',
    server: true,
    clientOptions: undefined,
    name: undefined,
    options: {},
    entries: {
      clientEntry: null,
      serverEntry: 'gridsome目录lib\plugins\vue-components\index.js'
    },
    index: 1,
    uid: 'a43f4a09db5ab0a0d5a0eed3ad579d4f'
  },
  {
    use: 'gridsome目录lib\plugins\vue-pages',
    server: true,
    clientOptions: undefined,
    name: undefined,
    options: {},
    entries: {
      clientEntry: null,
      serverEntry: 'gridsome目录lib\plugins\vue-pages\index.js'
    },
    index: 2,
    uid: '9630ab1fdd36ea8f5a2de20fa94d25cd'
  },
  {
    use: 'gridsome目录lib\plugins\RedirectsPlugin.js',
    server: true,
    clientOptions: undefined,
    name: undefined,
    options: {},
    entries: {
      clientEntry: null,
      serverEntry: 'gridsome目录lib\plugins\RedirectsPlugin.js'
    },
    index: 3,
    uid: '25d3ff1fbb773955767d334e4321c9e5'
  },
  {
    use: 'gridsome目录lib\plugins\TemplatesPlugin.js',
    server: true,
    clientOptions: undefined,
    name: undefined,
    options: {},
    entries: {
      clientEntry: null,
      serverEntry: 'gridsome目录lib\plugins\TemplatesPlugin.js'
    },
    index: 4,
    uid: '857f16ff026ae6795d76fdb96d075f37'
  },
  {
    use: '@gridsome/plugin-google-analytics',
    options: { id: 'UA-127625720-1' },
    server: true,
    clientOptions: undefined,
    name: undefined,
    entries: {
      clientEntry: 'gridsome的包packages\plugin-google-analytics\gridsome.client.js',
      serverEntry: 'gridsome的包packages\plugin-google-analytics\gridsome.server.js'
    },
    index: 5,
    uid: '6897e82eb29c9d92f7acb012f56ccb50'
  },
  {
    use: '@gridsome/plugin-critical',
    options: { paths: [Array], width: 1300, height: 900 },
    server: true,
    clientOptions: undefined,
    name: undefined,
    entries: {
      clientEntry: null,
      serverEntry: 'gridsome的包packages\plugin-critical\index.js'
    },
    index: 6,
    uid: 'b3b269efd6a371e35c73af3b4c0c652f'
  },
  {
    use: '@gridsome/vue-remark',
    options: {
      index: [Array],
      baseDir: './docs',
      pathPrefix: '/docs',
      typeName: 'DocPage',
      template: './src/templates/DocPage.vue',
      plugins: [Array],
      remark: [Object]
    },
    server: true,
    clientOptions: undefined,
    name: undefined,
    entries: {
      clientEntry: 'gridsome的包packages\vue-remark\gridsome.client.js',
      serverEntry: 'gridsome的包packages\vue-remark\index.js'
    },
    index: 7,
    uid: 'be13d633b643e379dad1cb1b0313a748'
  },
  {
    use: '@gridsome/source-filesystem',
    options: { path: 'examples/*.md', typeName: 'Example', remark: [Object] },
    server: true,
    clientOptions: undefined,
    name: undefined,
    entries: {
      clientEntry: null,
      serverEntry: 'gridsome的包packages\source-filesystem\index.js'
    },
    index: 8,
    uid: '896028adcd90902a9f7a35d066cee3f7'
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'BlogPost',
      path: './blog/*/index.md',
      refs: [Object],
      remark: [Object]
    },
    server: true,
    clientOptions: undefined,
    name: undefined,
    entries: {
      clientEntry: null,
      serverEntry: 'gridsome的包packages\source-filesystem\index.js'
    },
    index: 9,
    uid: '54b14efdf29c931787e39f0b4a5011c3'
  },
  {
    use: 'gridsome的projects\gridsome.org',
    server: true,
    clientOptions: undefined,
    name: undefined,
    options: {},
    entries: {
      clientEntry: null,
      serverEntry: '项目根目录\gridsome.server.js'
    },
    index: 10,
    uid: '8c0e8f1e028f5f89e2bf8ce85173b81b'
  }
]

```
Hook.js注释
```js
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

class Hook {
	constructor(args) {
		if (!Array.isArray(args)) args = [];
		this._args = args;
		this.taps = [];
		this.interceptors = [];
		this.call = this._call;
		this.promise = this._promise;
		this.callAsync = this._callAsync;
		this._x = undefined;
	}

	compile(options) {
		throw new Error("Abstract: should be overriden"); //
	}

	_createCall(type) {
		return this.compile({
			taps: this.taps,
			interceptors: this.interceptors,
			args: this._args,
			type: type
		});
	}

	tap(options, fn) {
		if (typeof options === "string") options = { name: options };
		if (typeof options !== "object" || options === null)
			throw new Error(
				"Invalid arguments to tap(options: Object, fn: function)"
			);
		options = Object.assign({ type: "sync", fn: fn }, options);
		if (typeof options.name !== "string" || options.name === "")
			throw new Error("Missing name for tap");
		options = this._runRegisterInterceptors(options);
		this._insert(options);
	}

	tapAsync(options, fn) {
		if (typeof options === "string") options = { name: options };
		if (typeof options !== "object" || options === null)
			throw new Error(
				"Invalid arguments to tapAsync(options: Object, fn: function)"
			);
		options = Object.assign({ type: "async", fn: fn }, options);
		if (typeof options.name !== "string" || options.name === "")
			throw new Error("Missing name for tapAsync");
		options = this._runRegisterInterceptors(options);
		this._insert(options);
	}

	tapPromise(options, fn) {
		if (typeof options === "string") options = { name: options };
		if (typeof options !== "object" || options === null)
			throw new Error(
				"Invalid arguments to tapPromise(options: Object, fn: function)"
			);
		options = Object.assign({ type: "promise", fn: fn }, options);
		if (typeof options.name !== "string" || options.name === "")
			throw new Error("Missing name for tapPromise");
		options = this._runRegisterInterceptors(options);
		this._insert(options);
	}

	_runRegisterInterceptors(options) {
		for (const interceptor of this.interceptors) {
			if (interceptor.register) {
				const newOptions = interceptor.register(options);
				if (newOptions !== undefined) options = newOptions;
			}
		}
		return options;
	}

	withOptions(options) {
		const mergeOptions = opt =>
			Object.assign({}, options, typeof opt === "string" ? { name: opt } : opt);

		// Prevent creating endless prototype chains
		options = Object.assign({}, options, this._withOptions);
		const base = this._withOptionsBase || this;
		const newHook = Object.create(base);

		(newHook.tapAsync = (opt, fn) => base.tapAsync(mergeOptions(opt), fn)),
			(newHook.tap = (opt, fn) => base.tap(mergeOptions(opt), fn));
		newHook.tapPromise = (opt, fn) => base.tapPromise(mergeOptions(opt), fn);
		newHook._withOptions = options;
		newHook._withOptionsBase = base;
		return newHook;
	}

	isUsed() {
		return this.taps.length > 0 || this.interceptors.length > 0;
	}

    // 注册拦截器，如果拦截器中有register方法，那么在拦截器注册时，将所有taps中的对象都通过它来拦截一次
	intercept(interceptor) {
		this._resetCompilation();
		this.interceptors.push(Object.assign({}, interceptor));
		if (interceptor.register) {
			for (let i = 0; i < this.taps.length; i++)
				this.taps[i] = interceptor.register(this.taps[i]);
		}
	}

	_resetCompilation() {
		this.call = this._call;
		this.callAsync = this._callAsync;
		this.promise = this._promise;
	}

	_insert(item) {
		this._resetCompilation();
		let before;
		if (typeof item.before === "string") before = new Set([item.before]);
		else if (Array.isArray(item.before)) {
			before = new Set(item.before);
		}
		let stage = 0;
		if (typeof item.stage === "number") stage = item.stage;
		let i = this.taps.length;
		while (i > 0) {
			i--;
			const x = this.taps[i];
			this.taps[i + 1] = x;
			const xStage = x.stage || 0;
			if (before) {
				if (before.has(x.name)) {
					before.delete(x.name);
					continue;
				}
				if (before.size > 0) {
					continue;
				}
			}
			if (xStage > stage) {
				continue;
			}
			i++;
			break;
		}
		this.taps[i] = item;
	}
}

function createCompileDelegate(name, type) {
	return function lazyCompileHook(...args) {
		this[name] = this._createCall(type);
		return this[name](...args);
	};
}

Object.defineProperties(Hook.prototype, {
	_call: {
		value: createCompileDelegate("call", "sync"),
		configurable: true,
		writable: true
	},
	_promise: {
		value: createCompileDelegate("promise", "promise"),
		configurable: true,
		writable: true
	},
	_callAsync: {
		value: createCompileDelegate("callAsync", "async"),
		configurable: true,
		writable: true
	}
});

module.exports = Hook;
```

```js
var myFunction = new Function('user', 'salary', 'return user +"的工资是"+ salary')
console.log(myFunction('张三',9800))
```

