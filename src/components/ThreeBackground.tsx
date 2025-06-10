import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with cinematic atmosphere
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 30, 150);
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0.9);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Create cinematic particle field
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 300;
      positions[i + 1] = (Math.random() - 0.5) * 300;
      positions[i + 2] = (Math.random() - 0.5) * 300;
      
      // Golden and blue cinematic colors
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i] = 1; colors[i + 1] = 0.8; colors[i + 2] = 0.2; // Gold
      } else if (colorChoice < 0.8) {
        colors[i] = 0.2; colors[i + 1] = 0.6; colors[i + 2] = 1; // Blue
      } else {
        colors[i] = 1; colors[i + 1] = 1; colors[i + 2] = 1; // White
      }
      
      sizes[i / 3] = Math.random() * 3 + 1;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Create floating film reels and camera elements
    const filmElements: THREE.Mesh[] = [];
    
    // Film reels
    for (let i = 0; i < 8; i++) {
      const torusGeometry = new THREE.TorusGeometry(3, 0.8, 8, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.15, 0.8, 0.6), // Golden
        transparent: true,
        opacity: 0.4,
        shininess: 100
      });
      
      const filmReel = new THREE.Mesh(torusGeometry, material);
      filmReel.position.x = (Math.random() - 0.5) * 120;
      filmReel.position.y = (Math.random() - 0.5) * 120;
      filmReel.position.z = (Math.random() - 0.5) * 120;
      filmReel.rotation.x = Math.random() * Math.PI;
      filmReel.rotation.y = Math.random() * Math.PI;
      
      scene.add(filmReel);
      filmElements.push(filmReel);
    }

    // Camera lens shapes
    for (let i = 0; i < 6; i++) {
      const cylinderGeometry = new THREE.CylinderGeometry(2, 2.5, 1, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6, 0.8, 0.5), // Blue
        transparent: true,
        opacity: 0.5,
        shininess: 80
      });
      
      const lens = new THREE.Mesh(cylinderGeometry, material);
      lens.position.x = (Math.random() - 0.5) * 100;
      lens.position.y = (Math.random() - 0.5) * 100;
      lens.position.z = (Math.random() - 0.5) * 100;
      lens.rotation.x = Math.random() * Math.PI;
      lens.rotation.z = Math.random() * Math.PI;
      
      scene.add(lens);
      filmElements.push(lens);
    }

    // Cinematic lighting setup
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.4);
    scene.add(ambientLight);
    
    // Key light (golden)
    const keyLight = new THREE.DirectionalLight(0xffd700, 1.2);
    keyLight.position.set(20, 20, 20);
    keyLight.castShadow = true;
    scene.add(keyLight);
    
    // Fill light (blue)
    const fillLight = new THREE.DirectionalLight(0x4169e1, 0.8);
    fillLight.position.set(-20, 10, 20);
    scene.add(fillLight);
    
    // Rim light
    const rimLight = new THREE.DirectionalLight(0x87ceeb, 0.6);
    rimLight.position.set(0, -20, -20);
    scene.add(rimLight);

    // Floating accent lights
    const accentLight1 = new THREE.PointLight(0xffd700, 3, 80);
    accentLight1.position.set(15, 15, 15);
    scene.add(accentLight1);
    
    const accentLight2 = new THREE.PointLight(0x4169e1, 2, 60);
    accentLight2.position.set(-15, -10, 20);
    scene.add(accentLight2);

    camera.position.z = 40;

    // Enhanced cinematic animation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.0008;
      
      // Animate film elements
      filmElements.forEach((element, index) => {
        element.rotation.y += 0.012 + index * 0.002;
        element.rotation.x += 0.008 + index * 0.001;
        
        // Cinematic floating motion
        element.position.y += Math.sin(time * 1.5 + index) * 0.03;
        element.position.x += Math.cos(time + index) * 0.02;
      });
      
      // Particle system motion
      particleSystem.rotation.y += 0.001;
      particleSystem.rotation.x += 0.0005;
      
      // Dynamic lighting for cinematic effect
      accentLight1.position.x = Math.sin(time * 2) * 25;
      accentLight1.position.y = Math.cos(time * 1.5) * 20;
      accentLight1.intensity = 2.5 + Math.sin(time * 3) * 0.5;
      
      accentLight2.position.x = Math.cos(time * 1.8) * 30;
      accentLight2.position.z = Math.sin(time * 2.2) * 25;
      accentLight2.intensity = 2 + Math.cos(time * 2.5) * 0.5;
      
      // Color temperature shifts
      keyLight.color.setHSL(0.15 + Math.sin(time * 0.5) * 0.05, 0.8, 0.6);
      fillLight.color.setHSL(0.6 + Math.cos(time * 0.3) * 0.1, 0.8, 0.5);
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ThreeBackground;
