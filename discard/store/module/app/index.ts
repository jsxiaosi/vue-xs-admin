import { Module } from 'vuex';

const actionTypes = {};

const mutationTypes = {
  SET_COLLAPSEMENU: 'SET_COLLAPSEMENU',
  SET_SIDEBARMODE: 'SET_SIDEBARMODE',
};

interface StoreUser {
  collapseMenu: boolean;
  sidebarMode: string;
  layoute: object;
}

const locstorCollapse = localStorage.getItem('appCollapseMenu') || 'false';
const locMenu = JSON.parse(locstorCollapse);

const locstorsSidebarMode = localStorage.getItem('appSidebarMode') || 'vertical';
console.log(locstorsSidebarMode);

const store: Module<StoreUser, unknown> = {
  namespaced: false, // 是否加上所属的模块名
  state() {
    return {
      collapseMenu: locMenu || false,
      sidebarMode: locstorsSidebarMode,
      layoute: {},
    };
  },
  mutations: {
    [mutationTypes.SET_COLLAPSEMENU](state: StoreUser, payload: boolean) {
      state.collapseMenu = payload;
      localStorage.setItem('appCollapseMenu', JSON.stringify(payload));
    },
    [mutationTypes.SET_SIDEBARMODE](state: StoreUser, payload: string) {
      state.sidebarMode = payload;
      localStorage.setItem('appSidebarMode', payload);
    },
  },
  actions: {},
  getters: {
    collapseMenu: (state) => state.collapseMenu,
    sidebarMode: (state) => state.sidebarMode,
  },
};

export { actionTypes, mutationTypes };

export default store;
