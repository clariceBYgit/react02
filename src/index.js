//  React Hooks是react 16.8的一项特性   可在不编写class的情况下使用state以及其他的react特性
//  两个常见api，useState 和 useEffect  都需要先引入 
 
 import React, { useState, useEffect } from 'react'
 import { render } from 'react-dom'

  const Counter = () =>{
    // useState(0)是一个方法，  方法的参数是默认值，结果是一个数组，数组的第一个就是state，第二个就相当于setState
      // 解构出来数组中的两个值
    const [count, setCount] = useState(0)

    // useEffect()的参数是一个回调，不管是组件挂载还是组件更新都会触发该方法
    // useEffect  类似于 componentDidMount  和 componentDidUpdate 的结合
    useEffect(() => {
      console.log('更新了')
      document.title = `当前数量为${count}`
    })

    return (
      <div>
        <p>当前的数量为{count}</p> 
        {/* 这里的setState 就是useState所生成的方法 （第二个），注意和setState不一样的地方在于参数，这里的参数就是一个新值即可*/}
        <button onClick={()=>{ setCount(count - 1) }}>-</button>
        {/* 这里就是useState创建的值 （第一个） */}
        <span>{count}</span>
        <button onClick={() => { setCount(count + 1) }}>+</button>

      </div>
      )
  }

 render(
   <Counter />,
   document.querySelector('#root')
 )
 