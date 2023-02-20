import { useState } from 'react'
import axios from 'axios'
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


import { notification } from 'antd'
import { useRouter } from 'next/router'
import { Parallax } from 'react-scroll-parallax';


const Services = () => {
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [designation, setDesignation] = useState('')
  const [serviceRequired, setServiceRequired] = useState('')

  
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name == '') {
      openNotificationWithIcon('error', 'Please enter the name!')
      return false
    }

    if (email == '') {
      openNotificationWithIcon('error', 'Please enter the email!')
      return false
    }

    if (IsEmail(email) == false) {
      openNotificationWithIcon('error', 'Please enter the correct email!')
      return false
    }

    if (mobile == '') {
      openNotificationWithIcon('error', 'Please enter the mobile!')
      return false
    }

    if (!mobile.match('[0-9]{10}')) {
      openNotificationWithIcon('error', 'Please enter the valid mobile number!')
      return false
    }

    if (designation == '') {
      openNotificationWithIcon('error', 'Please enter the designation!')
      return false
    }

    if (serviceRequired == '') {
      openNotificationWithIcon('error', 'Please select the service!')
      return false
    }

    setLoading(true)

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/service`,
        {
          name,
          email,
          mobile,
          designation,
          service_required: serviceRequired
        },
      )

      setLoading(false)

      notification['success']({
        message: 'success!',
        description: 'Form has been submitted successfully!',
        duration: 4,
        placement: 'bottomRight',
        bottom: 65,
      })

      router.push('/thanks')
    } catch (err) {
      setLoading(false)
    }
  }

  const IsEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!regex.test(email)) {
      return false
    } else {
      return true
    }
  }

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: 'Error!',
      description: msg,
      duration: 5,
      placement: 'bottomRight',
      bottom: 65,
    })
  }

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
    <img data-speed="auto"  src="/images/ourservices2.jpg" className="desktopayout" />
    <div className="container">
    <Parallax speed={-5}>

      <div className="mainhead whithd">
        <p data-speed="1.25"  className="sbhds">What is YouthBeat?</p>
        <h3 data-speed="1.25"  className="centheads"><img data-speed="auto"  src="/images/bombobjs.png" className="sunbom" />We are youthful, full of energy,<br />
          and obsessed with making<br />
          companies hotter
        </h3>
      </div>

      </Parallax>
    </div>
  </section>
  <section className="usptargt position-relative whitetxt">
    <div className="container">
      <div className="row">
        <div className="col-md-7 align-self-center">
          <Parallax speed={6}>
            <p  data-speed="1.25" ><b>YouthBeat is the youth marketing vertical within the ecosystem of Sociowash. </b> Across all campuses around the country, YouthBeat amplifies Gen-Z culture. </p>
          </Parallax>

          <Parallax speed={5}>
          <p data-speed="1.25" >With Pranav Agarwal and Raghav Bagai as co-founders, YouthBeat helps brands step up their game and create edgy experiences for youth. </p>
          </Parallax>
        </div>
        <div className="col-md-5">
          <div className="genfrs position-relative">
            <img data-speed="auto"  src="/images/creobj.png" className="fltsbt" />
            <img data-speed="auto"  src="/images/genfr.png" />
            <p data-speed="1.25" >Vibe  <br />check!</p>
          </div>
        </div>
      </div>
    </div>

   {/**<div className="usps"><p data-speed="1.25" >// MAIN CHARACTER  </p><p data-speed="1.25" >// MAIN CHARACTER  </p><p data-speed="1.25" >// MAIN CHARACTER  </p><p data-speed="1.25" >// MAIN CHARACTER  </p><p data-speed="1.25" >// MAIN CHARACTER  </p><p data-speed="1.25" >// MAIN CHARACTER  </p><p data-speed="1.25" >// MAIN CHARACTER  </p><p data-speed="1.25" >// MAIN CHARACTER  </p></div> */} 

    <div className="usps">
      <img data-speed="auto"  src="/images/usptagsnw.png" />
      <img data-speed="auto"  src="/images/usptagsnw.png" />
      <img data-speed="auto"  src="/images/usptagsnw.png" />
    </div>
    <div className="thswhys">
      <div className="container">
        <p data-speed="1.25" >This is where YouthBeat bridges the gap between<br /> brands and Gen-Zs.
        </p>
      </div>
    </div>
  </section>

  <section className='letstaskabs'>
      <div className="mainhead">
        <p data-speed="1.25"  className="sbhds">Let’s talk about some buzzness</p>
        <p>Want to experience some next-level services that'll make you say "WOW"?<br/> We got you covered!</p>
      </div>

      <div className='poinrsd'>
      <img className='ladylurights'  src="/images/knowbs/ladyluck.png" />
          <div className=' container'>
            <div className='row'>
              <div className='col-md-6 col-lg-6 pl-lg-0'>
                  <div className='iconrowss'>
                    <div className='icnclrn'>
                        <img src="/images/knowbs/1.png"/>
                    </div>
                    <div className='align-self-center icparans'>
                      <h6>Ambassadors & Influencers</h6>
                      <p>Hit up all the dope creators and link with <br/>hundreds of lit ambassadors!</p>
                    </div>
                  </div>

                  <div className='iconrowss'>
                    <div className='icnclrn'>
                      <img src="/images/knowbs/2.png"/>
                    </div>
                    <div className='align-self-center icparans'>
                      <h6>Retail Store Activations</h6>
                      <p>Witness how we launch brands to the<br/> mooooon! <img src="/images/knowbs/rockets.png" className="txemojs"/></p>
                    </div>
                  </div>


                  <div className='iconrowss'>
                    <div className='icnclrn'>
                      <img src="/images/knowbs/3.png"/>
                    </div>
                    <div className='align-self-center icparans'>
                      <h6>Social Media</h6>
                      <p>Show off your likes and make your mark <br/>on the most popular spot for us humans! #FamousAF</p>
                    </div>
                  </div>

                  <div className='iconrowss'>
                    <div className='icnclrn'>
                      <img src="/images/knowbs/4.png"/>
                    </div>
                    <div className='align-self-center icparans'>
                      <h6>Campus</h6>
                      <p>Echo your brand tunes through hundreds <br/>of campuses!</p>
                    </div>
                  </div>

                  <div className='iconrowss'>
                    <div className='icnclrn'>
                      <img src="/images/knowbs/5.png"/>
                    </div>
                    <div className='align-self-center icparans'>
                      <h6>Creative & Branding</h6>
                      <p>Get your brand trending with our fire <br/>services that make it the center of attention!</p>
                    </div>
                  </div>

                  <div className='iconrowss'>
                    <div className='icnclrn'>
                      <img src="/images/knowbs/6.png"/>
                    </div>
                    <div className='align-self-center icparans'>
                      <h6>Mobile Tours & Pop-ups</h6>
                      <p>Whether it's online or IRL, we're committed to<br/> getting you that clout.</p>
                    </div>
                  </div>


              </div>

              <div className='col-md-6 col-lg-6'>
                  
              </div>
            </div>
          </div>
      </div>
  </section>
  <section className="whyybt-rights position-relative">
   
    <div className="container">
      <div className="mainhead">
        <p data-speed="1.25"  className="sbhds">Why YouthBeat is The Right Move</p>
      </div>
      <div className="pygrphs">
        <div className="row">

        <div className="col-md-12 align-self-center text-center">
            <div className="mainhead">
              <h3 data-speed="1.25"  className="centheads">Traffic generated <br />
                 by millennials
                and Gen-Z
              </h3>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <img data-speed="auto"  src="/images/milenone.png"/>
            
          </div>

          <div className="col-md-4 text-center align-self-center">
            <h6 className='numstsd'>~90%</h6>
            
          </div>

          <div className="col-md-4 text-center">
            <img data-speed="auto"  src="/images/milentwo.png"/>
            
          </div>
          
        </div>
      </div>
    </div>
  </section>
  <section className="ytmarkts"> 
    <div className="mainhead">
      <p data-speed="1.25"  className="sbhds">Why Youth Marketing</p>
    </div>
    <div className="whyytmrk whitetxt"> 
      <div className="container">
        <div className="row">
       
          <div className="col-md-6 align-self-center">
          <Parallax speed={6}>
            <p data-speed="1.25" ><b>With many new trends rolling out almost everyday, things may get a little challenging for brands. </b></p>
            <p data-speed="1.25" >Sometimes the road of social media might be rocky; this is when an experienced driver takes control.</p>
            <h4 data-speed="1.25" >This is where 
              you give<br /> your
              marketing keys<br />
              to YouthBeat.
            </h4>
            </Parallax>
          </div>
         
          <div className="col-md-6 align-self-center position-relative">
            <img data-speed="auto"  src="/images/service2.jpg" className="img-fluid" />
            <img data-speed="auto"  src="/images/genx.png" className="gnround" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="testimons-ytb revealer">
    <div className="container">
      <div className="mainhead">
        <p data-speed="1.25"  className="sbhds">What they say about us on the ‘Gram</p>
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
              <p data-speed="1.25" >These guys are passionate about their art and extraordinary creative capabilities. They are young, ambitious, and extremely efficient. Most importantly, they work as an unified and balanced unit.
                YouthBeat provides a wide range of solutions, proving to be complete youth marketing geniuses.</p>
            </div>
            <p data-speed="1.25"  className="usertstm">Mercy Thoras, Tinder</p>
          </div>
          <div className="item">
            <div className="dv-shads">
              <p data-speed="1.25" >If I have to describe YouthBeat in one word, I choose the word craziness. The team is adaptable, even when unforeseen challenges arise toward the end, they handle it. They are extremely efficient as well as possess excellent creativity</p>
            </div>
            <p data-speed="1.25"  className="usertstm">XYZ, OnePlus</p>
          </div>
          <div className="item">
            <div className="dv-shads">
              <p data-speed="1.25" >These guys are passionate about their art and extraordinary creative capabilities. They are young, ambitious, and extremely efficient. Most importantly, they work as an unified and balanced unit.
                YouthBeat provides a wide range of solutions, proving to be complete youth marketing geniuses.</p>
            </div>
            <p data-speed="1.25"  className="usertstm">Mercy Thoras, Tinder</p>
          </div>
          <div className="item">
            <div className="dv-shads">
              <p data-speed="1.25" >If I have to describe YouthBeat in one word, I choose the word craziness. The team is adaptable, even when unforeseen challenges arise toward the end, they handle it. They are extremely efficient as well as possess excellent creativity</p>
            </div>
            <p data-speed="1.25"  className="usertstm">XYZ, OnePlus</p>
          </div>
         </OwlCarousel>
        
      </div>
    </div>
  </section>
  <section className="progrmsfrms revealer">
    <div className="container">
      <div className="mainhead text-left">
        <h3 data-speed="1.25"  className="centheads">Client Enquiry Form</h3>
      </div>
      <div className="mnformsty">
      <form onSubmit={handleSubmit}>

          <div className="form-group  row">
            <div className="col-md-6">
            <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        id="name"
                      />
                                  </div>

            <div className="col-md-6">
            <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type="text"
                        className="form-control"
                        placeholder="Company Email"
                        name="email"
                      />            </div>

            <div className="col-md-6">
            <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Number"
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                      />
                                  </div>

            <div className="col-md-6">
            <input
                        type="text"
                        className="form-control"
                        placeholder="Designation"
                        onChange={(e) => setDesignation(e.target.value)}
                        value={designation}
                      />
                                  </div>
            
            
            <div className="col-md-6">
            
              <select
                 onChange={(e) => setServiceRequired(e.target.value)}
                 value={serviceRequired}
                    type="text"
                    className="form-control">
					<option value="">
          Services Required
					</option>
					
					<option value="Ambassador Connect">
          Ambassador Connect
					</option>

          <option value="Creator Connect">
          Creator Connect
					</option>

          <option value="Both">
          Both
					</option>
				  </select>
            </div>
            
            <div className="col-md-12">
              <button className="ytthemects"><span className="inrshd">Submit</span></button>
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
