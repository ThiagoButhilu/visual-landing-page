import Store from '../assets/images/cuidados-basicos-com-a-otica.jpg';

function Location() {
  return (
    <section className="py-20 px-8 main-bg-color">

      <div className="max-w-7xl mx-auto font-color">

        {/* TÍTULO */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            Venha nos visitar
          </h2>
          <p className="clear-font-color">
            Estamos prontos para receber você com conforto, atenção e cuidado
            em um ambiente acolhedor.
          </p>
        </div>

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* MAPA */}
          <div className="w-full h-[380px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Avenida%20Paulista%2C%201000%20-%20São%20Paulo&output=embed"
              loading="lazy"
              className="w-full h-full border-0"
              title="Localização da ótica"
            />
          </div>

          {/* INFORMAÇÕES */}
          <div className="flex flex-col gap-6">

            <div>
              <h3 className="text-xl font-medium mb-2">
                Endereço
              </h3>
              <p className="clear-font-color">
                Avenida Paulista, 1000<br />
                Bela Vista — São Paulo, SP
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Horário de funcionamento
              </h3>
              <p className="clear-font-color">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h<br />
                Domingo: fechado
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Contato
              </h3>
              <p className="clear-font-color">
                (11) 99999-9999<br />
                contato@vistaclara.com.br
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contato"
                className="
                  inline-block
                  px-8 py-3
                  rounded-full
                  tertiary-bg-color
                  text-white
                  text-sm font-medium
                  hover:opacity-90
                  transition
                "
              >
                Fale conosco
              </a>
            </div>

          </div>

        </div>

        {/* IMAGEM DA LOJA */}
        <div className="mt-20 flex justify-center">
          <img
            src={Store}
            alt="Interior da loja Vista Clara"
            className="w-full max-w-4xl rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Location;
