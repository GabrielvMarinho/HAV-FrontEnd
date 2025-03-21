"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import './css/style.css';

export default function NavBarAdm(props: { options: { label: string; path: string }[] }) {
    const pathname = usePathname();

    console.log(props.options)
    return (
        <div className="navBarAdm" style={{ display: "flex", flexDirection: "row" }}>
            {props.options.map((option, index) => {
                const isSelected = pathname === option.path;
            
                return (
                    <Link
                        href={option.path}
                        key={option.label}
                        className={`boxNavBarAdm 
                            ${index === 0 ? "boxNavBarAdmLeftCorner" : ""} 
                            ${index === props.options.length - 1 ? "boxNavBarAdmRightCorner" : ""} 
                            ${isSelected ? "selected" : ""}`}
                    >
                        {option.label}
                    </Link>
                );
            })}
        </div>
    );
}

