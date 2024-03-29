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


const BecomeAAmbassador = () => {
 
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
  <section className="connectcrts grymd">
    <div className="container">
      <div className="slidechngrs">
         <OwlCarousel
              className="partnrslide owl-carousel owl-theme"
              loop
              responsive={state.responsive_featuredslide}
              nav
            >
          <div className="item">
            <img src="./images/creators/ab1.jpg" />
          </div>
          <div className="item">
            <img src="./images/creators/ab2.jpg" />
          </div>
          <div className="item">
            <img src="./images/creators/ab3.jpg" />
          </div>
          <div className="item">
            <img src="./images/creators/ab4.jpg" />
          </div>
          
        </OwlCarousel>
      </div>
      <div className="mainhead whithd text-left">
        <h3 className="centheads">Ambassadors<br />
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
    <img src="./images/showbgaback2.jpg" className="desktopayout" />
    <div className="container">
      <div className="row">
        <div className="col-md-7 align-self-center">
          <div className="mainhead whithd text-left">
            <h2 className="centheads">Our <br /><span className="txstrks">Creative <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 152.9 43.4" style={{enableBackground: 'new 0 0 152.9 43.4'}} xmlSpace="preserve">
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
                <img src="./images/mobshowcase/1.jpg" className="img-fluid" />
              </div>

              <div className="item">
                <img src="./images/mobshowcase/3.jpg" className="img-fluid" />
              </div>

              <div className="item">
                <img src="./images/mobshowcase/2.jpg" className="img-fluid" />
              </div>

              <div className="item">
                <img src="./images/mobshowcase/4.jpg" className="img-fluid" />
              </div>

              <div className="item">
                <img src="./images/mobshowcase/5.jpg" className="img-fluid" />
              </div>

              <div className="item">
                <img src="./images/mobshowcase/7.jpg" className="img-fluid" />
              </div>

              <div className="item">
                <img src="./images/mobshowcase/8.jpg" className="img-fluid" />
              </div>

              <div className="item">
                <img src="./images/mobshowcase/9.jpg" className="img-fluid" />
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
              <img src="./images/testmon/ab1.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>As an ambassador of YouthBeat not only did I enjoy my college but learned a lot of things!</p>
                <p className="usertstm">Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/ab2.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>I met a lot of cool people in my community, and also worked with amazing brands while picking up new skills and interests.</p>
                <p className="usertstm"> Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/ab3.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>I wish to be a member of YouthBeat forever. </p>
                <p className="usertstm">Student Ambassador </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/ab4.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>YouthBeat has given me an opportunity to not just learn but find my true passion for marketing. </p>
                <p className="usertstm">Student Ambassador </p>
              </div>
            </div>
          </div>

         {/* <div className="item">
            <div className="txtpp">
              <img src="./images/testmon/ab1.jpg" />
              <img src="./images/quotsv.png" className="quoteic" />
              <div className="popcolt">
                <p>I will always be thankful for the campaigns I worked on with them and how they helped me grow and find my calling. </p>
                <p className="usertstm">- Lorem Ipsum, Student Ambassador </p>
              </div>
            </div>
  </div> */}
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
                    <button
                      id={'2'}
                      onClick={(e) => setCurrentValue(2)}
                      className="ytthemects"
                    >
                      <span class="inrshd">Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div id="s2" className="stepform" style={{ display: 'none' }}>
              <form>
                <div className="form-group  row">
                  <div className="col-md-12">
                   
                    <p>
                      Thank you for showing your interest, can you give us the
                      scoop on yourself so we can connect you with the hottest
                      brands?
                    </p>
                  </div>

                  <div className="col-md-12">
                    <button
                      onClick={(e) => handleNext(e, 2)}
                      className="ytthemects"
                    >
                      <span class="inrshd">Next</span>
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
                      <span class="inrshd">Next</span>
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
                      <span class="inrshd">back</span>
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

</div>




      <Footer />
    </div>
  )
}

export default BecomeAAmbassador
