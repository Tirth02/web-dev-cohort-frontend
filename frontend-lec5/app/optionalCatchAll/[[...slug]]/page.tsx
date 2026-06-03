import React from 'react'

// @ts-ignore
const OptionalCatchAll = async({params}) => {
    const {slug} = await params;
  return (
    <div>OptionalCatchAll {slug?.join("/")}</div>
  )
}

export default OptionalCatchAll