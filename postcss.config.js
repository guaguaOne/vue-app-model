module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px2rem-exclude": {
          remUnit: 75, //转换为rem的基准px
          //其他配置选项自行查文档
          exclude: /node_modules|folder_name/i
        }
    }
}