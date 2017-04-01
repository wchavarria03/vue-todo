<template> 
  <div class="todoapp">
    <todo-title v-bind:title="title"></todo-title>
    <todo-box 
      v-bind:filters="filters" 
      v-bind:todos="filteredTodos"
      v-bind:todosCount="todosCount"
      v-bind:addTodo="addTodo"
      v-bind:removeTodo="removeTodo"
      v-bind:changeInput="changeInput"
      v-bind:newTodo="newTodo"
      v-bind:filterBy="filterBy"
      v-bind:toggleTodo="toggleTodo">
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
        newTodo: '',
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
          { id: 1, text: 'Todo 1', status: 'ACTIVE' },
          { id: 2, text: 'Todo 2', status: 'COMPLETED' },
          { id: 3, text: 'Todo 3', status: 'ACTIVE' }
        ],
        filteredTodos: []
      };
    },
    mounted () {
      this.filteredTodos = this.todos;
    },
    computed: {
      todosCount: function () {
        return this.todos.length;
      }
    },
    methods: {
      addTodo: function (newTodo) {
        if (!newTodo) return;
        const newTodoElement = {
          text: newTodo,
          id: new Date().getMilliseconds(),
          status: 'ACTIVE'
        };
        this.todos.push(newTodoElement);
        this.newTodo = '';
      },
      removeTodo: function (id) {
        const remainder = this.todos.filter((todo) => {
          if (todo.id !== id) return todo;
        });
        this.todos = remainder;
        this.filteredTodos = remainder;
      },
      changeInput: function (event) {
        this.newTodo = event.target.value;
      },
      filterBy: function (filterCriteria) {
        let filteredTodos = this.todos;
        if (filterCriteria === 'COMPLETED') {
          filteredTodos = this.todos.filter((todo) => {
            if (todo.status === 'COMPLETED') return todo;
          });
        } else if (filterCriteria === 'ACTIVE') {
          filteredTodos = this.todos.filter((todo) => {
            if (todo.status === 'ACTIVE') return todo;
          });
        } else {
          filteredTodos = this.todos;
        }
        this.filteredTodos = filteredTodos;
      },
      toggleTodo: function (id) {
        const todoToggle = this.todos.find((todo) => {
          return todo.id === id;
        });
        todoToggle.status = todoToggle.status === 'ACTIVE' ? 'COMPLETED' : 'ACTIVE';
        this.filteredTodos = this.todos;
      }
    },
    components: {
      TodoTitle,
      TodoBox
    }
  };
</script>
