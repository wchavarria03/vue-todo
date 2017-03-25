<template>
  <div>
    <todo-form v-bind:addTodo="addTodo"></todo-form>
    <todo-list v-bind:todos="todos"></todo-list>
    <todo-footer v-bind:filters="filters" v-bind:todosCount="todosCount"></todo-footer>
  </div>
</template>
<script>
  import TodoForm from './todo-form/todo-form.vue';
  import TodoFooter from './todo-footer/todo-footer.vue';
  import TodoList from './todo-list/todo-list.vue';
  export default {
    props: ['filters', 'todos', 'todosCount', 'addTodo'],
    components: {
      TodoForm,
      TodoFooter,
      TodoList
    }
  };
</script>
