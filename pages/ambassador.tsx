import { useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
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

const Ambassador = () => {
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
        dots: true,
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
        center: true,
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
        center: true,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: true,
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
        items: 3,
        margin: 40,
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: true,
        dots: false,
      },
    },

    responsive_advantfeat: {
      items: 3,
      loop: true,
      nav: false,
      margin: 20,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      autoplayHoverPause: true,
      center: true,

      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: false,
        dots: true,
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
      },
    },

    responsive_homefirstbbn: {
      0: {
        items: 1,
        nav: false,
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

    responsive_trust_comp: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        animateOut: 1,
        animateIn: 0,
        loop: true,
      },
      300: {
        loop: true,
        autoplay: true,
        items: 1,
        nav: false,
        animate: true,
        autoplay: true,
        autoplaySpeed: 6000,
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
        items: 6,
        nav: false,
        autoplay: true,
        animate: true,
        autoplaySpeed: 6000,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        dots: true,
        loop: true,
      },
    },

    responsive_top_curculms: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },

      766: {
        items: 3,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 1,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: true,
      },
    },

    responsive_top_catnew: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },

      766: {
        items: 3,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 4,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: true,
      },
    },
  }

  return (
    <div>
      <Header />

      <section className="homebannnerk">
        <img src="./images/hm9.jpg" className="desktopayout" />
        <img src="./images/homemobile.jpg" className="mobstopayout" />
        <div className="container"></div>
      </section>
      <section className="letsyoubet revealer">
        <div className="container">
          <div className="mainhead">
            <h3
              className="centheads"
              data-aos="flip-down"
              data-aos-duration={3000}
            >
              <img src="./images/smilheads.png" className="anmemojs" />
              Let YouthBeat
              <br />
              take the wheel!
            </h3>
            <p className="sbhds">
              We’re young, always evolving, and hungry for more
            </p>
          </div>
          <div className="mdhouseslide">
            <OwlCarousel
              className="whygridsphn owl-theme owl-carousel"
              loop
              responsive={state.responsive_featuredslide}
              nav
            >
              <div className="item">
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/1.jpg"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  />
                  <div className="cse-txts">
                    <p>
                      Get free entry and earn exciting merch from huge brands!{' '}
                    </p>
                  </div>
                </div>
                <h4>
                  Exclusive
                  <br /> Rewards!
                </h4>
              </div>

              <div className="item">
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/2.jpg"
                    data-aos="fade-down"
                    data-aos-duration={1500}
                  />
                  <div className="cse-txts">
                    <p>
                      Resonate the tunes of popular brands and work with them!
                    </p>
                  </div>
                </div>
                <h4>
                  Participate
                  <br />
                  &amp; Amplify!
                </h4>
              </div>
              <div className="item">
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/3.jpg"
                    data-aos="fade-up"
                    data-aos-duration={2500}
                  />
                  <div className="cse-txts">
                    <p>
                      Hangout with creators and live the trendy Instagram life!
                    </p>
                  </div>
                </div>
                <h4>
                  Become
                  <br /> the buzz!
                </h4>
              </div>
              <div className="item">
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/4.jpg"
                    data-aos="fade-down"
                    data-aos-duration={3000}
                  />
                  <div className="cse-txts">
                    <p>
                      Land your dream job after receiving certificates and LORs!
                    </p>
                  </div>
                </div>
                <h4>
                  Upgrade
                  <br /> your CV!{' '}
                </h4>
              </div>
              <div className="item">
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/1.jpg"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  />
                  <div className="cse-txts">
                    <p>
                      Get free entry and earn exciting merch from huge brands!{' '}
                    </p>
                  </div>
                </div>
                <h4>
                  Exclusive
                  <br /> Rewards!
                </h4>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="partnersincr revealer">
        <div className="container">
          <div className="mainhead">
            <p className="sbhds">Meet our partners in creativity</p>
          </div>
        </div>
        <div className="blacklayers">
          <div className="container">
            <OwlCarousel
              className="partnrslide owl-carousel owl-theme"
              loop
              responsive={state.responsive_featuredslide}
              nav
            >
              <div className="item">
                <img
                  src="./images/ourpatner/1.png"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                />
              </div>
              <div className="item">
                <img
                  src="./images/ourpatner/2.png"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                />
              </div>
              <div className="item">
                <img
                  src="./images/ourpatner/3.png"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                />
              </div>
              <div className="item">
                <img
                  src="./images/ourpatner/4.png"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="showcaseytbs revealer">
        <img src="./images/backoutservice.jpg" className="desktopayout" />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src="./images/roundlady.png"
                data-aos="flip-left"
                data-aos-duration={3000}
              />
            </div>
            <div className="col-md-7 align-self-center">
              <h2 data-aos="fade-left" data-aos-duration={3000}>
                Want to{' '}
                <span className="txstrks">
                  make a name{' '}
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 152.9 43.4"
                    style={{ enableBackground: 'new 0 0 152.9 43.4' }}
                    xmlSpace="preserve"
                  >
                    <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
                  </svg>
                </span>
                <br />
                in your campus?
                <br />
              </h2>
              <p className="curvtxt">Create with YouthBeat</p>
            </div>
          </div>
          <div className="mdhouseslide">
            <OwlCarousel
              className="casestslide owl-carousel owl-theme"
              loop
              responsive={state.responsive_reviewtestim}
              nav
            >
              <div className="item">
                <img
                  src="./images/madhouse/1.jpg"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={1000}
                />
                <h4>
                  Chase the case
                  <br /> studies
                </h4>
                <a href="#">
                  read more
                  <br />
                  <img src="./images/readmorec.png" />
                </a>
              </div>
              <div className="item">
                <img
                  src="./images/madhouse/2.jpg"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={2000}
                />
                <h4>
                  See the
                  <br /> innovation
                  <br /> we bring
                </h4>
                <a href="#">
                  read more
                  <br />
                  <img src="./images/readmorec.png" />
                </a>
              </div>
              <div className="item">
                <img
                  src="./images/madhouse/3.jpg"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={3000}
                />
                <h4>
                  Learn the ways
                  <br />
                  of YouthBeat
                </h4>
                <a href="#">
                  read more
                  <br />
                  <img src="./images/readmorec.png" />
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="ouytbservice revealer">
        <div className="container">
          <div className="mainhead">
            <p className="sbhds">We’re proud of our work</p>
            <h3
              className="centheads"
              data-aos="flip-down"
              data-aos-duration={3000}
            >
              Revamp your brand{' '}
              <img src="./images/keycta.png" className="keyemojs" />
              <br />
              with our network
            </h3>
          </div>
          <div className="servnumcounts numbers">
            <div className="row">
              <div className="col-md-4">
                <p className="numctn skblues number-item">
                  <span className="value">250000</span>+
                </p>
                <p>
                  Campus Reps &amp; <br /> Ambassadors
                </p>
              </div>
              <div className="col-md-4">
                <p className="numctn rednums number-item">
                  <span className="value">50000</span>+
                </p>
                <p>
                  Content creator <br /> collaborations
                </p>
              </div>
              <div className="col-md-4">
                <p className="numctn yelnums number-item">
                  <span className="value">1500</span>+
                </p>
                <p>
                  Partnered Universities <br />
                  &amp; Institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="membersytbs revealer">
        <div className="container">
          <div className="mainhead">
            <p className="sbhds">Our band members</p>
          </div>
          <div className="membslides">
            <OwlCarousel
              className="bdmembslide owl-carousel owl-theme"
              loop
              responsive={state.responsive_reviewtestim}
              nav
            >
              <div className="item">
                <img
                  src="./images/members/1.jpg"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                />
              </div>
              <div className="item">
                <img
                  src="./images/members/2.jpg"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                />
              </div>
              <div className="item">
                <img
                  src="./images/members/3.jpg"
                  data-aos="zoom-in"
                  data-aos-duration={3000}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="progrmsfrms revealer">
        <div className="container">
          <div className="mainhead text-left">
            <h3
              className="centheads"
              data-aos="fade-left"
              data-aos-duration={3000}
            >
              Join the hood. Be a YB Ambassador
            </h3>
          </div>
          <div className="mnformsty">
            <form>
              <div className="form-group  row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="DOB"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gender"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="College"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Semester"
                  />
                </div>
                <div className="col-md-12">
                  <button className="ytthemects">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Ambassador
