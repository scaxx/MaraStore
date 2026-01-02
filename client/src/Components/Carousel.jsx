import React, { useEffect, useState } from 'react'

const Carousel = () => {
    //Índice de la imagen actual
    const [current, setCurrent] = useState(0);

    //Imágenes
    const imagenes = [
        "./src/assets/Muestras1.png",
        "./src/assets/Muestras2.png"
    ];

    //Cambia la foto
    useEffect(() => {
        const intervalo = setInterval(() => {
            setCurrent((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
        }, 10000);

        return () => clearInterval(intervalo);
    }, [imagenes.length]);

  return (
    <main className='relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl'>
        <section 
            className='flex transition-transform duration-900'
            style={{ transform: `translateX(-${current * 100}%)` }}
        >
            {imagenes.map((src, index) => (
                <img
                    key={index}
                    src={src} 
                    alt={`slide-${index}`}
                    className='w-full flex-shrink-0 object-cover'
                />
            ))}
        </section>        
    </main>
  )
}

export default Carousel