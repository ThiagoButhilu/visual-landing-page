import imgHeader from '../assets/images/ChatGPT Image 11 de dez. de 2025, 21_45_08.png';
import { motion } from 'framer-motion';

function Header() {
    return (
        
        <motion.header initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }} className="
            fixed top-0 w-full z-50
            bg-white/30 backdrop-blur-md
            border-b border-white/40
            shadow-sm
        ">
            <nav className="
                container mx-auto
                grid grid-cols-3
                items-center
                px-6 py-4
            ">

                {/* MENU ESQUERDO */}
                <div>
                    <ul className="flex gap-6 text-sm font-medium">
                        <li>
                            <motion.a
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.2 }}
                                href="#inicio"
                                className="font-color relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
                            >
                                Início
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.2 }}
                                href="#servicos"
                                className="font-color relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
                            >
                                Serviços
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.2 }}
                                href="#depoimentos"
                                className="font-color relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
                            >
                                Depoimentos
                            </motion.a>
                        </li>
                    </ul>
                </div>

                {/* LOGO CENTRAL */}
                <div className="flex justify-center">
                    <img
                        src={imgHeader}
                        alt="Vista Clara"
                        className="w-11 h-11 object-contain cursor-pointer hover:scale-105 transition"
                    />
                </div>

                {/* CTA DIREITO */}
                <div className="flex justify-end">
                    <motion.a
                   
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                        href="#contato"
                        className="
                            px-5 py-2
                            rounded-full
                            tertiary-bg-color
                            text-white
                            text-sm font-medium
                            hover:opacity-90
                            tran    sition
                        "
                    >
                        Fale conosco
                    </motion.a>
                </div>

            </nav>
        </motion.header>
    );
}

export default Header;
