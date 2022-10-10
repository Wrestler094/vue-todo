<template>
  <div class="todo-field">
    <button @click.prevent="addTodo" class="todo-field__button" style="">+</button>
    <input v-model="todoInput" @keyup.enter="addTodo" class="todo-field__input" placeholder="Create a new todo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoInput: '',
    };
  },

  methods: {
    addTodo() {
      if (this.todoInput) {
        this.$store.dispatch('postTodo', this.todoInput);
        this.todoInput = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-field {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  background: #373958;
  border-radius: 5px;
}

.todo-field__button {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  font-weight: bold;
  color: #8686a4;
  background: inherit;
  border: 1px solid #515372;
  border-radius: 50%;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
}

.todo-field__input {
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #8686a4;
  border: none;
  background: inherit;
  outline: none;
}
</style>
