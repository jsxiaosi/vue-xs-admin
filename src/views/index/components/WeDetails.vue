<template>
  <div class="wedetails">
    <el-descriptions class="margin-top" direction="vertical" :column="3" size="default" border>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-user"></i>
          用户名
        </template>
        <span>小斯斯</span>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        不告诉你
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        广州
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions class="margin-top" direction="vertical" :column="2" size="default" border>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          标签
        </template>
        <el-tag v-for="item in lists" :key="item.label" :type="item.type" effect="dark">
          {{ item.label }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        不想告诉你
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions class="margin-top" direction="vertical" :column="1" size="default" border>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-notebook-1"></i>
          留言
        </template>
        一个爱喝蜂蜜绿的小斯斯
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'WeDetails',
  };
</script>

<script setup lang="ts">
  import { ref } from 'vue';
  const lists = ref([
    { type: '', label: '吃饭' },
    { type: 'success', label: '睡觉' },
    { type: 'info', label: '打游戏' },
  ]);
</script>

<style lang="scss" scoped>
  .wedetails {
    height: 255px;
    .el-tag--dark {
      margin-right: 10px !important;
    }
  }
</style>
