<template>
  <div>
    <div ref="imageTofile">
      页面上传222222222222222222
      <add></add>
      <subqq />
    </div>

    <!-- 如果需要展示截取的图片,给一个img标签 -->
    <img :src="htmlUrl" v-show="isShow" />
    <button @click="toImage">截取</button>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import add from "../../views/vuex/add";
import subqq from "../../views/vuex/subtra";
export default {
  data() {
    return {
      htmlUrl: "",
      isShow: false,
    };
  },
  components: {
    add,
    subqq,
  },
  methods: {
    toImage() {
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      html2canvas(this.$refs.imageTofile, {
        backgroundColor: null,
      }).then((canvas) => {
        let url = canvas.toDataURL("image/png");
        this.htmlUrl = url; // 把生成的base64位图片上传到服务器,生成在线图片地址
        if (this.htmlUrl) {
          // 渲染完成之后让图片显示
          this.isShow = true;
        }
        // this.sendUrl();
      });
    },
  },
};
</script>