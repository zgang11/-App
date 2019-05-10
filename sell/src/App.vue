<template>
<div>
  <v-header :seller="seller"></v-header>
  <div class="tab">
    <router-link to="/goods">商品</router-link>
    <router-link to="/ratings">评论</router-link>
    <router-link to="/seller">商家</router-link>
  </div>
  <router-view :seller="seller"></router-view>
</div>
</template>

<script type="text/ecmascript-6">
import {
  urlParse
} from './common/js/util'
import header from './components/header/header.vue'
const ERR_OK = 0
export default {
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created() {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      var resData = response.data
      if (resData.errno === ERR_OK) {
        /* this.seller =  resData.data; 会覆盖掉id */
        /* 防止把id覆盖掉，使用es6的一个语法:扩展了对象的属性，在原来的基础上添加response.data的值，不会覆盖掉原来的id属性 */
        this.seller = Object.assign({}, this.seller, resData.data)
        console.log(this.seller.id)
      }
    }, (res) => {
      alert(res.status)
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style>
.tab {
  display: flex;
  width: 100%;
  line-height: 40px;
}

.tab a {
  flex: 1;
  text-align: center;
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
}

.tab .router-link-active {
  color: rgb(240, 20, 20);
}
</style>
