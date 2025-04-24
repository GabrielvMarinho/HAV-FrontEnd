"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import './css/style.css';

export default function NavBarAdm(props: {
  options: { label: string; path?: string }[];
  onSelect?: (label: string) => void;
  selected?: string;
}) {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className="navBarAdm" style={{ display: "flex", flexDirection: "row" }}>
      {props.options.map((option, index) => {
        console.log(option)
        // Se for navegação via <Link>, usamos pathname
        const isSelected = props.onSelect
          ? props.selected === option.label
          : pathname === option.path;

        const className = `boxNavBarAdm 
          ${index === 0 ? "boxNavBarAdmLeftCorner" : ""} 
          ${index === props.options.length - 1 ? "boxNavBarAdmRightCorner" : ""} 
          ${isSelected ? "selected" : ""}`;

        // 🟢 Modo botão com onClick
        if (props.onSelect) {
          return (
            <button
              key={option.label}
              onClick={() => props.onSelect?.(option.label)}
              className={className}
            >
              {option.label}
            </button>
          );
        }

        // 🔵 Modo com Link
        return (
          <Link href={option.path ?? "#"} key={option.label} className={className}>
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
