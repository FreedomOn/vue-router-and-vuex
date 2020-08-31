<template>
  <div></div>
</template>
<script>
// import crypto from "../utils/crypto.js";
import crypto from "../utils/crypto1.js";
export default {
  data() {
    return {};
  },
  methods: {
    aes() {
      var a = crypto.encrypt("我进行加密");
      var b = crypto.decrypt(a);
      console.log(a, "加密的密文");
      console.log(b, "解密成功的密文");
    },
  },
  mounted() {
    this.aes();
  },
};
</script>