import { useEffect } from 'react'
import Head from 'next/head'
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

const Creator = () => {
  useEffect(() => {
    /*AOS.init({
      duration: 2000,
    })*/
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
        items: 1.5,
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
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
       
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
        center:true,
        stagepadding:40,
        autoplaySpeed: '6000',
      },
      300: {
        loop: true,
        autoplay: true,
        items: 1.5,
        nav: false,
        animate: true,
        dots:false,
        margin:30,
        center:true,
        stagepadding:0,
        autoplaySpeed: '6000',
        autoplayHoverPause: true,
      },

      766: {
        items: 4,
        nav: false,
        dots: false,
        loop: true,
      },

      1200: {
        items: 4,
        nav: false,
        margin:30,
        autoplay: true,
        animate: true,
        autoplaySpeed: '6000',
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        dots: true,
        loop: true,
      },
    },

  
    
  }

  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/themewhite.css" />
      </Head>

      <Header />

      <section className="homebannnerk revealer">
        <img src="./images/hm9.jpg" className="desktopayout" />
        <img src="./images/homemobile.jpg" className="mobstopayout" />
        <div className="container">
		<div  className="layerfires"></div>
		
		<div><h1 className="mainbn-hd">WE ARE THE VOICE<br/>
OF <span className="str-yells">GEN-Zs<img src="./images/strokeyello.png"/></span> ALL AROUND</h1></div>
		</div>
      </section>
      <section className="letsyoubet revealer">
        <div className="container">
          <div className="mainhead">
            <h3
              className="centheads">
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
                    src="./images/madhouse/1.jpg"/>
                  <div className="cse-txts">
                    <p>
                    Create content and earn exclusive rewards such as vouchers, collaborations, or even a reimbursement! {' '}
                    </p>
                  </div>
                </div>
                <h4>
                Earn
                  <br /> Rewards!
                </h4>
              </div>

              <div className="item">
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/2.jpg"/>
                  <div className="cse-txts">
                    <p>
                    Push the right buttons with your audience and let your results speak for themselves.
                    </p>
                  </div>
                </div>
                <h4>
                Influence <br />your<br /> Audience 
                
                </h4>
              </div>
              <div className="item">
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/3.jpg"/>
                  <div className="cse-txts">
                    <p>
                    Partner with various creators and brands to make your content reach new audiences.
                    </p>
                  </div>
                </div>
                <h4>
                Professional  <br />Collabs
                  
                </h4>
              </div>
              <div className="item">
                <div className="hhcase-txt">
                  <img
                    src="./images/madhouse/4.jpg"/>
                  <div className="cse-txts">
                    <p>
                    Get invited to exclusive events and impress new people to fall in love with the content you create. 
                    </p>
                  </div>
                </div>
                <h4>
                Event 
                  <br /> Invites {' '}
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
              responsive={state.responsive_reviewtestim}
              nav
            >
              <div className="item">
                <img
                  src="./images/ourpatner/1.png"/>
              </div>
              <div className="item">
                <img
                  src="./images/ourpatner/2.png"/>
              </div>
              <div className="item">
                <img
                  src="./images/ourpatner/3.png"/>
              </div>
              <div className="item">
                <img
                  src="./images/ourpatner/4.png"/>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="showcaseytbs revealer" data-aos=""
        data-aos-duration={1500}>
        <img src="./images/backoutservice.jpg" className="desktopayout" />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src="./images/roundlady.png"/>
            </div>
            <div className="col-md-7 align-self-center">
              <h2>
              Want your <span className="txstrks">
                    content to stand{' '}
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
                out from the crowd?{' '}
                <br />
              </h2>
              <p className="curvtxt">Create with YouthBeat</p>
            </div>
          </div>
          <div className="mdhouseslide">
            <OwlCarousel
              className="casestslide owl-carousel owl-theme"
              loop
              responsive={state.responsive_advantfeat}
              nav
            >
              <div className="item">
                <img
                  src="./images/madhouse/1.jpg"/>
                <p><b>Myntra</b></p>
                <h4>
                Read our 
                  <br /> case  studies
                </h4>
                <a href="#">
                  read more
                  <br />
                  <div className='rdstrokes'><img src="./images/readmorec.png" /></div>
                </a>
              </div>
              <div className="item">
                <img
                  src="./images/madhouse/2.jpg"/>
                 <p><b>One Plus</b></p>
                <h4>
                  See the
                  <br /> innovation
                  <br /> we bring
                </h4>
                <a href="#">
                  read more
                  <br />
                  <div className='rdstrokes'><img src="./images/readmorec.png" /></div>
                </a>
              </div>
              <div className="item">
                <img
                  src="./images/madhouse/3.jpg"/>
                 <p><b>Tinder</b></p>
                <h4>
                  Learn the ways
                  <br />
                  of YouthBeat
                </h4>
                <a href="#">
                  read more
                  <br />
                  <div className='rdstrokes'><img src="./images/readmorec.png" /></div>
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="ouytbservice revealer">
        <div className="container">
          <div className="mainhead">
            <p className="sbhds">Want to make an impact with your content? </p>
            <h3
              className="centheads mt-3">
              Join YouthBeat and {' '}
              <img src="./images/keycta.png" className="keyemojs" />
              <br />
              make  history 
            </h3>
          </div>
          <div className="servnumcounts numbers">
            <div className="row">
              <div className="col-md-4">
                <p className="numctn skblues number-item">
                  <span className="value">50000</span>+
                </p>
                <p>
                Content creators 
                </p>
              </div>
              <div className="col-md-4">
                <p className="numctn rednums number-item">
                  <span className="value">300000</span>+
                </p>
                <p>
                  Assets Delivered
                </p>
              </div>
              <div className="col-md-4">
                <p className="numctn yelnums number-item">
                  <span className="value">200</span>+
                </p>
                <p>
                  Project Worked On
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
              responsive={state.responsive_brandmembs}
              nav
            >
              <div className="item">
                <img
                  src="./images/members/1.jpg"/>
              </div>
              <div className="item">
                <img
                  src="./images/members/2.jpg"/>
              </div>
              <div className="item">
                <img
                  src="./images/members/3.jpg"/>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="progrmsfrms revealer">
        <div className="container">
          <div className="mainhead">
            <h3
              className="centheads">
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

      <Footer />
    </div>
  )
}

export default Creator
