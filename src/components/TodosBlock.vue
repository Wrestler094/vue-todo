<template>
  <div class="todos">
    <ul v-if="todos.length" class="todos__list">
      <todo-item v-for="(item, index) in todos" :todo="item" :key="item.id" :index="index" />
    </ul>
    <p v-else class="todos__empty">Your todo list is empty</p>
    <!--    <todos-block-footer />-->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoItem from './TodoItem.vue';
// import TodosBlockFooter from './TodosBlockFooter.vue';

export default {
  components: {
    // TodosBlockFooter,
    TodoItem,
  },

  data: function () {
    return {};
  },

  methods: {},

  computed: {
    ...mapState({
      todos: state => state.todos,
    }),
  },
};
</script>

<style lang="scss" scoped>
.todos {
  background: #373958;
  border-radius: 5px;
}

.todos__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.todos__empty {
  padding: 12px;
  font-weight: bold;
  color: #a0a0be;
  border-bottom: 1px solid #444665;
}
</style>
