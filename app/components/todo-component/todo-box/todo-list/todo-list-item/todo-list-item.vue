<template>
	<li>
    <input class="toggle" type="checkbox"/>
    <label>{{todo.text}}</label>
    <button class="destroy"></button>
  </li>
</template>

<script>
export default {
  props: ['todo']
};
</script>
