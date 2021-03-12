import Vue from 'vue';
import VueRouter from 'vue-router';
// 获取package.json中的 name
import { name } from 'package';

Vue.use(VueRouter);

const HelloWorld = () => import('../views/hello-world.vue');

const router = new VueRouter({
  base: `/${name}`,
  routes: [
    // TODO 在此定义路由
    { path: '/', component: HelloWorld, meta: { title: '首页' } },
  ],
  // 路由显示用his模式，去掉url路径里面的#。
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  if(to.matched && to.matched[0] && to.matched[0].meta && to.matched[0].meta.title){
    // 路由跳转时切换页面title
    document.title = to.matched[0].meta.title;
  }
  
  next();
});

export default router;