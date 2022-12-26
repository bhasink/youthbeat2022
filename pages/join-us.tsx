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

const JoinUs = () => {
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
  <section className="cultur-comps">
    <div className="container">
      <div className="mainhead">
        <h3 className="centheads aos-init aos-animate" data-aos="flip-down" data-aos-duration={3000}><img src="./images/flapon.png" className="flapswing" />Company<br />
          <span className="skblues">Culture</span></h3>
      </div>
      <div className="row">
        <div className="col-md-7 align-self-center mx-auto">
          <p>We keep our clients close and our culture even closer! </p>
          <h6>What is our culture like? <br />
            See for yourself  <img src="./images/handbots.png" className="handemos" /></h6>
        </div>
        <div className="col-md-7 mx-auto">
          <img src="./images/shockyel2.png" className="rightflowrs" />
          <div className="outstls">
            <div className="culturesslide owl-carousel owl-theme">
              <div className="item">
                <img src="./images/join1.jpg" />
              </div>
              <div className="item">
                <img src="./images/join1.jpg" />
              </div>
              <div className="item">
                <img src="./images/join1.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="cultureshowcase">
    <div className="container">
    </div>
  </section>
  <section className="opps-services">
    <div className="container">
      <div className="mainhead">
        <p className="sbhds">Opportunities/Services</p>
      </div>
      <div className="workconts">
        <div className="row">
          <div className="col-md-6">
            <div className="wrk frmpnk">
              <h4>Work with<br />
                Content<br />
                Creators</h4>
              <p>Flaunt your social game in your
                hood, work with creators that are
                extremely popular! </p>
              <img src="./images/oppserv/1.jpg" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="wrk frmskv">
              <h4>Campus<br />
                Ambassador<br />
                Programs
              </h4>
              <p>Work with massive brands on new
                and interesting campaigns and
                learn new skills! 
              </p>
              <img src="./images/oppserv/2.jpg" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="wrk frmyel">
              <h4>Meet &amp;<br />
                CREATE
              </h4>
              <p>Meet unique and like-minded
                individuals and create some
                of the greatest content ever!</p>
              <img src="./images/oppserv/3.jpg" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="wrk frmorgs">
              <h4>Lucrative<br />
                Incentives
              </h4>
              <p>A special bonuses to assist you
                in constructing resumes,
                YB is the next step in your game!</p>
              <img src="./images/oppserv/4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="jbopenings">
    <div className="container">
      <div className="mainhead">
        <p className="sbhds"> <span className="coolstds">Work with us <img src="./images/workwistrok.png" /></span></p>
      </div>
      <div className="jobslts">
        <h4>Account Manager <img src="./images/arropinks.png" /></h4>
      </div>
      <div className="jobslts">
        <h4>Client Servicing <img src="./images/arropinks.png" /></h4>
      </div>
      <div className="jobslts">
        <h4>Project Manager <img src="./images/arropinks.png" /></h4>
      </div>
      <div className="jobslts">
        <h4>Graphic Designer <img src="./images/arropinks.png" /></h4>
      </div>
    </div>
  </section>
  <section className="lastfrms text-center">
    <div className="container">
      <button className="ytthemects">Click Here</button>
      <h4>To become <span className="coolstds">cool <img src="./images/toocoolsv.png" /></span> today! </h4>
    </div>
  </section>
</div>



      <Footer />
    </div>
  )
}

export default JoinUs
