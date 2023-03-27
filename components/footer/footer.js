import Link from 'next/link'
import { useState,useEffect } from "react"
import { useRouter } from 'next/router'

const Footer = () => {

  const [isActivee, setActivee] = useState("");
  const [isActiveeq, setActiveeq] = useState("");
  const router = useRouter()

  useEffect(() => {

    if (router.isReady) {
  
      if (localStorage) {
        const items = localStorage.getItem("items");
        setActiveeq(items)
      }

    }

    },[router.isReady])
 
    return (
        <footer className={`${isActiveeq == 'true' ? "black-ftrs" : "white-ftrs"} yt-footh revealer`}>
        <div className="backshadows">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h4>About Us {/*{isActiveeq} */}</h4>
                <p>
                  We are a youth community network that gives brands
                  <br /> tailored insights and strategies aiding them in <br />
                  connecting with the young, wild, and free!{' '}
                  <img src="/images/fireemoj.png" />
                </p>
                <p>
                  Our network of unique young creators and <br />
                  collaborators keeps it real and gives brands that hot
                  <br /> look while maintaining their calmness.
                </p>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>
                  <Link href="/">HOME
                  </Link>
                  </li>
                  <li className="nav-item submno">
                  <Link href="/our-work">OUR WORK </Link>
                  </li>
                  <li>
                  <Link href="/services">SERVICES</Link>
                  </li>
                  <li>
                  <Link href="/join-us">JOIN YB</Link>
                  </li>
                  <li>
                  <Link href="/become-a-ambassador">BECOME Ambassador</Link>
                  </li>
                  <li>
                  <Link href="/contact-us">CONTACT US</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottomstrips">
              <div className="row">
                <div className="col-6 col-md-6">
                  <ul>
                    <li>
                      {' '}
                      <a href="https://www.instagram.com/youthbeat.ind/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a href="https://www.facebook.com/youthbeat" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-6">
                  <a className="logo-brand" href="./">
                    <img
                      src="/images/logo.png"
                      className="navbar-brand-img"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer