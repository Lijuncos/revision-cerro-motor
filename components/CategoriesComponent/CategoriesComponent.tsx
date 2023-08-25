import { CategoriesInterface } from "@/types"
import styles from "./CategoriesComponent.module.scss"
import data from "@/modules/es.json"
import Image from "next/image"

export default function CategoriesComponent() {
    return (
        <div className={styles['categories-container']}>
            <div className={styles['categories-title']}>{data.categories.title}</div>
            <div className={styles['cards-container']}>
                {
                    data.categories.cards.map((card: CategoriesInterface) => {
                        return (
                            <div key={card.card_id} >
                                <div className={styles['card']}>
                                    <Image
                                        src={card.imgSrc}
                                        alt={card.imgAlt}
                                        fill
                                        style={{objectFit: 'cover'}}
                                    />
                                    <p className={styles['card-title']}>{card.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}