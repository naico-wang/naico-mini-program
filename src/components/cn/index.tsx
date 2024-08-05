import { Text, View, Image } from '@tarojs/components';
import Avatar from '@/assets/website-logo-full.png'

const Index = () => {
  return (
    <>
      <View className='basic-info'>
        <Image className='avatar' mode='widthFix' src={Avatar} />
        <View className='info'>
          <View className='name'>王宏宇 - Naico Wang</View>
          <View className='role'>全栈开发 / 研发经理 / PMP</View>
        </View>
      </View>
      <View className='spacer' />
      <View className='detail personal-info'>
        <View className='title'>个人信息</View>
        <View className='content'>
          <View className='item'>出生年月：<Text>1984年12月</Text></View>
          <View className='item'>性别: <Text>男</Text></View>
          <View className='item'>手机号码: <Text>+86-21-18521567361</Text></View>
          <View className='item'>毕业院校: <Text>山东第一医科大, 学士学位</Text></View>
          <View className='item'>个人网站: <Text>https://naico.wang</Text></View>
        </View>
      </View>
      <View className='spacer' />
      <View className='detail'>
        <View className='title'>技术栈</View>
        <View className='tag-list'>
          <Text className='expert'>全栈</Text>
          <Text className='expert'>React</Text>
          <Text className='expert'>Vue</Text>
          <Text className='expert'>Nodejs</Text>
          <Text className='expert'>HTML/CSS</Text>
          <Text className='expert'>全平台小程序</Text>
          <Text className='good-known'>.NET Core/ASP.NET</Text>
          <Text className='familiar'>Java</Text>
          <Text className='familiar'>ELK</Text>
          <Text className='familiar'>Kubernetes</Text>
        </View>
      </View>
      <View className='spacer' />
      <View className='detail'>
        <View className='title'>工作经历</View>
        <View className='content'>
          <View className='item time'>2024.5 - 至今</View>
          <View className='item'>Nagarro</View>
          <View className='item'><Text>Pricinple Solution Architect</Text> - Marriott</View>
          <View className='item-list'>负责万豪中国区平台的Web和微信小程序架构设计和具体实施细则</View>
          <View className='item-list'>为服务提供商写的代码进行代码检查</View>
          <View className='item-list'>为万豪的各种业务需求进行需求分析并提供解决方案</View>
          <View className='item-list'>所用技术栈: <Text>React/Vue/Nextjs</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item time'>2018.1 - 2024.1</View>
          <View className='item'>珐菲琦上海电子商务有限公司</View>
          <View className='item'><Text>Engineer Lead - China Web</Text></View>
          <View className='item-list'>设计，开发，维护发发奇的Web平台产品</View>
          <View className='item-list'>为发发奇中国的小程序平台提供解决方案设计和具体的实施, 该平台包括 微信/支付宝/抖音/小红书 小程序.</View>
          <View className='item-list'>为发发奇中国的营销和大促开发中国区内容管理系统(CMS)</View>
          <View className='item-list'>与团队设计并开发发发奇扭蛋机全栈项目，用来支持发发奇大促销</View>
          <View className='item-list'>为发发奇中国的Referral Program开发了一套系统并提供平台级别技术支持</View>
          <View className='item-list'>和App团队一起完成混合内容的解决方案(APP内嵌H5)</View>
          <View className='item-list'>管理开发团队的日常工作以及组员的绩效评定</View>
          <View className='item-list'>与公司其他团队紧密合作，包括产品经理，后端开发测试，公司业务方，以及运营人员。</View>
          <View className='item-list'>所用技术栈: <Text>React/Nextjs/MangoDB/Java/React Native</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item time'>2012.10 - 2018.1</View>
          <View className='item'>美世咨询</View>
          <View className='item'><Text>Senior Development Engineer – ESS</Text></View>
          <View className='item-list'>为美世中国提供企业平台解决方案支持。</View>
          <View className='item-list'>为美世咨询US开发养老金投资管理系统</View>
          <View className='item-list'>为美世咨询Canada开发Metrix管理系统</View>
          <View className='item-list'>为亚洲地区开发Benifit Asia2人力资源管理系统</View>
          <View className='item-list'>所用技术栈: <Text>ASP.NET/JQuery/ASP.NET MVC/SQL Server</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item time'>2009.12 - 2012.9</View>
          <View className='item'>中软国际</View>
          <View className='item'><Text>SDE3, Microsoft MSN Homepage</Text></View>
          <View className='item-list'>为世界范围的MSN网站开发首页，基于微软的内容管理平台</View>
          <View className='item-list'>开发了一套前端纯Javascript框架: <Text>mnframework</Text></View>
          <View className='item-list'>微软中国构建系统CSL的开发与日常维护</View>
          <View className='item-list'>所用技术栈: <Text>ASP.NET/JQuery/Moontools/ASP.NET MVC/SQL Server/CSL</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item time'>2007.7 – 2009.12</View>
          <View className='item'>谷粒软件(上海)有限公司</View>
          <View className='item'><Text>Software Engineer</Text></View>
          <View className='item-list'>参与地产中华网的开发与维护</View>
          <View className='item-list'>所用技术栈: <Text>ASP.NET/JQuery/SQL Server</Text></View>
        </View>
      </View>
      <View className='spacer' />
      <View className='detail'>
        <View className='title'>项目经历</View>
        <View className='content'>
          <View className='item'>👉 2024.5 - 2024.6</View>
          <View className='item'><Text>万豪扫码点餐项目重构</Text></View>
          <View className='item-list'>基于微服务重构万豪的扫码点餐项目</View>
          <View className='item-list'>为扫码点餐小程序重构了一套编译工具</View>
          <View className='item-list'>将扫码点餐后台管理系统从Vue2升级到Vue3并进行性能优化</View>
          <View className='item-list'>扫码点餐性能优化，使用WebSocket来增强用户体验</View>
          <View className='item-list'>所用技术栈: <Text>Website/WeChat Mini Program/Vue3/WebSocket/Socketio/Nodejs</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2024.6 - 2024.7</View>
          <View className='item'><Text>万豪酒店预订小程序重构</Text></View>
          <View className='item-list'>将小程序现有的Taro 2.2.1 升级到 Taro 4.x</View>
          <View className='item-list'>微信小程序性能分析优化以及错误修复</View>
          <View className='item-list'>所用技术栈: <Text>WeChat Mini Program/Taro4.x</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2023.6 – 2023.12</View>
          <View className='item'><Text>发发奇大促内容管理系统</Text></View>
          <View className='item-list'>使用 React + Node + WeChat MiniProgram 为发发奇的VIP团队开发一套大促内容管理系统</View>
          <View className='item-list'>使用 React + Nextjs开发了一套用于促销的系统，来满足VIP团队关于高频次促销的需求。可以通过拖拽生成相应的Web页面，嵌入App或者小程序内，做到快速传播快速响应</View>
          <View className='item-list'>所用技术栈: <Text>React/Nodejs/WeChat Mini Program/Taro</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2022.10 – 2023.3</View>
          <View className='item'><Text>发发奇中国小程序平台</Text></View>
          <View className='item-list'>使用Taro + React来构建发发奇中国的全平台小程序解决方案</View>
          <View className='item-list'>使用Taro的多段能力，配合业务需求产出全平台小程序，满足业务方关于不同平台小程序统一上线的需求</View>
          <View className='item-list'>所用技术栈: <Text>React/Nodejs/WeChat Mini Program/Taro</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2022.3 – 2022.12</View>
          <View className='item'><Text>发发奇搜推管理平台</Text></View>
          <View className='item-list'>在Global Storm平台基础上打造一个搜推管理平台，满足业务方对于都锁和推荐的人工干预的需求</View>
          <View className='item-list'>所用技术栈: <Text>React/Nodejs</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2022.3 – 2022.10</View>
          <View className='item'><Text>发发奇中国内容管理系统(CMS China)</Text></View>
          <View className='item-list'>基于Global的内容管理平台，开发了一个适合中国国情和使用习惯的内容管理系统，用于管理大促以及各种促销的活动页面和社交媒体推文</View>
          <View className='item-list'>所用技术栈: <Text>React/Nodejs/Nextjs</Text></View>
        </View>
      </View>
    </>
  )
}

export default Index
