import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TsComponents',
  setup(props) {
    console.log(props);
    const dataname = ref<string>('admin');
    return () => (
      <>
        <div>{dataname.value}</div>
      </>
    );
  },
});
