<template lang="pug">
.wrapper
  <the-header />
    .wrapper-content
      .container
        <router-view />
  <the-footer />
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
