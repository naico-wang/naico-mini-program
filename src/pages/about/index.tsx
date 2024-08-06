import { View } from '@tarojs/components'
import { useState } from 'react'

import EnContent from '@/components/en'
import CnContent from '@/components/cn'

import './index.less'

export default function Index () {
  const [ showEnVersion, setShowEnVersion ] = useState<boolean>(false)
  const onButtonClick = () => {
    setShowEnVersion(!showEnVersion)
  }
  return (
    <View className='page-container'>
      <View className='float-button' onClick={onButtonClick}>{ showEnVersion ? '中文' : '英文'}</View>
      { showEnVersion ? <EnContent /> : <CnContent /> }
    </View>
  )
}
