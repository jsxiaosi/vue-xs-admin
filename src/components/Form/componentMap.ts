import type { Component } from 'vue';
// import { ElInput, ElDatePicker, ElCascader, ElSelect, ElCheckbox, ElRadio } from 'element-plus';

const componentMap = new Map<string, Component>();

// componentMap.set('ElInput', ElInput);
// componentMap.set('ElDatePicker', ElDatePicker);
// componentMap.set('ElCascader', ElCascader);

// componentMap.set('ElSelect', ElSelect);
// componentMap.set('ElOption', ElSelect.Option);
// componentMap.set('ElCheckbox', ElCheckbox);
// componentMap.set('ElCheckboxGroup', ElCheckbox.CheckboxGroup);
// componentMap.set('ElRadio', ElRadio);
// componentMap.set('ElRadioGroup', ElRadio.RadioGroup);

const elComponentItem: Recordable = {
  ElSelect: 'ElOption',
  ElCheckboxGroup: 'ElCheckbox',
  ElRadioGroup: 'ElRadio',
};

export { componentMap, elComponentItem };
