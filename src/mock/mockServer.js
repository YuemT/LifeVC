/**
 * 使用mockjs来mock数据, 提供mock数据API接口
 */
import Mock from 'mockjs'
import data from './data.json'


//注册接口
Mock.mock('/api/shopping', {
  code: 0,
  data: data.shopping
})

// 不用export
