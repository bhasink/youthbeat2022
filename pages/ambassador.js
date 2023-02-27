import { useState, useRef } from 'react'
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
import { useRouter } from 'next/router'
import { Parallax, ParallaxBannerLayer } from 'react-scroll-parallax';
import CountUp, { useCountUp } from 'react-countup';



const Ambassador = () => {
  useCountUp({
    ref: 'counter',
    start:10000,
    end: 250000,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  
  
  useCountUp({
    ref: 'sp2',
    start:100,
    end: 1500,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  
  useCountUp({
    ref: 'sp3',
    start:10,
    end: 250,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  
  });

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

    if (page != 7) {
      $('#s' + page).css('fadeIn', 'slow')
      $('#s' + page).css('display', 'none')
      $('#s' + next_val).css('display', 'block')
    }

    if (page == 7) {
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
            upcoming_clg_yr,
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
        autoplay: false,
        margin: 20,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: false,
        loop: false,
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
        items: 4,
        margin: 20,
        nav: false,
        autoplay: false,
        loop:false,
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
        nav: false,
        center: false,
        dots: false,
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
        items: 4,
        nav: false,
        margin: 30,
        autoplay: true,
        animate: true,
        autoplaySpeed: '6000',
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        center: false,
        dots: true,
        loop: true,
      },
    },
  }

  return (
    <div>
      <Header />

      <section className="homebannnerk">

      <img src="/images/imageactual.jpg" speed={3} className=" desktopayout" />

        <img data-speed="auto"  src="/images/homemobile3.jpg" className="mobstopayout" />
        <div className="container">
          <div className="layerfires"></div>

          <div>
          <Parallax translateX={[0,-10]}>
            <h1 className="mainbn-hd">
              WE ARE THE VOICE
              <br />
              OF{' '}
              <span className="str-yells">
                GEN-Zs
                <img data-speed="auto"  src="/images/strokeyello.png" />
              </span>{' '}
              ALL AROUND
            </h1>
            </Parallax>
          </div>
        </div>
      </section>
      <section className="letsyoubet revealer">
     
        <div className="container">
          <div className="mainhead">
        
            <h3 className="centheads">
              <img data-speed="auto"  src="/images/smilheads.png" className="anmemojs" />
              Let YouthBeat
              <br />
              take the wheel!
            </h3>
           
            <p data-speed="1.25"  className="sbhds">
              We’re young, always evolving, and hungry for more
            </p>

            <p data-speed="1.25"  className="subbol">
              <b>What Our Madhouse Offers</b>
            </p>
          </div>

          <div className="mdhouseslide desktlyts">
            <div className='row'>
            <div className="col-md-3">
                <div className="hhcase-txt">
                  <img data-speed="auto"  src="/images/madhouse/ab1.jpg" />
                  <div className="cse-txts">
                    <p data-speed="1.25" >
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

              <div className="col-md-3">
                <div className="hhcase-txt">
                  <img data-speed="auto"  src="./images/madhouse/ab2.jpg" />
                  <div className="cse-txts">
                    <p data-speed="1.25" >
                      Get free entry and earn exciting merch from huge brands!{' '}
                    </p>
                  </div>
                </div>
                <h4>
                  Exclusive
                  <br /> Rewards!
                </h4>
              </div>

              <div className="col-md-3">
                <div className="hhcase-txt">
                  <img data-speed="auto"  src="./images/madhouse/ab3.jpg" />
                  <div className="cse-txts">
                    <p data-speed="1.25" >
                      Hang out with creators and live the trendy Instagram life!
                    </p>
                  </div>
                </div>
                <h4>
                  Own the
                  <br /> buzz!
                </h4>
              </div>
              <div className="col-md-3">
                <div className="hhcase-txt">
                  <img data-speed="auto"  src="./images/madhouse/ab4.jpg" />
                  <div className="cse-txts">
                    <p data-speed="1.25" >
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
            </div>
          </div>
          <div className="mdhouseslide moblyts">
            <OwlCarousel
              className="whygridsphn owl-theme owl-carousel"
              
              responsive={state.responsive_featuredslide}
              nav
            >
              <div className="item">
                <div className="hhcase-txt">
                  <img data-speed="auto"  src="./images/madhouse/ab1.jpg" />
                  <div className="cse-txts">
                    <p data-speed="1.25" >
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
                  <img data-speed="auto"  src="./images/madhouse/ab2.jpg" />
                  <div className="cse-txts">
                    <p data-speed="1.25" >
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
                  <img data-speed="auto"  src="./images/madhouse/ab3.jpg" />
                  <div className="cse-txts">
                    <p data-speed="1.25" >
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
                  <img data-speed="auto"  src="./images/madhouse/ab4.jpg" />
                  <div className="cse-txts">
                    <p data-speed="1.25" >
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
            <p data-speed="1.25"  className="sbhds">Meet our partners in creativity</p>
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
                <img data-speed="auto"  src="./images/ourpatner/1.png" />
              </div>
              <div className="item">
                <img data-speed="auto"  src="./images/ourpatner/2.png" />
              </div>
              <div className="item">
                <img data-speed="auto"  src="./images/ourpatner/3.png" />
              </div>
              <div className="item">
                <img data-speed="auto"  src="./images/ourpatner/5.png" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="showcaseytbs revealer">

<ParallaxBannerLayer image="./images/backoutservice2.jpg" speed={-20} className="desktopayout" />

        <div className="container">

        <Parallax speed={5}>
          <div className="row">
            <div className="col-md-5">
              <img data-speed="auto"  src="./images/roundlady.png"  className="trnsmvs"/>
            </div>

            <div className="col-md-7 align-self-center text-lg-left text-center">
              <h2>
                Ready to rule{' '}
                <span className="txstrks">
                   <span className="antxon1">your</span>
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
                  </svg>
                </span>
                <br></br> <span className="antxon1 anoanim">campus</span>{' '}
              </h2>
              <p data-speed="1.25"  className="curvtxt">Create with YouthBeat</p>
            </div>
          </div>
          </Parallax>

          <Parallax speed={-5}>
          <div className="mdhouseslide">
            <OwlCarousel
              className="casestslide owl-carousel owl-theme"
              loop
              responsive={state.responsive_reviewtestim}
              nav
            >
              <div className="item">
              <a href="/our-work/myntra">
                <img data-speed="auto"  src="./images/casestudy/myntra.jpg" />
              </a>
                <p data-speed="1.25" >
                  <b>Myntra</b>
                </p>
                <h4>
                Read our 
                  <br /> case  studies
                </h4>
                <a href="/our-work/myntra" className='rdmorecta'>
                  read more
                  <br />
                  <div className="rdstrokes">
                    <img data-speed="auto"  src="./images/readmorec.png" />
                  </div>
                  <div className="rdstrokes"></div>
                </a>
              </div>
              <div className="item">
              <a href="/our-work/one-plus">
                 <img data-speed="auto"  src="./images/casestudy/oneplus.jpg" />
              </a>
                <p data-speed="1.25" >
                  <b>OnePlus</b>
                </p>
                <h4>
                  See the
                  <br /> innovation
                  <br /> we bring
                </h4>
                <a href="/our-work/one-plus" className='rdmorecta'>
                  read more
                  <br />
                  <div className="rdstrokes">
                    <img data-speed="auto"  src="./images/readmorec.png" />
                  </div>
                  <div className="rdstrokes"></div>
                </a>
              </div>
              <div className="item">
              <a href="/our-work/tinder">
                <img data-speed="auto"  src="./images/casestudy/tinder.jpg" />
              </a>
                <p data-speed="1.25" >
                  <b>Tinder</b>
                </p>
                <h4>
                  Learn the ways
                  <br />
                  of YouthBeat
                </h4>
                <a href="/our-work/tinder" className='rdmorecta'>
                  read more
                  <br />
                  <div className="rdstrokes">
                    <img data-speed="auto"  src="./images/readmorec.png" />
                  </div>
                </a>
              </div>

              <div className="item">
              <a href="/our-work/urbanic"> <img data-speed="auto"  src="./images/casestudy/urbanic.jpg" />
              </a>
                <p data-speed="1.25" >
                  <b>Urbanic</b>
                </p>
                <h4>
                See how we 
                  <br />
                  made  fashionable
                </h4>
                <a href="/our-work/urbanic" className='rdmorecta'>
                  read more
                  <br />
                  <div className="rdstrokes">
                    <img data-speed="auto"  src="./images/readmorec.png" />
                  </div>
                </a>
              </div>
            </OwlCarousel>
          </div>
          </Parallax>
        </div>
      </section>

      <Parallax scale={[0.9,1]}>

      <section className="ouytbservice revealer">
        <div className="container">
          <div className="mainhead">
            <p data-speed="1.25"  className="sbhds">Become the hot trend in your campus! </p>
            <h3 className="centheads mt-3">
              Join YouthBeat and
              <br />
              earn new skills!{' '}
              <img data-speed="auto"  src="./images/keycta.png" className="keyemojs" />
            </h3>
          </div>
          <div className="servnumcounts numbers">
            <div className="row">
              <div className="col-md-4">


                <p data-speed="1.25"  className="numctn skblues number-item">
                <span className="value" id="counter" />+
                </p>
                <p data-speed="1.25" >
                  Campus Reps &amp; <br /> Ambassadors
                </p>
              </div>
              <div className="col-md-4">
                <p data-speed="1.25"  className="numctn rednums number-item">
                <span className="value" id="sp2" />+
                </p>
                <p data-speed="1.25" >
                  Partnered Universities <br />
                  &amp; Institutions
                </p>
              </div>
              <div className="col-md-4">
                <p data-speed="1.25"  className="numctn yelnums number-item">
                <span className="value" id="sp3" />+
                </p>
                <p data-speed="1.25" >Projects Worked On</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </Parallax>



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
                  src="./images/members/creatos/1.jpg"/>
              </div>
              <div className="item">
              <img
                  src="./images/members/creatos/2.jpg"/>
              </div>
              <div className="item">
              <img
                  src="./images/members/creatos/3.jpg"/>
              </div>

              <div className="item">
              <img
                  src="./images/members/creatos/4.jpg"/>
              </div>

              <div className="item">
              <img
                  src="./images/members/creatos/5.jpg"/>
              </div>

              <div className="item">
              <img
                  src="./images/members/creatos/6.jpg"/>
              </div>

              <div className="item">
              <img
                  src="./images/members/creatos/7.jpg"/>
              </div>

              <div className="item">
              <img
                  src="./images/members/creatos/8.jpg"/>
              </div>


              <div className="item">
              <img
                  src="./images/members/creatos/9.jpg"/>
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
                      <option value="">--Gender--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                   <div className='ovrfl'> 
                   <button
                      id={'2'}
                      onClick={(e) => setCurrentValue(2)}
                      className="ytthemects"
                    >
                     <span class="inrshd"> Submit</span>
                    </button></div>
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

                    <p data-speed="1.25" >
                      Thank you for showing your interest, can you give us the
                      scoop on yourself so we can connect you with the hottest
                      brands?
                    </p>
                  </div>

                  <div className="col-md-12">
                  <div className='ovrfl'>  <button
                      onClick={(e) => handleNext(e, 2)}
                      className="ytthemects"
                    >
                      <span class="inrshd">Next</span> 
                    </button></div>
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
                     <span class="inrshd">Next</span> 
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
                     <span class="inrshd">back</span>  
                    </button>
                    <button
                      onClick={(e) => handleNext(e, 4, instaFollower)}
                      className="ytthemects"
                    >
                      <span class="inrshd">Next</span> 
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
                     <span class="inrshd">back</span>  
                    </button>
                    <button
                      onClick={(e) => handleNext(e, 5, college)}
                      className="ytthemects"
                    >
                      <span class="inrshd">Next</span>  
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
                      onClick={(e) =>
                        handleBack(e, 6, what_are_you_stdn_planning)
                      }
                      className="ytthemects"
                    >
                      <span class="inrshd">back</span>  
                    </button>
                    <button
                      onClick={(e) =>
                        handleNext(e, 6, what_are_you_stdn_planning)
                      }
                      className="ytthemects"
                    >
                     <span class="inrshd"> Next</span>  
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
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                      <option value="V">V</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <button
                      onClick={(e) => handleBack(e, 7, upcoming_clg_yr)}
                      className="ytthemects"
                    >
                      <span class="inrshd"> back</span>  
                    </button>
                    <button
                      onClick={(e) => handleNext(e, 7, upcoming_clg_yr)}
                      className="ytthemects"
                    >
                      <span class="inrshd">Submit</span>
                    </button>
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
