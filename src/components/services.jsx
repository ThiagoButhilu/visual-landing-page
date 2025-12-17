import sergey from '../assets/images/RIXX Eyewear.jpg';

function Services() {
  return (
    <section className="py-20 px-8 main-bg-color">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto font-color">

        {/* TÍTULO + TEXTO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            Cuidados Visuais Completos
          </h2>
          <p className="clear-font-color leading-relaxed">
            Oferecemos uma ampla gama de serviços para cuidar da sua saúde visual.
            Desde exames completos até a escolha personalizada de armações e lentes,
            nossa equipe está pronta para atender você com atenção e cuidado.
          </p>
        </div>

        {/* GRID DE SERVIÇOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          <div className="p-6 rounded-2xl shadow-md secondary-bg-color">
            <h3 className="text-xl font-medium mb-2">
              Exames Completos
            </h3>
            <p className="text-sm clear-font-color">
              Avaliação visual com tecnologia moderna para garantir precisão
              e conforto em cada consulta.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md secondary-bg-color">
            <h3 className="text-xl font-medium mb-2">
              Armações Personalizadas
            </h3>
            <p className="text-sm clear-font-color">
              Seleção cuidadosa de armações que combinam com seu rosto,
              estilo e rotina.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md secondary-bg-color">
            <h3 className="text-xl font-medium mb-2">
              Lentes de Alta Qualidade
            </h3>
            <p className="text-sm clear-font-color">
              Lentes com proteção UV e tecnologias que proporcionam
              conforto visual no dia a dia.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md secondary-bg-color">
            <h3 className="text-xl font-medium mb-2">
              Ajustes e Manutenção
            </h3>
            <p className="text-sm clear-font-color">
              Ajustes rápidos para garantir encaixe perfeito
              e maior durabilidade dos seus óculos.
            </p>
          </div>

        </div>

        {/* IMAGEM + CTA */}
        

      </div>
    </section>
  );
}

export default Services;
