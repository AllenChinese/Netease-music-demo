/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 */

let baseUrl = ''
let routerMode = 'history'

if (process.env.NODE_ENV == 'development') {

    baseUrl = 'https://easy-mock.com/mock/5a55c0dbde90b06840ddd09c/neteasy';

} else if (process.env.NODE_ENV == 'production') {

    baseUrl = 'https://easy-mock.com/mock/5a55c0dbde90b06840ddd09c/neteasy';

}

export {
    baseUrl,
    routerMode
}