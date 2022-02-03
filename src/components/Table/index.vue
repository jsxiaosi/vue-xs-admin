<template>
  <div>
    <el-table :data="list" v-bind="$attrs" style="width: 100%">
      <TableChild v-for="(item, index) in option" :key="index" :item="item">
        <template v-for="soitem in Object.keys($slots)" #[soitem]="data">
          <slot :name="soitem" v-bind="data || {}"></slot>
        </template>
      </TableChild>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
  import { useAttrs } from 'vue';
  import TableChild from './src/components/TableChild.vue';
  console.log(useAttrs());
  const props = defineProps({
    list: {
      type: Object,
      default: () => {},
    },
    option: {
      type: Object,
      default: () => {},
    },
  });
  console.log(props);
</script>
