import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  ToolboxComponent,
  LegendComponent,
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  GridComponent,
  LineChart,
  TooltipComponent,
  TitleComponent,
  ToolboxComponent,
  LegendComponent,
  CanvasRenderer,
  UniversalTransition,
]);

export default echarts;