

export interface FullMenuModel {
    name: string;
    id: string;
    thumbnailImage ?:string;
    fullPrice : number;
    discountPercent :number;
    discountedTimePeriod ?: {
        begin : string;
        end : string;
    }
    sold : number;
    totalInStock : number;
    largeImage ?: string;
    options : {
        label : string;
        choices : {
            label :string;
        }[]
    }[]
}