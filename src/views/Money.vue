<template>
  <Layout class-prefix="layout">

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
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里输入备注">
      </label>
    </div>
    <div class="tags">
      <ul class="current">
        <router-link to="/clothes" class="item" active-class="selected">
          <Icon name="clothes"/>
          服饰
        </router-link>
        <router-link to="/food" class="item" active-class="selected">
          <Icon name="food"/>
          餐饮
        </router-link>
        <router-link to="/dwell" class="item" active-class="selected">
          <Icon name="dwell"/>
          住房
        </router-link>
        <router-link to="/traffic" class="item" active-class="selected">
          <Icon name="traffic"/>
          交通
        </router-link>
        <router-link to="/medical" class="item" active-class="selected">
          <Icon name="medical"/>
          医疗
        </router-link>
        <router-link to="/daily" class="item" active-class="selected">
          <Icon name="daily"/>
          日用
        </router-link>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">

export default {
  name: 'money',

};
</script>

<style lang="scss">
.layout-content {
  border: 1px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>

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


.tags {
  font-size: 14px;
  padding: 20px 14px;
  flex-grow: 1;

  > .current {
    display: flex;
    flex-wrap: wrap;
    font-size: 10px;
    border: 1px solid red;

    > .item {
      padding: 4px 0;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .icon {
        border-radius: 12%;
        background: $grey;
        width: 30px;
        height: 30px;
      }
    }
  }

  > .new {
    padding: 0 20px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding-top: 4px;

    }
  }
}

.types {
  background: #f1f1f1;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected {
      background: $yellow1;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: #888;
      }
    }
  }
}

.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 20px;
  }

  input {
    height: 50px;
    flex-grow: 1;
    background: transparent;
    border: none
  }
}
</style>