import Image from 'next/image';
import "./css/style.css";

export default function ProfileCard(
    props: { name: String, instagramLink: string, whatsappLink: string }
) {

    return (
        <div className="card">
            <Image src="/image/perfilmage.png" alt="Profile" width={100} height={100} className="profileImage" />
            <p className="name">{props.name.toUpperCase()}</p>
            <div className="socialIcons">
                <a href={props.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Image src="/image/whatsapp.png" alt="WhatsApp" width={30} height={30} />
                </a>
                <a href={props.instagramLink} target="_blank" rel="noopener noreferrer">
                    <Image src="/image/instagram.png" alt="Instagram" width={30} height={30} />
                </a>
            </div>
        </div>
    );
}