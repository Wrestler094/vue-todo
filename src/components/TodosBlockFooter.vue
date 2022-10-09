<template>
  <div class="footer" style="">
    <span class="footer__items-number">{{ todos.length }} items left </span>
    <ul class="footer__menu">
      <li
        class="footer__menu-item"
        :class="{ 'footer__menu-item--active': viewMode === 'all' }"
        @click="setViewMode('all')"
      >
        All
      </li>
      <li
        class="footer__menu-item"
        :class="{ 'footer__menu-item--active': viewMode === 'active' }"
        @click="setViewMode('active')"
      >
        Active
      </li>
      <li
        class="footer__menu-item footer__menu-item--last"
        :class="{ 'footer__menu-item--active': viewMode === 'completed' }"
        @click="setViewMode('completed')"
      >
        Completed
      </li>
    </ul>
    <span class="footer__clear-completed" @click="clearCompletedTask">Clear completed</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    clearCompletedTask() {
      this.$store.commit('clearCompletedTask');
    },
    setViewMode(mode) {
      this.$store.commit('setViewMode', mode);
    },
  },
  computed: {
    ...mapState({
      todos: state => state.todos,
      viewMode: state => state.viewMode,
    }),
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: #626377;
}

.footer__items-number {
  font-weight: 500;
}

.footer__menu {
  display: flex;
  padding: 0;
  list-style-type: none;
}

.footer__menu-item {
  margin-right: 10px;
  font-weight: 500;
}

.footer__menu-item--last {
  margin-right: 0;
}

.footer__menu-item--active {
  color: #3a62cc;
}

.footer__clear-completed {
  font-weight: 500;
}
</style>
