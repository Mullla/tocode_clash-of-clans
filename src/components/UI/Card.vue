<template lang="pug">
.card(style="margin-bottom: 20px")
  .card-img__wrapper(v-if="imgUrl")
    img.card-img(:src="imgUrl", :alt="title")
  span.card-name {{ name }}
  span.card-title {{ title }}

  .card-body
    slot(name="body") 
    router-link.link(:to="link", v-if="link", style="display: block; margin-top: 16px") See more
    
  slot(name="footer")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>