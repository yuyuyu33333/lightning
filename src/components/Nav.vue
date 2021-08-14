<template>
  <nav>
    <router-link to="/money" class="item">
      <div class="www"><Icon  name="money"/></div>
      记账
    </router-link>

    <router-link to="/labels" class="item">
      <Icon  name="labels"/>
      明细
    </router-link>

    <router-link to="/statistics" class="item">
      <Icon  name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">


export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
nav {
  border: 1px solid red;
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  font-size:12px;
  > .item {
    padding:2px 0;
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}


</style>