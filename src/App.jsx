import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";
import { OrbitControls } from "@react-three/drei";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function App() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothProgress = useSpring(progress, { damping: 20 });

  return (
    <div ref={container} className="h-[100vh] bg-zinc-50 main relative">
      <div className="cube">
        <Canvas>
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Cube progress={smoothProgress} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
