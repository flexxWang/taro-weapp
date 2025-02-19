import { View, Text, Image } from '@tarojs/components'
import { useLoad, useReachBottom, navigateTo } from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'

// 在组件中使用时，将 AtIcon 改为 TaroAtIcon，AtTag 改为 TaroAtTag
interface ListItem {
  id: number
  title: string
  content: string
  tags: string[]
  time: string
  likes: number
  comments: number
  image: string
}

export default function LazyList() {
  const [list, setList] = useState<ListItem[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  // 模拟获取数据
  const fetchData = async (pageNum: number) => {
    if (loading) return
    
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const newData: ListItem[] = Array(10).fill(0).map((_, index) => ({
        id: (pageNum - 1) * 10 + index,
        title: `标题 ${(pageNum - 1) * 10 + index + 1}`,
        content: `这是第 ${(pageNum - 1) * 10 + index + 1} 条内容，包含了更多的详细信息和描述...`,
        tags: ['标签1', '标签2', '标签3'],
        time: '2024-01-20',
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 50),
        image: `https://picsum.photos/200/200?random=${(pageNum - 1) * 10 + index}`
      }))
      
      setList(prev => [...prev, ...newData])
      setHasMore(pageNum < 5)
    } catch (error) {
      console.error('加载数据失败：', error)
    } finally {
      setLoading(false)
    }
  }

  useLoad(() => {
    fetchData(1)
  })

  useReachBottom(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1
      setPage(nextPage)
      fetchData(nextPage)
    }
  })

  return (
    <View className='lazy-list'>
      {list.map(item => (
        <View 
          key={item.id} 
          className='list-item' 
          onClick={() => navigateTo({
            url: `/pages/detail/index?id=${item.id}`
          })}
        >
          <View className='item-header'>
            <Text className='title'>{item.title}</Text>
            <Text className='time'>{item.time}</Text>
          </View>
          
          <View className='item-content'>
            <View className='content-text'>
              <Text className='content'>{item.content}</Text>
              <View className='tags'>
                {item.tags.map((tag, index) => (
                  <Text key={index} className='tag'>{tag}</Text>
                ))}
              </View>
            </View>
            <Image className='content-image' src={item.image} mode='aspectFill' />
          </View>
          
          <View className='item-footer'>
            <View className='action-item'>
              <Text className='iconfont icon-like'></Text>
              <Text className='count'>{item.likes}</Text>
            </View>
            <View className='action-item'>
              <Text className='iconfont icon-comment'></Text>
              <Text className='count'>{item.comments}</Text>
            </View>
          </View>
        </View>
      ))}
      
      {loading && (
        <View className='loading'>
          <View className='loading-spinner'></View>
          <Text>加载中...</Text>
        </View>
      )}
      
      {!hasMore && (
        <View className='no-more'>
          <Text>没有更多数据了</Text>
        </View>
      )}
    </View>
  )
}