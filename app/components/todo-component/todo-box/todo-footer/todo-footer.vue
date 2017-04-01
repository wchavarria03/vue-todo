<template>
  <div class="footer">
    <span class="todo-count">{{todosCount}} items</span>
      <ul class="filters">
        <li v-for="filter in filters">
          <anchor-filter v-bind:text="filter.text" v-bind:filterCriteria="filter.filterCriteria" v-bind:filterBy="filterBy"> </anchor-filter>
        </li>
      </ul>
    </div>
</template>

<script>
import AnchorFilter from './anchor-filter/anchor-filter.vue';
export default {
  props: ['filters', 'todosCount', 'filterBy'],
  components: {
    AnchorFilter
  }
};
</script>
