<template>
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
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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
</style>