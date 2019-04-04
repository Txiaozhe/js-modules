'use strict';

module.exports = () => {
  return async (ctx, next) => {
    console.log('llll===> ');
    console.log('jjj1: ', ctx.jjj);
    await next();
    console.log('jjj2: ', ctx.jjj);
  };
};
