import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    viewMode: JSON.parse(localStorage.getItem('viewMode')) || 'all',
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  }),

  getters: {
    getIdForTodo: state => {
      if (state.todos.length) {
        return state.todos[0].id + 1;
      } else {
        return 1;
      }
    },
    getTodos: state => {
      if (state.viewMode === 'all') {
        return state.todos;
      } else if (state.viewMode === 'active') {
        return state.todos.filter(todo => {
          return todo.completed === false;
        });
      } else {
        return state.todos.filter(todo => {
          return todo.completed === true;
        });
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
    todoStatusHandler(state, index) {
      state.todos[index].completed = !state.todos[index].completed;
    },
    editTodo(state, [todo, index]) {
      state.todos[index].todo = todo;
    },
    clearCompletedTask(state) {
      state.todos = state.todos.filter(todo => {
        return todo.completed === false;
      });
    },
    setViewMode(state, mode) {
      state.viewMode = mode;
    },
  },

  actions: {},
});
