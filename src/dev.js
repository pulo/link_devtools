require('js-link');
var tpl = require('html!./dev.tpl');
var Vue = require('vue');

var a = new Vue({
  el:'#body',
  replace:false,
  template:tpl,
  data: {
    message: 'Hello Vue.js!'
  }
});
//a.set('message','xxx');