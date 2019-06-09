<template>
    <div class="container">
        <Layout>
        <Menu mode="horizontal" theme="primary" active-name="1">
                <div class="layout-logo">
                    <img  class="logo" src="../../static/1275840692_16.png" />
                </div>
                <div class="follow">
                    <MenuItem name="1">
                        <Icon type="ios-add-circle-outline" size="24" />
                        Follow
                    </MenuItem>
                </div>
        </Menu>
        <Tabs value="name1" :style="{background:'white'}">
        <TabPane class="tab" label="发布" name="name1" :style="{minHeight: '820px'}">
            <Row>
                <Col span="14" offset="5">
                    <Card :bordered="false" :style="{margin:'30px 0px'}">
                    <img  class="avatar" src="../../static/1275840692_16.png"/><p>duanxh</p><br>
                    <p> 这是 {{month}}月{{day}}日的动态 </p>
                    </Card>
                </Col>
                <Col span="14" offset="5">
                    <Card :bordered="false">
                        <img  class="avatar" src="../../static/1275840692_16.png"/><p>duanxh</p><br>
                        <p>这是 {{month}}月{{day-1}}日的动态 </p>
                    </Card>
                </Col>
                <Col span="14" offset="5">
                    <Card :bordered="false" :style="{margin:'30px 0px'}">
                        <img  class="avatar" src="../../static/1275840692_16.png"/><p>duanxh</p><br>
                        <p>这是 {{month}}月{{day-2}}日的动态 </p>
                    </Card>
                </Col>
            </Row>     
        </TabPane>
        <TabPane class="tab" label="FolChain" name="name2"><Folchain :show="true" :result="chain"/></TabPane>
        </Tabs>
        </Layout>
    </div>
</template>
<script>

import Folchain from '../components/Folchain'
import axios from 'axios'
export default {
    components:{
        Folchain
    },
    data(){
        return{
            chain:[],
            // 可以使用 computed 属性, 避免数据的冗余
            day : new Date().getDate(),
            month: new Date().getMonth() + 1  
        }
    },
    mounted:function(){
        this.getChain();
    },
    methods:{
        getChain(){
            axios.get('/api/ochain',{
                params:{
                    userId:2,
                    tag:'成长'
                }
            }).then((res)=>{
                var r = res.data;
                this.chain = r.data;
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
    
}
</script>
<style scoped>
.top{
    background: rgb(142,0,120);
    width:100%;
    height:120px;
    }
.layout-logo{
    width: 84px;
    height: 84px;
    background: lightblue;
    border-radius: 50%;
    float: left;
    position: relative;
    top: 10px;
    left: 50%;
}
.logo{
    width: 64px;
    height: 64px;
    position: absolute;
    left: 10px;
    top:10px;
    border-radius: 50%;
}
.follow{
    font-size: 1.8em;
}
.tab{
    background-image: url('../../static/bcg3.jpg');
    background-size: cover;
}

</style>
