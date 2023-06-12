import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(9000), { radius: 4 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;

    const angle = state.clock.elapsedTime
    
    
  });

  return (
    <group rotation={[0, 0, Math.PI / 10]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='teal'
          size={0.100}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas4 = () => {
  return (
    <div className='canvas-1 w-full relative inset-0 z-[11] top-[2.7rem] h-[250px] md:top-[19rem] md:h-[380px] xl:top-[0.2rem] xl:h-[600px] '>
      
      <Canvas className="canvas-control relative " camera={{  position: [0, 0, 1] }}>
        
        <Suspense className="canvas-child?" fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas4;





