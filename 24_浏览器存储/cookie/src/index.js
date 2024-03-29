// 通过 node 运行本文件，浏览器依次访问 http://localhost:8000/test、http://localhost:8000/demo

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const testRouter = new Router();

// 登录接口
testRouter.get('/test', (ctx, next) => {
  // maxAge对应毫秒
  ctx.cookies.set("name", "hxxxx", {
    maxAge: 60 * 1000,
    httpOnly: false
  })

  ctx.body = "test";
});


testRouter.get('/demo', (ctx, next) => {
  // 读取cookie
  const value = ctx.cookies.get('name');
  ctx.body = "你的cookie是" + value;
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8000, () => {
  console.log("服务器启动成功~");
})

