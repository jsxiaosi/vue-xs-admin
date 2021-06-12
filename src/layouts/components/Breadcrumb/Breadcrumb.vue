<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span
        v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
        class="no-redirect"
        >{{ item.meta.title }}</span>
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
// import { compile } from "path-to-regexp";
import { reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const levelList = ref(null);
const router = useRouter();
// 当前路由
const route = useRoute();

// 解析路由匹配的数组
const getBreadcrumb = () => {
  // 过滤留下只有meta和title
  let matched = route.matched.filter((item) => item.meta && item.meta.title);

  // 拼出最终需要展示的跳转数据
  levelList.value = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
};
// 手动解析path中可能存在的参数
const pathCompile = (path) => {
  // var toPath = compile(path);
  var toPath = path;
  return toPath(route.params);
};
// 跳转连接处理
const handleLink = (item) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }
  router.push(pathCompile(path));
};

// 首次调用
getBreadcrumb();
// 监控route的变化，避免组件复用信息同步问题
watch(route, getBreadcrumb);
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  // display: inline-block;
  // font-size: 14px;
  line-height: #{$BreadcrumbHeight};
  // margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>