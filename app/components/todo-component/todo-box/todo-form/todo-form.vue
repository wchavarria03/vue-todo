<template>
  <div className="header">
    <input
        class="new-todo"
        placeholder="What needs to be done?"
        v-on:keyup.13="addTodo(newTodoDisplay)"
        v-on:change="changeInput"
        v-model="newTodoDisplay"
      />
    </div>
</template>
<script>
export default {
  computed: {
    newTodoDisplay: function () {
      return '' + this.newTodo;
    }
  },
  props: ['addTodo', 'newTodo', 'changeInput']
};
</script>
