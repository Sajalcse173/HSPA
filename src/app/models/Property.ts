import { IPropertyBase } from "./IPropertyBase";


export class Property implements IPropertyBase{
  Id: number;
  SellRent: number;
  Name: string;
  PType: string;
  FType: string;
  Price: number;
  BHK: number;
  BuiltArea: number;
  CarParkArea?: number;
  Address:string;
  Address2?:string;
  City: string;
  FloorNo?:number;
  TotalFlor?:number;
  RTM: number;
  AgeProperty:number;
  MainEntrance?:string;
  Security?:string;
  Gated?:number;
  Maintenance?:number;
  Possession?:number;
  Image?: string;
  Description?:string;
  PostedOn:string;
  PostedBy:number;

}
