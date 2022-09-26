<template>
  <div>
    <el-table :data="tableData">
      <el-table-column
        v-for="(item, index) in tableLabel"
        :key="index"
        :label="item.label"
      >
        <template v-slot:default="slotProps">
          <span>{{ slotProps.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Operate" width="150">
        <template v-slot:default="operate">
          <el-button size="mini" @click="handleEdit(operate.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(operate.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    tableLabel: Array,
  },
  data() {
    return {};
  },
  methods: {
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("delete", row);
    },
  }
};
</script>
