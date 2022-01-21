if (process.env.NODE_ENV === 'production') {
    console.log("prod mode");
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}