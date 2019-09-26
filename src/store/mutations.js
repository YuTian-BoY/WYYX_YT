// 包含了多个直接修改状态数据的方法的对象

// 引入常量名----mutation的typse
import {
  RECEIVE_SHOPS
} from './muntation-types.js'
export default {
  // 更新state中的商品信息
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  }
}
