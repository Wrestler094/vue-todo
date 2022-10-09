<template>
  <li class="todo-item">
    <todo-item-checkbox :index="this.index" />
    <span class="todo-item__body" v-if="!editMode" @dblclick="launchEditMode">
      {{ todoContent }}
    </span>
    <input
      class="todo-item__input"
      type="text"
      v-else
      v-model="todoContent"
      :placeholder="todoContent"
      @keyup.enter="editTodo"
      @blur="inputBlurHandler"
      autofocus
    />
  </li>
</template>

<script>
import TodoItemCheckbox from './TodoItemCheckbox.vue';

export default {
  components: {
    TodoItemCheckbox,
  },

  props: {
    todo: Object,
    index: Number,
  },

  data() {
    return {
      todoContent: this.todo.todo,
      editMode: false,
    };
  },

  methods: {
    editTodo() {
      this.editMode = false;
      this.$store.commit('editTodo', [this.todoContent, this.index]);
    },
    launchEditMode() {
      this.editMode = true;
      this.focus;
    },
    inputBlurHandler() {
      if (this.todo.todo !== this.todoContent) {
        this.todoContent = this.todo.todo;
      }
      this.editMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  width: 100%;
  min-height: 51px;
  padding: 10px;
  border-bottom: 1px solid #444665;
}

.todo-item__body,
.todo-item__input {
  margin-left: 40px;
  color: #a0a0be;
  line-height: 1.8;
  font-weight: bold;
}

.todo-item__input {
  min-width: 80%;
  min-height: 30px;
  width: 100%;
  font-size: 16px;
  background: inherit;
  border: none;
  outline: groove;
  border-radius: 2px;
}
</style>
