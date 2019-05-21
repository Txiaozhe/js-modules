function compose(mws) {
  let i = 0;
  return async function _run(ctx) {
    return await mws[i](ctx, async function() {
      ++i < mws.length && await _run(ctx);
    })
  }
}

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

const res = compose([
  async (ctx, next) => {
    console.log('1, 1', ctx)
    await sleep()
    await next()
    console.log('1, 2', ctx)
  },
  async (ctx, next) => {
    console.log('2, 1', ctx)
    await next()
    console.log('2, 2', ctx)
  },
  async (ctx, next) => {
    console.log('3, 1', ctx)
    await next()
    await sleep()
    console.log('3, 2', ctx)
  },
  async (ctx, next) => {
    console.log('4, 1', ctx)
    await next()
    await sleep()
    console.log('4, 2', ctx)
  }
])

res(' compose').then(r => console.log(r)).catch(e => console.log(e))

function compose1(mws) {
  let i = 0;
  return function _run(ctx) {
    return mws[i] && mws[i](ctx, function() {
      ++i< mws.length && _run(ctx);
    })
  }
}
