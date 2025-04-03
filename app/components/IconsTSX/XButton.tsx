import Icon from "./IconInterface";

export default function Verificar({ width, height, color }: Icon) {
    return (
    <svg width={width} height={height} viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1191_14768)">
    <path d="M58.5408 50.3333L90.7742 10.5125C92.945 7.82913 92.5325 3.8958 89.845 1.72496C87.1575 -0.450037 83.2283 -0.0292041 81.0575 2.65413L50.4991 40.4041L19.9408 2.65413C14.77 -3.67504 5.10748 4.14163 10.2241 10.5166L42.4575 50.3375L10.2241 90.1541C8.05331 92.8375 8.46581 96.7708 11.1533 98.9416C13.82 101.104 17.7616 100.708 19.9408 98.0125L50.4991 60.2625L81.0575 98.0125C83.2408 100.708 87.1825 101.104 89.845 98.9416C92.5325 96.7708 92.945 92.8333 90.7742 90.1541L58.5408 50.3333Z" fill={color}/>
    </g>
    <defs>
    <clipPath id="clip0_1191_14768">
    <rect width="100" height="100" fill="white" transform="translate(0.5 0.333252)"/>
    </clipPath>
    </defs>
    </svg>
    )
}
