<template>
  <div class="modal-item modal-item-other" @click="$emit('loadSingle')" style="display: block;" data-info="">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    	<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
    		<span class="detail-font-title notify-name">{{name}}</span>
     		<span class="detail-font-subtitle escDescription"><slot></slot></span>
    	</div>
    	<div class="pull-right" style="text-align: right" >
     		<span class="detail-font-subtitle">
     		<input class="hidNotifyId" type="hidden"/>
     		<a class='link-a btn-modify' style="margin-right: 15px">编辑</a><a class='link-a btn-del'>删除</a></span>
    	</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ListItem',
  data () {
    return {
    }
  },
  props: {
  	name: {
  		type: String,
  		required: false,
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-item:hover {
    background-color: #F0F3F7;
    cursor: pointer;
}
.modal-item:hover {
    background-color: #F0F3F7;
    cursor: pointer;
}
.modal-item-other {
    border-bottom: 0;
    border-left: 6px solid #6CBA00;
    padding-left: 20px;
    display: block;
}
.modal-item {
    height: 89px;
    border-left: 6px solid #56A9F2;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    border-right: 0px;
    padding: 16px 20px 16px 0;
    vertical-align: middle;
}
.detail-font-title {
    display: inherit;
    line-height: 2.1;
}
.detail-font-subtitle {
    font-size: 12px;
    color: #868686;
}
.modal-item-other {
    border-bottom: 0;
    border-left: 6px solid #6CBA00;
    padding-left: 20px;
    display: block;
}
</style>
