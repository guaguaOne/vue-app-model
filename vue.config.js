module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/server':{
                target: 'http://testwmapp.xinhuaapp.com/',
                  ws: true,
                changeOrigin: true
            }
        }
    } 
}