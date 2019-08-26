<template>
  <div class="MaxBox">
    <header>
      <el-row class="headerRow">
        <el-col class="lineHeight" :span="6">
          <img alt="" class="img" src="/static/img/logo.png"/><span class="font22">路航保险经济</span>
        </el-col>
        <el-col class="nav" :span="18">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">公司简介</el-menu-item>
            <el-menu-item index="3">业务范围/业务介绍</el-menu-item>
            <el-menu-item index="4">联系我们</el-menu-item>
            <el-menu-item index="5">合作单位</el-menu-item>
            <el-menu-item index="6">信息披露</el-menu-item>
          </el-menu>
          <!--<div>首页</div>-->
          <!--<div>公司简介</div>-->
          <!--<div>业务范围/业务介绍</div>-->
          <!--<div>联系我们</div>-->
          <!--<div>合作单位</div>-->
          <!--<div>信息披露</div>-->
        </el-col>
      </el-row>
    </header>
    <div class="block">
      <el-carousel trigger="click" height="900px">
        <el-carousel-item v-for="item in imgData" :key="item">
          <img alt="" :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--公司简介-->
    <div class="introduceBox">
      <div class="introduceTittle">公司简介</div>
      <el-row>
        <el-col :span="6">
          <img alt="" class="introduceImg" src="/static/img/gsjianjie.png"/>
        </el-col>
        <el-col  class="introduceTextBox"   :span="18">
          <div>
            路航保险经纪有限公司是经中国保监委批准的综合性保险经纪公司。
            公司总部设立在中国重庆。
            公司注册资本5000万元人民币，
            公司致力于为投保人提供风险查勘、风险评估、风险管控、办理保险、安排分保、协助索赔等一系列保险经纪服务。
          </div>
          <div>
            路航保险经纪有限公司自成立以来，
            一直秉持“以人为本、效益为先、诚信服务、稳健经营”的经营理念，
            坚持市场化，专业化发展。我司利用物联网技术和安全大数据，
            建设物流供应链安全管控体系为客户提供创新安全管理的保险方案。
          </div>
          <div>
            路航保险经纪有限公司自成立以来，
            专注于汽车租赁和物流运输企业，
            提供保险经纪和科技管理等综合服务方案。
            其包含时小宝分时租赁、路航融资租赁服务方案，
            物流保车辆主动安全预警管理服务等。
          </div>
          <div>
            公司现有代表客户大搜车（弹个车）、盼达用车等。
            目前公司已经服务的客户超过200家，承保车辆超过1.5万辆，
            有完善的业务作业流程，和丰富的风险管理服务经验。
          </div>
        </el-col>
      </el-row>
    </div>
    <!--业务范围-->
    <div class="businessBox">
      <div class="businessTitle">业务范围/业务介绍</div>
      <el-row class="businessTextBox" >
        <el-col class="businessText" :span="16">
          <div>业务范围：</div>
          <div>
            在全国区域内（港、澳、台除外）为投保人拟定投保方案、选择保险人、办理投保手续；
            协助被保险人或受益人进行索赔；再保险经纪业务；
            为委托人提供防灾、防损失或风险评估、风险管理咨询服务；
            中国保监会批准的其他业务。
          </div>
        </el-col>
        <el-col :span="6">
          <img alt="" src="/static/img/business.png"/>
        </el-col>
      </el-row>
      <el-row class="businessIntroduceBox">
        <el-col :span="12" class="businessIntroduce">
          <div>
            <img alt="" src="/static/img/icon.png"/>
          </div>
          <div class="businessIntroduceText">
            <p>业务介绍一：</p>
            <p>业务介绍业务介绍业务介绍</p>
            <p>业务介绍业务介绍业务介绍</p>
          </div>
        </el-col>
        <el-col :span="12"class="businessIntroduce">
          <div>
            <img alt="" src="/static/img/icon.png"/>
          </div>
          <div class="businessIntroduceText">
            <p>业务介绍一：</p>
            <p>业务介绍业务介绍业务介绍</p>
            <p>业务介绍业务介绍业务介绍</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--联系我们-->
    <div class="contactUs">
      <div class="contactUsTitle">联系我们</div>
      <div class="contactUsText">
        <el-row>
          <el-col :span="6">
            <img alt="" src="/static/img/logo.png">
          </el-col>
          <el-col class="contactUsTextDetail" :span="18">
            <div>路航保险经纪有限公司</div>
            <p>公司地址：重庆市北部新区汽博中心龙睛路7号复城国际19楼-7</p>
            <p>联系方式：222222222222222</p>
            <p>电子邮箱：1231241@2131241231231231.com</p>
          </el-col>
        </el-row>
      </div>
      <div class="map"></div>

    </div>
    <!--合作伙伴-->
    <div class="cooperate">
      <div class="cooperateTitle">合作伙伴</div>
      <div class="cooperateBanner">
        <div class="swiper-container">
          <div class="swiper-wrapper" >
            <div class="swiper-slide"  v-for="item in 5" :key="item"><img alt="" src="/static/img/logo1.png"/></div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>

    </div>
    <!--信息披露-->
    <div class="messageBox">
      <div class="messageTitle">信息披露</div>
      <div class="messageText">
        <p>披露机构：路航保险经纪有限公司</p>
        <p>披露机构简称：路航保险</p>
        <p>经营互联网保险业务的网站名称：路航保险经纪</p>
        <p>经营互联网保险业务网址：https://www.luhangins.com/</p>
        <p>经营互联网保险业务的微信小程序名称：（待确认）</p>
        <p>客户服务及消费者投诉电话：（待确认）</p>
        <p>机构信息披露网址：https://www.luhangins.com/</p>
        <p>注册及营业地点：重庆市北部新区汽博中心龙睛路7号复城国际19楼-7</p>
      </div>
      <div class="idCard">
        <div class="idCardTitle">证件照展示</div>
        <div>
          <img alt="" src="/static/img/idCard1.png"/>
          <img alt="" src="/static/img/idCard.png"/>
        </div>
      </div>
      <div class="station">
        <div class="stationTitle">合作三方平台</div>
        <div class="stationTable">
          <el-table
            :data="tableData"
            border
            style="width: 100%;">
            <el-table-column
              type="index"
              label="序号"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="date"
              label="平台名称"
              >
            </el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="平台简称"
              >
            </el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="备案信息（网站） "
              >
            </el-table-column>
            <el-table-column
            align="center"
              prop="name"
              label="合作起始日期"
              >
            </el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="合作终止日期"
              >
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="合作产品（链接）">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="station">
        <div class="stationTitle">合作三方平台</div>
        <div class="stationTable">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              align="center"
              prop="date"
              label="保险公司"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="产品名称"
            >
            </el-table-column>
            <el-table-column
              align="center"
            prop="name"
            label="条款 "
          >
          </el-table-column>
            <el-table-column
              align="center"
            prop="name"
            label="费率"
          >
          </el-table-column>
            <el-table-column
            prop="name"
            align="center"
            label="备案"
          >
          </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!--footer-->
    <footer>
      <div class="footerBox">
        <el-row class="footerRow">
          <el-col class="footerImg" :span="6">
            <div><img alt="" src="/static/img/footer.png"/></div>
          </el-col>
          <el-col class="footerLink" :span="18">
            <div>
              <p><a href="">关于我们</a></p>
              <p><a href="">公司简介</a></p>
              <p><a href="">业务介绍</a></p>
            </div>
            <div>
              <p><a href="">理赔服务</a></p>
              <p><a href="">理赔无忧</a></p>
              <p><a href="">典型理赔案例</a></p>
              <p><a href="">各家理赔热线</a></p>
            </div>
            <div>
              <p><a href="">诚聘英才</a></p>
            </div>
            <div>
              <p><a href="">法律咨询</a></p>
            </div>
          </el-col>
        </el-row>
        </div>
      <div class="workUnit"><p>主办单位:路航保险经纪有限公司 承办单位:路航保险经纪有限公司 未经许可不得转载 </p></div>
      <div class="ICP"><p>渝ICP备13001390号-1  Copyright © 2013- 2018 路航经纪 luhangins.com. All Rights Reserved. 路航保险经纪有限公司版权所有</p></div>
    </footer>
  </div>
</template>

<script>
  import Swiper from 'swiper';
    export default {
        name: "luyang",
      data() {
        return {
          activeIndex: '1',
          imgData:['/static/img/banner1.png','/static/img/banner2.png'],
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
        },
      mounted() {
        var mySwiper = new Swiper('.swiper-container', {
          slidesPerView : 3,
          centeredSlides : true,
          loop : true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      }
    }

</script>

<style scoped lang="less">
  .MaxBox{
    max-width: 1920px;
    margin: 0 auto;
  }
  .MaxBox>header{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 11;
  }
  .font22{
    font-size: 22px;
    color: #0468aa;
    vertical-align: middle;
  }
  .headerRow{
    width: 100%;
    height: 100px;
    background-color: rgba(255,255,255,0.8);
    line-height: 100px;
  }
  .img{
    vertical-align: middle;
    margin-right: 20px;
    height: 40px;
  }
  .el-menu-demo{
    /*display: inline-block;*/
    padding: 0 10px;
    min-width: 100px;
    text-align: center;
    background-color: transparent;
  }
  /**********/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*简介*/
  .introduceTittle{
    text-align: center;
    font-size: 36px;
    padding: 100px 0;
    font-weight: bold;
  }
  .introduceTextBox{
    padding-left: 55px;
  }
  .introduceTextBox>div{
    text-indent: 30px;
    font-size: 18px;
  }
  .introduceBox{
    max-width: 1120px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
  .introduceImg{
    width: 100%;
  }
  /*业务范围*/
  .businessBox{
    background-color: #f6f6f6;
    padding-bottom: 100px;
  }
  .businessTextBox{
    max-width: 1120px;
    margin: 0 auto;
  }
  .businessTitle{
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
    font-size: 36px;
    padding: 80px 0 60px 0;
    font-weight: bold;
  }
  .businessText>div{
    display: inline-block;
    vertical-align: top;
  }
  .businessText>div:nth-child(2){
    width: 510px;
    font-size: 18px;
  }
  .businessText>div:nth-child(1){
    font-size: 24px;
    font-weight:bold ;
  }
  .businessIntroduceBox{
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
    padding-top: 80px;
  }
  .businessIntroduce>div{
    vertical-align: top;
    display: inline-block;
  }
  .businessIntroduce>div>img{
    padding: 20px 24px 30px 24px;
    width: 130px;
    height: 130px;
    background-color: white;
    border-radius:10px;
    border-radius:10px;
  }
  .businessIntroduce>div:nth-child(2){
    padding-left:45px ;
  }
  .businessIntroduceText>p:nth-child(1){
    font-size: 24px;
    font-weight: bold;
  }
  .businessIntroduceText>p:nth-child(2){
    font-size: 18px;
  }
  .businessIntroduceText>p:nth-child(3){
    font-size: 18px;
  }
  /*联系我们*/
  .contactUs{
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 50px;
  }
  .contactUsTitle{
    padding: 100px 0;
    font-size: 36px;
    font-weight: bold;
  }
  .contactUsText img{
    width: 240px;
    height: 240px;
  }
  .contactUsText{
    padding-bottom: 50px;
    text-align: left;
  }
  .contactUsTextDetail{
    padding-left: 110px;
  }
  .contactUsTextDetail>div{
    font-size: 24px;
    font-weight: bold;
  }
  .contactUsTextDetail>p{
    font-size: 18px;
  }
  .map{
    height: 550px;
    background-color: red;
  }
  /*合作伙伴*/
  .cooperate{
    background-color: #f6f6f6;
    padding-bottom: 100px;
  }
  .cooperateTitle{
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
    font-size: 30px;
    font-weight: bold;
  }
  .cooperateBanner{
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
  }
  .swiper-slide{
    text-align: center;
  }
  .swiper-slide>img{
    background-color: #eeeeee;
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }
  /*信息披露*/
  .messageBox{
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
  }
  .messageTitle{
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  .messageText{
    font-size: 18px;
    text-align: left;
    font-weight: bold;
  }
  .idCard>div:nth-child(2){
    vertical-align: top;
    text-align: left;
  }
  .idCard>div>img:nth-child(1){
    margin-right: 70px;
  }
  .idCardTitle{
    text-align: left;
    font-size:24px ;
    font-weight: bold;
    padding: 50px 0;
  }
  .stationTitle{
    text-align: left;
    font-size:24px ;
    font-weight: bold;
    padding: 50px 0;
  }
  /*footer*/
  footer{

    background-color:#313131;
    padding-top:70px ;
  }
  .footerBox{
    margin: 0 auto;
    max-width: 1120px;
  }
  .footerLink{
    padding-left: 150px;
  }
.footerLink>div{
  display: inline-block;
  vertical-align: top;
  width: 20%;
}
  .footerImg>div{
    max-width: 275px
  }
  .footerImg>div>img{
    width: 100%
  }
  .footerLink a{
    text-decoration: none;
    color:white ;
  }
  .footerRow{
    padding-bottom:55px ;
    border-bottom: 2px solid #4e4e4e;
    /*border-bottom: 1px solid white;*/
  }
  .workUnit{
    text-align: center;
    font-size: 14px;
    color: white;
    line-height: 36px;
    margin: 0;
  }
  .ICP{
    text-align: center;
    font-size: 14px;
    color: white;
    line-height: 40px;
    background-color: #182b37;
    margin: 0;
  }
  /deep/.el-menu.el-menu--horizontal{
    border-bottom: none;
  }

</style>
