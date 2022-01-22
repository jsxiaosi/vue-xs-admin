<template>
  <div class="page-container">
    <div ref="editorELRef"></div>
    <div class="innerHTML" :innerHTML="html"></div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref, unref } from 'vue';
  import wangeDitor from 'wangeditor';
  import i18next from 'i18next';
  import { useI18n } from '@/hooks/web/useI18n';

  const editorELRef = ref<HTMLElement>({} as HTMLElement);
  const editor = ref<wangeDitor>({} as wangeDitor);
  const html = ref<string>('');
  const { locale } = useI18n();

  function init() {
    editor.value = new wangeDitor(unref(editorELRef));
    editor.value.config.lang = locale.value === 'zh-ch' ? 'zh-ch' : 'en';
    editor.value.i18next = i18next;
    editor.value.config.height = 500;
    Object.assign(editor.value.config, {
      onchange() {
        html.value = editor.value.txt.html() as string;
      },
    });
    editor.value.create();
  }

  onMounted(() => {
    init();
  });
</script>

<style lang="scss">
  .innerHTML {
    margin-top: 20px;
    min-height: 50px;
    border: 1px solid #e3e3e3;
  }
</style>
