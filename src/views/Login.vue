<template>
<Row>
    <Col span="12" offset="6">
        <div class="wrapper">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" >
                <FormItem label="用户名" prop="userName">
                    <Input v-model="formValidate.userName" placeholder="Enter your name" >
                        <Icon type="ios-person-outline" slot="prepend" size="20"></Icon>
                    </Input>
                </FormItem>
                <FormItem label="密码" prop="pwd">
                    <Input type="password" v-model="formValidate.pwd" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend" size="20"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="login('formValidate')">登陆</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>
        </div>   
    </Col>
    <Col span="14" offset = "5">
        <img src="../../static/Lo.jpg" class="logo">
    </Col>
</Row>
    
</template>
<script>
import axios from "axios";
import router from '../router'
export default {
    data(){
        return{
            formValidate: {
                    userName: '',
                    pwd: ''
                },
            ruleValidate: {
                userName: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur'}
                ],
                pwd:[
                    { required: true, message: 'The password cannot be empty', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        login (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        
                        axios.get('/api/login', {
                                params: {
                                    userName: this.formValidate.userName,
                                    pwd: this.formValidate.pwd
                                }
                        })
                        .then(function (res) {
                                const{status,userId} = res.data;
                                console.log(`---${status}---${userId}`)
                                if(status=='success'){
                                    router.push({name: 'home', params: { userId }})
                                    //this.$router.push({ name: 'home', params: { userId }})
                                }else{
                                    console.log("ll");
                                }
                        })
                        .catch(function (error) {
                                console.log(error);
                        });
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>
<style scoped>

.wrapper{
    
    height: 300px;
    width:500px;
    padding: 50px;
    margin: 60px auto;
    background: #f8f8f9;
    color: #ffffff;
    -webkit-box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
    box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
    border-radius: 10px;
}
button{
    margin-top: 20%;
}
img{
    widows: 84px;
    height: 84px;
}
</style>
