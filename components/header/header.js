import Link from 'next/link'
import { useState,useEffect } from "react"
import { useRouter } from 'next/router'

const Header = () => {

  const [isActive, setActive] = useState("false");
  const [isActivee, setActivee] = useState("");
  const router = useRouter()

  useEffect(() => {

    if (router.isReady) {
  
      if(router.pathname == '/creator'){
        setActivee("false");
      }

      if(router.pathname == '/ambassador'){
        setActivee("true");
      }
    }

  },[router.isReady])


  const handleToggle = () => {
    setActive(!isActive);
  };

  // const handleToggleOne = (val) => {
  //   if(val == "true"){
  //     const target = "true";
  //     setActivee(...isActivee,target)
  //   }else if(val == "false"){
  //     const target1 = "false";
  //     setActivee(...isActivee,target1)
  //   }else{
  //     const target2 = "true";
  //     setActivee(...isActivee,target2)
  //   }
  // };

    return (
        <header className={`site-header topmain mobexheight norm ${isActive ? "" : "heightexps"}`}>
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

           <button  onClick={handleToggle} className={`navbar-toggler openhdas ${isActive ? "" : "crossshwos"}`}  type="button" >
              <i className="fal fa-bars" />
              <i className="fal fa-times" />
            </button>

            {/*
            <div class="mobcton commctas">
              <a class="nav-link active" href="/ambassador">Ambassador</a>
              <a class="nav-link " href="/creator">Creator</a>
            </div>
            */}
            
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
               
             
                {isActivee == "true" ? 
                
                (
                 <Link className="nav-link active" href="/become-a-ambassador">
                 BECOME Ambassador
                 </Link> 
                )
              :
              (
                
                <Link className="nav-link active" href="/become-a-creator">
                BECOME Creator
                </Link>
              )
              
              }


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