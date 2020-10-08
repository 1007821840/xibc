const express = require('express');
const app = express();

// express.static() 向外暴露静态资源
// express.json() 处理post请求参数  application/json
// express.urlencoded() 处理post请求参数 application/x-www-form-urlencoded

// 思考： 使用的express.json()返回值，返回值是一个函数，而且函数工作完自动调用了next方法
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// __dirname 绝对根路径
app.use(express.static(path.resolve(__dirname, 'public')))

// 第三方中间键 全局使用
// app.use(multipartMiddleware)

// 局部使用中间键： multipartMiddleware 必须放置在请求回调的前边
app.post('/login', multipartMiddleware, (request, response) => {
  console.log('body请求体参数； ', request.body);
  response.send('服务器返回的数据')
});



// 注册路由
// requ est(请求信息对象 - req), response(响应信息对象 - res)
app.get('/login/:index', (req, res) => {
  console.log('1111');
  console.log('query参数： ', req.query);
  console.log('params参数： ',req.params);
  // 设置响应头字段
  res.set({
    'content-type': 'text/html;charset=utf-8'
  })
  // 服务器返回数据的时候默认的编码格式是utf-8
  res.status(200).end('服务器返回的数据');
});


app.post('/register/:id', (req, res) => {
  console.log('2222');
  console.log('post query参数： ',  req.query);
  console.log('post params参数： ', req.params);
  console.log('post 请求体参数： ', req.body);
  res.end('register success data');
});

app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址：http://localhost:3001');
  }
})