<template lang="pug">
.wrapper-person
  div(v-if="item")
    img(:src="item.img", :alt="item.descr")

    h1.title(style="color: #fff") {{ item.title }}

    p {{ item.descr }}

    CardStats(:itemInfo="item.info")

    div
      router-link.btn.btnPrimary(to="/") Back to home
</template>

<script>
import items from "@/seeders/items.js";
import CardStats from "@/components/UI/CardStats";

export default {
  components: { CardStats },

  data() {
    return {
      item: null,
    };
  },

  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((el) => el.alias === alias);
    this.item = item;
  },
};
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;

  .card-stats {
    border-radius: 14px;
    margin: 30px 0;
  }
}
</style>