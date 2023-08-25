"use client";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import styles from "./CarouselComponent.module.scss"

const DynamicCarousel = dynamic(
    () =>
        //@ts-ignore
        import("./DynamicImportedCarousel").then(
            (mod) => mod.DynamicImportedCarousel
        ),
    {
        ssr: false,
    }
);

export default function CarouselComponent(props: any) {
    const table = props.cards.map((element: any, index: any) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState<null | any>(null);
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div className={styles['container-section-carousel']}>
            <p className={styles['title-section-carousel']}>¡Estos son algunos de nuestros productos!</p>
            <div className={styles['section-carousel']}>

                <DynamicCarousel
                    cards={cards}
                    goToSlide={goToSlide}
                    offsetRadius={offsetRadius}
                    showArrows={showArrows}
                    config={config}
                />
            </div>
        </div>
    );
}
