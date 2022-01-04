<template>
  <div class="page-container">
    <div ref="chartRef" class="line"> </div>
  </div>
</template>

<script setup lang="ts">
  // 直接导入组件
  // import HelloWorld from '@/components/HelloWorld.vue';
  // import { useContext } from 'vue'
  // console.log(useContext())
  import { ref, Ref, onMounted } from 'vue';

  import { useECharts } from '@/hooks/web/useECharts';

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

  onMounted(() => {
    setOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {},
        },
      ],
    });
  });
  // console.log(chartRef);
</script>

<style lang="scss" scoped>
  .line {
    width: 100%;
    height: 100%;
  }
</style>
