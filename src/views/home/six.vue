<template>
  <div>
    <div class="qrcode" ref="qrCodeUrl"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      obj: {
        name: "你好",
        age: 18,
        info: "二维码",
      },
    };
  },
  methods: {
    creatQrCode() {
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: this.obj.name + this.obj.age + this.obj.info,
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
  },
  mounted() {
    this.creatQrCode();
  },
};
</script>