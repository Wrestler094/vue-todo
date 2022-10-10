<template>
  <li class="todo-item">
    <label class="checkbox checkbox-label">
      <input type="checkbox" class="visually-hidden checkbox__input" :checked="todoCompleted" />
      <span @click="changeTodoStatus" class="checkbox__checkmark"></span>
    </label>
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
    <button class="todo-item__delete-button" @click.prevent="deleteTodo(todo.id)">X</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    todo: Object,
    index: Number,
  },

  data() {
    return {
      todoCompleted: this.todo.completed,
      todoContent: this.todo.title,
      editMode: false,
    };
  },

  methods: {
    ...mapActions({
      deleteTodo: 'deleteTodo',
      patchTodo: 'patchTodo',
    }),
    editTodo() {
      this.editMode = false;
      this.patchTodo([this.todoContent, this.index, this.todo.id]);
    },
    launchEditMode() {
      this.editMode = true;
      this.focus;
    },
    changeTodoStatus() {
      this.$store.commit('todoStatusHandler', this.index);
    },
    inputBlurHandler() {
      setTimeout(() => {
        if (this.todo.title !== this.todoContent) {
          this.todoContent = this.todo.title;
        }
        this.editMode = false;
      }, 500);
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
  margin-right: 10px;
  font-size: 16px;
  background: inherit;
  border: none;
  outline: groove;
  border-radius: 2px;
}

/* CHECKBOX */

.checkbox-label {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox__input:checked ~ .checkbox__checkmark {
  background-color: #a0a0be;
}

.checkbox__input:checked ~ .checkbox__checkmark:after {
  opacity: 1;
}

.checkbox-label:hover input ~ .checkbox__checkmark {
  opacity: 0.8;
}

.checkbox-label:hover input:checked ~ .checkbox__checkmark {
  background-color: #a0a0be;
}

.checkbox__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: inherit;
  border: 1px solid #515372;
  border-radius: 50%;
  transition: background-color 0.25s ease;
}

.checkbox__checkmark:after {
  content: '';
  position: absolute;
  left: 10.5px;
  top: 5px;
  width: 7.5px;
  height: 15px;
  border: solid #333;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.todo-item__delete-button {
  display: none;
  margin-left: auto;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
}

.todo-item:hover .todo-item__delete-button {
  display: block;
}
</style>
