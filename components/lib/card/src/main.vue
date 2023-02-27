<template>
  <div class="c-card" :style="{width: width ? width + 'px' : ''}">
    <div class="c-card-img" :style="{height: imgHeight ? imgHeight + 'px' : ''}">
      <img :src="imgSrc" alt="">
    </div>
    <div v-if="summary" class="c-card-summary">
      {{summary}}
    </div>
    <div v-else class="c-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'c-card',
  props: {
    width: {//卡片宽度
      type: Number,
      default: 0
    },
    imgSrc: {//卡片图片地址
      type: String,
      default: ''
    },
    imgHeight: {//卡片图片高度
      type: Number,
      default: 0
    },
    summary: {//卡片概要
      type: String,
      default: ''
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  created(){

  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
