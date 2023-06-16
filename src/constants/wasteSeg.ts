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

export const DRY_ITEMS: WasteItemType[] = [
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

export const WET_ITEMS: WasteItemType[] = [
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

export const SANITARY_ITEMS: WasteItemType[] = [
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

export const E_Waste_ITEMS: WasteItemType[] = [
  {
    id: 1501,
    type: BinType.E_Waste,
    label: "Bag",
    image: "e-waste/batteries",
  },
  {
    id: 1502,
    type: BinType.E_Waste,
    label: "hazar eg",
    image: "e-waste/brokenAndroid",
  },
  {
    id: 1503,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/dishWashMachine",
  },
  {
    id: 1504,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/electricJar",
  },
  {
    id: 1505,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/stove",
  },
  {
    id: 1506,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/freezer",
  },
  {
    id: 1507,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/headphone",
  },
  {
    id: 1508,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/laptop",
  },
  {
    id: 1509,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/microWave",
  },
  {
    id: 1510,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/playStation",
  },
  {
    id: 1511,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/mobile",
  },
  {
    id: 1512,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/cell",
  },
  {
    id: 1513,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/router",
  },
  {
    id: 1514,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/oven",
  },
  {
    id: 1515,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/washingMachine1",
  },
  {
    id: 1516,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/toaster",
  },
  {
    id: 1517,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/tv",
  },
  {
    id: 1518,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/camera",
  },
  {
    id: 1519,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/gps",
  },
  {
    id: 1520,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/vaccumCleaner",
  },
  {
    id: 1521,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/playstation1",
  },
  {
    id: 1522,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/hairDryer",
  },
  {
    id: 1523,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/setupBox",
  },
  {
    id: 1524,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/joystick",
  },
  {
    id: 1525,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/handMixer",
  },
  {
    id: 1526,
    type: BinType.E_Waste,
    label: "organic eg",
    image: "e-waste/laptop1",
  },
];

export const HAZADOUS_ITEMS: WasteItemType[] = [
  {
    id: 2001,
    type: BinType.Hazardous,
    label: "Bag",
    image: "hazadous/faceShield",
  },
  {
    id: 2002,
    type: BinType.Hazardous,
    label: "hazar eg",
    image: "hazadous/cartridge",
  },
  {
    id: 2003,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/gasCylinder",
  },
  {
    id: 2004,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/insectSpray",
  },
  {
    id: 2005,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/inkFormulation",
  },
  {
    id: 2006,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/inkFormulation1",
  },
  {
    id: 2007,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/inorganicChemical",
  },
  {
    id: 2008,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/inorganicChemical1",
  },
  {
    id: 2009,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/inorganicChemical2",
  },
  {
    id: 2010,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/inorganicChemical3",
  },
  {
    id: 2011,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/inorganicChemical4",
  },
  {
    id: 2012,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/insectiside",
  },
  {
    id: 2013,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/aluminium",
  },
  {
    id: 2014,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petroliumCan",
  },
  {
    id: 2015,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petroliumCan1",
  },
  {
    id: 2016,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petroliumCan2",
  },
  {
    id: 2017,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petroliumDrum",
  },
  {
    id: 2018,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/oilCan",
  },
  {
    id: 2019,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/pestiside",
  },
  {
    id: 2020,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/pestiside1",
  },
  {
    id: 2021,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/aluminium1",
  },
  {
    id: 2022,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/aluminium2",
  },
  {
    id: 2023,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/aluminium3",
  },
  {
    id: 2024,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/aluminium4",
  },
  {
    id: 2025,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/toxicMask",
  },
  {
    id: 2026,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/toxic",
  },
  {
    id: 2027,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/wood",
  },
  {
    id: 2028,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/toxic1",
  },
  {
    id: 2029,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/toxic2",
  },
  {
    id: 2030,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/toxic3",
  },
  {
    id: 2031,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium",
  },
  {
    id: 2032,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium1",
  },
  {
    id: 2033,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium2",
  },
  {
    id: 2034,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium3",
  },
  {
    id: 2035,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium4",
  },
  {
    id: 2036,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium5",
  },
  {
    id: 2037,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium6",
  },
  {
    id: 2038,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium7",
  },
  {
    id: 2039,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petrolium8",
  },
  {
    id: 2040,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/toxicDrum",
  },
  {
    id: 2041,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/petroliumGas",
  },
  {
    id: 2042,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/oil",
  },
  {
    id: 2043,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/pesticideBottle",
  },
  {
    id: 2044,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/protectiveBoots",
  },
  {
    id: 2045,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/barrelOfToxic",
  },
  {
    id: 2046,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/handGlouse",
  },
  {
    id: 2047,
    type: BinType.Hazardous,
    label: "organic eg",
    image: "hazadous/powderTin",
  },
];
