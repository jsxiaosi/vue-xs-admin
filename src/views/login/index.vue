<script setup lang="ts">
  import { _storage } from '@jsxiaosi/utils';
  import Login from './compoontne/login.vue';
  import { AppLocale, AppTheme } from '@/components/Application';

  import { useRootSetting } from '@/hooks/setting/useRootSetting';

  const { appConfig } = useRootSetting();
</script>

<template>
  <div class="page-container">
    <div class="container mx-auto">
      <div class="head">
        <div class="logo -enter-x">
          <img class="logo_img" src="@/assets/logo.png" mode="scaleToFill" />
          <span class="logo_name p-4">{{ appConfig.title }}</span>
        </div>
        <div class="application">
          <AppLocale class="item icon-size enter-x"></AppLocale>
          <AppTheme class="item enter-x"></AppTheme>
        </div>
      </div>
      <div class="login-box">
        <div class="login-form">
          <Login></Login>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .back {
    background-color: red;
  }

  .page-container {
    width: 100vw;
    height: 100vh;
    transition: all 0.3s linear;
    border-radius: 0;

    .container {
      width: 100%;
      height: 100%;
      display: flex;
      margin: auto;
      justify-content: space-between;
      padding: 0 2rem;

      .head {
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 20px;

        .application {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .icon-size {
            font-size: var(--font-size-extra-large);
          }

          .item {
            margin-left: 20px;
          }
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;

          .logo_img {
            width: 32px;
            height: 32px;
          }

          .logo_name {
            color: #999;
            font: bold 200% Consolas, Monaco, monospace;
            text-transform: uppercase;
            font-size: 18px;
            margin-left: 8px;
          }
        }
      }

      .login-box {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: start;
        margin: auto;
        border-radius: 10px;
        box-shadow: 0 15px 25px 0 rgb(0 0 0 / 60%);
        padding: 40px;
        text-align: center;

        .login-form {
          width: 360px;

          .avatar {
            width: 350px;
            height: 80px;
          }

          .input-group {
            position: relative;
            display: flex;
            align-items: center;
            margin: 25px 0;
            padding: 5px 0;
            border-bottom: 2px solid var(--border-color-light);
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
            font-size: var(--font-size-base);
            transition: 0.5s;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .input-group > div {
            position: relative;
            height: 45px;
            flex: 1;
          }

          .input-group > div > h5 {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: #d9d9d9;
            font-size: var(--font-size-base);
            transition: 0.3s;
            margin: 0;
            padding: 0;
          }

          .input-group.focus .icon {
            color: var(--main-color);
          }

          .input-group.focus div h5 {
            top: -5px;
            font-size: var(--font-size-base);
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
            padding: 8px;
            font-size: var(--font-size-base);
            color: var(--text-color-primary);
            font-family: Roboto, sans-serif;
          }

          .input:-webkit-autofill {
            background: none;
            transition: background-color 50000s ease-in-out 0s;
            -webkit-text-fill-color: var(--text-color-primary);
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
            color: var(--main-color);
          }

          .btn {
            padding: 10px 20px;
            width: 100%;
            margin-top: 30px;
            color: var(--main-color);
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.3s linear;
          }
        }
      }
    }
  }
</style>
