## AsyncSeriesHook

```js
let { AsyncSeriesHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new AsyncSeriesHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
    }
    tap(){
 
        this.hooks.arch.tapAsync('node',(a,b,c,cb)=>{ 
            console.log('第1个函数开始')
                setTimeout(()=>{
                    console.log('第1个函数node',a,b,c)
                    //cb('中国')，如果带参数，只执行到这里
                    cb()
                },1000)
                console.log('第1个函数结束')
        })


        this.hooks.arch.tapAsync({name:'react'},(a,b,c,cb)=>{ 
            console.log('第2个函数开始')
                setTimeout(()=>{
                    console.log('第2个函数node',a,b,c)
                    cb()
                },1000)
                console.log('第2个函数结束')
        })

        this.hooks.arch.tapAsync({name:'php'},(a,b,c,cb)=>{ 
            console.log('第3个函数开始')
                setTimeout(()=>{
                    console.log('第3个函数node',a,b,c)
                    cb()
                },1000)
                console.log('第3个函数结束')
        })
    }
    start(){
        /**
         * 会先生成下面这个总匿名函数
            function anonymous(yousheng, youse, network, _callback) {
                "use strict";
                var _context;
                var _x = this._x;

                function _next1() {
                    var _fn2 = _x[2];
                    _fn2(yousheng, youse, network, _err2 => {
                        if (_err2) {
                            _callback(_err2);
                        } else {
                            _callback();
                        }
                    });
                }

                function _next0() {
                    var _fn1 = _x[1];
                    _fn1(yousheng, youse, network, _err1 => {
                        if (_err1) {
                            _callback(_err1);
                        } else {
                            _next1();
                        }
                    });
                }

                var _fn0 = _x[0];
                _fn0(yousheng, youse, network, _err0 => { // 开始执行第1个函数，其中第4个参数是函数
                    if (_err0) {
                        _callback(_err0);
                    } else {
                        _next0();
                    }
                });

            }
            下面的call就是执行上面这个匿名函数，只需要三个参数，但实际传入了5个，多余的会抛弃
         */
        // call时传入的参数个数与实例化时一致，最后一个是函数
        this.hooks.arch.callAsync('有声','有色','网络',function(a){
            console.log(a);
            console.log('所有函数执行完毕')
        } )

    }
}

let l = new lesson()
// console.log(l.hooks.arch._call.toString())
l.tap()
l.start()
````

输出

```js
第1个函数开始
第1个函数结束
第1个函数node 有声 有色 网络
第2个函数开始
第2个函数结束
第2个函数node 有声 有色 网络
第3个函数开始
第3个函数结束
第3个函数node 有声 有色 网络
undefined
所有函数执行完毕
```

## tapPromise

```js
let { AsyncSeriesHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new AsyncSeriesHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
    }
    tap(){
 
        this.hooks.arch.tapPromise('node',(a,b,c)=>{ 
            console.log('第1个函数开始')
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('第1个函数node',a,b,c)
                    resolve('-1-')
                },1000)
            })
        })


        this.hooks.arch.tapPromise({name:'react'},(a,b,c,cb)=>{ 
            console.log('第2个函数开始')
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('第2个函数node',a,b,c)
                    resolve('-2-')
                },1000)
            })
        })

        this.hooks.arch.tapPromise({name:'php'},(a,b,c)=>{ 
            console.log('第3个函数开始')
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('第3个函数node',a,b,c)
                    resolve('-3-')
                },1000)
            })
        })
    }
    start(){
        /**
         * 会先生成下面这个总匿名函数
         * function anonymous(yousheng, youse, network) {
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

                    function _next1() {
                        var _fn2 = _x[2];
                        var _hasResult2 = false;
                        var _promise2 = _fn2(yousheng, youse, network);
                        if (!_promise2 || !_promise2.then)
                            throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise2 + ')');
                        _promise2.then(_result2 => {
                            _hasResult2 = true;
                            _resolve();
                        }, _err2 => {
                            if (_hasResult2) throw _err2;
                            _error(_err2);
                        });
                    }

                    function _next0() {
                        var _fn1 = _x[1];
                        var _hasResult1 = false;
                        var _promise1 = _fn1(yousheng, youse, network);
                        if (!_promise1 || !_promise1.then)
                            throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
                        _promise1.then(_result1 => {
                            _hasResult1 = true;
                            _next1();
                        }, _err1 => {
                            if (_hasResult1) throw _err1;
                            _error(_err1);
                        });
                    }
                    var _fn0 = _x[0];
                    var _hasResult0 = false;
                    var _promise0 = _fn0(yousheng, youse, network);
                    if (!_promise0 || !_promise0.then)
                        throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
                    _promise0.then(_result0 => {
                        _hasResult0 = true;
                        _next0();
                    }, _err0 => {
                        if (_hasResult0) throw _err0;
                        _error(_err0);
                    });
                    _sync = false;
                });

            }
           
            下面的call就是执行上面这个匿名函数，只需要三个参数，但实际传入了5个，多余的会抛弃
         */
        // call时传入的参数个数与实例化时一致，最后一个是函数
        this.hooks.arch.promise('有声','有色','网络').then((a)=>{
            console.log(a);
            console.log('所有函数执行完毕')
        } )

    }
}

let l = new lesson()
// console.log(l.hooks.arch._call.toString())
l.tap()
l.start()
```

