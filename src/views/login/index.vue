<template>
  <div class="container mx-auto">
    <img src="@/assets/login/bg.png" class="wave" />
    <div class="img -enter-x">
      <img src="@/assets/login/illustration.svg" />
    </div>

    <div class="application enter-x">
      <AppLocale class="icon-size enter-x"></AppLocale>
    </div>
    <div class="login-box enter-x">
      <div class="login-form">
        <h2 class="enter-x p-4">SuperCuteXiaoSi</h2>
        <span>{{ t('sys.login.userName') }}：admin {{ t('sys.login.password') }}：admin123</span>
        <form>
          <div class="input-group user enter-x">
            <SvgIcon class-name="icon" name="iEL-avatar"></SvgIcon>
            <div>
              <h5>{{ t('sys.login.userName') }}</h5>
              <input
                v-model="user"
                type="text"
                class="input"
                @focus="onUserFocus"
                @blur="onUserBlur"
              />
            </div>
          </div>
          <div class="input-group pwd enter-x">
            <SvgIcon class-name="icon" name="password"></SvgIcon>

            <div>
              <h5>{{ t('sys.login.password') }}</h5>
              <input
                v-model="pwd"
                type="password"
                class="input"
                autocomplete="on"
                @focus="onPwdFocus"
                @blur="onPwdBlur"
              />
            </div>
          </div>
        </form>
        <button class="btn enter-x" @click="onLogin">
          {{ t('sys.login.loginButton') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SvgIcon from '@/components/SvgIcon/index.vue';
  import { AppLocale } from '@/components/Application';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  import { addClass, removeClass } from '@/utils/operate';
  import { deffHttp } from '@/utils/axios';

  import { useI18n } from '@/hooks/useI18n';

  const { t } = useI18n();

  const router = useRouter();

  let user = ref('');
  let pwd = ref('');

  const onLogin = async (): Promise<void> => {
    const res = await deffHttp.post<any>(
      {
        url: '/mock_api/login',
        data: { username: user.value, password: pwd.value },
      },
      { isShowData: true, errorMessageMode: 'modal', withToken: false },
    );
    console.log(res);
    if (res.code === 1) {
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      router.push('/');
    }
  };

  function onUserFocus() {
    addClass(document.querySelector('.user'), 'focus');
  }

  function onUserBlur() {
    if (user.value.length === 0) removeClass(document.querySelector('.user'), 'focus');
  }

  function onPwdFocus() {
    addClass(document.querySelector('.pwd'), 'focus');
  }

  function onPwdBlur() {
    if (pwd.value.length === 0) removeClass(document.querySelector('.pwd'), 'focus');
  }
</script>

<style lang="scss" scoped>
  .wave {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  .application {
    position: fixed;
    right: 0;
    top: 0;
    padding: 10px 20px;
    .icon-size {
      font-size: 20px;
    }
  }

  .container {
    width: 1600px;
    height: 100vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .img {
    width: 600px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .img img {
    width: 500px;
  }

  .login-box {
    width: 600px;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .login-form {
    width: 360px;
  }

  .avatar {
    width: 350px;
    height: 80px;
  }

  .login-form h2 {
    margin: 15px 0;
    color: #999;
    font: bold 200% Consolas, Monaco, monospace;
  }

  .input-group {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
  }

  .input-group:nth-child(1) {
    margin-bottom: 4px;
  }

  .input-group::before,
  .input-group::after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #c5d3f7;
    transition: 0.5s;
  }

  .input-group::after {
    right: 50%;
  }

  .input-group::before {
    left: 50%;
  }

  .icon {
    color: #d9d9d9;
    font-size: 22px;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-group > div {
    position: relative;
    height: 45px;
  }

  .input-group > div > h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #d9d9d9;
    font-size: 18px;
    transition: 0.3s;
    margin: 0;
    padding: 0;
  }

  .input-group.focus .icon {
    color: #5392f0;
  }

  .input-group.focus div h5 {
    top: -5px;
    font-size: 15px;
  }

  .input-group.focus::after,
  .input-group.focus::before {
    width: 50%;
  }

  .input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    color: #555;
    font-family: 'Roboto', sans-serif;
  }

  a {
    display: block;
    text-align: right;
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    transition: 0.3s;
  }

  a:hover {
    color: #5392f0;
  }

  .btn {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    margin: 1rem 0;
    font-size: 1.2rem;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #{$mianColor}, #{$subColor}, #{$mianColor});
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    background-size: 200%;
    transition: 0.5s;
  }

  .btn:hover {
    background-position: right;
  }
</style>
