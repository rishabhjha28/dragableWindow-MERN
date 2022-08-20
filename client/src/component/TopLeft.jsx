import React from 'react'
import Table from './Table'
import Split from 'react-split';

export default function TopLeft() {
  return (
    <Split direction='vertical' sizes={[0,100]}>
      <div className='tp'></div>
      <div className='w1'>
        <Table/>
      </div>
    </Split>
  )
}