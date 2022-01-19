<script lang="tsx">
  import { isFunction } from '@/utils/is';
  import { defineComponent, PropType, resolveComponent, Slots } from 'vue';
  import { elComponentItem } from '../../componentMap';
  import { FormItemListProps } from '../../types/from';
  export default defineComponent({
    props: {
      formItem: {
        type: Object as PropType<FormItemListProps>,
        default: () => {},
      },
      formModel: {
        type: Object as PropType<Recordable>,
        default: () => {},
      },
    },
    setup(props, { slots }) {
      const { formItem, formModel } = props as {
        formItem: FormItemListProps;
        formModel: {
          [key: string]: string;
        };
      };

      function renderComponent() {
        // const Comp = componentMap.get(formItem.component) as ReturnType<typeof defineComponent>;
        const Comp = resolveComponent(formItem.component) as ReturnType<typeof defineComponent>;
        return (
          <Comp v-model={formModel[formItem.prop]} {...formItem.props}>
            {childrenComponent()}
          </Comp>
        );
      }

      function childrenComponent() {
        if (formItem.childrenComponent) {
          const { options } = formItem.childrenComponent;
          const compName = elComponentItem[formItem.component];
          // const Comp = componentMap.get(compName) as ReturnType<typeof defineComponent>;
          const Comp = resolveComponent(compName) as ReturnType<typeof defineComponent>;

          return (
            <>
              {options?.map((res) => (
                <Comp label={res.label} value={res.value} {...formItem.props}></Comp>
              ))}
            </>
          );
        } else {
          return null;
        }
      }

      function getSlot(slots: Slots, slot = 'default', data?: any) {
        if (!slots || !Reflect.has(slots, slot)) {
          return null;
        }
        if (!isFunction(slots[slot])) {
          console.error(`${slot} is not a function!`);
          return null;
        }
        const slotFn = slots[slot];
        if (!slotFn) return null;
        return slotFn(data);
      }

      return () => {
        const { formItem } = props;
        const { prop, render, rules, label, isSlot } = formItem;
        const values = { formModel: formModel, formItem: formItem };
        const solfn = getSlot(slots, prop, values);
        const getContent = () => {
          return isSlot ? solfn : render ? render(values) : renderComponent();
        };
        return (
          <el-form-item label={label} prop={prop} rules={rules}>
            {getContent()}
          </el-form-item>
        );
      };
    },
  });
</script>
