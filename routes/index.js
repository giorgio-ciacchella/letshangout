
const index = require('../routes/homepage');
const facebook = require('../routes/facebook');

export function addRoutes(app) {
  app.use('/', index);
  app.use('/facebook', facebook);
}
