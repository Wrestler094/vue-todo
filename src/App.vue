<template>
  <div class="app-container">
    <header-block />
    <add-todo-block />
    <todos-block />
    <button @click="fetchTodos" class="fetch-button">Fetch todos</button>
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue';
import AddTodoBlock from './components/AddTodoBlock.vue';
import TodosBlock from './components/TodosBlock.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    HeaderBlock,
    AddTodoBlock,
    TodosBlock,
  },

  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      localStorage.setItem('viewMode', JSON.stringify(state.viewMode));
      localStorage.setItem('todos', JSON.stringify(state.todos));
    });
  },
  beforeUnmount() {
    this.unsubscribe();
  },

  methods: {
    ...mapActions({
      fetchTodos: 'fetchTodos',
    }),
  },

  computed: {},
};
</script>

<style lang="scss">
.app-container {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px;
}

.fetch-button {
  margin-top: 20px;
  padding: 5px 20px;
  cursor: pointer;
}
</style>
