import sectionImage from './icons/why-bg.avif';
import HandStandIcon from './icons/handstand.svg';
import FrontLeverIcon from './icons/front-lever.svg';
import PlancheIcon from './icons/planche.svg';

const WhySection = () => {
  return (
    <section>
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={sectionImage}
              alt="Imagem Ilustrativa"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3-xl font-bold md-6">
              Por que treinar na praça?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A calistenia pode ser praticada em qualquer lugar e sem o uso de{' '}
              <span className="text-black font-medium">
                equipamentos ou aparelhos pesados
              </span>
              , tornando-a conveniente e acessível para todos.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-18 h-18 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <img
                    src={HandStandIcon}
                    alt="Icone de Handstand"
                    className="w-18 h-18"
                  />
                </div>
                <h3 className="font-bold">HandStand</h3>
              </div>

              <div className="text-center">
                <div className="w-18 h-18 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <img
                    src={FrontLeverIcon}
                    alt="Icone do Front-Lever"
                    className="w-18 h-18"
                  />
                </div>
                <h3 className="font-bold">Front-Lever</h3>
              </div>

              <div className="text-center">
                <div className="w-18 h-18 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <img
                    src={PlancheIcon}
                    alt="Icone da Planche"
                    className="w-18 h-18"
                  />
                </div>
                <h3 className="font-bold">Planche</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
