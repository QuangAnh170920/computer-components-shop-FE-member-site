export interface IPayload {
    id: number;
    code: string;
    name: string;
    description: string;
    price: number;
    finalTotalPrice: number;
    power: string;
    imageUrl: string;
    categoryId: number;
    promotionId: number;
    status: string;
    productFeatures: IProductFeatures[];
}

export interface IResponse {
    responseCode: string;
    responseMessage: string;
    responseData: string;
}

export interface ISearch  {
    categoryId: number;
}

export interface IProduct {
    imageUrl: string;
    code: string;
    name: string;
    price: number;
    finalTotalPrice: number;
    power: string;
    productFeatures: IProductFeatures[];
}

export interface IProductFeatures {
    name: string;
    priority: number;
}