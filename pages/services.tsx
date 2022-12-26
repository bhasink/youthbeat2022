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

const Services = () => {
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
  <section className="innrbanner">
    <img src="./images/ourservices.jpg" className="desktopayout" />
    <div className="container">
      <div className="mainhead whithd">
        <p className="sbhds">What is YouthBeat?</p>
        <h3 className="centheads" data-aos="flip-down" data-aos-duration={3000}><img src="./images/bombobjs.png" className="sunbom" />We're youthful, full of energy,<br />
          and obsessed with making<br />
          companies hotter
        </h3>
      </div>
    </div>
  </section>
  <section className="usptargt position-relative whitetxt">
    <div className="container">
      <div className="row">
        <div className="col-md-7 align-self-center">
          <p><b>YouthBeat is the youth marketing vertical within the ecosystem of Sociowash. </b> Across all campuses around the country, YouthBeat amplifies Gen-Z culture. </p>
          <p>With Pranav Agarwal and Raghav Bagai as co-founders, YouthBeat helps brands step up their game and create edgy experiences for youth. </p>
        </div>
        <div className="col-md-5">
          <div className="genfrs position-relative">
            <img src="./images/creobj.png" className="fltsbt" data-aos="flip-right" data-aos-duration={3000} />
            <img src="./images/genfr.jpg" data-aos="fade-up" data-aos-duration={3000} />
            <p>Lorem <br />Ipsum</p>
          </div>
        </div>
      </div>
    </div>
    <div className="usps">
      <img src="./images/usptagsnw.png" />
      <img src="./images/usptagsnw.png" />
      <img src="./images/usptagsnw.png" />
    </div>
    <div className="thswhys">
      <div className="container">
        <p>This is where YouthBeat bridges the gap between<br /> brands and Gen-Zs.
        </p>
      </div>
    </div>
  </section>
  <section className="whyybt-rights position-relative">
    <img src="./images/whysiright.png" className="desktopayout" data-aos="fade-right" data-aos-duration={3000} />
    <div className="container">
      <div className="mainhead">
        <p className="sbhds">Why YouthBeat is The Right Move</p>
      </div>
      <div className="pygrphs">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="./images/graphpyes.png" data-aos="fade-right" data-aos-duration={3000} />
            <img src="./images/targargs.png" className="targars" data-aos="fade-left" data-aos-duration={3000} />
          </div>
          <div className="col-md-6 align-self-center">
            <div className="mainhead text-left">
              <h3 className="centheads" data-aos="fade-left" data-aos-duration={3000}>Traffic <br />generated<br />
                by millennials<br />
                and Gen-Z
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ytmarkts"> 
    <div className="mainhead">
      <p className="sbhds">Why Youth Marketing</p>
    </div>
    <div className="whyytmrk whitetxt"> 
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <p><b>With many new trends rolling out almost everyday, things may get a little challenging for brands. </b></p>
            <p>Sometimes the road of social media might be rocky; this is when an experienced driver takes control.</p>
            <h4>This is where <br />
              you give your<br />
              marketing keys<br />
              to YouthBeat.
            </h4>
          </div>
          <div className="col-md-6 align-self-center position-relative">
            <img src="./images/service.jpg" className="img-fluid" />
            <img src="./images/genx.png" className="gnround" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="testimons-ytb">
    <div className="container">
      <div className="mainhead">
        <p className="sbhds">The Buzz We Create</p>
      </div>
      <div className="testslid">
        <div className="slidertst-ytb owl-carousel owl-theme">
          <div className="item">
            <div className="dv-shads">
              <p>These guys are passionate about their art and extraordinary creative capabilities. They are young, ambitious, and extremely efficient. Most importantly, they work as an unified and balanced unit.
                YouthBeat provides a wide range of solutions, proving to be complete youth marketing geniuses.</p>
            </div>
            <p className="usertstm">Mercy Thoras, Tinder</p>
          </div>
          <div className="item">
            <div className="dv-shads">
              <p>If I have to describe YouthBeat in one word, I choose the word "craziness." The team is adaptable, even when unforeseen challenges arise toward the end, they handle it. They are extremely efficient as well as possess excellent creativity</p>
            </div>
            <p className="usertstm">XYZ, OnePlus</p>
          </div>
          <div className="item">
            <div className="dv-shads">
              <p>These guys are passionate about their art and extraordinary creative capabilities. They are young, ambitious, and extremely efficient. Most importantly, they work as an unified and balanced unit.
                YouthBeat provides a wide range of solutions, proving to be complete youth marketing geniuses.</p>
            </div>
            <p className="usertstm">Mercy Thoras, Tinder</p>
          </div>
          <div className="item">
            <div className="dv-shads">
              <p>If I have to describe YouthBeat in one word, I choose the word "craziness." The team is adaptable, even when unforeseen challenges arise toward the end, they handle it. They are extremely efficient as well as possess excellent creativity</p>
            </div>
            <p className="usertstm">XYZ, OnePlus</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="progrmsfrms revealer">
    <div className="container">
      <div className="mainhead text-left">
        <h3 className="centheads" data-aos="fade-left" data-aos-duration={3000}>Client enquire form</h3>
      </div>
      <div className="mnformsty">
        <form>
          <div className="form-group  row">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="DOB" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Gender" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="College" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Semester" />
            </div>
            <div className="col-md-12">
              <button className="ytthemects">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

   
      <Footer />
    </div>
  )
}

export default Services
