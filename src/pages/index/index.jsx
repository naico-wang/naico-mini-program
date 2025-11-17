import { View, Text, Button } from '@tarojs/components'
import { useState } from 'react'
import { useLoad, useShareAppMessage } from '@tarojs/taro'
import './index.less'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  // Food options data
  const foodOptions = [
    "绿地缤纷 - 牛肉面",
    "绿地缤纷 - 日料",
    "绿地缤纷 - 肉夹馍/西北面馆",
    "绿地缤纷 - 新发现",
    "绿地缤纷 - 胡子大厨",
    "绿地缤纷 - 云南菜",
    "绿地缤纷 - 吃草 BAKER&SPICE",
    "绿地缤纷 - 麻辣香锅",
    "绿地缤纷 - 云南生烫牛肉米线",
    "正大乐城 - 有根葱不改良老火锅",
    "正大乐城 - 平成屋",
    "正大乐城 - 左庭右院鲜牛肉火锅",
    "正大乐城 - Wagas沃歌斯",
    "正大乐城 - 黄记煌三汁焖锅",
    "正大乐城 - 四海游龙",
    "正大乐城 - 和府捞面",
    "正大乐城 - 贵州酸汤牛肉粉",
    "正大乐城 - 十二嘎老成都串串火锅"
  ]

  const [finalResult, setFinalResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Randomly select a food option with loading effect
  const selectRandomFood = () => {
    setIsLoading(true)
    setFinalResult('')

    // Simulate 3-second loading process
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * foodOptions.length)
      const selected = foodOptions[randomIndex]
      setFinalResult(selected)
      setIsLoading(false)
    }, 2000)
  }

  useShareAppMessage((res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '今天中午吃什么',
      path: '/pages/index/index',
    }
  })

  return (
    <View className='index'>
      <View className='content'>
        {/* Display all food options in a list */}
        <View className='food-list-container'>
          <View className='food-list'>
            {foodOptions.map((item, index) => (
              <View key={index} className='food-item'>
                <Text className='food-item-text'>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Select button */}
        <Button
          className='action-button'
          onClick={selectRandomFood}
          disabled={isLoading}
        >
          {isLoading ? '选择中...' : '开始选择'}
        </Button>

        {/* Loading indicator */}
        {isLoading && (
          <View className='loading-container'>
            <View className='loading-spinner'></View>
            <Text className='loading-text'>正在选择中...</Text>
          </View>
        )}

        {/* Display result */}
        {finalResult && !isLoading && (
          <View className='result'>
            <Text className='result-label'>中午吃:</Text>
            <Text className='result-text'>{finalResult}</Text>
          </View>
        )}
      </View>
    </View>
  )
}
