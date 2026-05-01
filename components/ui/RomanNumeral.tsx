type Props = {
  value: string;
};

export function RomanNumeral({ value }: Props) {
  return (
    <span className="font-display text-5xl leading-none text-[color:var(--color-gold)]/70">
      {value}
    </span>
  );
}
