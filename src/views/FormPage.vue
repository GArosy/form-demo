<template>
  <div>
    <common-table :tableData="formData" :tableLabel="tableLabel"
    @edit="handelEdit"
    @delete="handelDelete"
    ></common-table>
    <el-dialog title="Add" :visible.sync="dialogVisible" width="60vw">
      <common-form
        :formLabel="formLabel"
        :formContent="formContent"
        :formRules="formRules"
      ></common-form>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button @click="confirm" type="primary">Confirm</el-button>
      </div>
    </el-dialog>
    <div class="add-btn">
      <el-button @click="handleAdd">Add +</el-button>
    </div>
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
          model: "justification",
          label: "Justification",
          type: "textarea",
        },
        {
          model: "isOpen",
          label: "Project still openning",
          type: "checkbox",
        },
        {
          model: "leader",
          label: "Project Leader",
          type: "input",
        },
        {
          model: "member",
          label: "Project Member",
          type: "input",
        },
        {
          model: "member2",
          label: "Project Member 2",
          type: "input",
        },
        {
          model: "member3",
          label: "Project Member 3",
          type: "input",
        },
        {
          model: "member4",
          label: "Project Member 4",
          type: "input",
        },
        {
          model: "member5",
          label: "Project Member 5",
          type: "input",
        },
        {
          model: "attachments",
          label: "Attachments",
          type: "upload",
        },
      ],
      formContent: {
        name: "",
        justification: "",
        isOpen: "No",
        leader: "",
        member1: "",
        member2: "",
        member3: "",
        member4: "",
        member5: "",
      },
      formRules: {
        name: [{ required: true }],
        leader: [{ required: true }],
      },
      tableLabel: [
        {
          prop: "name",
          label: "Name",
        },
        {
          prop: "justification",
          label: "Justification",
        },
        {
          prop: "isOpen",
          label: "Project still openning",
        },
        {
          prop: "leader",
          label: "Project Leader",
        },
        {
          prop: "member",
          label: "Project Member",
        },
        {
          prop: "member2",
          label: "Project Member 2",
        },
        {
          prop: "member3",
          label: "Project Member 3",
        },
        {
          prop: "member4",
          label: "Project Member 4",
        },
        {
          prop: "member5",
          label: "Project Member 5",
        }
      ],
    };
  },
  components: {
    CommonTable,
    CommonForm,
  },
  methods: {
    confirm() {
      this.$store.commit("confirmForm", this.formContent);
      this.dialogVisible = false;
    },
    handleAdd() {
      this.formContent = {isOpen: "No"}
      this.dialogVisible = true;
    },
    handelDelete(row) {
      this.$store.commit('deleteItem', row)
    },
    handelEdit(row) {
      console.log(row);
    }
  },
  computed: {
    formData() {
      return this.$store.state.Form.formData;
    },
  },
};
</script>

<style scoped>
.dialog-footer,
.add-btn {
  text-align: end;
  margin-top: 40px;
}
</style>
