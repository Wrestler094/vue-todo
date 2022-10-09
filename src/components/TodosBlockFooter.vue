<template>
  <div style="display: flex; justify-content: space-between; padding: 10px">
    <span>{{ $store.state.todos.length }} items left</span>
    <ul style="display: flex; list-style-type: none">
      <li>All</li>
      <li>Active</li>
      <li>Completed</li>
    </ul>
    <span>Clear completed</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
