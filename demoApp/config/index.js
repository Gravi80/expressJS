var config = {
    local: {
        mode: 'dev',
        port: 3000
    },
    staging: {
        mode: 'qa',
        port: 3001
    },
    production: {
        mode: 'prod',
        port: 3002
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}