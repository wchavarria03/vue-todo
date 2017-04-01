<template>
	<a class="selected" v-on:click="filterBy(filterCriteria)">{{text}}</a>
</template>

<script>
export default {
  props: ['text', 'filterCriteria', 'filterBy']
};
</script>
