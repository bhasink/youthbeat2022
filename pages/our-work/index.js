import { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import AOS from 'aos'
import Link from 'next/link'
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

const OurWork = () => {
  const [caseStudy, setCaseStudy] = useState([])

  useEffect(() => {
   /* AOS.init({
      duration: 2000,
    })*/
  }, [])

  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const _id = router.query._id
      getCaseStudy()
      console.log(router.query)
    }
  }, [router.isReady])

  const getCaseStudy = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/case-studies`,
      )

      const getCS_data = data.data.get_case_studies

      setCaseStudy(getCS_data)

      console.log(data)
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
        items: 4,
        margin: 40,
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: false,
        dots: false,
      },
    }
  }

  return (
    <div>
      <Header />

      <style>{`
       
        
        .yt-footh {
            transform: none;
            padding-top: 12px;
        }
      `}</style>

      <section className="howwedeliv-ytb position-relative">
        <img src="./images/ourwbbg2.jpg" className="desktopayout" />
        <div className="container">
          <div className="mainhead whithd text-left">
            <h3
              className="centheads aos-init aos-animate"
              data-aos="flip-down"
              data-aos-duration={3000}
            >
              See how we deliver <img src="./images/twik.png" />
              <br />
              quality
            </h3>
          </div>
          <div>
            {caseStudy.length && (
              <OwlCarousel
                className="casestslide owl-carousel owl-theme"
                loop
                responsive={state.responsive_reviewtestim}
                nav
              >
                {caseStudy &&
                  caseStudy.map((cs_data, key) => (
                    <div className="item">
                      <Link href={`our-work/${cs_data.slug}`}>

                        <img
                          src={
                            `${process.env.NEXT_PUBLIC_B_API}case-study/thumbnail/` +
                            cs_data.thumbnail
                          }
                        />
                     </Link>
                      <h4>{cs_data.name}</h4>
                    </div>
                  ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurWork