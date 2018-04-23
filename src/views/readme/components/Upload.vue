<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>图片上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content-title">支持拖拽</div>
    <div class="plugins-tips">
      Element UI自带上传组件。 访问地址：
      <a href="http://element.eleme.io/#/zh-CN/component/upload" target="_blank">Element UI Upload</a>
    </div>
    <el-upload class="upload-demo" drag action="/api/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div class="content-title">支持裁剪</div>
    <div class="plugins-tips">
      Vue-Core-Image-Upload：一款轻量级的vue上传插件，支持裁剪。 访问地址：
      <a href="https://github.com/Vanthink-UED/vue-core-image-upload" target="_blank">Vue-Core-Image-Upload</a>
    </div>
    <img class="pre-img" :src="src" alt="">
    <vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop']" :crop="true" text="上传图片" url="/api/posts/" extensions="png,gif,jpeg,jpg" @:imageuploaded="imageuploaded" @:errorhandle="handleError"></vue-core-image-upload>
  </div>
</template>

<script>
  import VueCoreImageUpload from 'vue-core-image-upload'
  export default {
    data: function() {
      return {
        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        fileList: []
      }
    },
    components: {
      VueCoreImageUpload
    },
    methods: {
      imageuploaded(res) {
        console.log(res)
        if (res.errcode === 0) {
          this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png'
        }
      },
      handleError() {
        this.$notify.error({
          title: '上传失败',
          message: '图片上传接口上传失败，可更改为自己的服务器接口'
        })
      }
    }
  }
</script>

<style scoped>
  .content-title {
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
  }

  .pre-img {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }
</style>
