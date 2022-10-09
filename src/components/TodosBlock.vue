<template>
  <div class="todos">
    <ul v-if="getTodos.length" class="todos__list">
      <todo-item
        v-for="(item, index) in getTodos"
        :todo="item"
        :key="item.id"
        :index="index"
        :isChecked="!item.completed"
      />
    </ul>
    <p v-else class="todos__empty">This todo list is empty</p>
    <todos-block-footer />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import TodoItem from './TodoItem.vue';
import TodosBlockFooter from './TodosBlockFooter.vue';

export default {
  components: {
    TodosBlockFooter,
    TodoItem,
  },

  computed: {
    ...mapState({
      todos: state => state.todos,
    }),
    ...mapGetters({
      getTodos: 'getTodos',
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
