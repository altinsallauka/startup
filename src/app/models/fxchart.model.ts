export interface FxChart{
    rates:string;
    base:string;
    date:string
}
export interface Analyst{
    firstName: string,
    lastName: string,
    userName:string,
    expertise: string,
    country: string,
    workingFxSince: string,
    education: string
}
export interface Keyword{
    name:string,
    analystId:string;
}
export interface analystCount{

}
export interface keywordsCount{

}
