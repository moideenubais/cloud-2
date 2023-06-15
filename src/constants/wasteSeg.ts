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
  {
    id: 5,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/crushedBottle",
  },
  {
    id: 6,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/cigeratePack",
  },
  {
    id: 7,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/bottleGlass",
  },
  {
    id: 8,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/crushedCup",
  },
  {
    id: 9,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/crushedPaper",
  },
  {
    id: 10,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/crushedTin",
  },
  {
    id: 11,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/dirtyClothes",
  },
  {
    id: 12,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/emptyBottle",
  },
  {
    id: 13,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/plasticBox",
  },
  {
    id: 14,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/plasticBottle",
  },
  {
    id: 15,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/plasticBottle1",
  },
  {
    id: 16,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/wasteBulb",
  },
  {
    id: 17,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/wastePaper",
  },
  {
    id: 18,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/wastePaper1",
  },
  {
    id: 19,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/wastePaper2",
  },
  {
    id: 20,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/thrownCigar",
  },
  {
    id: 21,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/plasticCover2",
  },
  {
    id: 22,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/metalCan",
  },
  {
    id: 23,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/newsPaper",
  },
  {
    id: 24,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/plasticBottle2",
  },
  {
    id: 25,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/thrownCigar1",
  },
  {
    id: 26,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/tearPaper",
  },
  {
    id: 27,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/rustedCattle",
  },
  {
    id: 28,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/metalCan1",
  },
  {
    id: 29,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/mixedWaste",
  },

  {
    id: 30,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/plasticCan",
  },
  {
    id: 31,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/plasticCover",
  },
  {
    id: 32,
    type: BinType.Dry,
    label: "organic eg",
    image: "dry/plasticCover1",
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
