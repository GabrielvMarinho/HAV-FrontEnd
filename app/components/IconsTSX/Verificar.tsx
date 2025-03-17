import Icon from "./IconInterface";

export default function Verificar({ width, height, color }: Icon) {
    return (
        <svg width={width} height={height} viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1191_14767)">
        <path d="M32.7883 86.4276C29.9497 86.4288 27.2274 85.3006 25.2219 83.2917L2.34609 60.4244C-0.115362 57.9622 -0.115362 53.9709 2.34609 51.5086C4.80832 49.0472 8.79961 49.0472 11.2618 51.5086L32.7883 73.0351L89.7382 16.0852C92.2004 13.6238 96.1917 13.6238 98.6539 16.0852C101.115 18.5475 101.115 22.5387 98.6539 25.001L40.3547 83.2917C38.3492 85.3006 35.6269 86.4288 32.7883 86.4276Z" fill={color}/>
        </g>
        <defs>
        <clipPath id="clip0_1191_14767">
        <rect width="100" height="100" fill="white" transform="translate(0.5 0.333252)"/>
        </clipPath>
        </defs>
        </svg>
    )
    }