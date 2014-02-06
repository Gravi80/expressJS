var config = {
    dev: {
        mode: 'dev',
        port: 3000
    },
    qa: {
        mode: 'qa',
        port: 3001
    },
    prod: {
        mode: 'production',
        port: 3002
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}