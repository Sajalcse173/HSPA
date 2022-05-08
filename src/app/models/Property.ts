import { IPropertyBase } from "./IPropertyBase";


export class Property implements IPropertyBase{
  id: number;
  sellRent: number;
  name: string;
  propertyType: string;
  propertyTypeId:number;
  furnishingType: string;
  furnishingTypeId:number;
  price: number;
  bhk: number;
  builtArea: number;
  carParkArea?: number;
  address:string;
  adress2?:string;
  city: string;
  cityId:number;
  floorNo?:string;
  totalFloors?:string;
  readyToMove: boolean;
  age?:string;
  mainEntrance?:string;
  security?:string;
  gated?:boolean;
  maintenance?:number;
  estPossessionOn?:string;
  image?: string;
  description?:string;

}
