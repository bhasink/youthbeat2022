import { useEffect } from 'react';
import Head from 'next/head'
import Cursor from "../components/Cursor";
// import {gsap} from "gsap-trial/dist/gsap";
// import {ScrollTrigger} from "gsap-trial/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { ParallaxProvider } from 'react-scroll-parallax';


// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function MyApp({ Component, pageProps }) {

  useEffect(() => {
`
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    });`

  },[])



  return (
    <>

<ParallaxProvider>

   {/*<Cursor /> */}  

      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0"
        />
        <title>YouthBeat</title>
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?ver=5.3.2"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
        <link
          href="https://kit-pro.fontawesome.com/releases/v5.11.2/css/pro.min.css?ver=5.3.2"
          rel="stylesheet"
          type="text/css"
        />

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&family=Ubuntu&display=swap" rel="stylesheet"/>

        {/* <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        /> */}
        <link rel="stylesheet" type="text/css" href="/style.css" />
      </Head>

      <Component {...pageProps} />

      </ParallaxProvider>
    </>
  )
}

export default MyApp
