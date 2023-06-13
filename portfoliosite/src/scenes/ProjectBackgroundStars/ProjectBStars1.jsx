import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(100), { radius: 1 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 1;
    ref.current.rotation.y -= delta / 2;
  });

  return (
    <group rotation={[0, 0, Math.PI / 112]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='blue'
          size={0.100}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ProjectBStars1 = () => {
  return (
    <div className='canvas-1 w-[100%] relative inset-0 z-[11] top-[-14rem] xs:top-[-10rem] xxl:h-[1000px] xxl:top-[-1rem] z-[11] '>
      <Canvas className="canvas-control relative xxl:bottom-[1rem]" camera={{ position: [0, 0, 1] }}>
        <Suspense className="canvas-child?" fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ProjectBStars1;


