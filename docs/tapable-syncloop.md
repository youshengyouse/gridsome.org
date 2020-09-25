## syncLoopHook

```js
let { SyncLoopHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new SyncLoopHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
        this.num=0
    }
    tap(){
 
        this.hooks.arch.tap('node',(name)=>{ 
            console.log('第一个函数node',name)
        })
        //this.hooks.arch.tap({name:'react',before:'node'},function(name){
        this.hooks.arch.tap({name:'react'},(a,b,c,d,e,f)=>{
            this.num++
            if(this.num>3){
               
                return undefined;
            }else{
                console.log('第2个函数运行了'+this.num+'次')
                return 'loop'
            }
            
        })

        this.hooks.arch.tap({name:'php'},(name)=>{
            console.log('第3个函数我喜欢php',name)
        })
    }
    start(){
        /**
         * 会先生成下面这个总匿名函数
         *function anonymous(yousheng, youse, network) {
                "use strict";
                var _context;
                var _x = this._x;
                var _loop;

                do {
                    _loop = false;
                    var _fn0 = _x[0];
                    var _result0 = _fn0(yousheng, youse, network); // 如果第1个函数的结果不为undefined，_loop的值就会为真，就会一直执行，
                    if(_result0 !== undefined) { // 所以函数一定要定义一个返回undefined的条件，否则一直运行，一般用一个变量来记录该函数运行的次数，当达到一定条件时，返回undefined，再执行下一个函数，下一个函数也是这样多次循环判断
                        _loop = true;
                    } else {
                        var _fn1 = _x[1];
                        var _result1 = _fn1(yousheng, youse, network);
                        if(_result1 !== undefined) {
                            _loop = true;
                        } else {
                            var _fn2 = _x[2];
                            var _result2 = _fn2(yousheng, youse, network); // 如果第2个函数的返回值不为undefined，会从头，也就是第1个函数再重新执行
                            if(_result2 !== undefined) {
                                _loop = true;
                            } else {
                                if(!_loop) {
                                }
                            }
                        }
                    }
                } while(_loop);
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

运行结果

```
第一个函数node jw
第2个函数运行了1次
第一个函数node jw
第2个函数运行了2次
第一个函数node jw
第2个函数运行了3次
第一个函数node jw
第3个函数我喜欢php jw
```

