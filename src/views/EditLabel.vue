<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name"
                @update:value = "update"
                field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag?:{id:string, name:string} =undefined;

  created() {
    this.tag = window.findTag(this.$route.params.id)
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }
  update(name:string){
    if(this.tag){
      window.updateTag(this.tag.id,name)
    }
  }
  remove(){
    if(this.tag){
      if(window.removeTag(this.tag.id)){
        this.$router.back()
      }else{
        window.alert('删除失败')
      }
    }
  }
  goBack(){
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 0 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
    padding: 12px 0;
  }
  > .leftIcon {
    width: 30px;
    height: 30px;
  }
  > .rightIcon {
    width: 30px;
    height: 30px;
  }
}

.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper{
  text-align:center;
  padding:16px;
  margin-top:44-16px;
}
</style>