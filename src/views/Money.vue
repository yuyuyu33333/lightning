<template>
  <Layout class-prefix="layout">
    {{recordList}}
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
// import model from '@/model.js'
import model from '@/model.ts'

const recordList = model.fetch()


@Component({
  components: {Tags, Notes, Types, NumberPad},
})

export default class Money extends Vue {
  tags = ['服饰', '餐饮', '住房', '交通', '医疗', '日用'];
  recordList=recordList
  record={
    tags:[],notes:'',type:'-',amount:0
  }    // 复杂类型，声明默认值


  onUpdateTags(value:string[]){
    this.record.tags = value
  }
  onUpdateNotes(value:string){
    this.record.notes =value
  }
  saveRecord(){
    const record2 = model.clone(this.record)
    record2.createAT=new Date()
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
    model.save(this.recordList)
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
