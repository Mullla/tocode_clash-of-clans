<template lang="pug">
header.navbar
  .container
    .navbar-content
      router-link.navbar-logo(to="/") {{ title }}

      ul.navbar-list
        li.navbar-item(v-for="link in links", :key="link.alias")
          router-link.navbar-link(:to="link.url") {{ link.title }}
</template>

<script>
import { LINKS, app } from "@/_config";

export default {
  data() {
    return {
      links: LINKS,
      title: app.title
    };
  },
};
</script>