import { useEffect } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import AOS from 'aos'
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})

const Thanks = () => {
  useEffect(() => {
   /* AOS.init({
      duration: 2000,
    }) */
  }, [])

  const state = {
    responsive_testimblack: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        center: true,
        dots: false,
        margin: 10,
        loop: true,
      },

      766: {
        items: 4,
        nav: true,
        center: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 2,
        nav: true,
        center: false,
        autoplay: true,
        margin: 20,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
      },
    },

  
  }

  return (
    <div>
      <Header />


     <div>
  <section className="innrbanner">
    <img src="./images/ourservices.jpg" className="desktopayout" />
    <div className="container">
      <div className="mainhead whithd">
        <p className="sbhds">Thanks!! <br />
        Form has been submitted successfully!!
        </p>
        <h3 className="centheads">
            <img src="./images/bombobjs.png" className="sunbom" />
            
        </h3>

        {/* <a href="/ambassador" id="2" class="ytthemects">Submit</a> */}
      </div>
    </div>
  </section>

</div>

   
      <Footer />
    </div>
  )
}

export default Thanks
