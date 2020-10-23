<template>
  <div id="store">
    <div class="head LocationFilterSwitch">
      <span class="did">未知地点</span>
    </div>
    <div class="text">
      <input type="text" v-model="search" ref="inp3" @focus="inp1" placeholder="输入地址查找门店">
      <img src="../../assets/icons/icon-search.svg">
      <span @click="ss">筛选</span>
    </div>
    <div class="amap-wrapper">
      <el-amap vid="amapDemo" :center="maplons" :zoom="zoom" class="amap-demo" >
        <el-amap-marker vid="marker" :position="maplons" :label="maptext">
        </el-amap-marker>
      </el-amap>
      <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
        <store-id :items="items"/>
      </scroll>
    </div>
  </div>
</template>
<script>
  import StoreId from './childComps/StoreId.vue'
  import { getStores } from '@/network/home.js'
  import Scroll from '@/components/common/scroll/Scroll'
  export default {
    name: "Store",
    components: {
      StoreId,
      Scroll
    },
    data: function () {
      let self = this;
      return {
        search: '',
        center: [this.$store.state.maplon, this.$store.state.maplat],
        lng: 0,
        list: [],
        lat: 0,
        zoom: 12,
      };
    },
    created() {
      getStores().then(res => {
        this.list = res.result.stores;
      })
    },
    updated() {
      this.loadMore()
    },
    computed: {
      maptext(){
        let text={content:this.$store.state.maptext,
          offset: [15,30]
        }
        return text
        


      },
      maplons(){
        return [this.$store.state.maplon,this.$store.state.maplat]
      },
      // maplats(){
      //   return  this.$store.state.maplat
      // },
      items: function () {
        var _search = this.search;
        if (_search) {
          //不区分大小写处理
          var reg = new RegExp(_search, 'ig')
          //es6 filter过滤匹配，有则返回当前，无则返回所有
          return this.list.filter(function (e) {
            //匹配所有字段
            return Object.keys(e).some(function (key) {
              return e[key].match(reg);
            })
            //匹配某个字段
            //  return e.name.match(reg);
          })
        };
        return this.list;
      }

    },
    methods: {
      ss(){
        console.log(this.maplons);

      },
      sx(){
        console.log(1);
        this.center=[this.$store.state.maplon, this.$store.state.maplat]

      },
      contentScroll(position) {
        // console.log( this.currentIndex);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
      inp1() {
        this.$refs.inp3.placeholder = ""
      },
      initMap() {
        var map = new AMap.Map('container', {
          resizeEnable: true
        });
        console.log("211");
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          buttonPosition: '',    //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function (status, result) {
          if (status == 'complete') {
          } else {
          }
        });
      }
    }
  };
</script>
<style scoped>
  .LocationFilterSwitch:before {
    content: '';
    position: relative;
    top: 4px;
    margin-left: 20px;
    display: inline-block;
    width: 14px;
    height: 18px;
    background: url(../../assets/icons/icon-locator-green.svg) no-repeat center/contain;
  }

  .LocationFilterSwitch:after {
    content: '';
    position: relative;
    top: -1px;
    display: inline-block;
    width: 10px;
    height: 8px;
    background: url(../../assets/icons/icon-locator-arrow.svg) no-repeat center/contain;
  }

  .did {
    display: inline-block;
    font-size: 12px;
    margin: 20px;
  }

  .head {
    height: 45px;
  }

  .amap-wrapper {
    width: 100%;
    height: 320px;
  }

  .wrapper {
    background-color: #F3F5F7;
    position: absolute;
    width: 100%;
    top: 407px;
    bottom: 48px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  #store {
    overflow: hidden;
  }

  .text {
    position: relative;
    color: #999999;
    border-bottom: 1px solid #d9d9d9;
    width: 90%;
    height: 34px;
    margin: 0 20px 8px;
  }

  .text input {
    outline: none;
    border: 0px;
    height: 33px;
    position: absolute;
    top: 0;
  }

  .text span {
    position: absolute;
    color: #00A862;
    right: 5px;
    top: 8px;
    font-size: 18px;

  }

  .text img {
    position: absolute;
    top: 5px;
    right: 50px;

  }
</style>