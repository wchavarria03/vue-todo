<template>
	<li>
    <!--TODO: Change the hard code string COMPLETED -->
    <input class="toggle" type="checkbox" v-bind:checked="todo.status === 'COMPLETED'" v-on:change="toggleTodo(todo.id)"/>
    <label>{{todo.text}}</label>
    <button class="destroy" v-on:click="removeTodo(todo.id)"></button>
  </li>
</template>

<script>
export default {
  props: ['todo', 'removeTodo', 'toggleTodo']
};
</script>
