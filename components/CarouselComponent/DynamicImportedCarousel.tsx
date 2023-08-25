import Carousel from "react-spring-3d-carousel";

export const DynamicImportedCarousel = ({
    cards,
    goToSlide,
    offsetRadius,
    showArrows,
    config,
}: any) => {
    return (
        <Carousel
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.gentle}
        />
    );
};
