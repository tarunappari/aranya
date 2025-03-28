import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Plant from '@/components/shop/plant/Plant';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Plant />
      <Footer />
    </div>
  )
}

export default page;