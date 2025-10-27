import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";

function Planet({ name, color, size, distance, speed, info, onSelect, children }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.cos(t * speed) * distance;
    ref.current.position.z = Math.sin(t * speed) * distance;
  });

  return (
    <group ref={ref}>
      <mesh
        onClick={() => onSelect({ name, info })}
        onPointerOver={(e) => (document.body.style.cursor = "pointer")}
        onPointerOut={(e) => (document.body.style.cursor = "default")}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {children}
    </group>
  );
}

function Moon({ size, distance, speed, color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.cos(t * speed) * distance;
    ref.current.position.z = Math.sin(t * speed) * distance;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color || "gray"} />
    </mesh>
  );
}

function SaturnRings() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.2, 2, 64]} />
      <meshStandardMaterial color="wheat" side={2} transparent opacity={0.6} />
    </mesh>
  );
}

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 5, 12], fov: 60 }}>
        {/* الإضاءة */}
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="white" />

        {/* الشمس */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial emissive="yellow" emissiveIntensity={1.5} />
        </mesh>

        {/* الكواكب */}
        <Planet
          name="Mercury"
          color="orange"
          size={0.3}
          distance={3}
          speed={0.6}
          info="Mercury is the closest planet to the Sun."
          onSelect={setSelectedPlanet}
        />
        <Planet
          name="Venus"
          color="#d4af37"
          size={0.5}
          distance={5}
          speed={0.4}
          info="Venus has a thick, toxic atmosphere that traps heat."
          onSelect={setSelectedPlanet}
        />
        <Planet
          name="Earth"
          color="blue"
          size={0.6}
          distance={7}
          speed={0.25}
          info="Earth — our home planet with water and life."
          onSelect={setSelectedPlanet}
        >
          <Moon size={0.15} distance={1} speed={1.5} />
        </Planet>
        <Planet
          name="Mars"
          color="red"
          size={0.5}
          distance={9}
          speed={0.18}
          info="Mars is known as the Red Planet."
          onSelect={setSelectedPlanet}
        />
        <Planet
          name="Saturn"
          color="#d2b48c"
          size={0.9}
          distance={12}
          speed={0.12}
          info="Saturn has beautiful rings made of ice and dust."
          onSelect={setSelectedPlanet}
        >
          <SaturnRings />
        </Planet>

        {/* خلفية النجوم */}
        <Stars radius={100} depth={50} count={5000} factor={4} />

        {/* تحكم الماوس */}
        <OrbitControls />
      </Canvas>

      {/* النص عند اختيار كوكب */}
      {selectedPlanet && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "1.1rem",
            textAlign: "center",
          }}
        >
          <h2>{selectedPlanet.name}</h2>
          <p>{selectedPlanet.info}</p>
        </div>
      )}
    </div>
  );
}
