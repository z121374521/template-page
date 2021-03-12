import Example from './example';

const components = [
  // TODO 新增组件必须在这里声明，否则无法使用。
  Example,
];

export default {
  // Vue.use()触发install的调用
  install: function(Vue) {
    components.forEach(component => {
      // 全局注册组件
      Vue.component(component.name, component);
    });
  },
}