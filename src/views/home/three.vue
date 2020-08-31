<template>
  <div>
    <!-- 把需要生成截图的元素放在一个元素容器里,设置一个ref -->
    <div ref="imageTofile">
      <!-- 这里放需要截图的元素,自定义组件元素也可以 -->
      <div>我是截取的内容</div>
      <div>我是截取的内容</div>
      <div>我是截取的内容</div>
      <div>我是截取的内容</div>
      <div>我是截取的内容</div>
    </div>
    <!-- 如果需要展示截取的图片,给一个img标签 -->
    <img :src="htmlUrl" v-show="isShow" />
    <button @click="toImage">截取图片</button>
    <button @click="impoortExcel">导入excel文件</button>
    <!-- 导入人员档案 -->
    <!--  action 放的是导入文件的后台地址 -->
    <el-dialog title="导入人员档案" :visible.sync="importDialogVisible" width="66%">
      <el-upload
        ref="upload"
        name="file"
        :limit="limit"
        :auto-upload="false"
        action="接口地址"
        :on-exceed="handleExceed"
        :file-list="filelist"
        :on-change="handleChansge"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="postfile"
          :disabled="btn.disable"
        >{{btn.message}}</el-button>
        <div slot="tip" class="el-upload__tip">上传文件只能为excel文件，且为xlsx,xls格式</div>
      </el-upload>
      <div v-for="o in errmesg" :key="o.message" class="text item">{{ o.message }}</div>
    </el-dialog>
  </div>
</template>
<style scoped>
</style>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      htmlUrl: "",
      isShow: false,
      importDialogVisible: false,
      //文件
      file: "",
      filename: "",
      limit: 1,
      filelist: [],
      errmesg: [],
      btn: {
        disable: false,
        message: "上传服务器",
      },
    };
  },
  methods: {
    // 页面元素转图片
    toImage() {
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      html2canvas(this.$refs.imageTofile, {
        backgroundColor: null,
      }).then((canvas) => {
        let url = canvas.toDataURL("image/png");
        this.htmlUrl = url; // 把生成的base64位图片上传到服务器,生成在线图片地址
        if (this.htmlUrl) {
          // 渲染完成之后让图片显示，用v-show可以避免一些bug
          this.isShow = true;
        }
        // this.sendUrl();
      });
    }, // 图片上传服务器
    sendUrl() {
      // 如果图片需要formData格式,就自己组装一下,主要看后台需要什么参数
      // const formData = new FormData()
      // formData.append('base64', this.company.fileUrl)
      // formData.append('userId', 123)
      // formData.append('pathName', 'pdf')
      //   ==================
      //   this.$ajax({
      //     url: apiPath.common.uploadBase,
      //     method: "post",
      //     data: this.htmlUrl,
      //   }).then((res) => {
      //     if (res.code && res.data) {
      //     }
      //   });
    },
    impoortExcel() {
      let that = this;
      that.importDialogVisible = true;
    },
    handleExceed(e) {
      // 判断是否只能上传一个文件，超过提示报错
      console.log(e);
      this.$notify.error({
        title: "错误",
        message: "只能上传一个文件哦",
      });
    },
    handleChansge(file, fileList) {
      console.log(file);
      let name = file.name;
      if (!/\.(xlsx|xls|XLSX|XLS)$/.test(file.name)) {
        this.$notify.error({
          title: "错误",
          message: "上传文件只能为excel文件，且为xlsx,xls格式",
        });
        this.filelist = [];
        this.file = "";
        return false;
      }
      this.file = file.raw;
      this.filename = file.name;
    },
    postfile() {
      let that = this;
      if (this.file == "") {
        that.$notify.error({
          title: "错误",
          message: "上传文件不能为空",
        });
        return false;
      } else {
        // 文件形式的需要用 formData形式
        let formData = new FormData();
        formData.append("file", this.file);
        let url = "接口地址";
        let config = {
          headers: { "Content-Type": "multipart/form-data" },
        };
        this.btn.disable = true;
        this.btn.message = "上传中，请等待";
        this.$axios1
          .post(url, formData, config)
          .then(function (response) {
            console.log(response);
            that.$notify({
              title: "成功",
              message: response.data.message,
              type: "success",
            });
            that.filelist = [];
            that.btn.disable = false;
            that.btn.message = "上传服务器";
          })
          .catch((err) => {
            that.btn.disable = false;
            that.btn.message = "上传服务器";
            that.$notify.error({
              title: "错误",
              message: "上传过程出错啦",
            });
          });
      }
    },
  },
};
</script>