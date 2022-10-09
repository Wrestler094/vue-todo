<template>
  <div class="app-container">
    <header-block></header-block>
    <add-todo-block></add-todo-block>
    <!--    <todos-block></todos-block>-->
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue';
import AddTodoBlock from './components/AddTodoBlock.vue';
// import TodosBlock from './components/TodosBlock.vue';

export default {
  components: {
    HeaderBlock,
    AddTodoBlock,
    // TodosBlock,
  },
};
</script>

<style>
.app-container {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px;
}
</style>
