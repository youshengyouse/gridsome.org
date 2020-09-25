module.exports=function(api,options,{context}){
    api.onInit(()=>{
        return new Promise((resolve,reject)=>{
                if(options.theme){
                    console.log(`你选择的主题是${options.theme}`);
                    resolve()
                }
        })
    })
}
module.exports.defaultOptions=()=>{}