export interface ProductType {
    label: string;
    slug: string;
    id: string;
    active: boolean;
    child?: ProductType[]
}
