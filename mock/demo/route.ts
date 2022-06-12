import { MockMethod, Recordable } from 'vite-plugin-mock';

const power = [
  {
    path: '/welcome',
    name: 'RtHome',
    children: [
      {
        path: '',
        name: 'RtWelcome',
      },
    ],
  },
  {
    path: '/components',
    name: 'RtComponents',
    children: [
      {
        path: 'form',
        name: 'RtForm',
      },
      {
        path: 'table',
        name: 'RtTable',
      },
      {
        path: 'drag',
        name: 'RtDrag',
      },
      {
        path: 'count-to',
        name: 'RtCountTo',
      },
      {
        path: 'seamless-scroll',
        name: 'RtSeamlessScroll',
      },
      {
        path: 'date-time',
        name: 'DateTime',
        children: [
          {
            path: 'date-select',
            name: 'RtDate',
          },
          {
            path: 'calendar',
            name: 'RtCalendar',
          },
        ],
      },
    ],
  },
  {
    path: '/echarts',
    name: 'echarts',

    children: [
      {
        path: 'bar',
        name: 'RtBar',
      },
      {
        path: 'map',
        name: 'RtMap',
      },
    ],
  },
  {
    path: '/editor',
    name: 'RtEcharts',
    children: [
      {
        path: 'rich-text',
        name: 'RtRichText',
      },
      {
        path: 'markdown',
        name: 'RtMarkdown',
      },
      {
        path: 'logic-flow',
        name: 'RtLogicFlow',
      },
    ],
  },
  {
    path: '/useradmin',
    name: 'RtUseradmin',
    children: [
      {
        path: 'refSyntax',
        name: 'RtRefSyntax',
      },
      {
        path: 'userlist',
        name: 'RtUserlist',
      },
    ],
  },
  {
    path: '/nested',
    name: 'RtNested',
    children: [
      {
        path: 'menu1',
        name: 'RtMenu1',
        children: [
          {
            path: 'menu1-1',
            name: 'RtMenu1-1',
          },
          {
            path: 'menu1-2',
            name: 'RtMenu1-2',
            children: [
              {
                path: 'menu1-2-1',
                name: 'RtMenu1-2',
              },
              {
                path: 'menu1-2-2',
                name: 'RtMenu1-2-2',
              },
            ],
          },
          {
            path: 'menu1-3',
            name: 'RtMenu1-3',
          },
        ],
      },
      {
        path: 'menu2',
        name: 'RtMenu2',
      },
    ],
  },
  {
    path: '/guide',
    name: 'RtSystem',
    children: [
      {
        path: '',
        name: 'RtGuide',
      },
    ],
  },
  {
    path: '/external-link',
    name: 'RtExternal',
    children: [
      {
        path: 'https://github.com/SuperCuteXiaoSi/xiaosiAdmin',
        name: 'RtGitLink',
      },
    ],
  },
  {
    path: '/about',
    redirect: '/about',
    name: 'RtAdminInfo',
    children: [
      {
        path: '',
        name: 'RtAbout',
      },
    ],
  },
];

export default [
  {
    url: '/mock_api/getRoute',
    timeout: 0,
    method: 'post',
    response: ({ body }: { body: Recordable }) => {
      const { name } = body;
      if (name == 'admin') {
        return {
          data: power,
          code: 1,
          message: 'ok',
        };
      } else {
        return {
          data: power,
          code: -1,
          message: '账号密码错误',
        };
      }
    },
  },
] as MockMethod[];