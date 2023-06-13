export enum BinType {
  Dry = "dry",
  E_Waste = "e-waste",
  Sanitary = "sanitary",
  Hazardous = "hazardous",
  Wet = "wet",
}

export interface WasteItemType {
  id: number;
  type: BinType;
  label: string;
  image: string;
}
export interface WasteBinType {
  id: number;
  type: BinType;
  items: WasteItemType[];
  label: string;
  imageOpened: string;
  imageClosed: string;
}
