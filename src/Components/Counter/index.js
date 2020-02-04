import React, { Component} from 'react'

import { CounterConsumer } from '../../conterStore'

// 这是定义一个Counter组件
export default  class Counter extends Component {
  render () {
    return (
      // 使用CounterConsumer来接收count
      // 注意！ Consumer的children必须是一个方法，这个方法有一个参数，参数是Provider的value
      <CounterConsumer>
        {
          ({count}) => {
            return <span>{count}</span>
          }
        }
      </CounterConsumer>
    )
  }
 }