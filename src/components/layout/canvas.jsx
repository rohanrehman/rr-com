import { Canvas, render } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Particles } from '@/components/canvas/Shader/Particles'
import { folder, Leva, useControls } from 'leva'


const LControl = () => {
  //const dom = useStore((state) => state.dom)
  const control = useRef(null)

  // useEffect(() => {
  //   if (control.current) {
  //     const domElement = dom.current
  //     const originalTouchAction = domElement.style['touch-action'] 
  //     domElement.style['touch-action'] = 'none'

  //     return () => {
  //       domElement.style['touch-action'] = originalTouchAction
  //     }
  //   }
  // }, [dom, control])
  // @ts-ignore
  return null //<OrbitControls ref={control} domElement={dom.current} />
}

const LCanvas = ({ children }) => {

  const dom = useStore((state) => state.dom)
  const props = useControls({
    focus: { value: 4.98, min: 3, max: 7, step: 0.01 },
    speed: { value: 8.3, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 5.2, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 4, min: 0, max: 200 },
    size: { value: 512, min: 1, max: 512, step: 1 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 }
  })

  const [{f, p},set] = useControls(() => ({
    
      camera: folder({
         p: [0.8, 0, 0.2],
        //  fov: { value: 22, min: 0, max: 200 },
      },), 

  }))

  return (
    <>
   <Leva collapsed='true' flat='true'  hidden/> 
    <Canvas
      mode='concurrent'
      camera={{ fov:25 , position:[0,0,6] }}
      //camera={{camera}}
      style={{
        position: 'absolute',
        top: 0
      }}
      // onCreated={(state) => state.events.connect(dom.current)}
    >
       <Particles {...props} position={p}/>
      <LControl />
      <Preload all />
      {children}
    </Canvas>
    </>
  )
}

export default LCanvas
