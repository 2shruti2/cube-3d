import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef } from "react";

const Cube = () => {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.z += delta * 0.25;
  });

  const texture_1 = useLoader(TextureLoader, "/assets/1.jpg");
  const texture_2 = useLoader(TextureLoader, "/assets/2.jpg");
  const texture_3 = useLoader(TextureLoader, "/assets/3.jpg");
  const texture_4 = useLoader(TextureLoader, "/assets/4.jpg");
  const texture_5 = useLoader(TextureLoader, "/assets/5.jpg");
  const texture_6 = useLoader(TextureLoader, "/assets/6.jpg");

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture_1} attach={"material-0"} />
      <meshStandardMaterial map={texture_2} attach={"material-1"} />
      <meshStandardMaterial map={texture_3} attach={"material-2"} />
      <meshStandardMaterial map={texture_4} attach={"material-3"} />
      <meshStandardMaterial map={texture_5} attach={"material-4"} />
      <meshStandardMaterial map={texture_6} attach={"material-5"} />
    </mesh>
  );
};

export default Cube;
