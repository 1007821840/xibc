<template>
  <div path="/register" class="regist">
    <div>
      <span>使用星巴克App进行注册</span>
    </div>
    <div>
      <p>
        <span>现在就下载</span>
        <a href="/apps/">星巴克app</a>
        <span>便可直接用手机进行注册、支付、查看消费记录及管理卡片。</span>
      </p>
    </div>
    <div class="login">
      <div class="login-less">
    <div class="inp1">
      <input type="text" value="" placeholder="请输入用户名" ref="inp3" @focus="inp3" v-model="newUsername">
    </div>
    <div>
      <div class="inp2">
        <input type="password" value="" placeholder="密码" ref="inp4" @focus="inp4" v-model="newPassword">
      </div>
    </div>
    <div>
      <div class="inp2">
        <input type="password" value="" placeholder="确认密码" ref="inp5" @focus="inp5" v-model="renewPassword">
      </div>
    </div>
    </div>
  </div>
  <div class="abled">
    <span @click="register">注册</span>
</div>
  </div>
</template>

<script>
export default {
  name:"MoneyRegister",
  data () {
    return {
      newUsername:'',
      newPassword:'',
      renewPassword:''
      
    };
  },
  components: {},
  mounted () {},
  methods: {
    register(){
      console.log(1);
     
    },
    inp3(){
        this.$refs.inp3.placeholder=""
      },
      inp4(){
        this.$refs.inp4.placeholder=""
      },
      inp5(){
        this.$refs.inp5.placeholder=""
      },
      
  }
}
</script>
<style scoped>
  .abled{
    text-align: center;
    line-height: 51px;
    width: 82px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
    height: 51px;
    position: fixed;
    bottom: 170px;
    right: 35px;
    border-radius:48px ;
    background: #f7f7f7;
    border-color: #f7f7f7;
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
  }
  input::-webkit-input-placeholder {
        color:  #999999;
      }
      input::-moz-input-placeholder {
        color: #999999;
      }
      input::-ms-input-placeholder {
        color:  #999999;
      }
  .login {
    margin:0 20px 0;
    background-color: #F7F7F7;
  }
  .login-less{
    padding-top: 38px;
  }
  .regist{
    background-color: #F7F7F7;
  }
  .none{
    /* display:flex; */
    float: right;
    margin-top: 25px;
    color: #00A862;
    

  }
  .inp2 input{
    margin-top: 23px;
  }
  
</style>