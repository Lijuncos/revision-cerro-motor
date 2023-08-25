export interface ImageInterface {
    img_id?: number,
    imgSrc: string,
    imgAlt: string,
    objPosition?: string
}

export interface NavigationsInterface {
    title_id: string;
    title: string,
    link: string
}

export interface IconInterface {
    width: number,
    height: number,
    fill: string
}

export interface CategoriesInterface {
    card_id: number,
    title: string,
    imgSrc: string,
    imgAlt: string
}

export interface CardInterface {
    title: string,
    photo: ImageInterface,
    btnTitle: string
}

export interface CardsInterface {
    card_id: number,
    title: string,
    imgSrc: string,
    imgAlt: string,
    btnTitle: string
}

export interface LinksFooterInterface {
    id: number,
    title: string,
    link: string,
}