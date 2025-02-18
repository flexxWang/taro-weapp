import { View, Text, Image } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

export default function Index() {
  const [activeTab, setActiveTab] = useState('全部')
  const tabs = ['全部', '深空', '行星', '太阳', '月球', '广域', '星野']

  return (
    <View className='index'>
      <van-search
        value=''
        placeholder='搜索'
        shape='round'
        background='#000'
      />
      
      <View className='tab-container'>
        <View className='tab-scroll'>
          {tabs.map(tab => (
            <View 
              key={tab} 
              className={`tab-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </View>
          ))}
        </View>
      </View>

      <View className='content'>
        <View className='banner'>
          <Image 
            className='banner-image' 
            src='https://example.com/banner.jpg' 
            mode='aspectFill' 
          />
          <View className='banner-text'>
            <View className='title'>与星空同行 为光影鉴证</View>
            <View className='subtitle'>成为评委，让好作品更多被发现</View>
          </View>
        </View>

        <View className='post-list'>
          <View className='post-item'>
            <View className='user-info'>
              <van-image 
                round 
                width='40px' 
                height='40px' 
                src='https://example.com/avatar.jpg' 
              />
              <View className='username'>qolif</View>
              <van-button size='mini' type='danger'>+ 关注</van-button>
            </View>
            <Image 
              className='post-image' 
              src='https://example.com/post.jpg' 
              mode='aspectFill' 
            />
            <View className='post-info'>
              <View className='post-title'>IC434 单张5分钟，106张叠加 5min*106</View>
              <View className='post-meta'>
                <View className='camera'>ASI AIR Mini</View>
                <View className='interaction'>
                  <van-icon name='like-o' />
                  <Text>1</Text>
                  <van-icon name='star-o' />
                  <van-icon name='comment-o' />
                  <Text>12</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

    </View>
  )
}
