import React from 'react'
import Banner from "../../components/header-home/HeaderHome"
import FormHome from "../../components/form-home/FormHome"
import Navbar from '../../components/navbar/Navbar'
import Description from '../../components/description/Description'
import Varietyrooms from '../../components/variety/Varietyrooms'
import Service from '../../components/services/Service'
import Foodhome from '../../components/food/Foodhome'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>

      <Navbar/>
      <Banner/>
      <Description/>
      <Varietyrooms/>
      <Service/>
      <Footer/>

    </div>
  )
}

export default Home