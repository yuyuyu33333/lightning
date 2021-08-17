<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync ="record.amount"  @submit="saveRecord"/>
    <Types :value.sync = "record.type" />
<!--    <Types :value = "record.type" @update:value="onUpdateType"/>-->
    <Notes @update:value="onUpdateNotes"/>
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';

type Record ={
  tags:string[]
  notes:string
  type:string
  amount:number
}
@Component({
  components: {Tags, Notes, Types, NumberPad},
})

export default class Money extends Vue {
  tags = ['服饰', '餐饮', '住房', '交通', '医疗', '日用'];
  recordList:Record[]=[]
  record:Record={
    tags:[],notes:'',type:'-',amount:0
  }    // 复杂类型，声明默认值


  onUpdateTags(value:string[]){
    this.record.tags = value
  }
  onUpdateNotes(value:string){
    this.record.notes =value
  }
  saveRecord(){
    const record2 =JSON.parse(JSON.stringify(this.record))
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }


  // onUpdateType(value:string){
  //   this.record.type =value
  // }
  // onUpdateAmount(value:string){
  //   this.record.amount=parseFloat(value)
  // }
}

</script>

<style lang="scss">
.layout-content {
  border: 1px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>
