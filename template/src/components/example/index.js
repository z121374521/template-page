import Example from './src/main';

// 单独使用组件时，Vue.use(Example)触发install方法执行。
Example.install = function(Vue) {
  // 全局注册Example组件
  Vue.component(Example.name, Example);
};

export default Example;
