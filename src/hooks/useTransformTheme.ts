import { useAppStoreHook } from '@/store/modules/app';

export const useTransformTheme = () => {
  const appStore = useAppStoreHook();

  const body = document.documentElement as HTMLElement;

  console.log(body.className);

  // hex转rgb
  function hexToRgb(str: string) {
    const hxs: string[] = str.replace('#', '').match(/../g) || [];
    const newHxs: number[] = [];
    for (let i = 0; i < 3; i++) newHxs[i] = parseInt(hxs[i], 16);
    return newHxs;
  }

  // rgb转hex
  function rgbToHex(a: number, b: number, c: number) {
    const hexs = [a.toString(16), b.toString(16), c.toString(16)];
    for (let i = 0; i < 3; i++) {
      if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
    }
    return `#${hexs.join('')}`;
  }

  // 参考element style 计算
  function mix(color1: string, color2: string, weight: number) {
    weight = Math.max(Math.min(Number(weight), 1), 0);
    const mainColor = hexToRgb(color1);
    const mixColor = hexToRgb(color2);
    const hex = [];
    for (let i = 0; i < mainColor.length; i++)
      hex[i] = Math.round(mainColor[i] * (1 - weight) + mixColor[i] * weight);
    return rgbToHex(hex[0], hex[1], hex[2]);
  }

  function updateColor() {
    const { primaryColor, themeMode } = appStore.appConfigMode;
    if (!primaryColor) return;
    const mixWhite = themeMode === 'dark' ? '#141414' : '#ffffff';
    body.style.setProperty('--el-color-primary', primaryColor);
    for (let i = 1; i <= 9; i++) {
      body.style.setProperty(`--el-color-primary-light-${i}`, mix(primaryColor, mixWhite, i * 0.1));
    }
  }

  function themeHtmlClassName(className: string, isShow: boolean) {
    if (isShow) {
      body.className = `${body.className} ${className}`;
    } else {
      const exp = new RegExp(` ${className}`, 'g');
      body.className = body.className.replace(exp, '');
    }
  }

  return { updateColor, themeHtmlClassName };
};
