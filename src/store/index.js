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
      // API возвращает один и тот же id всем добавляемым элементам
      todo.id = Math.ceil(todo.id * Math.random() * 100);
      state.todos = [todo, ...state.todos];
    },
    todoStatusHandler(state, index) {
      state.todos[index].completed = !state.todos[index].completed;
    },
    editTodo(state, [title, index]) {
      state.todos[index].title = title;
    },
    clearCompletedTask(state) {
      state.todos = state.todos.filter(todo => {
        return todo.completed === false;
      });
    },
    setViewMode(state, mode) {
      state.viewMode = mode;
    },
    setTodos(state, todos) {
      state.todos = [...state.todos, ...todos];
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(item => {
        return item.id !== id;
      });
    },
  },

  actions: {
    async fetchTodos({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(fetchedTodos => {
          commit('setTodos', fetchedTodos);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async postTodo({ commit, getters }, todo) {
      fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        body: JSON.stringify({
          userId: 1,
          id: getters.getIdForTodo,
          title: todo,
          completed: false,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          commit('addTodo', json);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async deleteTodo({ commit }, id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(json => {
          commit('removeTodo', id);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async patchTodo({ commit }, [title, index, id]) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: title,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          commit('editTodo', [json.title, index]);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
});
