import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
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
import { useRouter } from 'next/router'
import axios from 'axios'
import { json } from 'stream/consumers'

const OurWorkDetails = () => {
  const [caseStudy, setCaseStudy] = useState([])

  const router = useRouter()

  useEffect(() => {

    AOS.init({
        duration: 2000,
      })

    if (router.isReady) {
      const _id = router.query._id
      getCaseStudies(_id)
      console.log(_id)
    }
  }, [router.isReady])

  const getCaseStudies = async (_id) => {
    try {

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/case-studies`,
        {
          slug: _id,
        },
        config,
      );

      const getCS_data = data.data.get_case_study;

      setCaseStudy(getCS_data)

      console.log(data)
      console.log(getCS_data)

    } catch (err) {
      console.log(err)
    }
  }

  const state = {
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
        items: 1,
        margin: 40,
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: true,
        dots: false,
      },
    },
  }

  return (
    <div>
      <Header />
      <section className="ytmarkts botms caseinfos">
        <div className="whyytmrk whitetxt">
          <div className="container">
            <div className="row">
              <div className="col-md-7 align-self-center">
                <div className="mainhead text-left whitetxt">
                  <h5
                    className="centheads"
                    data-aos="flip-down"
                    data-aos-duration={3000}
                  >
                    About The Brand{' '}

                  </h5>
                </div>
                <p>
                 {caseStudy.about_the_brand_desc_one}
                </p>
                <h6>
                {caseStudy.about_the_brand_desc_two}
                </h6>
              </div>
              <div className="col-md-5 align-self-center position-relative">
                <div className="genfrs position-relative">
                  <img
                    src="/images/creobj.png"
                    className="fltsbt"
                    data-aos="flip-right"
                    data-aos-duration={3000}
                  />

<img
                          src={
                            `${process.env.NEXT_PUBLIC_B_API}case-study/about_the_brand_img/` +
                            caseStudy.about_the_brand_img
                          }
                          className="img-fluid" data-aos="fade-up"
                          data-aos-duration={3000}
                        />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="key-ybvisuals">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h3>
                Key
                <br />
                Visuals
              </h3>
              <p>
              See how we make everyone turn their heads and notice you{' '}
              </p>
            </div>
            <div className="col-md-6">
              <div className="outstls">

                <OwlCarousel
                className="culturesslide owl-carousel owl-theme"
                loop
                responsive={state.responsive_reviewtestim}
                nav
              >
                  <div className="item">
                    <img src="/images/keyvisu.jpg" />
                  </div>

                  <div className="item">
                    <img src="/images/keyvisu.jpg" />
                  </div>

                  <div className="item">
                    <img src="/images/keyvisu.jpg" />
                  </div>

                  <div className="item">
                    <img src="/images/keyvisu.jpg" />
                  </div>

                </OwlCarousel>
                 
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="showcs-ytbs">
        <div className="row">
          <div className="col-md-6 position-relative p-0">
            
<img
                          src={
                            `${process.env.NEXT_PUBLIC_B_API}case-study/cs_image/` +
                            caseStudy.cs_image
                          }
                          className="img-fluid"
                        />
            <h4>
            {caseStudy.cs_name} 
            </h4>
          </div>
          <div className="col-md-6 d-flex">
            <div className="col-md-12 align-self-center">
              <h5>{caseStudy.name}  </h5>
              <p>
              {caseStudy.cs_description}
              </p>
              <div className="strbcks">

                
                <a target={'_blank'} href={process.env.NEXT_PUBLIC_B_API+'/case-study/cs_pdf/'+caseStudy.cs_pdf} className="ytthemects">View Here </a>
                <img src="/images/bluestrs.png" />
              </div>
            </div>
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
              Sign up form
            </h3>
          </div>
          <div className="mnformsty">
            <form>
              <div className="form-group  row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
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
                    placeholder="Details"
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

export default OurWorkDetails