const Footer = () => {
    return (
        <footer className="yt-footh revealer" data-aos="fade-down"
        data-aos-duration={1500} >
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
                    <a href="#">HOME</a>
                  </li>
                  <li className="nav-item submno">
                    <a href="javascript:void(0);">OUR WORK</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">SERVICES</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">JOIN YB</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">BECOME Ambassador</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">CONTACT US</a>
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
                      <a href="javascript:void(0);">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a href="javascript:void(0);">
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