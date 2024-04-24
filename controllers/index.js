
const mainRouteController = require('./main');
const gameRouteController = require('./game');
const voteRouteController = require('./vote')
const defaultRouteController = require('./default');


module.exports = {
    mainRouteController, defaultRouteController, voteRouteController, gameRouteController
}