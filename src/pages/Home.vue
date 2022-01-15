<template lang="pug">
Carousel(:settings="settings", :breakpoints="breakpoints")
  Slide.card__wrapper(v-for="item in items", :key="item.id")
    Card(
      :title="item.title",
      :name="`${item.lvl}`",
      :imgUrl="item.img",
      :link="`/${item.alias}`"
    )
      template(v-slot:body) 
        | {{ item.descr }}

      template(v-slot:footer) 
        CardStats(:itemInfo="item.info")

  template(#addons)
    Navigation
</template>

<script>
import Card from "@/components/UI/Card";
import CardStats from "@/components/UI/CardStats";
import items from "@/seeders/items.js";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Card,
    CardStats,
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }
    };
  },
};
</script>