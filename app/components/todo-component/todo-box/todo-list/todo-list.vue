<template>
	<ul class="todo-list">
	  <todo-list-item v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo" v-bind:removeTodo="removeTodo" v-bind:toggleTodo="toggleTodo"> </todo-list-item>
	</ul>
</template>

<script>
import TodoListItem from './todo-list-item/todo-list-item.vue';
export default {
  props: ['todos', 'removeTodo', 'toggleTodo'],
  components: {
    TodoListItem
  }
};
</script>
