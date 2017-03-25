<template> 
  <div class="todoapp">
    <todo-title v-bind:title="title"></todo-title>
    <todo-box 
      v-bind:filters="filters" 
      v-bind:todos="todos" 
      v-bind:todosCount="todosCount"
      v-bind:addTodo="addTodo">
    </todo-box>
  </div>
</template>

<script>
  import TodoTitle from './todo-title/todo-title.vue';
  import TodoBox from './todo-box/todo-box.vue';
  export default {
    data () {
      return {
        title: 'Todo List',
        filters: [
          {
            text: 'All',
            filterCriteria: 'ALL'
          },
          {
            text: 'Active',
            filterCriteria: 'ACTIVE'
          },
          {
            text: 'Completed',
            filterCriteria: 'COMPLETED'
          }
        ],
        todos: [
          { id: 1, text: 'Todo 1' },
          { id: 2, text: 'Todo 2' },
          { id: 3, text: 'Todo 3' }
        ]
      };
    },
    computed: {
      todosCount: function () {
        return this.todos.length;
      }
    },
    methods: {
      addTodo: function (newTodo) {
        this.todos.push(newTodo);
      }
    },
    components: {
      TodoTitle,
      TodoBox
    }
  };
</script>
