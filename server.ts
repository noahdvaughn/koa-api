import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
export const router = new Router()
const port = 3000

router.get('/cool', (ctx, next) => {
  ctx.body = 'Koa is cool'
})

app.use(router.routes())

app.listen(port, () => {
  console.log('We love Koa')
})
