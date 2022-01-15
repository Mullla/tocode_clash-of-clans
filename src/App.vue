<template lang="pug">
.wrapper
  TheHeader
  
  .wrapper-content
    .container
      .view-sm.isCenter
        <router-view />

  TheFooter
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss"></style>
