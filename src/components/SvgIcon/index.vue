<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";

const props = defineProps({
  // route object
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333",
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>