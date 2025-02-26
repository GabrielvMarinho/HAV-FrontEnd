import Icon from "./IconInterface";

export default function File({ width, height, color }: Icon) {
    return (
        <div>
            <svg style={{opacity: "0.6"}} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 25" fill="none" >
                <path d="M20.8333 0H4.16667C1.86944 0 0 1.40208 0 3.125V25H25V3.125C25 1.40208 23.1306 0 20.8333 0ZM22.2222 22.9167H2.77778V3.125C2.77778 2.55 3.4 2.08333 4.16667 2.08333H20.8333C21.6 2.08333 22.2222 2.55 22.2222 3.125V22.9167ZM5.55556 5.20833H19.4444V7.29167H5.55556V5.20833ZM5.55556 10.4167H19.4444V12.5H5.55556V10.4167ZM5.55556 15.625H12.5V17.7083H5.55556V15.625Z" fill="#F2EBE3" />
            </svg >
        </div>
    );
}