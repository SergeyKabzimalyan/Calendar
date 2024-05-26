import React from 'react'
import { Spin } from 'antd'

const SpinLoader = () => {
   return (
      <div
         style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <Spin tip="Loading" size="large" />
      </div>
   )
}

export default SpinLoader
