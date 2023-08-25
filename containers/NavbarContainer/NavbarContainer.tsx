'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import useOutsideClick from "@/utils/outSideRef/outSideRef";
import { useWindowSize } from "@/utils/size/useWindowSize";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

export default function NavbarContainer() {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const handleShowMenu = () => {
        setIsMenu(!isMenu);
    }

    const menuRef = useOutsideClick(() => {
        if (isMenu) {
            handleShowMenu();
        }
    });
    const { width } = useWindowSize();

    useEffect(() => {
        if (width > 768) {
            setIsMenu(false);
        }
    }, [width]);

    const UsePathname = usePathname()

    return <NavbarComponent
        isMenu={isMenu}
        handleShowMenu={handleShowMenu}
        menuRef={menuRef}
        UsePathname={UsePathname}
    />
}