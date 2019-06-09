<template>
    <div class="wrapper">
        <Layout>
            <Header :style="{background:'rgb(142,0,120)',border:'1px solid white'}">
                <Menu mode="horizontal" theme="primary" active-name="1">
                <div class="layout-logo">
                    <img  class="logo" src="../../static/424750075_16.png" />
                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-add-circle-outline" size="26" />
                        分享文章
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-pricetag-outline" size="26" />
                        贴标签
                    </MenuItem>
                </div>
                </Menu>
            </Header>
            <Layout>
                <Sider collapsible :collapsed-width="79" v-model="isCollapsed">
                    <Menu  active-name="1-1" theme="primary" width="auto" :class="menuitemClasses">
                        <MenuItem name="1-1">
                            <Icon type="ios-contacts-outline" size="24" />
                            <span @click="showFollow">我的关注</span>
                        </MenuItem>
                        <MenuItem name="1-2">
                            <Icon type="ios-home-outline" size="24" />
                            <router-link to="/club"><span>社区板块</span></router-link>
                            
                        </MenuItem>
                        <MenuItem name="1-3">
                            <!-- this place can be replaced by the icon -->
                            <img class="chain" src="../../static/logo.jpg" />
                            <span @click="showChain">FolChain</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Content class="content" :style="{margin:'40px 40px',padding: '24px', minHeight: '860px'}" >
                    <div v-show="follow" class="follow">
                        <!-- the content for the followings -->
                        <Row>
                            <!-- this can be replaced by the v-for tags and needs avatar data process -->
                            <Col span="14" offset="5">
                                <Card :bordered="false" :style="{margin:'30px 0px'}">
                                <img  class="avatar" src="../../static/1275840692_16.png"/><p>duanxh</p><br>
                                <p> {{result[0].title}} </p>
                                </Card>
                            </Col>
                        
                        <Col span="14" offset="5">
                            <Card :bordered="false">
                                <img  class="avatar" src="../../static/455128746_16.png"/><p>zhaocc</p><br>
                                <p>这是新一天的动态 </p>
                            </Card>
                        </Col>
                        <Col span="14" offset="5">
                            <Card :bordered="false" :style="{margin:'30px 0px'}">
                                <img  class="avatar" src="../../static/1327253744_16.png"/><p>hangq</p><br>
                                <p>这是新一天的动态 </p>
                            </Card>
                        </Col>
                        </Row>                        
                    </div>
                    <Folchain :show="show" :result="result"></Folchain>

                    
                </Content>
            </Layout>
        </Layout>
        
        
    </div>
</template>
<script>
import Folchain from "../components/Folchain";
import axios from 'axios';
export default {
    data () {
            return {
                isCollapsed: false,
                follow: true,
                show:false,
                result:[]
            };
        },
    
    computed: {
        menuitemClasses: function () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    components:{
        Folchain
    },
    mounted:function(){
        this.getChain();
    },
    methods:{
        showFollow(){
            this.follow = !this.follow
            this.show = false
        },
        showChain(){
            this.follow = false
            this.show = true

        },
        getChain(){
            axios.get('/api/chain',{
                params:{
                    tag:'健身'
                }
            }).then((res)=>{
                //console.log(res.data);
                var r = res.data;
                this.result = r.data;
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>

.wrapper{
    width: 100%;
    height:900px;
    background-color: white;
}
.layout-logo{
    width: 84px;
    height: 84px;
    background: rgb(126, 189, 157);
    border-radius: 50%;
    float: left;
    position: relative;
    top: 10px;
    left: 146px;
    
}
.logo{
    width: 64px;
    height: 64px;
    position: absolute;
    left: 10px;
    top:10px;
    border-radius: 50%;
}

.layout-nav{
    width: 360px;
    margin: 0 auto;
    margin-right: 10px;
}
.layout-con{
    height:900px;
    width:100%;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
.menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

.chain{
    width: 24px;
    height: 24px;
}

.avatar{
    width:32px;
    height:32px;
}
.content{
    background-image: url('../../static/bcg3.jpg');
    background-size: cover;
}

</style>
