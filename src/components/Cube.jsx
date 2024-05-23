import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useScroll } from "@react-three/drei";

const Cube = ({ progress }) => {
  const mesh = useRef(null);

  const data = useScroll();

  const options = {
    damping: 20,
  };

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.addEventListener("mousemove", manageMouseMove);
    };
  }, []);

  // useFrame((state, delta) => {
  //   mesh.current.rotation.x += delta * 0.25;
  //   mesh.current.rotation.y += delta * 0.25;
  //   mesh.current.rotation.z += delta * 0.25;
  // });

  const texture_1 = useLoader(TextureLoader, "/assets/1.jpg");
  const texture_2 = useLoader(TextureLoader, "/assets/2.jpg");
  const texture_3 = useLoader(TextureLoader, "/assets/3.jpg");
  const texture_4 = useLoader(TextureLoader, "/assets/4.jpg");
  const texture_5 = useLoader(TextureLoader, "/assets/5.jpg");
  const texture_6 = useLoader(TextureLoader, "/assets/6.jpg");

  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach={"material-0"} />
      <meshStandardMaterial map={texture_2} attach={"material-1"} />
      <meshStandardMaterial map={texture_3} attach={"material-2"} />
      <meshStandardMaterial map={texture_4} attach={"material-3"} />
      <meshStandardMaterial map={texture_5} attach={"material-4"} />
      <meshStandardMaterial map={texture_6} attach={"material-5"} />
    </motion.mesh>
  );
};

export default Cube;
