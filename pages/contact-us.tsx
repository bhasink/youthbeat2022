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

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  const state = {
    responsive_featuredslide: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },
      300: {
        items: 2,
        nav: false,
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
        items: 4,
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

    responsive_reviewtestim: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        center: false,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 3,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: false,
        dots: false,
        loop: true,
      },

      766: {
        items: 2,
        nav: true,
        margin: 0,
        dots: false,
        loop: true,
      },

      1200: {
        items: 4,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: false,
        dots: false,
      },
    },

    responsive_advantfeat: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: false,
        dots: false,
        center: true,
        loop: true,
      },

      766: {
        items: 2,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 3,
        margin: 20,
        nav: true,
        center: true,
        dots: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: true,
        loop: false,
      },

      766: {
        items: 1,
        nav: false,
        dots: false,
        loop: false,
      },

      1200: {
        items: 1,
        nav: true,
        dots: true,
        loop: false,
        center: true,
      },
    },

    
    responsive_brandmembs: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        animateOut: 1,
        animateIn: 0,
        loop: true,
        stagepadding:40,
      },
      300: {
        loop: true,
        autoplay: true,
        items: 1,
        nav: false,
        animate: true,
        margin:30,
        center:true,
        stagepadding:40,
        autoplaySpeed: '6000',
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
      },

      766: {
        items: 4,
        nav: false,
        dots: false,
        loop: true,
      },

      1200: {
        items: 3,
        nav: false,
        margin:30,
        autoplay: true,
        animate: true,
        autoplaySpeed: '6000',
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        center:true,
        dots: true,
        loop: true,
      },
    },

    
  }

  return (
    <div>
      <Header />

        
<div>
  <section className="mapopn">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224246.36813827857!2d77.15449604496055!3d28.574281617598178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8cb290c673%3A0x72690587569280bc!2sSociowash!5e0!3m2!1sen!2sin!4v1671617288617!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </section>
  <section className="cultur-comps">
    <div className="container">
      <div className="contactsmids">
        <div className="mainhead text-left">
          <h3 className="centheads aos-init aos-animate"><img src="./images/telemojis.png" className="flapswing conemojis" />Contact us<br />
            anytime.</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>NEW DELHI </h4>
            <p>Plot No. 258,<br />
              Red Brick Centre, Lane 3,<br />
              Westend Marg, Saidulajab,<br />
              Saket - 110030</p>
            <a href="tel:+1245600034">+124 - 5600034</a>
          </div>
          <div className="col-md-6">
            <h4>MUMBAI </h4>
            <p>603 The Co-working Space,<br />
              1F, 27 MIDC, Marol<br />
              MIDC Industry Estate,<br />
              Andheri East - 400047</p>
            <a href="tel:+1245800094">+124 - 5800094</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="progrmsfrms revealer p-0">
    <div className="container">
      <div className="contactsmids">
        <div className="mnformsty">
          <form>
            <div className="form-group  row">
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="col-md-12">
                <textarea type="text" className="form-control" placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-md-12">
                <button className="ytthemects">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>


      <Footer />
    </div>
  )
}

export default ContactUs
