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

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')
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

    if (message == '') {
      openNotificationWithIcon('error', 'Please enter the message!')
      return false
    }

    setLoading(true)

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/contact`,
        {
          name,
          email,
          mobile,
          message,
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

  return (
    <div>
      <Header />

      <div>
        {/* <section className="mapopn">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224246.36813827857!2d77.15449604496055!3d28.574281617598178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8cb290c673%3A0x72690587569280bc!2sSociowash!5e0!3m2!1sen!2sin!4v1671617288617!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </section> */}
        <section className="cultur-comps">
          <div className="container">
            <div className="contactsmids">
              <div className="mainhead text-left">
                <h3 className="centheads aos-init aos-animate">
                  <img
                    src="./images/telemojis.png"
                    className="flapswing conemojis"
                  />
                  Contact us
                  <br />
                  anytime.
                </h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>NEW DELHI </h4>
                  <p>
                    Plot No. 258,
                    <br />
                    Red Brick Centre, Lane 3,
                    <br />
                    Westend Marg, Saidulajab,
                    <br />
                    Saket - 110030
                  </p>
                  <a href="mailto:hello@youthbeat.in ">hello@youthbeat.in </a>
                </div>
                <div className="col-md-6">
                  <h4>MUMBAI </h4>
                  <p>
                    603 The Co-working Space,
                    <br />
                    1F, 27 MIDC, Marol
                    <br />
                    MIDC Industry Estate,
                    <br />
                    Andheri East - 400047
                  </p>
                  <a href="mailto:hello@youthbeat.in">hello@youthbeat.in </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="progrmsfrms revealer pt-0">
          <div className="container">
            <div className="contactsmids">
              <div className="mnformsty">
                <form onSubmit={handleSubmit}>
                  <div className="form-group  row">
                    <div className="col-md-12">
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
                    <div className="col-md-12">
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

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Number"
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={''}
                      ></textarea>
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

export default ContactUs
