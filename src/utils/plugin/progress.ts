// https://github.com/rstacruz/nprogress
import NProgress from 'nprogress';
import '@/styles/nprogress.scss';

NProgress.configure({
  easing: 'ease',
  // 递增进度条的速度
  speed: 400,
  // 是否显示加载ico
  showSpinner: true,
  // 自动递增间隔
  trickleSpeed: 300,
  // 初始化时的最小百分比
  minimum: 0.2,
});

export default NProgress;
