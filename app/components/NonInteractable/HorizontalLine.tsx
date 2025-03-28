import "./css/style.css";

export default function Line(props: { size: number; color?: string }) {
  const lineColor = props.color || "#B23F52";
  return (
    <div
      style={{ width: `${props.size}px`, backgroundColor: lineColor }}
      className="horizontalLine"
    ></div>
  );
}
