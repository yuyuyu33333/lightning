<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>0</button>
      <button>×</button>
      <button>÷</button>
      <button>完成</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NumberPad'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 5px 16px;
    text-align: right;
    @extend %innerShadow;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;

    > button {
      width: 25%;
      height: 50px;
      background: transparent;
      border: none;
      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 3%)
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 6%)
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 9%)
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(14) {
        background: darken($bg, 12%)
      }

      &:nth-child(12), &:nth-child(15) {
        background: darken($bg, 15%)
      }

      &:nth-child(16) {
        background: darken($bg, 18%)
      }
    }
  }
}
</style>