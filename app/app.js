// require('./favicon.ico'); // Tell webpack to load favicon.ico
import Vue from 'vue';
import AppComponent from './components/app-component/app-component.vue';

import './styles/base.css';
import './styles/index.css';

new Vue({
  el: '#app',
  components: {
    AppComponent
  },
  data: {
    message: 'Hello'
  }
});