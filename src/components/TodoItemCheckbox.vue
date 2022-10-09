<template>
  <label class="checkbox checkbox-label">
    <input type="checkbox" class="visually-hidden checkbox__input" />
    <span @click="changeTodoStatus" class="checkbox__checkmark"></span>
  </label>
</template>

<script>
export default {
  props: {
    index: Number,
  },
  methods: {
    changeTodoStatus() {
      this.$store.commit('todoStatusHandler', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
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
