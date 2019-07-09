<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Welcome to Asp.Net Core Vuejs - Element UI</div>
    <el-button type="primary" @click.prevent.stop="notify">Notify</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  methods: {
    notify() {
      this.$notify.success({
        title: "Success",
        message: "This is a success message",
        offset: 100
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
