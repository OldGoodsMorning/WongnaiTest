
export interface ShortMenuModel {
    name: string;
    id: string;
    thumbnailImage?: string;
    fullPrice: number;
    discountedPercent: number;
    discountedTimePeriod?: {
           begin: string;
           end: string;
    }
    sold: number;
    totalInStock: number;
}