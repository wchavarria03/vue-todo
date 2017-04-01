<template>
  <div>
    <todo-form v-bind:addTodo="addTodo" v-bind:newTodo="newTodo" v-bind:changeInput="changeInput"></todo-form>
    <todo-list v-bind:todos="todos" v-bind:removeTodo="removeTodo" v-bind:toggleTodo="toggleTodo"></todo-list>
    <todo-footer v-bind:filters="filters" v-bind:todosCount="todosCount" v-bind:filterBy="filterBy"></todo-footer>
  </div>
</template>
<script>
  import TodoForm from './todo-form/todo-form.vue';
  import TodoFooter from './todo-footer/todo-footer.vue';
  import TodoList from './todo-list/todo-list.vue';
  export default {
    props: [
      'filters',
      'todos',
      'todosCount',
      'addTodo',
      'removeTodo',
      'changeInput',
      'newTodo',
      'filterBy',
      'toggleTodo'
    ],
    components: {
      TodoForm,
      TodoFooter,
      TodoList
    }
  };
</script>
