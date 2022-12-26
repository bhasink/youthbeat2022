import Link from 'next/link'

const Header = () => {
    return (
        <header className="site-header topmain mobexheight norm">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid p-0">
            {/* Brand */}

            <Link className="navbar-brand" href="/">

              <img
                src="/images/logo.png"
                className="navbar-brand-img"
                alt="logo"
              />
           </Link>

            {/* Toggler */}
            <button
              className="navbar-toggler openhdas"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fal fa-bars" />
              <i className="fal fa-times" />
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/* Navigation */}
              <ul
                className="navbar-nav mx-auto  position-relative"
                id="menu-center"
              >
                <li className="nav-item submno">
                    <Link className="nav-link active" href="/our-work">
                      OUR WORK
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" href="/services">

                    SERVICES
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" href="/join-us">
                    JOIN YB
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" href="/become-a-ambassador">
                    BECOME Ambassador
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" href="/contact-us">
                    CONTACT US
                    </Link>
                </li>
                <li className="nav-item commctas">
                  <Link className="nav-link active" href="/ambassador">

                    Ambassador
                  </Link>

                  <Link className="nav-link " href="/creator">
                    Creator
                    </Link>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header