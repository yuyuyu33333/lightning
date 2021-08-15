<template>

  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-';  // '-'减号表示支出，‘+’加号表示收入
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type: string) {  //type 只能是减号和加号中的一个
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}

// export default {
//   name: 'Types',
//   data(){
//     return{
//       type:'-'
//     }
//   },
//   methods:{
//     selectType(type){  //type 只能是减号和加号中的一个
//       if(type !== '-' && type!=='+' ){
//         throw new Error('type is unknow')
//       }
//       this.type = type
//     }
//   }
// };
</script>

<style lang="scss" scoped>

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
      background: #fff763;

      //&::after {
      //  content: '';
      //  position: absolute;
      //  bottom: 0;
      //  left: 0;
      //  width: 100%;
      //  height: 3px;
      //  background: #888;
      //}
    }
  }
}
</style>