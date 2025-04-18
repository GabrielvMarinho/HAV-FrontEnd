"use client";

import { usePathname } from "next/navigation";
import './css/style.css';

export default function NavBarAdm(props: {
    options: { label: string; path?: string }[];
    onSelect?: (label: string) => void;
    selected?: string;
}) {
    const pathname = usePathname();

    return (
        <div className="navBarAdm" style={{ display: "flex", flexDirection: "row" }}>
            {props.options.map((option, index) => {
                const isSelected = pathname === option.path;

                return (
                    <button
                        key={option.label}
                        onClick={() => props.onSelect?.(option.label)}
                        className={`boxNavBarAdm 
              ${index === 0 ? "boxNavBarAdmLeftCorner" : ""} 
              ${index === props.options.length - 1 ? "boxNavBarAdmRightCorner" : ""} 
              ${isSelected ? "selected" : ""}`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}

