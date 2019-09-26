// 包含了多个间接修改状态的方法对象
// 引入常量名----mutation的typse
import {
  RECEIVE_SHOPS
} from './muntation-types.js'
// 引入api的相关接口
import {
  reqClassify
} from '../api'
export default {
  // 发送请求获取商品信息
  async getShops({
    commit
  }) {
    const result = await reqClassify()
    const classify = result.data
    commit(RECEIVE_SHOPS, classify)
  }
}
