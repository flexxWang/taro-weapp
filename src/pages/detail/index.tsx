import { View, Text, Image } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import './index.scss'

interface DetailData {
  id: number
  title: string
  content: string
  tags: string[]
  time: string
  likes: number
  comments: number
  image: string
}

export default function Detail() {
  const router = useRouter()
  const [detail, setDetail] = useState<DetailData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { id } = router.params
    // 模拟获取详情数据
    const fetchDetail = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const detailData: DetailData = {
          id: Number(id),
          title: `标题 ${Number(id) + 1}`,
          content: `这是第 ${Number(id) + 1} 条内容的详细信息。这里可以展示更多的内容，包括详细的描述、背景信息等。\n\n这是第二段落，可以包含更多的文字内容...`,
          tags: ['标签1', '标签2', '标签3'],
          time: '2024-01-20',
          likes: Math.floor(Math.random() * 100),
          comments: Math.floor(Math.random() * 50),
          image: `https://picsum.photos/400/300?random=${id}`
        }
        setDetail(detailData)
      } catch (error) {
        console.error('加载详情失败：', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDetail()
  }, [])

  if (loading) {
    return (
      <View className='detail-loading'>
        <View className='loading-spinner'></View>
        <Text>加载中...</Text>
      </View>
    )
  }

  if (!detail) {
    return (
      <View className='detail-error'>
        <Text>加载失败，请重试</Text>
      </View>
    )
  }

  return (
    <View className='detail-page'>
      <Image className='detail-image' src={detail.image} mode='aspectFill' />
      <View className='detail-content'>
        <View className='detail-header'>
          <Text className='title'>{detail.title}</Text>
          <Text className='time'>{detail.time}</Text>
        </View>
        
        <View className='tags'>
          {detail.tags.map((tag, index) => (
            <Text key={index} className='tag'>{tag}</Text>
          ))}
        </View>

        <Text className='content'>{detail.content}</Text>

        <View className='detail-footer'>
          <View className='action-item'>
            <Text className='iconfont icon-like'></Text>
            <Text className='count'>{detail.likes}</Text>
          </View>
          <View className='action-item'>
            <Text className='iconfont icon-comment'></Text>
            <Text className='count'>{detail.comments}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}