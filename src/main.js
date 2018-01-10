// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/common.css'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
    locale: 'zh-CN', // 语言标识
    messages: {
        'zh-CN': require('./common/lang/zh'), // 中文语言包
        'en-US': require('./common/lang/en') // 英文语言包
    }
})

Vue.config.productionTip = false

Vue.use(ElementUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    store,
    router,
    template: '<App/>',
    components: { App }
})