import {
  BinType,
  WasteBinType,
  WasteItemType,
} from "../components/WasteSeg/types";

export const WASTE_BINS: WasteBinType[] = [
  {
    id: 1,
    type: BinType.Dry,
    label: "Organic",
    imageOpened: "dryOpened",
    imageClosed: "dryClosed",
    items: [],
  },
  {
    id: 2,
    type: BinType.Wet,
    label: "Recyclable",
    imageOpened: "wetOpened",
    imageClosed: "wetClosed",
    items: [],
  },
  {
    id: 3,
    type: BinType.Hazardous,
    label: "Hazadous",
    imageOpened: "hazadousOpened",
    imageClosed: "hazadousClosed",
    items: [],
  },
  {
    id: 4,
    type: BinType.E_Waste,
    label: "E-Waste",
    imageOpened: "eOpened",
    imageClosed: "eClosed",
    items: [],
  },
  {
    id: 5,
    type: BinType.Sanitary,
    label: "Sanitary",
    imageOpened: "sanitaryOpened",
    imageClosed: "sanitaryClosed",
    items: [],
  },
];

export const DRY_iTEMS: WasteItemType[] = [
  {
    id: 1,
    type: BinType.Dry,
    label: "Bag",
    image: "dry/bag",
  },
  {
    id: 2,
    type: BinType.Dry,
    label: "hazar eg",
    image: "dry/bin",
  },
  {
    id: 3,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/brokenGlass",
  },
  {
    id: 4,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/brokenGlass1",
  },
];

export const WET_iTEMS: WasteItemType[] = [
  {
    id: 501,
    type: BinType.Wet,
    label: "Bag",
    image: "wet/apple",
  },
  {
    id: 502,
    type: BinType.Wet,
    label: "hazar eg",
    image: "wet/apple1",
  },
  {
    id: 503,
    type: BinType.Wet,
    label: "organic eg",
    image: "wet/apple2",
  },
  {
    id: 504,
    type: BinType.Wet,
    label: "organic eg",
    image: "wet/banana",
  },
];

export const SANITARY_iTEMS: WasteItemType[] = [
  {
    id: 1001,
    type: BinType.Sanitary,
    label: "Bag",
    image: "sanitary/bandage",
  },
  {
    id: 1002,
    type: BinType.Sanitary,
    label: "hazar eg",
    image: "sanitary/bandage1",
  },
  {
    id: 1003,
    type: BinType.Sanitary,
    label: "organic eg",
    image: "sanitary/ceaser",
  },
  {
    id: 1004,
    type: BinType.Sanitary,
    label: "organic eg",
    image: "sanitary/ciringe",
  },
];
