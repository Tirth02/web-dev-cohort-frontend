import React from 'react'

const DynamicCategoryPage = async({params}: {params: Promise<{category: string}>}) => {
    const {category} = await params;
  return (
    <div>Welcome to {category} docs! </div>
  )
}

export default DynamicCategoryPage