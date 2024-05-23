import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="h-[100vh] bg-zinc-50">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <OrbitControls enableZoom={false} />
        <Cube />
      </Canvas>
    </div>
  );
}

export default App;
