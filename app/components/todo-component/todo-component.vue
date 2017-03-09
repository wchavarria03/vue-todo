<template> 
  <div class="todoapp">
    <todo-title v-bind:title="title"></todo-title>
    <todo-box></todo-box>
  </div>
</template>

<script>
  import TodoTitle from './todo-title/todo-title.vue';
  import TodoBox from './todo-box/todo-box.vue';
  export default {
    data() {
      return {
        title: 'Todo List'
      }
    },
    components: {
      TodoTitle,
      TodoBox
    }
  }
</script>