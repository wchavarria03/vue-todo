<template>
  <div className="header">
    <input
        class="new-todo"
        placeholder="What needs to be done?"
        v-on:keyup.13="addTodo()"
        
      />
    </div>
</template>
<scripts>
export default {
    data () {
      return {
        newTodo: ''
      };
    },
    props: ['addTodo']
  };
</scripts>
