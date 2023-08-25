import Image from "next/image"
import styles from "./WhatsappComponent.module.scss"
import data from "@/modules/es.json"

export default function WhatsappComponent() {
    return (
        <section className={styles["whatsapp-container"]}>
            <div className={styles["whatsapp-container-content"]}>
                <p className={styles["whatsapp-text"]}>{data.whatsapp.text}</p>
                <a href={`https://wa.me/${data.whatsapp.phone}`} target="_blank" className={styles["whatsapp-btn"]}>
                    <Image
                        src={data.whatsapp.btn.icon.svgSrc}
                        alt={data.whatsapp.btn.icon.svgAlt}
                        width={40}
                        height={40}
                    />
                    <p className={styles["whatsapp-text"]}>{data.whatsapp.btn.text}</p>
                </a>
            </div>
        </section>
    )
}