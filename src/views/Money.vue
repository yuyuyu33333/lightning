<template>
  <div class="nav-wrapper">
    <div class="content"> Money.vue
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p><p>11</p>
      <p>11</p>
      <p>11</p><p>11</p>
      <p>11</p>
      <p>11</p><p>11</p>
      <p>11</p>
      <p>11</p><p>11</p>
      <p>11</p>
      <p>11</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">

export default {
  name: 'money',

};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height:100vh;
}
.content {
  overflow:auto;
  flex-grow: 1
}
</style>