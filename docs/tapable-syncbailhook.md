## syncBailHook

```js
let { SyncBailHook }= require('tapable')

class lesson{
    constructor() {
        this.hooks={
            arch: new SyncBailHook(['yousheng','youse','network']) // 参数必须是数组，非数组转为空数组[]
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
            return null; // 无 return,或只有return ;，其它象 return null,return false等返回值不是undefined，就会熔断
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
         * function anonymous(yousheng, youse, network ) {
                "use strict";
                var _context;
                var _x = this._x;

                var _fn0 = _x[0];
                var _result0 = _fn0(yousheng, youse, network); // tap进的第1个函数

                if(_result0 !== undefined) {     // 判断第一个函数的值是否为undefined，有值就熔断，后面的不执行
                    return _result0;
                    ;
                } else {
                    var _fn1 = _x[1];
                    var _result1 = _fn1(yousheng, youse, network); // tap进的第2个函数
                    if(_result1 !== undefined) {
                    return _result1;
                    ;
                    } else {
                        var _fn2 = _x[2];
                        var _result2 = _fn2(yousheng, youse, network); // tap进的第3个函数，多层嵌套
                        if(_result2 !== undefined) {
                            return _result2;
                            ;
                        } else {
                        }
                    }
                }
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