export default function SectionHeading({ index, label, title, titleId }) {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:gap-8">
      <p className="eyebrow flex items-baseline gap-2 md:col-span-4">
        <span className="index">{index}</span>
        <span aria-hidden="true">/</span>
        {label}
      </p>
      <h2
        id={titleId}
        className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:col-span-8"
      >
        {title}
      </h2>
    </div>
  );
}
