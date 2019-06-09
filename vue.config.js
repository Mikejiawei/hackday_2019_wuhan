module.exports = {
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://yiban.weno.cc/manchain',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
