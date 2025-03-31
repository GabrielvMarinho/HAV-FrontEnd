"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import "./css/style.css";

export default function InputDropdownNoLabel({
    name,
    options,
    id,
    title
}: {
    name: string;
    options: [string, string][];
    title: string;
    id: string;
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(event.target.value ==""){
            const params = new URLSearchParams(searchParams.toString());
            params.delete(name)
            replace(`${pathname}?${params.toString()}`);
        }else{
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, event.target.value);
            replace(`${pathname}?${params.toString()}`);
        }
        
    };

    return (
        <select 
            name={name} 
            id={id} 
            className="inputDropdownNoLabel" 
            onChange={handleChange}
            value={searchParams.get(name) || ""}
        >
            <option value="" disabled>{title}</option>
            {options.map(([value, label]) => (
                <option key={value} value={value}>{label.toUpperCase()}</option>
            ))}
        </select>
    );
}
