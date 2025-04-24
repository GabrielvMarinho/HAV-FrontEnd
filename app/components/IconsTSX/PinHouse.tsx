import { he } from "react-day-picker/locale";
import Icon from "./IconInterface";

export default function Pencil({ width, height, color }: Icon) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="50" height="50" fill="url(#pattern0_874_6041)" />
        <defs>
          <use xlink:href="#image0_874_6041" transform="scale(0.00195312)" />
        </defs>
      </svg>
    </>
  );
}
