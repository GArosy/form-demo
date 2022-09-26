<template>
  <div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item
        v-for="(item, index) in formLabel"
        :key="index"
        :label="item.label"
      >
        <el-input
          v-if="item.type === 'input'"
          v-model="form[item.model]"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="Project name">
        <el-input v-model="projectInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="Justification">
        <el-input v-model="projectInfo.justification"></el-input>
      </el-form-item>
      <el-form-item label="Project still openning">
        <el-checkbox v-model="projectInfo.isOpen"></el-checkbox>
      </el-form-item>
      <el-form-item label="Project Leader">
        <el-input v-model="formLabelAlign.leader"></el-input>
      </el-form-item>
      <el-form-item label="Project Member">
        <el-input v-model="formLabelAlign.member1"></el-input>
      </el-form-item>
      <el-form-item label="Project Member 2">
        <el-input v-model="formLabelAlign.member2"></el-input>
      </el-form-item>
      <el-form-item label="Project Member 3">
        <el-input v-model="formLabelAlign.member3"></el-input>
      </el-form-item>
      <el-form-item label="Project Member 4">
        <el-input v-model="formLabelAlign.member4"></el-input>
      </el-form-item>
      <el-form-item label="Project Member 5">
        <el-input v-model="formLabelAlign.member5"></el-input>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CommonForm",
  props: [formLabel, formContent],
  data() {
    return {
      projectInfo: {
        name: "",
        justification: "",
        isOpen: false,
        leader: "",
        member1: "",
        member2: "",
        member3: "",
        member4: "",
        member5: "",
      },
      rules: {
        name: [{ required: true }],
        leader: [{ required: true }],
      },
    };
  },
};
</script>
