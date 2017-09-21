var configValues = require('./config');

module.exports = {
    getDBConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
        '@ds159377.mlab.com:59377/nodetodosample';
    }
}
