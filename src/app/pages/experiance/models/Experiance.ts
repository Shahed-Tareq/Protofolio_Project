export interface Experiance_Info{
    title:string;
    type:type_of_Exp;
    company:string;
    Startdate:string;
    Enddate:string;
    description:string;
}
export enum type_of_Exp{
    contract="contract", freeLance  ="freeLance" , partTime = "part time", fulltime ="full time"
}