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

      <section className="homebannnerk">
        <img src="./images/hm9.jpg" className="desktopayout" />
        <img src="./images/homemobile.jpg" className="mobstopayout" />
        <div className="container"></div>
      </section>
      <section className="letsyoubet revealer" data-aos=""
        data-aos-duration={1500} >
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

            <p className="subbol"><b>What Our Madhouse Offers</b></p>
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

              <div className="item" data-aos="fade-down"
                    data-aos-duration={1500}>
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/2.jpg"/>
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
              <div className="item" data-aos="fade-up"
                    data-aos-duration={2500}>
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/3.jpg"/>
                  <div className="cse-txts">
                    <p>
                      Hangout with creators and live the trendy Instagram life!
                    </p>
                  </div>
                </div>
                <h4>
                  Own the
                  <br />  buzz!
                </h4>
              </div>
              <div className="item" data-aos="fade-down"
                    data-aos-duration={3000}>
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/4.jpg"/>
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
              <div className="item" data-aos="fade-up"
                    data-aos-duration={1000}>
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/1.jpg" />
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
      <section className="partnersincr revealer" data-aos=""
        data-aos-duration={1500}>
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
              <div className="item" data-aos="zoom-in"
                  data-aos-duration={1000}>
                <img
                  src="./images/ourpatner/1.png"/>
              </div>
              <div className="item" data-aos="zoom-in"
                  data-aos-duration={1500}>
                <img
                  src="./images/ourpatner/2.png" />
              </div>
              <div className="item" data-aos="zoom-in"
                  data-aos-duration={2000}>
                <img
                  src="./images/ourpatner/3.png"/>
              </div>
              <div className="item" data-aos="zoom-in"
                  data-aos-duration={1000}>
                <img
                  src="./images/ourpatner/4.png" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="showcaseytbs revealer aos-init" data-aos="" data-aos-duration={3000}>
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
              <div className="item" data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={1000}>
                <img
                  src="./images/madhouse/5.jpg"
                  
                />
                <p><b>Myntra</b></p>
                <h4>
                Check out our <br /> trendy work
                </h4>
                <a href="#">
                  read more
                  <br />
                  <img src="./images/readmorec.png" />
                </a>
              </div>
              <div className="item"  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={2000}>
                <img
                  src="./images/madhouse/6.jpg"
                 
                />
                <p><b>One Plus</b></p>
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
              <div className="item"  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={3000}>
                <img src="./images/madhouse/7.jpg"/>

                <p><b>Tinder</b></p>
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
      <section className="ouytbservice revealer" data-aos=""
        data-aos-duration={1500}>
        <div className="container">
          <div className="mainhead">
            <p className="sbhds">Become the hot trend in your campus! </p>
            <h3
              className="centheads"
              data-aos="flip-down"
              data-aos-duration={3000}
            >
              Join YouthBeat and<br />
earn new skills!{' '}
              <img src="./images/keycta.png" className="keyemojs" />
             
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
                  <span className="value">1500</span>+
                </p>
                <p>
                  Partnered Universities <br />
                  &amp; Institutions
                </p>
              </div>
              <div className="col-md-4">
                <p className="numctn yelnums number-item">
                  <span className="value">250</span>+
                </p>
                <p>
                  Projects Worked On
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="membersytbs revealer" data-aos=""
        data-aos-duration={1500}>
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
              <div className="item" data-aos="zoom-in"
                  data-aos-duration={1000}>
                <img
                  src="./images/members/1.jpg"/>
              </div>
              <div className="item" data-aos="zoom-in"
                  data-aos-duration={2000}>
                <img
                  src="./images/members/2.jpg"/>
              </div>
              <div className="item"  data-aos="zoom-in"
                  data-aos-duration={3000}>
                <img
                  src="./images/members/3.jpg"/>
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

              <div className="col-md-3">
					 <input type="text" className="form-control" placeholder="Email"/>
				</div>
				
				<div className="col-md-3">
					 <input type="text" className="form-control" placeholder="Name"/>
				</div>
				
				<div className="col-md-3">
					 <input type="text" className="form-control" placeholder="Contact Number"/>
				</div>
				
				<div className="col-md-3">
					 <input type="text" className="form-control" placeholder="Age"/>
				</div>
				
				<div className="col-md-3">
					 <input type="text" className="form-control" placeholder="Gender"/>
				</div>
				
				<div className="col-md-3">
					 <input type="text" className="form-control" placeholder="City"/>
				</div>
				
				<div className="col-md-6">
					 <input type="text" className="form-control" placeholder="Instagram Profile Link"/>
				</div>
				
				<div className="col-md-6">
					 <input type="text" className="form-control" placeholder="How many Instagram followers do you currently have?"/>
				</div>
				
				<div className="col-md-12">
					 
				</div>

        <div className="col-md-4">
					<label><b>Your presence on other social media platforms</b></label>
					 
					  <div className="dropdown">
  <button className="btn btn-default dropdown-toggle form-control" type="button" data-toggle="dropdown"><span className="dropdown-text"> Select Options</span>
  <span className="caret"></span></button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
	
    <label><input type="checkbox" className="selectall" /><span className="select-text"> Select</span> All</label>
    
    <label><input name='options[]' type="checkbox" className="option justone" value='Option 1 '/> Facebook</label>
	<label><input name='options[]' type="checkbox" className="option justone" value='Option 2 '/> Youtube</label>
    <label><input name='options[]' type="checkbox" className="option justone" value='Option 3 '/> Twitter</label>
	<label><input name='options[]' type="checkbox" className="option justone" value='Option 4 '/> Snapchat</label>
	<label><input name='options[]' type="checkbox" className="option justone" value='Option 5 '/> Moj</label>
	<label><input name='options[]' type="checkbox" className="option justone" value='Option 6 '/> Josh</label>
	<label><input name='options[]' type="checkbox" className="option justone" value='Option 7 '/> Sharechat</label>
	<label><input name='options[]' type="checkbox" className="option justone" value='Option 8 '/> Other</label>
	
	
	
	
  </div>
</div>
				</div>


        <div className="col-md-4">
				<label><b>College</b></label>
					 <input type="text" className="form-control" placeholder="Which city is your college in?"/>
				</div>

        <div className="col-md-4">
				 <label><b>What are you studying/planning to study?</b> <br/></label>
					 <input type="text" className="form-control" placeholder="Please mention your degree of specialisation."/>
				</div>

        <div className="col-md-4">
				 <label><b>Select your college year for the upcoming academic session for the year 2023-24</b></label>
					 <select className="form-control">
						<option>I</option>
						<option>II</option>
						<option>III</option>
						<option>IV</option>
						<option>V</option>
					 </select>
				</div>


        <div className="col-md-4">
					 <p><b>Have you joined any YouthBeat Campus Programs before?</b></p>
					 <div className="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
  <label className="custom-control-label" for="customRadioInline1">Yes</label>
</div>
<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
  <label className="custom-control-label" for="customRadioInline2">No</label>
</div>
					<p className="small">(If you are currently a part of any Campus Program by YouthBeat, please select Yes)  </p>
				</div>

        <div className="col-md-4">
					 <div className="custom-file">
  <input type="file" className="custom-file-input" id="customFile"/>
  <label className="custom-file-label" for="customFile">Please attach your CV</label>
</div>
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
