import BannerComponent from '@/components/BannerComponent/BannerComponent';
import styles from './page.module.scss'
import PartnersComponent from "@/components/PartnersComponent/PartnersComponent";
import ContactComponent from "@/components/ContactComponent/ContactComponent";
import BrandsComponent from "@/components/BrandsComponent/BrandsComponent";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import { generatorCards } from '@/components/CardsComponent/CardsData';
import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const cards = generatorCards();
  
  return (
    <main className={styles['contaienr-section-main']}>
      <BannerComponent />
      <CategoriesComponent />
      <BrandsComponent />
      <CarouselComponent
        cards={cards}
        offset={2}
        showArrows={false}
      />
      <ContactComponent />
      <PartnersComponent />
    </main>
  )
}
