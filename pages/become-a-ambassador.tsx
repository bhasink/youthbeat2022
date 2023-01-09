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

const BecomeAAmbassador = () => {
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
        nav: false,
        center: false,
        autoplay: true,
        margin: 20,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
      },
    },
	
	
	responsive_mobilessslide: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },
      300: {
        items: 1,
        nav: false,
        center: false,
        autoplaySpeed: 3000,
        autoplay: true,
        dots: false,
        margin: 0,
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
        items: 1,
        nav: false,
        center: false,
        autoplay: true,
        margin: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
	      animateOut: 'fadeOut',
        dots: false,
        loop: true,
      },
    },


    responsive_testnmslide: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },
      300: {
        items: 1,
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
        items: 3,
        nav: false,
        center: false,
        autoplay: true,
        margin: 20,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: false,
        loop: false,
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
         <OwlCarousel
              className="partnrslide owl-carousel owl-theme"
              loop
              responsive={state.responsive_featuredslide}
              nav
            >
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
        </OwlCarousel>
      </div>
      <div className="mainhead whithd text-left">
        <h3 className="centheads" data-aos="fade-right" data-aos-duration={3000}>Ambassadors<br />
          Connect 
        </h3>
        <p className="sbhds">Make noise and earn enticing rewards!</p>
        <p className="curvtxt">By YouthBeat</p>
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
          <span>Work with big brands! </span>
          <img src="./images/bombobjs.png" />
        </div>
        <div className="tags-ytb skblu-cl">
          <span>Be the talk!</span>
        </div>
        <div className="tags-ytb yllw-cl">
          <span>Amazing Incentives!</span>
          <img src="./images/collbs.png" />
        </div>
        <div className="tags-ytb pinks-cl">
          <span>Kickstart your Resume!</span>
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
            <OwlCarousel
              className="partnrslide owl-carousel owl-theme"
              responsive={state.responsive_mobilessslide} >

              <div className="item">
                <img src="./images/showcasein2.png" className="img-fluid" />
              </div>

              <div className="item">
                <img src="./images/showcasein.png" className="img-fluid" />
              </div>
              
            </OwlCarousel>
          </div>
        </div>
      </div></div></section>
  <section className="testimons-nwytb revealer" data-aos data-aos-duration={1500}>
    <div className="container">
      <div className="mainhead">
        <p className="sbhds">Testimonials</p>
      </div>
      <div className="testslid">
       
        <OwlCarousel
              className="newtestslide owl-carousel owl-theme"
              responsive={state.responsive_testnmslide} >
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/1.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>As an ambassador of YouthBeat not only did I enjoy my college but learned a lot of things!</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>I met a lot of cool people in my community, and also worked with amazing brands while picking up new skills and interests.</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/1.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>I wish to be a member of YouthBeat forever. </p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>YouthBeat has given me an opportunity to not just learn but find my true passion for marketing. </p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/1.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>I will always be thankful for the campaigns I worked on with them and how they helped me grow and find my calling. </p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          </OwlCarousel>
       
      </div>
    </div>
  </section>
  <section className="progrmsfrms revealer">
        <div className="container">
          <div className="mainhead text-center">
            <h3
              className="centheads"
              data-aos="fade-left"
              data-aos-duration={3000}
            >
              Join the hood. Be a YB Ambassador
            </h3>
          </div>
          <div className="mnformsty singlefrms">
          <div className="stepform" style={{display:'block'}}>
            <form>
              <div className="form-group  row">

        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Name"/>
        </div>

        <div className="col-md-6">
					 <input type="text" className="form-control" placeholder="Email"/>
				</div>
				
				<div className="col-md-6">
					 <input type="text" className="form-control" placeholder="Contact Number"/>
				</div>
				
				<div className="col-md-6">
					 <input type="text" className="form-control" placeholder="Age"/>
				</div>
				
				<div className="col-md-12">
					 <input type="text" className="form-control" placeholder="Gender"/>
				</div>
				
				
 
                <div className="col-md-12">
                  <button className="ytthemects">Submit</button>
                </div>
              </div>
            </form>
            </div>


            <div className="stepform">
            <form>
              <div className="form-group  row">

        
				
				<div className="col-md-12">
           <label><b>Instagram Profile Link</b></label>
					 <input type="text" className="form-control" placeholder="Your Instagram Profile Link"/>
				</div>
				
				
        

        
 
                <div className="col-md-12">
                <button className="ytthemects">back</button>
                  <button className="ytthemects">Next</button>
                </div>
              </div>
            </form>
            </div>



            <div className="stepform">
            <form>
              <div className="form-group  row">

        
				
				<div className="col-md-12">
        <label><b>Instagram followers</b></label> 
           <select className="form-control">
              <option>How many Instagram followers do you currently have?</option>
              <option>10-15k</option>
              <option>20-100k</option>
					 </select>
        
        </div>
				
                <div className="col-md-12">
                <button className="ytthemects">back</button>
                  <button className="ytthemects">Next</button>
                </div>
              </div>
            </form>
            </div>


            <div className="stepform">
            <form>
              <div className="form-group  row">

        
				
				
        <div className="col-md-12">
				<label><b>College</b></label>
					 <input type="text" className="form-control" placeholder="Which city is your college in?"/>
				</div>

        

 
                <div className="col-md-12">
                <button className="ytthemects">back</button>
                  <button className="ytthemects">Next</button>
                </div>
              </div>
            </form>
            </div>



            <div className="stepform">
            <form>
              <div className="form-group  row">

        
				

        <div className="col-md-12">
				 <label><b>What are you studying/planning to study?</b> <br/></label>
					 <input type="text" className="form-control" placeholder="Please mention your degree of specialisation."/>
				</div>

        

 
                <div className="col-md-12">
                <button className="ytthemects">back</button>
                  <button className="ytthemects">Next</button>
                </div>
              </div>
            </form>
            </div>



            <div className="stepform">
            <form>
              <div className="form-group  row">

        

        <div className="col-md-12">
				 <label><b>Select your college year for the upcoming academic session for the year 2023-24</b></label>
					 <select className="form-control">
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
              <option>V</option>
					 </select>
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

export default BecomeAAmbassador
