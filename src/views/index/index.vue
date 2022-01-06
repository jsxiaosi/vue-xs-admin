<template>
  <div class="page-container">
    <el-row :gutter="30" class="enter-y">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>描述列表</span>
            </div>
          </template>
          <WeDetails></WeDetails>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>滚动信息</span>
            </div>
          </template>
          <div class="infinite">
            <ul class="top">
              <li>更新日期</li>
              <li>项目名称</li>
              <li>下载数量</li>
            </ul>
            <SeamlessScroll ref="scroll" :data="listData" :class-option="classOption" class="warp">
              <ul class="item">
                <li v-for="(item, index) in listData" :key="index">
                  <span v-text="item.date"></span>
                  <span v-text="item.name"></span>
                  <span v-text="item.star"></span>
                </li>
              </ul>
            </SeamlessScroll>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="30" class="enter-y">
      <el-col>
        <el-card class="box-card">
          <VisitAnalysis />
        </el-card>
      </el-col>
    </el-row>

    <!-- <div ref="chartRef" class="line"> </div> -->
  </div>
</template>

<script setup lang="ts">
  import SeamlessScroll from '@/components/SeamlessScroll/index.vue';
  import WeDetails from './components/WeDetails.vue';
  import VisitAnalysis from './components/Analysis.vue';
  import { ref, Ref, onMounted, reactive } from 'vue';

  import { useECharts } from '@/hooks/web/useECharts';

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

  let classOption = reactive({
    direction: 'top',
  });

  let listData = ref([
    {
      date: '2022-01-01',
      name: 'vite+vue3 Template',
      star: '1000',
    },
    {
      date: '2022-01-02',
      name: 'vite+vue3 Template',
      star: '1100',
    },
    {
      date: '2022-01-03',
      name: 'vite+vue3 Template',
      star: '1200',
    },
    {
      date: '2022-01-04',
      name: 'vite+vue3 Template',
      star: '1300',
    },
    {
      date: '2022-01-05',
      name: 'vite+vue3 Template',
      star: '1400',
    },
    {
      date: '2022-01-06',
      name: 'vite+vue3 Template',
      star: '1500',
    },
    {
      date: '2022-01-07',
      name: 'vite+vue3 Template',
      star: '1600',
    },
    {
      date: '2022-01-08',
      name: 'vite+vue3 Template',
      star: '1700',
    },
    {
      date: '2022-01-09',
      name: 'vite+vue3 Template',
      star: '1800',
    },
    {
      date: '2022-01-10',
      name: 'vite+vue3 Template',
      star: '1900',
    },
  ]);

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
  .page-container {
    .el-col {
      margin-bottom: 30px;
    }
    .box-card {
      // width: 480px;
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .infinite {
        .top {
          width: 95%;
          height: 40px;
          line-height: 40px;
          display: flex;
          margin: 0 auto;
          font-size: 14px;
          color: #909399;
          font-weight: 400;
          background: #fafafa;

          li {
            width: 34%;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .warp {
          width: 95%;
          height: 215px;
          margin: 0 auto;
          overflow: hidden;

          ul {
            margin: 0;
            li {
              height: 30px;
              line-height: 30px;
              display: flex;
              font-size: 15px;
            }
          }

          span {
            width: 34%;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }

      .text {
        font-size: 14px;
      }

      .item {
        margin-bottom: 18px;
      }
    }

    .line {
      width: 100%;
      height: 100%;
    }
  }
</style>
