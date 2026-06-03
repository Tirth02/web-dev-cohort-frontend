import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const AboutPage = () => {
  return (
    <div>
      AboutPage
      <Link href={{
        pathname: "/contact",
        query: {name:'test'}
      }} >Go to Contact</Link>
      <Link href="/products/1">Go to Product</Link>
      {/* <Image src="/image.svg" width={200} height={200} alt='Picture of the author'/> */}
    </div>
  )
}

export default AboutPage