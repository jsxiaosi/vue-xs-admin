import type { MultiTabsType } from '@/store/types';
import type { CSSProperties, Ref } from 'vue';
import { computed, reactive, ref, watch } from 'vue';
import { useTabsChange } from './useTabsChange';

interface RightClickTags {
  text: string;
  disabled: boolean;
  code: string;
}

export const useTabsView = (multiTabs: Ref<MultiTabsType[]>) => {
  const { onFresh, removeTab, closeTabsRoute } = useTabsChange(multiTabs);
  const rightClickTags = reactive<RightClickTags[]>([
    {
      text: '刷新',
      disabled: false,
      code: 'refresh',
    },
    {
      text: '关闭',
      disabled: false,
      code: 'close',
    },
    {
      text: '关闭其他标签',
      disabled: false,
      code: 'closeOther',
    },
    {
      text: '关闭左侧其他标签',
      disabled: false,
      code: 'closeLeftOther',
    },
    {
      text: '关闭右侧其他标签',
      disabled: false,
      code: 'closeRightOther',
    },
  ]);

  const visible = ref(false);

  const rightViewTop = ref<number>(0);
  const rightViewLeft = ref<number>(0);

  const activityItem = ref<MultiTabsType | null>(null);

  const disabledMenu = (signList: number[], show: boolean) => {
    signList.forEach((v) => {
      rightClickTags[v].disabled = show;
    });
  };

  const showMenu = (item: string) => {
    disabledMenu([0, 1, 2, 3, 4], false);
    const multFindIndex = multiTabs.value.findIndex((i) => i.path === item);
    const multlength = multiTabs.value.length;
    if (multFindIndex === 0 && multlength > 1) {
      disabledMenu([3], true);
    } else if (multFindIndex === multlength - 1 && multlength > 1) {
      disabledMenu([4], true);
    } else if (multlength === 1) {
      disabledMenu([1, 2, 3, 4], true);
    }
  };

  const contextmenu = (path: string, e?: MouseEvent) => {
    const item = multiTabs.value.find((i) => i.path === path);
    if (!item) return;
    closeMenu();
    showMenu(item.path);
    activityItem.value = item;
    if (e) {
      setTimeout(() => {
        rightViewLeft.value = e.clientX;
        rightViewTop.value = e.clientY;
        visible.value = true;
      }, 100);
    }
  };

  const rightViewStyle = computed((): CSSProperties => {
    return { left: rightViewLeft.value + 'px', top: rightViewTop.value + 'px' };
  });

  const closeMenu = () => {
    visible.value = false;
  };

  watch(
    () => visible.value,
    (val) => {
      if (val) {
        document.body.addEventListener('click', closeMenu);
      } else {
        document.body.removeEventListener('click', closeMenu);
      }
    },
  );

  const rightViewChange = (item: RightClickTags) => {
    if (!activityItem.value) return;
    switch (item.code) {
      case 'refresh': {
        onFresh(activityItem.value);
        break;
      }
      case 'close': {
        removeTab(activityItem.value.path);
        break;
      }
      case 'closeOther': {
        closeTabsRoute(activityItem.value.path, 'other');
        break;
      }
      case 'closeLeftOther': {
        closeTabsRoute(activityItem.value.path, 'left');
        break;
      }
      case 'closeRightOther': {
        closeTabsRoute(activityItem.value.path, 'right');
        break;
      }
      default:
        break;
    }
    showMenu(activityItem.value.path);
  };

  return { visible, rightClickTags, rightViewStyle, contextmenu, rightViewChange };
};
