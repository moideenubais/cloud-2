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
  images: ImageVaiations;
}

export interface ImageVaiations {
  wToDry?: string;
  sToDry?: string;
  eToDry?: string;
  hToDry?: string;

  dToWet?: string;
  sToWet?: string;
  eToWet?: string;
  hToWet?: string;

  wToSan?: string;
  eToSan?: string;
  hToSan?: string;
  dToSan?: string;

  wToHaz?: string;
  dToHaz?: string;
  eToHaz?: string;
  sToHaz?: string;

  wToE?: string;
  dToE?: string;
  sToE?: string;
  hToE?: string;
}
