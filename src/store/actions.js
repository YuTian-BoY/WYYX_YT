// 包含了多个间接修改状态的方法对象
// 引入常量名----mutation的typse
import {
  RECEIVE_SHOPS,
  RECEIVE_KONCONTENT
} from './muntation-types.js'
// 引入api的相关接口
import {
  reqClassify,
  reqRecommendData
} from '../api'
export default {
  // 发送请求获取商品信息
  async getShops({
    commit
  }) {
    const result = await reqClassify()
    const classify = result.data
    commit(RECEIVE_SHOPS, classify)
  },
  // 发送识物页面的信息
  async getRecommendData({
    commit
  }) {
    const result = await reqRecommendData()
    const konw = result.data
    commit(RECEIVE_KONCONTENT, konw)
  }
}
