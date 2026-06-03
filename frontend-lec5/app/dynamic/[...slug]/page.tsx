import React from 'react'

// @ts-ignore
const DynamicDocPage = async({params}) => {
    // slug is an array of strings because it's a catch-all route [...slug]
    const {slug} = await params;
    console.log(slug);
  return (
    <div>DynamicDocPage {slug.join("/")}</div>
  )
}

export default DynamicDocPage