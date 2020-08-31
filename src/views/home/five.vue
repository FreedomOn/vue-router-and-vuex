<template>
  <div>
    <vue-qr :logoSrc="imageUrl" :text="getcode" :size="200"></vue-qr>
  </div>
</template>
<script>
import vueQr from "vue-qr";
export default {
  name: "qecode",
  data() {
    return {
        // 此处设置的为logo图片
      imageUrl: require("../../assets/logo.png"),
      text: {
        name: "小白",
        age: "22",
        sex: "男",
      },
      code: "",
    };
  },
  components: {
    vueQr,
  },
  computed: {
    //   通过计算属性的方法 计算出需要的信息-- 计算属性个data声明的变量一样可以在文档中直接饮用
    getcode() {
        // 通过拼接展示 需要的信息
      let code ="姓名:" + this.text.name +",年龄：" + this.text.age + ",性别：" + this.text.sex;
      this.code = code;
      return code;
    },
  },
  mounted() {},
  methods: {},
};
</script>