<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <!--    <Types :value = "record.type" @update:value="onUpdateType"/>-->
    <div class="notes">
      <FormItem fieldName="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>


    <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';






@Component({
  components: {Tags, FormItem, Types, NumberPad},
})

export default class Money extends Vue {
  tags = window.tagList;
  recordList = window.recordList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };    // 复杂类型，声明默认值


  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    window.createRecord(this.record)
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
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding:12px 0;
}
</style>
