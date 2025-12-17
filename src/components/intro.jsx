import middleImg from '../assets/images/Ultra Light S Round Trans Grey _ Grey - Default Title.jpg'
import firstColumn from '../assets/images/colum1.jpg'
import secondColumn from '../assets/images/column2.jpg'

function Intro() {

    return (
        <section className="forty-bg-color grid grid-cols-3 gap-4 px-10 py-16 mx-auto w-full">

            {/* COLUNA ESQUERDA */}
            <div className='flex flex-col justify-between h-full items-center'>

                <div className='w-80 clear-font-color'>
                    <span className="text-sm uppercase tracking-widest opacity-70">
                        Nossa missão
                    </span>

                    <h2 className='font-bold mb-4 mt-2 text-3xl'>
                        Cuidar da sua visão é o nosso foco
                    </h2>

                    <p className="mb-6 opacity-80">
                        Na nossa ótica, acreditamos que enxergar bem é parte do bem-estar. Oferecemos óculos e lentes pensados para o seu conforto, estilo e saúde visual.
                    </p>

                    {/* CTA discreto */}
                    <a
                        href="#servicos"
                        className="inline-block border border-current px-6 py-2 rounded-full text-sm hover:bg-white/10 transition"
                    >
                        Conhecer serviços
                    </a>
                </div>

                {/* imagem + legenda */}
                <div className="text-center">
                    <img
                        className='rounded-bl-4xl rounded-tr-4xl w-56 h-56 object-cover shadow-xl'
                        src={firstColumn}
                        alt="Armações modernas"
                    />
                    <p className="text-xs mt-2 opacity-70">
                        Armações leves e confortáveis
                    </p>
                </div>

            </div>

            {/* COLUNA CENTRAL */}
            <div className='flex items-center justify-center relative'>
                <img
                    className='w-124 h-full object-cover rounded-xl'
                    src={middleImg}
                    alt="Modelo usando óculos"
                />

                {/* detalhe visual */}
                <div className="absolute bottom-6 right-6 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-sm text-emerald-100 font-semibold border border-white/40 shadow-sm">
                    Estilo & conforto
                </div>
            </div>

            {/* COLUNA DIREITA */}
            <div className='flex flex-col justify-between h-full items-center'>

                {/* imagem + legenda */}
                <div className="text-center">
                    <img
                        className='rounded-br-4xl rounded-tl-4xl w-56 h-56 object-cover shadow-xl'
                        src={secondColumn}
                        alt="Óculos em destaque"
                    />
                    <p className="text-xs mt-2 opacity-70">
                        Design moderno e funcional
                    </p>
                </div>

                <div className='w-80 clear-font-color'>
                    <span className="text-sm uppercase tracking-widest opacity-70">
                        Nossa coleção
                    </span>

                    <h2 className='font-bold mb-4 mt-2 text-3xl'>
                        Óculos que combinam com você
                    </h2>

                    <p className="opacity-80">
                        Trabalhamos com armações modernas, leves e funcionais, sempre priorizando qualidade e atendimento atencioso para cada pessoa.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Intro;
