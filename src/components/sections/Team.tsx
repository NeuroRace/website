import Card from "@/components/ui/Card";

const team = [
  "Ester Santos da Silva",
  "Pedro Henrique Pedrosa Tavares",
  "Rodrigo Brasileiro",
  "Nikolas Rodrigues Moura dos Santos",
  "Guilherme Rocha Bianchini",
  "Thiago Jardim de Oliveira",
  "Matheus Barbosa da Silva",
  "João Victor Moreira",
];

export default function Team() {
  return (
    <section id="equipe" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
        <span className="text-neuro-cyan">Equipe</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">Quem criou o NeuroRace.</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((name) => (
          <Card key={name} className="text-center">
            <p className="font-extrabold text-white">{name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
