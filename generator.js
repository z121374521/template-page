module.exports = (api, options, rootOptions) => {
  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })
  api.extendPackage({
    dependencies: {
      "core-js": "^3.6.5",
      "vue-router": "^3.1.5",
      "element-ui": "^2.14.1",
      "axios": "^0.18.0",
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.5.0",
      "@vue/cli-plugin-eslint": "~4.5.0",
      "@vue/cli-service": "~4.5.0",
      "babel-eslint": "^10.0.1",
      "compression-webpack-plugin": "^3.0.0",
      "eslint": "^5.16.0",
      "eslint-loader": "^4.0.2",
      "eslint-plugin-vue": "^5.2.3",
      "node-sass": "^4.9.0",
      "sass-loader": "^7.1.0",
      "vue-template-compiler": "^2.5.21"
    }
  });
  // 复制template模版
  api.render('./template');
};