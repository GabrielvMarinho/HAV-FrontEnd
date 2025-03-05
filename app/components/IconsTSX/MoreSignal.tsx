import Icon from "./IconInterface";

export default function MoreSignal({ width, height, color }: Icon) {
    return (<>
        <svg width={width} height={height} color={color} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <path id="Vector" d="M23.9375 11.4375H14.5625V2.0625C14.5625 1.19956 13.8629 0.5 13 0.5C12.1371 0.5 11.4375 1.19956 11.4375 2.0625V11.4375H2.0625C1.19956 11.4375 0.5 12.1371 0.5 13C0.5 13.8629 1.19956 14.5625 2.0625 14.5625H11.4375V23.9375C11.4375 24.8004 12.1371 25.5 13 25.5C13.8629 25.5 14.5625 24.8004 14.5625 23.9375V14.5625H23.9375C24.8004 14.5625 25.5 13.8629 25.5 13C25.5 12.1371 24.8004 11.4375 23.9375 11.4375Z" fill="#F2EBE3" />
            </g>
        </svg>

    </>);
}