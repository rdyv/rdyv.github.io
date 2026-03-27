export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="h-px flex-1 bg-border" />
      <div className="mx-3 flex flex-col items-center gap-1">
        <div className="diamond" />
        <div className="diamond" />
      </div>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
