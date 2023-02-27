
const { VueLoaderPlugin } = require('vue-loader')

const path = require('path'); //node自带，用来构建绝对路径
const glob = require('glob'); //node自带的库，用来遍历文件夹
const list = {};

// {
//     card: './components/lib/card/index.js',
//     button: './components/lib/button/index.js'
// }
async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    // console.log('files: ',files)
    files.forEach(item => {
        const component = item.split('/')[2];
        // console.log(component)
        list[component] = `./${item}`;
    })
    // console.log(list)
}
makeList('components/lib',list)
module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'cui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
}