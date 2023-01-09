<template>
  <i :class="['mdi', `mdi-${name}`, className]" :style="[style]"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    style: {
      type: String,
      default: '',
    }
  },
};
</script>
