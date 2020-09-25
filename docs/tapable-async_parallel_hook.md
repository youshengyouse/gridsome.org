## syncWaterfallHook

```js
let { AsyncParallelHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new AsyncParallelHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
    }
    tap(){
 
        this.hooks.arch.tap('node',(name)=>{ 
            console.log('第一个函数node',name)
        })
        //this.hooks.arch.tap({name:'react',before:'node'},function(name){
        this.hooks.arch.tap({name:'react'},(a,b,c,d,e,f)=>{
            
                console.log('第2个函数运react')
           
        })

        this.hooks.arch.tap({name:'php'},(name)=>{
            console.log('第3个函数我喜欢php',name)
        })
    }
    start(){
        /**
         * 会先生成下面这个总匿名函数
         *function anonymous(yousheng, youse, network, _callback) {
                "use strict";
                var _context;
                var _x = this._x;

                // 只会执行一次
                do {
                    var _counter = 3;
                    var _done = () => {
                        _callback();
                    };
                    if(_counter <= 0) break;
                    
                    //--------------------------------执行第1个函数
                    var _fn0 = _x[0];
                    var _hasError0 = false;
                    try {
                        _fn0(yousheng, youse, network);
                    } catch(_err) {
                        _hasError0 = true;
                        if(_counter > 0) {
                            _callback(_err);
                            _counter = 0;
                        }
                    }
                    if(!_hasError0) {
                        if(--_counter === 0) _done();
                    }
                    if(_counter <= 0) break;

                    //--------------------------------执行第2个函数
                    var _fn1 = _x[1];
                    var _hasError1 = false;
                    try {
                        _fn1(yousheng, youse, network);
                    } catch(_err) {
                        _hasError1 = true;
                        if(_counter > 0) {
                            _callback(_err);
                            _counter = 0;
                        }
                    }
                    if(!_hasError1) {
                        if(--_counter === 0) _done();
                    }
                    if(_counter <= 0) break;

                    //--------------------------------执行第3个函数
                    var _fn2 = _x[2];
                    var _hasError2 = false;
                    try {
                        _fn2(yousheng, youse, network);
                    } catch(_err) {
                        _hasError2 = true;
                        if(_counter > 0) {
                            _callback(_err);
                            _counter = 0;
                        }
                    }
                    if(!_hasError2) {
                        if(--_counter === 0) _done();
                    }
                } while(false);
            }
            下面的call就是执行上面这个匿名函数，只需要三个参数，但实际传入了5个，多余的会抛弃
         */
        // call时传入的参数个数与实例化时一致，最后加一个函数
        this.hooks.arch.callAsync('jw','aa','bb',function(){
            console.log('全部执行了')
        } )

    }
}

let l = new lesson()
// console.log(l.hooks.arch._call.toString())
l.tap()
l.start()
````

以上并没有异步操作，将第一个函数改为

```js
this.hooks.arch.tap('node',(name)=>{ 
    setTimeout(()=>{
        console.log('第一个函数node',name)
    },1000)
})
```

结果为

```js
第2个函数运react
第3个函数我喜欢php jw
全部执行了
第一个函数node jw ，异步的最后执行，这不是我想要的结果，也就是说使用tap方法注册不是很好，换为 tapAsync
```



```js
let { AsyncParallelHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new AsyncParallelHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
    }
    tap(){
 
        this.hooks.arch.tapAsync('node',(a,b,c,cb)=>{ 
            console.log('第1个函数开始')
            setTimeout(()=>{
                console.log('第1个函数node',a,b,c)
                cb()
            },1000)
            console.log('第1个函数结束')
        })
        //this.hooks.arch.tap({name:'react',before:'node'},function(name){
        this.hooks.arch.tapAsync({name:'react'},(a,b,c,cb)=>{ 
            console.log('第2个函数开始')
            setTimeout(()=>{
                console.log('第2个函数react',a,b,c)
                cb()
            },1000)
            console.log('第2个函数结束')
        })

        this.hooks.arch.tapAsync({name:'php'},(a,b,c,cb)=>{ 
            console.log('第3个函数开始')
            setTimeout(()=>{
                console.log('第3个函数php',a,b,c)
                cb()
            },1000)
            console.log('第3个函数结束')
        })
    }
    start(){
        /**
         * 会先生成下面这个总匿名函数
         *function anonymous(yousheng, youse, network, _callback) {
                "use strict";
                var _context;
                var _x = this._x;
                do {
                    var _counter = 3;
                    var _done = () => {
                        _callback();
                    };
                    if (_counter <= 0) break;
                    //----------------------------------------------------第1个函数
                    var _fn0 = _x[0];
                    _fn0(yousheng, youse, network, _err0 => {
                        if (_err0) {
                            if (_counter > 0) {
                                _callback(_err0);
                                _counter = 0;
                            }
                        } else {
                            if (--_counter === 0) _done();
                        }
                    });
                    if (_counter <= 0) break;

                    //----------------------------------------------------第2个函数
                    var _fn1 = _x[1];
                    _fn1(yousheng, youse, network, _err1 => {
                        if (_err1) {
                            if (_counter > 0) {
                                _callback(_err1);
                                _counter = 0;
                            }
                        } else {
                            if (--_counter === 0) _done();
                        }
                    });
                    if (_counter <= 0) break;

                    //----------------------------------------------------第3个函数
                    var _fn2 = _x[2];
                    _fn2(yousheng, youse, network, _err2 => {
                        if (_err2) {
                            if (_counter > 0) {
                                _callback(_err2);
                                _counter = 0;
                            }
                        } else {
                            if (--_counter === 0) _done();
                        }
                    });
                } while (false);

            }
            下面的call就是执行上面这个匿名函数，只需要三个参数，但实际传入了5个，多余的会抛弃
         */
        // call时传入的参数个数与实例化时一致
        this.hooks.arch.callAsync('有声','有色','网络',function(){
            console.log('所有函数执行完毕')
        } )

    }
}

let l = new lesson()
// console.log(l.hooks.arch._call.toString())
l.tap()
l.start()
```

结果如下

```
第1个函数开始
第1个函数结束
第2个函数开始
第2个函数结束
第3个函数开始
第3个函数结束
第1个函数node 有声 有色 网络
第2个函数react 有声 有色 网络
第3个函数php 有声 有色 网络 
所有函数执行完毕
```

最终回调有参数的情况

```js
let { AsyncParallelHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new AsyncParallelHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
    }
    tap(){
 
        this.hooks.arch.tapAsync('node',(a,b,c,cb)=>{ 
            console.log('第1个函数开始')
            setTimeout(()=>{
                console.log('第1个函数node',a,b,c)
                cb('中国')
            },1000)
            console.log('第1个函数结束')
        })
        //this.hooks.arch.tap({name:'react',before:'node'},function(name){
        this.hooks.arch.tapAsync({name:'react'},(a,b,c,cb)=>{ 
            console.log('第2个函数开始')
            setTimeout(()=>{
                console.log('第2个函数react',a,b,c)
                cb('美国') // 因为这里有实参，所以执行这个函数后，就执行的回调
            },1000)
            console.log('第2个函数结束')
        })

        this.hooks.arch.tapAsync({name:'php'},(a,b,c,cb)=>{ 
            console.log('第3个函数开始')
            setTimeout(()=>{
                console.log('第3个函数php',a,b,c)
                cb('加拿大')
            },1000)
            console.log('第3个函数结束')
        })
    }
    start(){
        /**
         * 会先生成下面这个总匿名函数
         *function anonymous(yousheng, youse, network, _callback) {
                "use strict";
                var _context;
                var _x = this._x;
                do {
                    var _counter = 3;
                    var _done = () => {
                        _callback();
                    };
                    if (_counter <= 0) break;
                    //----------------------------------------------------第1个函数
                    var _fn0 = _x[0];
                    _fn0(yousheng, youse, network, _err0 => {
                        if (_err0) {
                            if (_counter > 0) {
                                _callback(_err0);
                                _counter = 0;
                            }
                        } else {
                            if (--_counter === 0) _done();   // 计数器在tapAsync注册的函数的最后一个参数，它是一个函数，只有它执行了，计数才变化
                        }
                    });
                    if (_counter <= 0) break;

                    //----------------------------------------------------第2个函数
                    var _fn1 = _x[1];
                    _fn1(yousheng, youse, network, _err1 => {
                        if (_err1) {
                            if (_counter > 0) {
                                _callback(_err1);
                                _counter = 0;
                            }
                        } else {
                            if (--_counter === 0) _done();
                        }
                    });
                    if (_counter <= 0) break;

                    //----------------------------------------------------第3个函数
                    var _fn2 = _x[2];
                    _fn2(yousheng, youse, network, _err2 => {
                        if (_err2) {
                            if (_counter > 0) {
                                _callback(_err2);
                                _counter = 0;
                            }
                        } else {
                            if (--_counter === 0) _done();
                        }
                    });
                } while (false);

            }
            下面的call就是执行上面这个匿名函数，只需要三个参数，但实际传入了5个，多余的会抛弃
         */
        // call时传入的参数个数与实例化时一致，最后一个是函数
        this.hooks.arch.callAsync('有声','有色','网络',function(a){ // 最后回调里有参数，遇到第一个
            console.log(a)
            console.log('所有函数执行完毕')
        } )

    }
}

let l = new lesson()
// console.log(l.hooks.arch._call.toString())
l.tap()
l.start()
```

结果如下

```js
第1个函数开始
第1个函数结束
第2个函数开始
第2个函数结束
第3个函数开始
第3个函数结束
第1个函数node 有声 有色 网络
中国
所有函数执行完毕
第2个函数react 有声 有色 网络
第3个函数php 有声 有色 网络
```

tapPromise和promise

```js
let { AsyncParallelHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new AsyncParallelHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
    }
    tap(){
 
        this.hooks.arch.tapPromise('node',(a,b,c)=>{ 
            console.log('第1个函数开始')
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('第1个函数node',a,b,c)
                    resolve()
                },1000)
            })
        })
        //this.hooks.arch.tap({name:'react',before:'node'},function(name){
        this.hooks.arch.tapPromise({name:'react'},(a,b,c)=>{ 
            console.log('第2个函数开始')
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('第2个函数node',a,b,c)
                    resolve()
                },1000)
            })
        })

        this.hooks.arch.tapPromise({name:'php'},(a,b,c)=>{ 
            console.log('第3个函数开始')
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('第3个函数node',a,b,c)
                    resolve()
                },1000)
            })
        })
    }
    start(){
        /**
         * 会先生成下面这个总匿名函数
         *function anonymous(yousheng, youse, network) {
            "use strict";
            return new Promise((_resolve, _reject) => {
                var _sync = true;

                function _error(_err) {
                    if (_sync)
                        _resolve(Promise.resolve().then(() => {
                            throw _err;
                        }));
                    else
                        _reject(_err);
                };
                var _context;
                var _x = this._x;
                do {
                    var _counter = 3;
                    var _done = () => {
                        _resolve();
                    };
                    if (_counter <= 0) break;
                    var _fn0 = _x[0];
                    var _hasResult0 = false;
                    var _promise0 = _fn0(yousheng, youse, network);
                    if (!_promise0 || !_promise0.then)
                        throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
                    _promise0.then(_result0 => {
                        _hasResult0 = true;
                        if (--_counter === 0) _done();
                    }, _err0 => {
                        if (_hasResult0) throw _err0;
                        if (_counter > 0) {
                            _error(_err0);
                            _counter = 0;
                        }
                    });
                    if (_counter <= 0) break;
                    var _fn1 = _x[1];
                    var _hasResult1 = false;
                    var _promise1 = _fn1(yousheng, youse, network);
                    if (!_promise1 || !_promise1.then)
                        throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
                    _promise1.then(_result1 => {
                        _hasResult1 = true;
                        if (--_counter === 0) _done();
                    }, _err1 => {
                        if (_hasResult1) throw _err1;
                        if (_counter > 0) {
                            _error(_err1);
                            _counter = 0;
                        }
                    });
                    if (_counter <= 0) break;
                    var _fn2 = _x[2];
                    var _hasResult2 = false;
                    var _promise2 = _fn2(yousheng, youse, network);
                    if (!_promise2 || !_promise2.then)
                        throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise2 + ')');
                    _promise2.then(_result2 => {
                        _hasResult2 = true;
                        if (--_counter === 0) _done();
                    }, _err2 => {
                        if (_hasResult2) throw _err2;
                        if (_counter > 0) {
                            _error(_err2);
                            _counter = 0;
                        }
                    });
                } while (false);
                _sync = false;
            });

        }
            下面的call就是执行上面这个匿名函数，只需要三个参数，但实际传入了5个，多余的会抛弃
         */
        // call时传入的参数个数与实例化时一致，最后一个是函数
        this.hooks.arch.promise('有声','有色','网络').then(function(a){
            console.log(a)
            console.log('所有函数执行完毕')
        } )

    }
}

let l = new lesson()
// console.log(l.hooks.arch._call.toString())
l.tap()
l.start()
```

