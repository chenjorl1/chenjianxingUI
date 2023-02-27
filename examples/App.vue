<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <c-card 
      imgSrc="/logo.png"
      summary="666666"
    />
    <c-card
      imgSrc="/logo.png"
      summary="666666"
    >
      <template v-slot:footer>
        <div class="footer">
          <div>中级·528人报名</div>
          <div>￥299.00</div>
        </div>
      </template>
    </c-card>

    <c-card
      imgSrc="/logo.png"
      :width="370"
      :imgHeight="90"
       style="marginTop:10px"
    >
      本段文字填充至默认插槽
      <template v-slot:footer>
        <div class="footer">
          <div>中级·528人报名</div>
          <div>￥299.00</div>
        </div>
      </template>
    </c-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  text-align: left;
}
</style>
