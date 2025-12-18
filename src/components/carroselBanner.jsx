import banner from '../assets/images/daniil-zameshaev-zu8wQicxbDs-unsplash.jpg'
import { motion } from 'framer-motion';

function CarroselBanner() {

  const title = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const subtitle = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.15 }
    }
  };

  const cta = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="relative w-full h-full main-bg-color overflow-hidden"
    >

      {/* imagem */}
      <img
        src={banner}
        alt="Vista Clara"
        className="w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* conteúdo */}
      <div className="
        absolute inset-0
        flex flex-col
        justify-center
        pl-24
        max-w-2xl
        space-y-4
      ">

        {/* TÍTULO */}
        <motion.h1
          variants={title}
          className="text-6xl font-semibold tracking-wide font-serif text-[#F4F8F6]"
        >
          Vista Clara
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.h2
          variants={subtitle}
          className="text-3xl text-[#EEF5F2]"
        >
          Ótica & cuidado visual
        </motion.h2>

        {/* CTA */}
        <motion.a
          variants={cta}
          href="#contato"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-6
            w-fit
            px-8 py-3
            rounded-full
            bg-white
            text-[#2F5E4E]
            text-sm
            font-medium
            hover:bg-white/90
            transition
          "
        >
          Agendar exame
        </motion.a>

      </div>

    </motion.div>
  );
}

export default CarroselBanner;
