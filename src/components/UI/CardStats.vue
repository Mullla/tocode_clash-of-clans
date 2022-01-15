<template lang="pug">
.card-stats
  .one-third(v-for="(stat, index) in itemInfo", :key="index")
    .stat-value {{ stat.value }}
    .stat {{ stat.title }}
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Array
    }
  }
}
</script>