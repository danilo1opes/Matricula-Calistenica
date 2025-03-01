import { Star, ArrowRight } from 'lucide-react';

const workout = [
  {
    level: 'Iniciante',
    stars: 1,
    exercices: [
      'Aquecimento (5-10minutos)',
      'Treino 1 - Corpo Completo',
      'Flexão de Braços (Push-ups)',
    ],
    duration: '1 hora de treino',
  },
  {
    level: 'Intermediario',
    stars: 2,
    exercices: [
      'Isometria (10-15minutos)',
      'Treino 2 - Corpo Completo',
      'Flexões variadas (Diamond)',
    ],
    duration: '2 horas de treino',
  },
  {
    level: 'Avançado',
    stars: 3,
    exercices: [
      'Planche e Handstand (20minutos)',
      'Treino 2 - Corpo Completo',
      'Barras variadas (Muscle-up)',
    ],
    duration: '2 horas de treino',
  },
];

const TrainingPlans = () => {
  return (
    <section className="py-20 bg-gray-50" id="treinos">
      <div className="lg:px-8 max-2-7xl mx-auto px-4">
        <h2 className="text-3xl mb-12 text-center font-bold">
          Rotina de Treinos
        </h2>
        <div className="grid grid-cols-1 md:grid-col-3 gap-8">
          {workout.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(plan.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-400"
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">{plan.level}</h3>

              <ul className="space-y-3 mb-6">
                {plan.exercices.map((exercies, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>{exercies}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-600 mb-6">{plan.duration}</p>

              <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                Matricule-se <ArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPlans;
