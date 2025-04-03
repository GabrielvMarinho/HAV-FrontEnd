import Footer from "@/app/components/Footer/Footer";
import HeaderAdm from "@/app/components/Header/HeaderAdm";
import ArrowIcon from "@/app/components/IconsTSX/ArrowIcon";
import Google from "next-auth/providers/google";

export default function chat() {
    return (
        <>
            <HeaderAdm />
            <div className="relative" style={{
                display: "flex", flexDirection: "row", width: "75vw",
                height: "90vh", gap: "20px"
            }}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "red", marginTop: "24px" }}>

                    <div style={{ width: "100%", margin: "10px" }}>
                        <div style={{
                            display: "flex", width: "100%", justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <img src="https://cdn.pixabay.com/photo/2025/03/17/14/43/bird-9476034_960_720.png"
                                    alt=""
                                    style={{
                                        borderRadius: "100%", width: "10vh", height: "10vh",
                                        cursor: "pointer"
                                    }} />

                                <p>Username</p>
                            </div>
                            <div>
                                <ArrowIcon width={20} height={20} color={'var(--text-white)'} />
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: "55vw", height: "100vh", backgroundColor: "gray", marginTop: "24px" }}></div>
            </div>

            <Footer />

        </>
    )
}