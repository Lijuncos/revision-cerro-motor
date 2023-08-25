'use client'
import styles from "./ScrollLayoutComponent.module.scss"

export default function ScrollLayoutComponent({ children }: { children: React.ReactNode }) {
    return (
        <section className={`${styles["layout-section-navbar"]}`}>
            {children}
        </section>
    )
}