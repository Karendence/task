<template>
	<div class="footer" style="margin-top: 16px;">
      <div class="footer-left pull-left light-color">
        <input type="checkbox" title="全选" class="selectallinput" />
        <button class="close-situ">批量关闭</button>
        共 <span class="total-count">0</span> 条记录，每页 <span class="page-count">9</span> 条，共 <span class="total-page">0</span> 页
      </div>
      <div class="footer-right pull-right">
        <Page :total="100" />
      </div>
    </div>
</template>

<script>
import {
  Page
} from 'iview'
export default {
  name: 'MyTableFoot',
  data() {
    return {
    }
  },
  props: {
  },
  components: {
  	Page	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol#timeco {
    height: 39px;
    margin-top: 0px;
    width: 100%;
}
.breadcrumb {
    margin-bottom: 10px;
}
span.alarm-title-span {
    position: relative;
    padding-right: 12px;
    border-right: 1px solid #a8a31687;
    border-radius: 1px;
    top: -6px;
}
span.sec-title {
    margin-left: 10px;
    top: -6px;
    position: relative;
}
button.close-situ {
    background: white;
    border: 1px solid #c7c2c2;
    border-radius: 4px;
    width: 87px;
    height: 24px;
    position: relative;
    top: 0px;
    margin-right: 17px;
}
input.selectallinput {
    margin-left: -11px;
    margin-right: 17px;
    position: relative;
    top: 2px;
}
</style>
