import { Image, Text, View } from '@tarojs/components';
import Avatar from '@/assets/website-logo-full.png';

const Index = () => {
  return (
    <>
      <View className='basic-info'>
        <Image className='avatar' mode='widthFix' src={Avatar} />
        <View className='info'>
          <View className='name'>王宏宇 - Naico Wang</View>
          <View className='role'>FullStack Engineer / Team Leader / PMP</View>
        </View>
      </View>
      <View className='spacer' />
      <View className='detail personal-info'>
        <View className='title'>Personal Info</View>
        <View className='content'>
          <View className='item'>Date Of Birth: <Text>1984.12</Text></View>
          <View className='item'>Gender: <Text>Male</Text></View>
          <View className='item'>Phone Number: <Text>+86-21-18521567361</Text></View>
          <View className='item'>Education: <Text>Taishan Medical University, Bachelor</Text></View>
          <View className='item'>Website: <Text>https://naico.wang</Text></View>
        </View>
      </View>
      <View className='spacer' />
      <View className='detail'>
        <View className='title'>Technical Stack</View>
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
        <View className='title'>Work Experience</View>
        <View className='content'>
          <View className='item time'>2024.5 - 至今</View>
          <View className='item'>Nagarro</View>
          <View className='item'><Text>Pricinple Solution Architect</Text> - Marriott</View>
          <View className='item-list'>Responsible for architecture of Marriott MiniProgram and Web projects.</View>
          <View className='item-list'>Code Review for Marriott Service Provider</View>
          <View className='item-list'>Solution Design for Marriott Service Provider</View>
          <View className='item-list'>Technical Stack: <Text>React/Vue/Nextjs</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item time'>2018.1 - 2024.1</View>
          <View className='item'>FARFETCH China</View>
          <View className='item'><Text>Engineer Lead - China Web</Text></View>
          <View className='item-list'>Design, Develop, Maintain Farfetch China Web Products.</View>
          <View className='item-list'>Solution Design for China MiniProgram Projects, including WeChat/Alipay/Tiktok/Red Mini Programs.</View>
          <View className='item-list'>Develop China CMS platform for Campaign useage.</View>
          <View className='item-list'>Initialize and finish Luckydraw full-stack solution for FF China promotion.</View>
          <View className='item-list'>Build Social Commerce Website and Admin System, used for referral programs for FARFETCH.</View>
          <View className='item-list'>Work with APP team for hydrid solution of China iOS and Android App.</View>
          <View className='item-list'>Team Management and Performance Review for Team Members.</View>
          <View className='item-list'>Work with other team collegues, including Product Owner, Backend Engineers, Operation Team, Design Team.</View>
          <View className='item-list'>Technical Stack: <Text>React/Nextjs/MangoDB/Java/React Native</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item time'>2012.10 - 2018.1</View>
          <View className='item'>Mercer China</View>
          <View className='item'><Text>Senior Development Engineer – ESS</Text></View>
          <View className='item-list'>Build enterprise solution for Mercer China</View>
          <View className='item-list'>Investment management system for Mercer US</View>
          <View className='item-list'>Metrix Administration System for Mercer Canada</View>
          <View className='item-list'>HR management System Asia Benefit 2 for South East Asia Countries</View>
          <View className='item-list'>Technical Stack: <Text>ASP.NET/JQuery/ASP.NET MVC/SQL Server</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item time'>2009.12 - 2012.9</View>
          <View className='item'>ChinaSoft Inc.</View>
          <View className='item'><Text>SDE3, Microsoft MSN Homepage</Text></View>
          <View className='item-list'>Build MSN homepage for all over the world sites</View>
          <View className='item-list'>Javascript Library Development: <Text>mnframework</Text></View>
          <View className='item-list'>Microsoft China Frontend Build Platform CSL Optimization</View>
          <View className='item-list'>Technical Stack: <Text>ASP.NET/JQuery/Moontools/ASP.NET MVC/SQL Server/CSL</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item time'>2007.7 – 2009.12</View>
          <View className='item'>Grain Tech Shanghai Inc.</View>
          <View className='item'><Text>Software Engineer</Text></View>
          <View className='item-list'>Build a real-estate website, www.xpchina.com</View>
          <View className='item-list'>Technical Stack: <Text>ASP.NET/JQuery/SQL Server</Text></View>
        </View>
      </View>
      <View className='spacer' />
      <View className='detail'>
        <View className='title'>Project Experience</View>
        <View className='content'>
          <View className='item'>👉 2024.5 - 2024.6</View>
          <View className='item'><Text>Marriott STO Refactor</Text></View>
          <View className='item-list'>Redesign STO platform structure, using Micro Service</View>
          <View className='item-list'>Use new bundle tools for MiniProgram</View>
          <View className='item-list'>Upgrade from Vue2 to Vue3 for Backoffice tools</View>
          <View className='item-list'>STO WebSocket Solution Design</View>
          <View className='item-list'>Technical Stack: <Text>Website/WeChat Mini Program/Vue3/WebSocket/Socketio/Nodejs</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2024.6 - 2024.7</View>
          <View className='item'><Text>Marriott Reservation Refactor</Text></View>
          <View className='item-list'>Marriott Reservation MiniProgram Upgrade to Taro 4.x</View>
          <View className='item-list'>MiniProgram Performance Analysis and error fix</View>
          <View className='item-list'>Technical Stack: <Text>WeChat Mini Program/Taro4.x</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2023.6 – 2023.12</View>
          <View className='item'><Text>FARFETCH Campaign System</Text></View>
          <View className='item-list'>Build a Campaign System for FARFETCH VIP Team, using React + Node + WeChat MiniProgram</View>
          <View className='item-list'>FF PC Team has the requirement that they will hold several campaign projects from time to time, so we worked with Business and PO to initialize a campaign system to support offline campaign events. Including lucky draw, offline event check-in and reward system.
During this period, we worked with business and APP team to launch the STAR project which invite BaiJingTing as our poster.</View>
          <View className='item-list'>Technical Stack: <Text>React/Nodejs/WeChat Mini Program/Taro</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2022.10 – 2023.3</View>
          <View className='item'><Text>FARFETCH MiniPrograms Solution</Text></View>
          <View className='item-list'>Build all the MiniPrograms including TikTok and Redbook, as well as Alipay, using Taro (React Framework)</View>
          <View className='item-list'>Since more and more modern social media solution comes out, we launched the Alipay mini program, to gain more benefits from Alipay, and to gain the benefits from short media videos, we also build the TikTok and Redbook mini programs, which expand our social media solution.</View>
          <View className='item-list'>Technical Stack: <Text>React/Nodejs/WeChat Mini Program/Taro</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2022.3 – 2022.12</View>
          <View className='item'><Text>FARFETCH Search and Recommendation System</Text></View>
          <View className='item-list'>Build a STORM module used for adjusting search and recommendation.</View>
          <View className='item-list'>As you know, search and recommendation are very important for online platform, by releasing this project, we can adjust all the search result and make sure each tier user can have the right recommendation products.
All the data is from our backend AI algorithm, which improves our GMV by 6%.</View>
          <View className='item-list'>Technical Stack: <Text>React/Nodejs</Text></View>
        </View>
        <View className='spacer' />
        <View className='content'>
          <View className='item'>👉 2022.3 – 2022.10</View>
          <View className='item'><Text>FARFETCH China CMS for Discovery</Text></View>
          <View className='item-list'>Build a CMS for our Discovery Module, using STORM (React Based).</View>
          <View className='item-list'>Currently more and more online platform enhanced their content operation system, in order to build our own UGC content, we build our own CMS, used for publishing user generated contents. By using this system, our operation team can build various types of contents, to improve our GMV.</View>
          <View className='item-list'>Technical Stack: <Text>React/Nodejs/Nextjs</Text></View>
        </View>
      </View>
    </>
  )
}

export default Index
