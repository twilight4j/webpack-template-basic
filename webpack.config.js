// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'), //dist면 생략가능
        // filename: 'main.js', //설정하지 않으면 의 파일과 동일 entry
        clean: true // build 할 때 불필요한 기존 내용 제거
    },

    //scss또는 css 끝나는 확장자
    module: {
        rules: [
            {
                //!순서주의. 아래부터 순서대로 load
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static'}
            ]
        })
    ],
    devServer: {
        host: 'localhost'
    }
}