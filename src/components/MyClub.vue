<template>
    <div class="club">
        <Header :style="{fontSize:'30px',background:'rgb(142,0,120)',color:'white'}">社区</Header>
        <Row>
        <!-- 用v-for 重构 -->
        <Col span="11">
            <Card :bordered="false" :style="{margin:'40px 40px'}"> 
                <p slot="title">科技</p>
                <ul>
                    
                    <li><router-link to="/person"><img src="../../static/1275840692_16.png"/></router-link>&nbsp;&nbsp;Content of passage1</li>
                    <li><img src="../../static/455128746_16.png"/>&nbsp;&nbsp;Content of passage2</li>
                    <li><img src="../../static/1085125112_16.png"/>&nbsp;&nbsp;Content of passage3</li>
                </ul>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card :bordered="false" :style="{margin:'40px 40px'}">
                <p slot="title">游戏</p>
                <ul>
                    <li><img src="../../static/1327253744_16.png"/>&nbsp;&nbsp;Content of passage2</li>
                    <li><img src="../../static/1085125112_16.png"/>&nbsp;&nbsp;Content of passage1</li>
                    <li><img src="../../static/527127960_16.png"/>&nbsp;&nbsp;Content of passage2</li>
                    <li><img src="../../static/455128746_16.png"/>&nbsp;&nbsp;Content of passage3</li>
                </ul>
            </Card>
        </Col>
        <Col span="11">
            <Card :bordered="false" :style="{margin:'40px 40px'}">
                <p slot="title">舞蹈</p>
                <ul>
                    <li><img src="../../static/1275840692_16.png"/>&nbsp;&nbsp;Content of passage1</li>
                    <li><img src="../../static/455128746_16.png"/>&nbsp;&nbsp;Content of passage2</li>
                    <li><img src="../../static/455128746_16.png"/>&nbsp;&nbsp;Content of passage3</li>
                </ul>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card :bordered="false" :style="{margin:'40px 40px'}">
                <p slot="title">音乐</p>
                <ul>
                    <li><img src="../../static/1275840692_16.png"/>&nbsp;&nbsp;Content of passage1</li>
                    <li><img src="../../static/455128746_16.png"/>&nbsp;&nbsp;Content of passage2</li>
                    <li><img src="../../static/455128746_16.png"/>&nbsp;&nbsp;Content of passage3</li>
                </ul>
            </Card>
        </Col>
        </Row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
img{
    width: 20px;
    height: 20px;
    display: flexbox;
}
.pa{
    display: inline;
    text-align: left;
}
li{
    list-style: none;
}
</style>
