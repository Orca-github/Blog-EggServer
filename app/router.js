/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  /**
 * 引入 shishsishishi
 */
require('./router/default')(app)
require('./router/admin')(app)
require('./router/csrf')(app)
};
