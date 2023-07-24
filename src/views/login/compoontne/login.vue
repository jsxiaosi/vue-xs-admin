<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import type { FormInstance, FormRules } from 'element-plus';
  import { Avatar, Lock } from '@element-plus/icons-vue';
  import { _storage } from '@jsxiaosi/utils';
  import { useRouter } from 'vue-router';
  import type { UseInfoType } from '@/server/useInfo';
  import { getUserInfo } from '@/server/useInfo';
  import { initAsyncRoute } from '@/router/utils';

  const ruleFormRef = ref<FormInstance>();

  const ruleForm = reactive({
    username: '',
    password: '',
  });
  const checked = ref<boolean>(false);

  const rules = reactive<FormRules<typeof ruleForm>>({
    username: [{ required: true, trigger: 'blur' }],
    password: [{ required: true, trigger: 'blur' }],
  });

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        onLogin();
      } else {
        console.log('error submit!');
        return false;
      }
    });
  };

  const router = useRouter();
  const onLogin = async (): Promise<void> => {
    const res = await getUserInfo(ruleForm.username, ruleForm.password);

    if (res.code === 1) {
      _storage.setStorage<UseInfoType>('userInfo', res.data);
      await initAsyncRoute(res.data.power);
      router.push('/');
    }
  };
</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" size="large" class="demo-ruleForm">
    <el-form-item prop="username" class="enter-y">
      <el-input v-model="ruleForm.username" :prefix-icon="Avatar" clearable placeholder="admin" />
    </el-form-item>
    <el-form-item prop="password" class="enter-y">
      <el-input
        v-model="ruleForm.password"
        type="password"
        :prefix-icon="Lock"
        clearable
        show-password
        placeholder="admin123"
      />
    </el-form-item>

    <el-form-item class="enter-y">
      <div class="form-item-container">
        <el-checkbox v-model="checked" label="记住密码" />
        <el-button link type="primary"> 忘记密码？ </el-button>
      </div>
    </el-form-item>

    <el-form-item class="enter-y">
      <el-button class="submit-btn" @click="submitForm(ruleFormRef)">
        {{ $t('sys.login.loginButton') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
  .submit-btn {
    width: 100%;
  }

  .form-item-container {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
