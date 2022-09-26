<template>
  <div>
    <el-form
      label-position="left"
      label-width="180px"
      :rules="formRules"
      :model="formContent"
    >
      <el-form-item
        v-for="(item, index) in formLabel"
        :key="index"
        :label="item.label"
        :prop="item.model"
      >
        <el-input
          v-if="item.type === 'input'"
          type="text"
          v-model="formContent[item.model]"
        ></el-input>
        <el-input
          v-if="item.type === 'textarea'"
          :rows="3"
          type="textarea"
          v-model="formContent[item.model]"
        ></el-input>
        <el-checkbox
          v-if="item.type === 'checkbox'"
          v-model="formContent[item.model]"
          true-label="Yes"
          false-label="No"
        ></el-checkbox>
        <el-upload
          v-if="item.type === 'upload'"
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="fileList"
          multiple
        >
          <el-button size="small" type="primary">Click to upload</el-button>
          <div slot="tip" class="el-upload__tip">No more than 500kb</div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CommonForm",
  props: {
    formLabel: Array,
    formContent: Object,
    formRules: Object,
  },
  data() {
    return {
      fileList: [{
        name: 'example.md'
      }]
    };
  },
};
</script>
