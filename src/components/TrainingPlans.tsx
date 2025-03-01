//import { Star, ArrowRight } from 'lucide-react';

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
];

const TrainingPlans = () => {
  return (
    <section className="py-20">
      <div>
        <h2>Rotina de Treinos</h2>
      </div>
    </section>
  );
};

export default TrainingPlans;
