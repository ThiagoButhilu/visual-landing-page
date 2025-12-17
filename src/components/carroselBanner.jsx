import banner from '../assets/images/daniil-zameshaev-zu8wQicxbDs-unsplash.jpg'

function CarroselBanner() {

    return (
        <div className="relative w-full h-190 main-bg-color overflow-hidden">

            {/* imagem */}
            <img
                src={banner}
                alt="Vista Clara"
                className="w-full h-full object-cover"
            />

            {/* overlay para suavizar a imagem */}
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
                <h1 className="
                text-6xl
                font-semibold
                tracking-wide
                font-serif
                text-[#F4F8F6]
                ">
                Vista Clara
                </h1>

                <h2 className="
                text-3xl
                text-[#EEF5F2]
                ">
                Ótica & cuidado visual
                </h2>

                {/* CTA */}
                <a
                    href="#contato"
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
                </a>
            </div>

        </div>
    );
}

export default CarroselBanner;
