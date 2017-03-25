<template>
	<ul class="todo-list">
	  <todo-list-item v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo"> </todo-list-item>
	</ul>
</template>

<script>
import TodoListItem from './todo-list-item/todo-list-item.vue';
export default {
  props: ['todos'],
  components: {
    TodoListItem
  }
};
</script>
