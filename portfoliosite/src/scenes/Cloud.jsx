
import { Canvas } from "@react-three/fiber";
import {Cloud, Sky, SpotLight, Stage} from "@react-three/drei";

import * as THREE from "three";

function CloudBackground() {
  return (
    <div className="xxl:h-[50rem]">
       <Canvas camera={{ position: [0, 0, 1] }}  className="relative z-[-1]] xxl:top-[40rem]">
    <Stage adjustCamera intensity={1}  environment="sunset">
  <mesh />

   
<Cloud opacity={0.4} scale={[25, 25, 25]} position={[-90, 100, -10]} color="blue"/>

      <Cloud opacity={0.5} scale={[25, 25, 2]} position={[-100, -20, 10]} color="red" />
      <Cloud
        opacity={0.7}
        scale={[50, 50, 50]}
        rotation-y={Math.PI / 9}
        position={[20, -2, 43]}
        color="green"
        sizeAttenuation={true}
          depthWrite={true}
      />
     
      </Stage>
      </Canvas>
    </div>
  )
}

export default CloudBackground
