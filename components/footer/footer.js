import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="yt-footh revealer">
        <div className="backshadows">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h4>About Us</h4>
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
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a href="#">
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