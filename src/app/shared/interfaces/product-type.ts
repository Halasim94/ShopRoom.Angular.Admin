export interface ProductType {
    name: string;
    slug: string;
    id: string;
    active: boolean;
    child?: ProductType[];
    parentId?:string;
}

export interface NewProductType{
    name: string;
    slug: string;
    id: string;
    active: boolean;
    parentId?: string;
}

export interface EditProductType{
    name: string;
    slug: string;
    id: string;
    active: boolean;
    parentId?: string;
}