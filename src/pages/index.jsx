import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
// import Shader from '@/components/canvas/Shader/Shader'
//import { Particles } from '@/components/canvas/Shader/Particles'
//import { useControls } from 'leva'

import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })
const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

// const Particles = dynamic(() => import('@/components/canvas/Shader/Particles'), {
//   ssr: false,
// })

// dom components goes here
const Page = (props) => {
   const parallax = useRef()
  return <>
  <div style={{ zIndex:-100 }}>
      <Parallax ref={parallax} pages={3}>

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'transparent' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'transparent' }} />

        <ParallaxLayer className='brightness-50'
          offset={0}
          speed={0}
          factor={3}
          sticky={{ start: 0, end: 3 }}
          style={{
        
          borderLeft: '1px solid rgba(0,0,0,0.05)',
          marginLeft: '50px',
          height: '100vh'

          }}
        /> 

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' ,backgroundColor:'red'}} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' ,backgroundColor:'red'}} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' ,backgroundColor:'green'}} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%'  ,backgroundColor:'green'}} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
            opacity: 1
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>

          <div className='w-3/4 absolute top-64 text-xl subpixel-antialiased font-display'> 
            <p className='whitespace-pre-wrap text-justify font-extralight'>
              Technologist, inventor and engineer. 
              <br/>
              <span className='font-normal'>Rohan Rehman.</span>
            </p>
          </div>
          
          {/* <img src={url('server')} style={{ width: '20%' }} /> */}
        </ParallaxLayer>
      
      <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: 'flex',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity:1
          }}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>
      </Parallax>

    </div>
  </>
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => <>
    {/* <Shader /> */}
     {/* <Box route='/' /> */}
      {/* <Particles /> */}
     
</>

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
