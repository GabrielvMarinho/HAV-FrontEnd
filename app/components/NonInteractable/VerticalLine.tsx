import "./css/style.css";

export default function Line(props: { height: number; color?: string }) {
  const lineColor = props.color || "#B23F52";
  return (
    <div
      style={{ height: `${props.height}px`, backgroundColor: lineColor }}
      className="verticalLine"
    ></div>
  );
}
