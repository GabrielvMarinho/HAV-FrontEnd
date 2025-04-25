import Image from 'next/image';
import "./css/style.css";

export default function ProfileCard(
    props: { name: String}
) {

    return (
        <div className="card">
            <Image src="/image/kauani.png" alt="Profile" width={100} height={100} className="profileImage" />
            <p className="name">{props.name}</p>
            <div className="socialIcons">
            </div>
        </div>
    );
}