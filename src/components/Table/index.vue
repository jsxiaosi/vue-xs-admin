<script lang="ts" setup generic="T extends Recordable">
  import type { TableProps } from 'element-plus';
  import { ElTable } from 'element-plus';
  import type { TableColumnProps, TableSlotType } from './types/table';
  import TableChild from './src/components/TableChild';

  const props = defineProps<TableProps<T> & { option: TableColumnProps<T>[] }>();

  defineSlots<TableSlotType<T>>();
</script>

<template>
  <div>
    <ElTable v-bind="{ ...props, ...$attrs }" :data="data" :border="border" fit show-header>
      <TableChild v-for="(item, index) in option" :key="index" :item="item">
        <template v-for="slotsItem in Object.keys($slots)" #[slotsItem]="data">
          <slot :name="slotsItem" v-bind="data" />
        </template>
      </TableChild>
    </ElTable>
  </div>
</template>
