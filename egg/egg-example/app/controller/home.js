'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.jjj = 'jjj';
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
