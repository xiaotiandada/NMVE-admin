<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i> 简介</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ms-doc">
      <h3>README.md</h3>
      <article>
        <h1>style-admin</h1>
        <p>基于Vue.js + Element UI + Node.js + MySQL的登录管理系统</p>
        <h2>前言</h2>
        <p>用了Vue + Element组件库做了个登录管理系统，包括注册，登录，个人中心3个功能模块。</p>
        <p>该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。</p>
        <h2>功能</h2>
        <el-checkbox disabled checked>Element UI</el-checkbox>
        <br>
        <el-checkbox disabled checked>登录/注销</el-checkbox>
        <br>
        <el-checkbox disabled>图片拖拽/裁剪上传</el-checkbox>
        <br>
        <el-checkbox disabled>修改密码</el-checkbox>
        <br>
        <el-checkbox disabled>修改用户信息</el-checkbox>
        <br>
        <el-checkbox disabled>切换主题</el-checkbox>
      </article>
    </div>

  </div>
</template>

<script>
  export default {
    data: function() {
      return {}
    }
  }
</script>

<style scoped>
  .ms-doc {
    width: 100%;
    max-width: 980px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }

  .ms-doc h3 {
    padding: 9px 10px 10px;
    margin: 0;
    font-size: 14px;
    line-height: 17px;
    background-color: #f5f5f5;
    border: 1px solid #d8d8d8;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
  }

  .ms-doc article {
    padding: 45px;
    word-wrap: break-word;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .ms-doc article h1 {
    font-size: 32px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
  }

  .ms-doc article h2 {
    margin: 24px 0 16px;
    font-weight: 600;
    line-height: 1.25;
    padding-bottom: 7px;
    font-size: 24px;
    border-bottom: 1px solid #eee;
  }

  .ms-doc article p {
    margin-bottom: 15px;
    line-height: 1.5;
  }

  .ms-doc article .el-checkbox {
    margin-bottom: 5px;
  }
</style>
