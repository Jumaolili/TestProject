const express = require('express')
const bodyParser = require('body-parser');
const arttemplate = require('art-template');
const path = require('path');
const fs = require('fs');
const request = require('request');

//引入express-ws库
const expressWs = require('express-ws');

//引入websocket库
// const WebsocketServer = require('websocket').server;

//引入路由器
// const check_register_router = require('./routers/check_register');

//开启服务
const app = express();

// //绑定app 与 expressWs
// expressWs(app);


// //开发者wx
// const wx = {
//     appid: 'wx22b51bf41c5c8abb', //开发者appid
//     secret: '83ac1047c468f9199568e7683f708db8' //开发者secret
// }

//配置bodyparser
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

//开放静态资源(后期需要用来开放 users和goods图片文件)
app.use('/node_modules', express.static('./node_modules/'));
app.use('/public', express.static('./public'));
// app.use('/user_src', express.static('./user_src'));

//挂载路由
// app.use(check_register_router);


// 开启服务器 
app.listen(3000, function() {
    console.log("server is running now ......")
})