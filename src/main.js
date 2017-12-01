import Vue from "vue";

//引入根组件
import App from "./App.vue"

import router from "./routers/router.js"
//  引入mintui
import MintUI from 'mint-ui'
// 引入mintui样式
import 'mint-ui/lib/style.css'

// 引入mui样式
import './lib/mui/css/mui.min.css'
// 引入图标样式
import './lib/mui/css/icons-extra.css' 




Vue.use(MintUI)


var vm = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {App}
})