import { View, Image, Text } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Mine() {
  const [userInfo] = useState({
    avatar: 'https://placeholder.com/150',
    name: 'Sampson',
    bio: 'If I had a single flower for every time I think about',
    followers: 346,
    following: '12.4w',
    likes: 423
  })

  const handleToList = () => {
    Taro.navigateTo({
      url: '/pages/lazylist/index'
    })
  }

  return (
    <View className='mine'>
      <View className='header'>
        <View className='bg' />
        <View className='content'>
          <View className='user-info'>
            <Image className='avatar' src={userInfo.avatar} mode='aspectFill' />
            <View className='info'>
              <View className='text-content'>
                <Text className='name'>{userInfo.name}</Text>
                <Text className='bio'>{userInfo.bio}</Text>
              </View>
              <View className='follow-btn'>关注</View>
            </View>
          </View>
        </View>
      </View>
      
      <View className='stats'>
        <View className='stat-item'>
          <Text className='number'>{userInfo.followers}</Text>
          <Text className='label'>关注</Text>
        </View>
        <View className='stat-item'>
          <Text className='number'>{userInfo.following}</Text>
          <Text className='label'>粉丝</Text>
        </View>
        <View className='stat-item'>
          <Text className='number'>{userInfo.likes}</Text>
          <Text className='label'>点赞</Text>
        </View>
        <View className='to-list-btn' onClick={handleToList}>前往列表页</View>
      </View>

      <View className='tabs'>
        <View className='tab active'>Ta的作品</View>
        <View className='tab'>Ta的设备</View>
      </View>

      <View className='works-grid'>
        {/* 作品展示区域将在后续添加 */}
      </View>
    </View>
  )
}