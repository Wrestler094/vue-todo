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
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
  },

  data() {
    return {
      todoCompleted: this.todo.completed,
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
    changeTodoStatus() {
      this.$store.commit('todoStatusHandler', this.index);
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
</style>
