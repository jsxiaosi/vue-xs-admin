export interface FormProps {
  labelPosition: string;
  formIten: Array<FormItemProps>;
}

export interface FormItemProps {
  gutter: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  itemList: Array<FormItemListProps>;
}

/**
 * @param(type) input：输入框、dataTime：日期选择器、radio：单选框、select：下拉选择框
 * @param(label) 标签名
 * @param(prop) form表单双向绑定字段
 * @param(options) 选择项数据
 * @param(inputType) input输入框类型 type为input生效
 * @param(placeholder) 占位符
 */
export interface FormItemListProps {
  type: string;
  label: string;
  prop: string;
  options?: Array<FormSelectOptProps>;
  inputType?: string;
  placeholder?: string;
}

export interface FormSelectOptProps {
  label: string;
  value: string | number | boolean;
}
