'use client'
import { CardsInterface } from '@/types';
import styles from './CardsComponent.module.scss';
import Image from 'next/image';
import { useState } from 'react';

import React from "react";
import { useSpring, animated } from "react-spring";

export default function CardsComponent({ card }: { card: CardsInterface }) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)"
    });

    return (
        <animated.div
            className={styles['container-info-card']}
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <div className={styles['container-outer-card-image']}>
                <Image
                    src={card.imgSrc}
                    alt={card.imgAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <p className={styles['card-title']}>{card.title}</p>
            <button className={styles['btn-title']}>{card.btnTitle}</button>
        </animated.div>
    )
}