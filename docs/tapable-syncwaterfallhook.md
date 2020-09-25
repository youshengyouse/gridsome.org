## syncWaterfallHook

```js
let { SyncWaterfallHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new SyncWaterfallHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
        }
    }
    tap(){
 
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
         * function anonymous(yousheng, youse, network) {
                "use strict";
                var _context;
                var _x = this._x;

                var _fn0 = _x[0];
                var _result0 = _fn0(yousheng, youse, network); // 此处的三个参数，是call中传进来的，结果会作为下一个函数的第1个参数
                if(_result0 !== undefined) {
                    yousheng = _result0;
                }

                var _fn1 = _x[1];
                var _result1 = _fn1(yousheng, youse, network); // 第1个参数是上一个函数的返回结果
                if(_result1 !== undefined) {
                    yousheng = _result1;
                }

                var _fn2 = _x[2];
                var _result2 = _fn2(yousheng, youse, network); // 第1个参数是上一个函数的返回结果
                if(_result2 !== undefined) {
                    yousheng = _result2;
                }
                return yousheng; // 最后一个函数返回的结果
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