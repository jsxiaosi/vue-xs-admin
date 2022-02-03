<template>
  <div class="page-container">
    <Table border :list="tabList" :option="option">
      <template #name_header="slotData">
        <span>{{ `插槽：${slotData.customItem.label}` }}</span>
      </template>
      <template #name="slotData">
        <span>{{ slotData.row.name }}</span>
      </template>
    </Table>
  </div>
</template>
<script lang="ts" setup>
  import Table from '@/components/Table/index.vue';
  import { h } from 'vue';

  const option = [
    {
      label: 'Date',
      prop: 'date',
    },
    {
      label: 'Name',
      prop: 'name',
      isSlots: true,
    },
    {
      label: 'Address',
      prop: 'address',
      render_header: (slotData: any) => {
        return h('span', {}, `render_header：${slotData.customItem.label}`);
      },
      render: (slotData: any) => {
        return h('span', {}, `render：${slotData.row.address}`);
      },
    },
  ];

  console.log(option);
  const tabList = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ];
</script>
<style lang="scss" scoped></style>
