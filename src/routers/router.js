import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)

import Home from "../components/tabcontainers/Home.vue"
import member from "../components/tabcontainers/member.vue"
import cart from "../components/tabcontainers/cart.vue"
import search from "../components/tabcontainers/search.vue"

// 新闻组件
import newlist from "../components/news/newlist.vue"
import newinfo from "../components/news/newinfo.vue"

export default new VueRouter({
    routes: [
        { path: "/home", component: Home },
        { path: "/member", component:member },
        { path: "/cart", component: cart },
        { path: "/search", component: search },
        { path: "/home/newlist", component: newlist },
        { path: "/home/newinfo/:id", component: newinfo  },
        { path: "/", redirect: "/home" },
    ]
});

