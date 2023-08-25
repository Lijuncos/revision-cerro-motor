import styles from "./FooterComponent.module.scss"
import data from "@/modules/es.json"
import LogoComponent from "../LogoComponent/LogoComponent"
import Link from "next/link";
import { LinksFooterInterface } from "@/types";
import Image from "next/image";
import WhatsappComponent from "../WhatsappComponent/WhatsappComponent";



export default function FooterComponent() {
    return (
        <section className={styles['container-section-footer']}>
            <WhatsappComponent />
            <div className={styles["wrapper-footer"]}>
                <div className={styles['primary-section']}>
                    <div className={styles['logo-component']}>
                        <LogoComponent imgData={data.footer.logo} />
                    </div>
                    <div className={styles["footer-categories"]}>
                        {
                            data.footer.categories.map((links: LinksFooterInterface) => {
                                if (links) {
                                    return (
                                        <Link key={links.id} href={links.link} className={styles["footer-categories-link"]}>
                                            {links.title}
                                        </Link>
                                    )
                                }
                            })

                        }
                    </div>
                    <Link href={data.footer.store.logo.link} target="_blank" className={styles["footer-store"]}>
                        <p className={styles["footer-store-title"]}>{data.footer.store.title}</p>
                        <Image
                            src={data.footer.store.logo.imgSrc}
                            alt={data.footer.store.logo.imgAlt}
                            width={60}
                            height={60}
                        />
                    </Link>
                </div>

                <div className={styles["footer-line"]}></div>

                <div className={styles['secondary-section']}>
                    <p>{data.footer.copyright}</p>
                </div>
            </div>
        </section>
    )
}