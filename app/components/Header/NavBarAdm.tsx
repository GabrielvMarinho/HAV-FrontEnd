"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import './css/style.css';

export default function NavBarAdm() {
    const pathname = usePathname();
    
    const options = [
        { label: "ADMINISTRADOR", path: "/manage/admins" },
        { label: "EDITOR", path: "/manage/editors" },
        { label: "CORRETOR", path: "/manage/realtors" },
        { label: "USUÁRIO", path: "/manage/users" },
        { label: "PROPRIETÁRIO", path: "/manage/owners" }
    ];

    return (
        <div className="navBarAdm" style={{ display: "flex", flexDirection: "row" }}>
            {options.map((option, index) => {
                const isSelected = pathname === option.path;

                return (
                    <Link
                        href={option.path}
                        key={option.label}
                        className={`boxNavBarAdm 
                            ${index === 0 ? "boxNavBarAdmLeftCorner" : ""} 
                            ${index === options.length - 1 ? "boxNavBarAdmRightCorner" : ""} 
                            ${isSelected ? "selected" : ""}`}
                    >
                        {option.label}
                    </Link>
                );
            })}
        </div>
    );
}
