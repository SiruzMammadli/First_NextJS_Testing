import React from 'react'

export default function Page({params}) {
  const {id} = params;
  return (
    <div>Detail page {id}</div>
  )
}
