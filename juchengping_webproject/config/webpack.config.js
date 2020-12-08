const path=require('path');//导入path模块
module.exports={
    mode:'production',//模式，默认为production生产模式，还有development开发模式
    entry:{
        index:"./src/js/index.js",
        goodinfo:"./src/js/goodinfo.js",
        listing:"./src/js/listing.js"
},//多入口
    output:{
        path:path.resolve(__dirname,'../dist/'),//打包文件的绝对路径
        // filename:'bundle.js'//单入口打包文件的名字
          filename:'[name].[hash].js'//多入口打包文件的名字
    }
}