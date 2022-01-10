import { MockMethod, Recordable } from 'vite-plugin-mock';

const userInfo = {
  name: '爱喝蜂蜜绿的小斯斯',
  userid: '00000001',
  email: '1531733886@qq.com',
  signature: '甜甜的蜂蜜，甘甜的绿茶，蜂蜜中和了绿茶的苦涩保留了绿茶回甘，绝妙啊',
  introduction: '微笑着，努力着，欣赏着',
  title: '小斯斯',
  token: '',
};

export default [
  {
    url: '/mock_api/login',
    timeout: 1000,
    method: 'post',
    response: ({ body }: { body: Recordable }) => {
      const { username, password } = body;
      if (username == 'admin' && password == 'admin123') {
        userInfo.token = genID(16);
        return {
          data: userInfo,
          code: 1,
          message: 'ok',
        };
      } else {
        return {
          data: userInfo,
          code: -1,
          message: '账号密码错误',
        };
      }
    },
    // rawResponse: async (req, res) => {
    //   console.log(req, res);
    //   let reqbody = {};
    //   res.setHeader('Content-Type', 'application/json');
    //   reqbody = { data: userInfo };
    //   res.statusCode = 500;
    //   res.end(JSON.stringify(reqbody));
    // },
  },
  {
    url: '/mock_api/getUserInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return userInfo;
    },
  },
] as MockMethod[];

function genID(length: number) {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
