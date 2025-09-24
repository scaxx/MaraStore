import React, { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      //Tamaño del canvas
      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
  
      //Configuración de partículas
      const colors = ["rgba(0, 200, 255, 0.3)", "rgba(255, 0, 255, 0.3)"];
      const particles = [];
      const numParticles = 100;
      const minRadius = 1;
      const maxRadius = 2.5;
  
      //Crear partículas aleatorias
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * (maxRadius - minRadius) + maxRadius,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
        });
      }
  
      //Interacción con cursor
      let mouse = {x: null, y: null, radius: 100};
      const handleMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };
      const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
  
      //Animación
      const animate = () => {
        ctx.clearRect(0, 0, width, height); //Limpiar canvas
  
        particles.forEach(p => {
          p.x += p.speedX;
          p.y += p.speedY;
  
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
  
          if (mouse.x && mouse.y) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const angle = Math.atan2(dy, dx);
              const move = (mouse.radius - dist) * 0.02;
              p.x += Math.cos(angle) * move;
              p.y += Math.sin(angle) * move;
            }
          }
  
          //Dibujar partícula
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });
  
        requestAnimationFrame(animate);
      };
  
      animate();
  
      //Ajustar tamaño si se redimensiona la ventana
      const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);
  
    }, []);

    return (
    <canvas
        ref={canvasRef}
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundColor: "#121212",
        }}
    />
  )
}

export default AnimatedBackground