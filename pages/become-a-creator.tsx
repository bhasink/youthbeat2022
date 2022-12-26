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

const BecomeACreator = () => {
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
  <section className="connectcrts">
    <div className="container">
      <div className="slidechngrs">
        <div className="bdmembslide owl-carousel owl-theme">
          <div className="item">
            <img src="./images/creators/1.png" />
          </div>
          <div className="item">
            <img src="./images/creators/2.png" />
          </div>
          <div className="item">
            <img src="./images/creators/3.png" />
          </div>
          <div className="item">
            <img src="./images/creators/1.png" />
          </div>
          <div className="item">
            <img src="./images/creators/2.png" />
          </div>
        </div>
      </div>
      <div className="mainhead whithd text-left">
        <h3 className="centheads" data-aos="fade-right" data-aos-duration={3000}>Creator<br />
          Connect 
        </h3>
        <p className="sbhds">Let your content make the noise </p>
        <p className="curvtxt">Lorem Ipsum</p>
      </div>
    </div>
  </section>
  <section className="whatin-yb revealer" data-aos data-aos-duration={1500}>
    <div className="container">
      <div className="mainhead">
        <p className="sbhds">What is in it for you? </p>
      </div>
      <div className="tg-tpis">
        <div className="tags-ytb orng-cl">
          <span>Attract new Audiences</span>
          <img src="./images/bombobjs.png" />
        </div>
        <div className="tags-ytb skblu-cl">
          <span>Get crazy benefits</span>
          <img src="./images/creobj.png" />
        </div>
        <div className="tags-ytb yllw-cl">
          <img src="./images/exclusive.png" />
          <span>Exclusive Invites</span>
        </div>
        <div className="tags-ytb pinks-cl">
          <img src="./images/collbs.png" />
          <span>Collab with the Pros</span>
        </div>
        <div className="tags-ytb grng-cl">
          <img src="./images/blackrs.png" />
          <span>Learning &amp; Development </span>
        </div>
      </div>
    </div>
  </section>
  <section className="innershowsl revealer whitetxt" data-aos data-aos-duration={1500}>
    <img src="./images/showbgaback.jpg" className="desktopayout" />
    <div className="container">
      <div className="row">
        <div className="col-md-7 align-self-center">
          <div className="mainhead whithd text-left">
            <h2 className="centheads" data-aos="fade-left" data-aos-duration={3000}>Our <br /><span className="txstrks">Creative <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 152.9 43.4" style={{enableBackground: 'new 0 0 152.9 43.4'}} xmlSpace="preserve">
                  <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
                </svg></span><br />
              Showcase<br /></h2>
            <p>Read about the incredible insights we provide</p>
          </div>
        </div>
        <div className="col-md-5 align-self-center text-center">
          <div className="mobsets">
            <div className="mobilessslide owl-carousel owl-theme">
              <div className="item">
                <img src="./images/showcase1.png" className="img-fluid" />
              </div>
              <div className="item">
                <img src="./images/showcase2.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div></div></section>
  <section className="testimons-nwytb revealer" data-aos data-aos-duration={1500}>
    <div className="container">
      <div className="mainhead">
        <p className="sbhds">Testimonials</p>
      </div>
      <div className="testslid">
        <div className="newtestslide owl-carousel owl-theme">
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/1.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>These guys are extremely efficient and possess loads of creativity.</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>These guys are extremely efficient and possess loads of creativity.</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/1.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>These guys are extremely efficient and possess loads of creativity.</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>These guys are extremely efficient and possess loads of creativity.</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="progrmsfrms revealer">
    <div className="container">
      <div className="mainhead text-left">
        <h3 className="centheads" data-aos="fade-left" data-aos-duration={3000}>Join As A Creator
        </h3>
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

export default BecomeACreator
