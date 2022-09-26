<template>
  <div>
    <el-table :data="formData"></el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    formData() {
      return this.$store.state.Form.formData;
    },
  },
};
</script>
