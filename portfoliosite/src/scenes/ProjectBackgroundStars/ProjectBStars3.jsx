import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(9000), { radius: 1 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 112]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='black'
          size={0.0100}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ProjectBStars3 = () => {
  return (
    <div className='canvas-1 w-full h-auto relative inset-0 z-[11] xxl:h-[600px] xxl:bottom-[10rem]'>
    <Canvas className="canvas-control relative xxl:bottom-[75rem]" camera={{ position: [0, 0, 1] }}>
      <Suspense className="canvas-child?" fallback={null}>
        <Stars />
      </Suspense>

      <Preload all />
    </Canvas>
  </div>
  );
};

export default ProjectBStars3;


