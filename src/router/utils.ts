import { usePermissionStoreHook } from '@/store/modules/permission';
import { RouteRecordName, RouteRecordNormalized } from 'vue-router';
import { useTimeoutFn } from '@vueuse/core';

// 处理缓存路由（添加、删除、刷新）
const handleAliveRoute = (matched: RouteRecordNormalized[], mode?: string) => {
  console.log(matched);
  const name: RouteRecordName = matched[matched.length - 1].name as RouteRecordName;
  switch (mode) {
    case 'add':
      matched.forEach((v: RouteRecordNormalized) => {
        usePermissionStoreHook().cacheOperate({ mode: 'add', name: v.name as RouteRecordName });
      });
      break;
    case 'delete':
      usePermissionStoreHook().cacheOperate({
        mode: 'delete',
        name,
      });
      break;
    default:
      usePermissionStoreHook().cacheOperate({
        mode: 'delete',
        name,
      });
      useTimeoutFn(() => {
        matched.forEach((v: RouteRecordNormalized) => {
          usePermissionStoreHook().cacheOperate({ mode: 'add', name: v.name as RouteRecordName });
        });
      }, 100);
  }
};

export { handleAliveRoute };
