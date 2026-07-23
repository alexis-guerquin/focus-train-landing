export function PetalField() {
  return (
    <div className="petal-field" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <i key={index} />
      ))}
    </div>
  );
}
