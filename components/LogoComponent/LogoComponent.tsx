import { ImageInterface } from "@/types";
import styles from "./LogoComponent.module.scss";
import Image from "next/image";

export default function LogoComponent({ imgData }: { imgData: ImageInterface }) {

    return (
        <div className={styles["container-outer-image"]}>
            <Image
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                quality={100}
                style={{ objectFit: "cover"}}
            />
        </div>
    )
}