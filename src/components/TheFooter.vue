<template lang="pug">
footer.footer
  .container
    ul.navbar-list
      li.navbar-item(v-for="link in links", :key="link.alias")
        router-link.navbar-link(:to="link.url") {{ link.title }}
</template>

<script>
import { LINKS } from "@/_config";

export default {
  data() {
    return {
      links: LINKS,
    };
  },
};
</script>