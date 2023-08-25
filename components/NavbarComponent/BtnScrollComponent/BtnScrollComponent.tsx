import styles from "./BtnScrollComponent.module.scss"
import Link from "next/link";

interface BtnScrollComponentProps {
    element_id: string;
    title: string;
    isActive: boolean;
    link: string,
    handleClickTitleNavigation: (textItem: string) => void;
}

export default function BtnScrollComponent({
    element_id,
    title,
    handleClickTitleNavigation,
    link,
    isActive
}: BtnScrollComponentProps) {

    return (
        <Link
            id={element_id}
            href={link}
            onClick={() => {
                handleClickTitleNavigation(element_id);
            }}
            className={styles['btn-title']}
        >
            <p
                className={`${styles['title-navigation']} ${isActive ? styles['active-text'] : ''}`}
            >
                {title}
            </p>
        </Link>
    );
}