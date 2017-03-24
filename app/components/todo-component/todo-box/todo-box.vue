<template>
  <div>
    <todo-form></todo-form>
    <br>
    List
    <br>
    Footer
  </div>
</template>
<script>
  import TodoForm from './todo-form/todo-form.vue';
  export default {
    components: {
      TodoForm
    }
  };
</script>
