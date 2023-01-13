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
    <img src="./images/ourservices2.jpg" className="desktopayout" />
    <div className="container">
      <div className="mainhead whithd">
        <p className="sbhds">What is YouthBeat?</p>
        <h3 className="centheads"><img src="./images/bombobjs.png" className="sunbom" />We're youthful, full of energy,<br />
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
            <img src="./images/creobj.png" className="fltsbt" />
            <img src="./images/genfr.jpg" />
            <p>Vibe  <br />check!</p>
          </div>
        </div>
      </div>
    </div>

   {/**<div className="usps"><p>// MAIN CHARACTER  </p><p>// MAIN CHARACTER  </p><p>// MAIN CHARACTER  </p><p>// MAIN CHARACTER  </p><p>// MAIN CHARACTER  </p><p>// MAIN CHARACTER  </p><p>// MAIN CHARACTER  </p><p>// MAIN CHARACTER  </p></div> */} 

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
            <img src="./images/graphpyes.png"/>
            <img src="./images/targargs.png" className="targars"/>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="mainhead text-left">
              <h3 className="centheads">Traffic <br />generated<br />
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
            <h4>This is where 
              you give<br /> your
              marketing keys<br />
              to YouthBeat.
            </h4>
          </div>
          <div className="col-md-6 align-self-center position-relative">
            <img src="./images/service2.jpg" className="img-fluid" />
            <img src="./images/genx.png" className="gnround" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="testimons-ytb revealer">
    <div className="container">
      <div className="mainhead">
        <p className="sbhds">What they say about us on the ‘Gram</p>
      </div>
      <div className="testslid">
        
        <OwlCarousel
                className="slidertst-ytb owl-carousel owl-theme"
                loop
                responsive={state.responsive_testimblack}
                nav
              >
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
         </OwlCarousel>
        
      </div>
    </div>
  </section>
  <section className="progrmsfrms revealer">
    <div className="container">
      <div className="mainhead text-left">
        <h3 className="centheads">Client Enquiry Form</h3>
      </div>
      <div className="mnformsty">
        <form>
          <div className="form-group  row">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Name" />
            </div>

            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Company Email" />
            </div>

            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Mobile Number" />
            </div>

            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Designation" />
            </div>
            
            
            <div className="col-md-6">
            
              <select
                    type="text"
                    className="form-control">
					<option>
          Services Required
					</option>
					
					<option>
          Ambassador Connect
					</option>

          <option>
          Creator Connect
					</option>

          <option>
          Both
					</option>
				  </select>
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
