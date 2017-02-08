var koa = require('koa');
var app = module.exports = koa();

app.use(function *() {
  this.body = [{'name':'aaa'},{'name':'bbb1'}];
});

if (!module.parent) app.listen(3000);
