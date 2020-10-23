<template>
    <div id="moneytab" >
        <div class="ssj">
          <div v-for="it in list" >
            <div class="guany">
                <div>
                    <img :src="require('../../../static/images/homepage/'+it.image)">
                </div>
              {{it.name}}
              {{it.p}}
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name:"HomeCoffeehouse",
  data () {
    return {
        curActive: 'menu',
        list:[
            {
                image:'coffeehouse-coffee-cultivation-kv.jpg',
                name:'咖啡知识',
                p:'咖啡的起源与培植'
                
            },
            {
                image:'coffeehouse-4-fundamentals-kv.jpg',
                name:'咖啡评鉴',
                p:'咖啡调制',
            },
            {
                image:'coffeehouse-roast-story-kv.jpg',
                name:'咖啡知识',
                p:'咖啡烘焙',
            },
            {
                image:'coffeehouse-pour-over-kv.jpg',
                name:'咖啡评鉴',
                p:'咖啡烘焙',
            },
        ]
    };
  },
  components: {
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
    #moneytab::-webkit-scrollbar {
    display: none;
  }

  

  #moneytab {
    position: absolute;
   bottom: 0;
    left: 0;
    right: 0;
    overflow-x: auto;
    white-space: nowrap;
    /* height: 43px; */
    overflow-y: hidden;
  }

  .ssj {
    /* height: 46px; */
    scrollbar-width: none;
    display: flex;
  }

  .newlist {
    border-bottom: 1px solid #cccc;
  }

  .ssj::-webkit-scrollbar {
    display: none;
  }

  .ssj>div {
    display: inline-block;
    margin: 15px 15px 0;
    text-align: center;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.56);
  }
.guany img{
  border-radius: 50px;
  width: 100vw;
  

}
</style>