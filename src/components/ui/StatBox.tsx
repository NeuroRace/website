import Card from "./Card";

export default function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <p className="text-xs font-bold uppercase tracking-wide text-neuro-cyan">{label}</p>
      <p className="mt-2 text-4xl font-extrabold tracking-wide text-white sm:text-5xl">{value}</p>
    </Card>
  );
}
