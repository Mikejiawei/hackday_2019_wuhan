<template>
    <div>
        <div v-if="show" class="top">
            <img class="logo" src="../../static/Lo.jpg">
        </div>
        <transition name="fade"
			enter-active-class="animated swing"
			leave-active-class="animated bounceOutLeft">
			<div v-if="show" class="slogan">野火传递，生生不息！</div>
		</transition>
        
        <div class="container">
            <!-- 插槽可以填充使用 重构 -->
            <transition name="bounce">
            <Collapse v-if="show" v-model="value" accordion>
                <Panel name="1">
                    科技
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                    <br>
                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                    <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                </Panel>
                <Panel name="2">
                    健身
                    <p slot="content">{{result[1].title}}<a :href="url"><Icon type="ios-link" /></a></p>
                    
                </Panel>
                <Panel name="3">
                    成长
                    <p slot="content">{{result[0].title}}<a :href="result[0].content"><Icon type="ios-link" /></a></p>
                </Panel>
            </Collapse>
            </transition>
        </div>
        
    </div>
   
</template>
<script>
import '../assets/animate.css'
export default {
    data(){
        return{
            value: '1',
            url:this.result[1].content
            }
    },
    props:{
        show:{
            default:false
        },
        result:{
            type:Array,
            default:[]
        }
    },
    
}
</script>
<style scoped>
/* 使用动画效果 */
.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-in .8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.logo{
    width: 300px;
}
.top{
    background-color: white;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(69,64,69,1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(69,64,69,1);
    box-shadow: 10px 10px 5px 0px rgba(69,64,69,1);
}
.container{
    margin: 30px 30px;
    padding: 20px;
    background-color: azure;
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(69,64,69,1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(69,64,69,1);
    box-shadow: 10px 10px 5px 0px rgba(69,64,69,1);
}
p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 120%;
}
.slogan{
    margin-top: 20px;
    font-size: 240%;
    font-weight: bold;
    color: white;
}
</style>
