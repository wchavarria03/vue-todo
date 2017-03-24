// require('./favicon.ico'); // Tell webpack to load favicon.ico
import Vue from 'vue';
import TodoComponent from './components/todo-component/todo-component.vue';

import './styles/base.css';
import './styles/index.css';

new Vue({
  el: '#app',
  components: {
    TodoComponent
  }
});
