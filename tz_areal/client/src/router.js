import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue"
import ArticleForm from "@/pages/ArticleForm.vue"

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: MainPage,
    },
    {
        path:'/article/:id',
        props: (route)=> ({
            id: route.params.id
        }),
        component: ArticleForm,
    },    

]

export default new VueRouter({
    mode: 'history',
    routes
})