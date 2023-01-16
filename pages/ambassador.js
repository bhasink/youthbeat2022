import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
// import AOS from 'aos'
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
import { useRouter } from "next/router";


const Ambassador = () => {
  // useEffect(() => {
  /*AOS.init({
      duration: 2000,
    })*/
  // }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [instaId, setInstaId] = useState('')
  const [instaFollower, setInstaFollower] = useState('')
  const [college, setCollege] = useState('')
  const [what_are_you_stdn_planning, setWareYouStng] = useState('')
  const [upcoming_clg_yr, setUpcomingClgYr] = useState('')
  const [currentValue, setCurrentValue] = useState(0)
  const [lastSaveId, setLastSaveId] = useState(null)  
  const [loading, setLoading] = useState(false)

  const router = useRouter();


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

    if (age == '') {
      openNotificationWithIcon('error', 'Please enter the age!')
      return false
    }

    var age_v = parseInt(age)

    if (isNaN(age_v)) {
      openNotificationWithIcon('error', 'Please enter the valid age!')
      return false
    }

    if (gender == '') {
      openNotificationWithIcon('error', 'Please enter the gender!')
      return false
    }

    setLoading(true)

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/ambs-form`,
        {
          name,
          email,
          mobile,
          age,
          gender,
        },
      )

      setLastSaveId(data.last_save_id)

      setLoading(false)

      const back_val = currentValue - 1

      $('#s2').css('fadeIn', 'slow')
      $('#s2').css('display', 'block')
      $('#s' + back_val).css('display', 'none')

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

  const handleBack = (e, page, req_field) => {
    e.preventDefault()

    const back_val = page - 1

    $('#s' + page).css('fadeIn', 'slow')
    $('#s' + page).css('display', 'none')
    $('#s' + back_val).css('display', 'block')
  }

  const handleNext = async (e, page, req_field) => {
    e.preventDefault()

    const next_val = page + 1

    if (req_field == '') {
      openNotificationWithIcon('error', 'Please enter the field!')
      return false
    }

    if(page != 7){
    $('#s' + page).css('fadeIn', 'slow')
    $('#s' + page).css('display', 'none')
    $('#s' + next_val).css('display', 'block')
    }

    if(page == 7){

      setLoading(true)

      try {
        

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/ambs-form-update`,
          {
            last_update_id: lastSaveId,
            instaId,
            instaFollower,
            college,
            what_are_you_stdn_planning,
            upcoming_clg_yr
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

    
  }

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
        items: 1,
        nav: false,
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
        loop: true,
        autoplay: true,
        items: 1.5,
        nav: false,
        animate: true,
        dots: false,
        margin: 30,
        center: true,
        stagepadding: 0,
        autoplaySpeed: '6000',
        autoplayHoverPause: true,
      },

      766: {
        items: 2,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 4,
        margin: 20,
        nav: true,
        center: false,
        dots: true,
        loop: true,
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
        stagepadding: 40,
      },
      300: {
        loop: true,
        autoplay: true,
        items: 1,
        nav: false,
        animate: true,
        margin: 30,
        center: true,
        stagepadding: 40,
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
        margin: 30,
        autoplay: true,
        animate: true,
        autoplaySpeed: '6000',
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        center: true,
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
        <div className="container">
          <div className="layerfires"></div>

          <div>
            <h1 className="mainbn-hd">
              WE ARE THE VOICE
              <br />
              OF{' '}
              <span className="str-yells">
                GEN-Zs
                <img src="./images/strokeyello.png" />
              </span>{' '}
              ALL AROUND
            </h1>
          </div>
        </div>
      </section>
      <section className="letsyoubet revealer">
        <div className="container">
          <div className="mainhead">
            <h3 className="centheads">
              <img src="./images/smilheads.png" className="anmemojs" />
              Let YouthBeat
              <br />
              take the wheel!
            </h3>
            <p className="sbhds">
              We’re young, always evolving, and hungry for more
            </p>

            <p className="subbol">
              <b>What Our Madhouse Offers</b>
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
                  <img src="./images/madhouse/ab1.jpg" />
                  <div className="cse-txts">
                    <p>
                      Resonate the tunes of famous brands and work with them!
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
                  <img src="./images/madhouse/ab2.jpg" />
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
                  <img src="./images/madhouse/ab3.jpg" />
                  <div className="cse-txts">
                    <p>
                      Hang out with creators and live the trendy Instagram life!
                    </p>
                  </div>
                </div>
                <h4>
                  Own the
                  <br /> buzz!
                </h4>
              </div>
              <div className="item">
                <div className="hhcase-txt">
                  <img src="./images/madhouse/ab4.jpg" />
                  <div className="cse-txts">
                    <p>
                      Learn new skills and earn certificates to land your dream
                      job!
                    </p>
                  </div>
                </div>
                <h4>
                  Upgrade
                  <br /> your CV!{' '}
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
                <img src="./images/ourpatner/1.png" />
              </div>
              <div className="item">
                <img src="./images/ourpatner/2.png" />
              </div>
              <div className="item">
                <img src="./images/ourpatner/3.png" />
              </div>
              <div className="item">
                <img src="./images/ourpatner/4.png" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="showcaseytbs revealer">
        <img src="./images/backoutservice2.jpg" className="desktopayout" />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src="./images/roundlady.png" />
            </div>
            <div className="col-md-7 align-self-center text-lg-left text-center">
              <h2>
                Ready to{' '}
                <span className="txstrks">
                  rule your
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
                <br></br> campus{' '}
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
                  src="./images/casestudy/myntra.jpg"/>
                <p><b>Myntra</b></p>
                <h4>
                Read our 
                  <br /> case  studies
                </h4>
                <a href="/our-work/myntra">
                  read more
                  <br />
                  <div className='rdstrokes'><img src="./images/readmorec.png" /></div>
                </a>
              </div>
              <div className="item">
                <img
                  src="./images/casestudy/oneplus.jpg"/>
                 <p><b>One Plus</b></p>
                <h4>
                  See the
                  <br /> innovation
                  <br /> we bring
                </h4>
                <a href="/our-work/one-plus">
                  read more
                  <br />
                  <div className='rdstrokes'><img src="./images/readmorec.png" /></div>
                </a>
              </div>
              <div className="item">
                <img
                  src="./images/casestudy/tinder.jpg"/>
                 <p><b>Tinder</b></p>
                <h4>
                  Learn the ways
                  <br />
                  of YouthBeat
                </h4>
                <a href="/our-work/tinder">
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
            <p className="sbhds">Become the hot trend in your campus! </p>
            <h3 className="centheads mt-3">
              Join YouthBeat and
              <br />
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
                <p>Projects Worked On</p>
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
              responsive={state.responsive_advantfeat}
              nav
            >
              <div className="item">
                <img src="./images/members/1.jpg" />
              </div>
              <div className="item">
                <img src="./images/members/2.jpg" />
              </div>
              <div className="item">
                <img src="./images/members/3.jpg" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section className="progrmsfrms revealer">
        <div className="container">
          <div className="mainhead text-center">
            <h3>Become a trendsetter today!</h3>
          </div>
          <div className="mnformsty singlefrms">
            <div id="s1" className="stepform" style={{ display: 'block' }}>
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
                      placeholder="Email"
                      name="email"
                    />
                  </div>

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
                      placeholder="Age"
                      onChange={(e) => setAge(e.target.value)}
                      value={age}
                    />
                  </div>

                  <div className="col-md-12">
                  
<select
                      className="form-control"
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
                    >
                      <option value="">
--Gender--
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <button
                      id={'2'}
                      onClick={(e) => setCurrentValue(2)}
                      className="ytthemects"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div id="s2" className="stepform" style={{ display: 'none' }}>
              <form>
                <div className="form-group  row">
                  <div className="col-md-12">
                    <label>
                      {/* <b>!!</b> */}
                      <br />
                    </label>

                    <p>
                    Thank you for showing your interest, can you give us the scoop on yourself so we can connect you with the hottest brands?
                    </p>
                  </div>

                  <div className="col-md-12">
                    <button
                      onClick={(e) => handleNext(e, 2)}
                      className="ytthemects"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div id="s3" className="stepform" style={{ display: 'none' }}>
              <form>
                <div className="form-group  row">
                  <div className="col-md-12">
                    <label>
                      <b>Instagram Profile Link</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Instagram Profile Link"
                      onChange={(e) => setInstaId(e.target.value)}
                      value={instaId}
                    />
                  </div>

                  <div className="col-md-12">
                  
                    <button
                      onClick={(e) => handleNext(e, 3, instaId)}
                      className="ytthemects"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div id="s4" className="stepform" style={{ display: 'none' }}>
              <form>
                <div className="form-group  row">
                  <div className="col-md-12">
                    <label>
                      <b>Instagram followers</b>
                    </label>
                    <select
                      className="form-control"
                      onChange={(e) => setInstaFollower(e.target.value)}
                      value={instaFollower}
                    >
                      <option value="">
                        How many Instagram followers do you currently have?
                      </option>
                      <option value="0-1k">0-1k</option>
                      <option value="1-5k">1-5k</option>
                      <option value="5-10k">5-10k</option>
                      <option value="10-20k">10-20k</option>
                      <option value="20-100k">20-100k</option>
                      <option value="100k+">100k+</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <button
                      onClick={(e) => handleBack(e, 4, instaFollower)}
                      className="ytthemects"
                    >
                      back
                    </button>
                    <button
                      onClick={(e) => handleNext(e, 4, instaFollower)}
                      className="ytthemects"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div id="s5" className="stepform" style={{ display: 'none' }}>
              <form>
                <div className="form-group  row">
                  <div className="col-md-12">
                    <label>
                      <b>College</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="College"
                      onChange={(e) => setCollege(e.target.value)}
                      value={college}
                    />
                  </div>

                  <div className="col-md-12">
                    <button
                      onClick={(e) => handleBack(e, 5, college)}
                      className="ytthemects"
                    >
                      back
                    </button>
                    <button
                      onClick={(e) => handleNext(e, 5, college)}
                      className="ytthemects"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div id="s6" className="stepform" style={{ display: 'none' }}>
              <form>
                <div className="form-group  row">
                  <div className="col-md-12">
                    <label>
                      <b>What are you studying/planning to study?</b> <br />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please mention your degree of specialisation."
                      onChange={(e) => setWareYouStng(e.target.value)}
                      value={what_are_you_stdn_planning}
                    />
                  </div>

                  <div className="col-md-12">
                    <button
                      onClick={(e) => handleBack(e, 6,what_are_you_stdn_planning)}
                      className="ytthemects"
                    >
                      back
                    </button>
                    <button
                      onClick={(e) => handleNext(e, 6,what_are_you_stdn_planning)}
                      className="ytthemects"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div id="s7" className="stepform" style={{ display: 'none' }}>
              <form>
                <div className="form-group  row">
                  <div className="col-md-12">
                    <label>
                      <b>
                        Select your college year for the upcoming academic
                        session for the year 2023-24
                      </b>
                    </label>
                    <select 
                    className="form-control" 
                    onChange={(e) => setUpcomingClgYr(e.target.value)}
                    value={upcoming_clg_yr}
                    >
                      <option value="">--select--</option>
                      <option value="I">I</option>
                      <option  value="II">II</option>
                      <option  value="III">III</option>
                      <option  value="IV">IV</option>
                      <option  value="V">V</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <button
                      onClick={(e) => handleBack(e, 7,upcoming_clg_yr)}
                      className="ytthemects"
                    >
                      back
                    </button>
                    <button 
                     onClick={(e) => handleNext(e, 7,upcoming_clg_yr)}
                    className="ytthemects">Submit</button>
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

export default Ambassador
