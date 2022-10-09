import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    todos: [],
  }),

  getters: {
    getIdForTodo: state => {
      if (state.todos.length) {
        return state.todos[0].id + 1;
      } else {
        return 1;
      }
    },
  },

  mutations: {
    addTodo(state, todo) {
      const newTodo = {
        id: this.getters.getIdForTodo,
        todo: todo,
        completed: false,
      };

      state.todos = [newTodo, ...state.todos];
    },
  },

  actions: {},
});
