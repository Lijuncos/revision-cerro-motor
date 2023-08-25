import Image from 'next/image';
import styles from './BannerComponent.module.scss';
import data from '@/modules/es.json'
import { SearchIconComponent } from '../IconComponent/IconComponent';

export default function BannerComponent() {
    return (
        <div /*id={data.banner.scrollTo}*/ className={styles['container-section-banner']}>
            <div className={styles['container-outer-banner-image']}>
                <Image
                    src={data.banner.image.imgSrc}
                    alt={data.banner.image.imgAlt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: '100% 20%' }}
                />
            </div>
            <div className={styles['overlay-section-banner']}>
                <div className={styles['container-overlay-info']}>
                    <p className={styles['banner-title']}>{data.banner.title}</p>
                    <div>
                        <p className={styles['banner-description']}>{data.banner.description}</p>
                        <p className={styles['banner-secondDescription']}>{data.banner.secondDescription}</p>
                    </div>
                    <div className={styles['container-search-icon']}>
                        <SearchIconComponent fill={'white'} height={20} width={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}