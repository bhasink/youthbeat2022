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
        nav: false,
        center: false,
        autoplay: true,
        margin: 20,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        animateIn: true,
	      animateOut: false,
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
              className="bdmembslide owl-carousel owl-theme"
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
        <h3 className="centheads" data-aos="fade-right" data-aos-duration={3000}>Creator<br />
          Connect 
        </h3>
        <p className="sbhds">Let your content make the noise </p>
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
                <p>These guys are crazy!! Their art and creative capabilities are extraordinary. </p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>They are young, ambitious, loud, and extremely efficient. </p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/1.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>YouthBeat works as a unified and balanced unit. </p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>With a wide range of solutions, they are complete youth marketing geniuses.</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>If I have to describe YouthBeat in one word, I choose the word "noise."</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>The team is adaptable, even when unforeseen challenges arise toward the end, they handle them.</p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
          </div>


          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>They are extremely efficient and possess loads of creativity.</p>
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
          <div className="mainhead">
            <h3
              className="centheads"
              data-aos="fade-left"
              data-aos-duration={3000}
            >
              Join the hood!
            </h3>
          </div>
          <div className="mnformsty singlefrms">
          <div className="stepform" style={{display:'block'}}>
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
                    placeholder="Contact Number"
                  />
                </div>
				
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
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

                
                
				
                <div className="col-md-12">
                  <button className="ytthemects">Submit</button>
                </div>
              </div>
            </form>
          </div>

          <div className="stepform">
          <form>
              <div className="form-group  row">
			  

              

                <div className="col-md-6">  
                  <select className="form-control">
                        <option>
                          Primary Niche/Category
                        </option>
                        
                        <option>
                          Lorem Ipsum 2
                        </option>
                    </select>
                </div>


                <div className="col-md-6">
                    <select  className="form-control">
                      <option>
                        Secondary Niche/Category
                      </option>
                      
                      <option>
                        Lorem Ipsum 2
                      </option>
                    </select>
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
                <label><b>Instagram followers</b></label>
              </div>
              
				
          <div className="col-md-12">
            <input type="text"className="form-control" placeholder="Followers on Instagram"/>
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
              </div>
				<div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Instagram URL"
                  />
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
              <label><b>Presence on other platform</b></label>
              </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Youtube"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Snapchat"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Facebook"
                  />
                </div>


                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Twitter"
                  />
                </div>


                <div className="col-md-6 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Josh/Moj"
                  />
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

export default BecomeACreator
