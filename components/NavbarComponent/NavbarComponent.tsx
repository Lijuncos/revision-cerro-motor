'use client'
import styles from "./NavbarComponent.module.scss"
import ScrollLayoutComponent from "./ScrollLayoutComponent/ScrollLayoutComponent"
import data from "@/modules/es.json"
import BtnScrollComponent from "./BtnScrollComponent/BtnScrollComponent";
import { useEffect, useState } from "react";
import { NavigationsInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BurgerMenuIconComponent, CloseIconComponent } from "../IconComponent/IconComponent";
import { useSearchParams } from "next/navigation";

interface Props {
    isMenu: boolean;
    handleShowMenu: () => void;
    menuRef: React.RefObject<HTMLDivElement>;
    UsePathname: string
}

export default function NavbarComponent({
    isMenu,
    handleShowMenu,
    menuRef,
    UsePathname,
}: Props) {
    const [isActive, setIsActive] = useState('');

    if (typeof window !== 'undefined') {

        const url = window.location.href;
        console.log(url);
    }

    return (
        <ScrollLayoutComponent>
            {/* DESKTOP */}
            <section className={styles['container-section-navbar']}>
                <Link href={'/'} className={styles['container-outer-logo']}>
                    <Image
                        src={data.navbar.logo.imgSrc}
                        alt={data.navbar.logo.imgAlt}
                        fill
                    />
                </Link>
                <nav className={styles['container-titles-navigation']}>
                    {
                        data.navbar.navigation.map
                            ((item: NavigationsInterface) => {
                                return (
                                    <BtnScrollComponent
                                        key={item.title_id}
                                        element_id={item.title_id}
                                        isActive={(isActive === item.title_id) || UsePathname === item.link}
                                        title={item.title}
                                        link={item.link}
                                        handleClickTitleNavigation={(element_id) => {
                                            setIsActive(element_id);
                                        }}
                                    />
                                )
                            })
                    }
                </nav>

                <button
                    type='button'
                    aria-label="Mostrar menú"
                    className={styles['container-icon-burgermenu']}
                    onClick={handleShowMenu}
                >
                    <BurgerMenuIconComponent fill="white" height={30} width={30} />
                </button>
            </section>
            {/* MOBILE */}
            {
                isMenu && <div className={styles['container-overlay-menu-mobile']} />
            }
            <div className={`${styles['container-menu-mobile']} ${isMenu ? styles['isOpen'] : ''}`} ref={menuRef}>
                <div className={styles['container-header-mobile-menu']}>
                    <button
                        type='button'
                        aria-label="Cerrar menú"
                        className={styles["btn-mobile-burgermenu"]}
                        onClick={handleShowMenu}>
                        <CloseIconComponent fill={'white'} height={30} width={30} />
                    </button>
                </div>
                <div className={styles['container-titles-navigation-mobile']}>
                    {
                        data.navbar.navigation.map
                            ((item: NavigationsInterface) => {
                                return (
                                    <BtnScrollComponent
                                        key={item.title_id}
                                        isActive={(isActive === item.title_id) || UsePathname === item.link}
                                        element_id={item.title_id}
                                        title={item.title}
                                        link={item.link}
                                        handleClickTitleNavigation={(element_id) => {
                                            setIsActive(element_id);
                                        }}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </ScrollLayoutComponent>
    )
}