<template>
  <div>
    <el-button @click="dialogVisible = true">Add +</el-button>
    <common-table></common-table>
    <el-dialog title="Add" :visible.sync="dialogVisible">
      <common-form
        :formLabel="formLabel"
        :formContent="formContent"
      ></common-form>
    </el-dialog>
  </div>
</template>

<script>
import CommonTable from "@/components/CommonTable.vue";
import CommonForm from "@/components/CommonForm.vue";
export default {
  data() {
    return {
      dialogVisible: false,
      formLabel: [
        {
          model: "name",
          label: "name",
          type: "input",
        },
        {
          model: "name",
          label: "name",
          type: "input",
        },
      ],
      formContent: {}
    };
  },
  components: {
    CommonTable,
    CommonForm,
  },
};
</script>
