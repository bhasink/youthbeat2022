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
   /* AOS.init({
      duration: 2000,
    }) */
  }, [])

  const state = {
    

    responsive_advantfeat: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
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
        items: 1,
        margin: 20,
        nav: true,
        center: false,
        dots: false,
        loop: false,
      }
      
    },

    

    
  }

  return (
    <div>
      <Header />

<div>
  <section className="cultur-comps mt-0">
    <div className="container">
      <div className="mainhead">
        <h3 className="centheads">Company<br />
          <span className="skblues">Culture</span></h3>
      </div>
      <div className='seelike'>
      <div className="row">
        <div className="col-md-12 align-self-center mx-auto text-center">
          <p>We keep our clients close and our culture even closer!  </p>
          <h6>What is our culture like? 
            See for yourself  <img src="./images/handbots.png" className="handemos" /></h6>
        </div>
        
      </div>
      </div>
    </div>

    <div className="col-md-9 mx-auto">
          <img src="./images/shockyel2.png" className="rightflowrs" />
          <div className="outstls">
            <OwlCarousel
              className="owl-theme owl-carousel"
              
              responsive={state.responsive_advantfeat}
              
            >
              <div className="item">
                <img src="./images/cmculture/1.jpg" />
              </div>
              <div className="item">
                <img src="./images/cmculture/2.jpg" />
              </div>
              <div className="item">
                <img src="./images/cmculture/3.jpg" />
              </div>

              <div className="item">
                <img src="./images/cmculture/4.jpg" />
              </div>

              <div className="item">
                <img src="./images/cmculture/5.jpg" />
              </div>

              <div className="item">
                <img src="./images/cmculture/6.jpg" />
              </div>

              <div className="item">
                <img src="./images/cmculture/7.jpg" />
              </div>

            </OwlCarousel>
          </div>
        </div>

  </section>
 
  <section className="opps-services">
    <div className="container">
      <div className="mainhead">
        <p className="sbhds">What Our Madhouse Offers</p>
      </div>
      <div className="workconts">
        <div className="row">
          <div className="col-md-6 col-6">
            <div className="wrk frmpnk">
              <h4>Learn From<br />
               
                Creators</h4>
              <p>Flaunt your social game in your
                hood, work with creators that are
                extremely popular! </p>
              <img src="./images/oppserv/11.jpg" />
            </div>
          </div>
          <div className="col-md-6 col-6">
            <div className="wrk frmskv">
              <h4>REWARDING<br />
                
                Programs
              </h4>
              <p>Work with massive brands on new
                and interesting campaigns and
                learn new skills! 
              </p>
              <img src="./images/oppserv/12.jpg" />
            </div>
          </div>
          <div className="col-md-6 col-6">
            <div className="wrk frmyel">
              <h4>Meet &amp;<br />
                CREATE
              </h4>
              <p>Meet unique and like-minded
                individuals and create some
                of the greatest content ever!</p>
              <img src="./images/oppserv/13.jpg" />
            </div>
          </div>
          <div className="col-md-6 col-6">
            <div className="wrk frmorgs">
              <h4>Lucrative<br />
                Incentives
              </h4>
              <p>A special bonuses to assist you
                in constructing resumes,
                YB is the next step in your game!</p>
              <img src="./images/oppserv/14.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="jbopenings text-center">
    <div className="container">
      <div className="mainhead">
        <p className="sbhds"> <span className="coolstds">Work with us <img src="./images/workwistrok.png" /></span></p>
      </div>

      <p>Want to work with crazy brands, live the Insta-trendy lifestyle, and hangout with the best of creators out there? <br/>
      No need to look any further! Join YouthBeat now.
</p>

<p>
 
</p>
      {/* <div className="jobslts">
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
      </div>*/ }
    </div>
  </section>
  <section className="lastfrms text-center mb-5 pt-2">
    <div className="container">
      <a href='https://sociowash.zohorecruit.com/jobs/Careers' target="_blank" rel="noreferrer" className="ytthemects bggct"><span class="inrshd">Click Here</span></a>
      <h4>To become <span className="coolstds">cool <img src="./images/toocoolsv.png" /></span> today. </h4>
    </div>
  </section>
</div>



      <Footer />
    </div>
  )
}

export default JoinUs
