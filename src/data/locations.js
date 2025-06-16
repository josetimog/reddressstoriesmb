var zeroDist = 59959.436;

var locations = {
  manitoba: {
    center: [-97.01, 55.5],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 1225000),
  }, // using mapbox pixel per distance, the distance @ 0 zoom level and screen height. This will automatically set the zoom level so that the map fits on 75% of the screen
  thePas: {
    center: [-101.245502, 53.821273],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 225000),
  }, //[-101.2427, 53.8255], //adjusted JC
  winnipeg: {
    center: [-97.138726, 49.904772],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 25000),
  },
  norwayHouse: {
    center: [-97.928297, 53.965605],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 25000),
  }, //[-97.8329, 53.9821],
  chesterfieldInlet: {
    center: [-90.70181849485502, 63.342444923327996],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 25000),
  },
  berensRivers: {
    center: [-97.00358001703229, 52.3523968675608],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 25000),
  },
  sutherlandMain: {
    center: [-97.13394691534559, 49.90676392038838],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 25000),
  },
  wpgPlp: {
    center: [-97.6394691534559, 49.90676392038838],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 80000),
  },
  crossLake: {
    center: [-97.7641745502598, 54.65648726993142],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 25000),
  },
  torontoSt: {
    center: [-97.1585, 49.8954],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 3000),
  },
  lbCsTn: {
    center: [-97.16344303874267, 49.90206285213265],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 2200),
  },
  guyHill: { center: [-101.03662326087897, 53.98511198884964] },
  gordonBell: { center: [-97.16207083120011, 49.88638664359836] },
  margaretBarbour: { center: [-101.24143643340821, 53.82484338795254] },
  thirdStreet: {
    center: [-101.24908131023437, 53.82484615085207],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 25000),
  },
  thePasClearWater: { center: [-101.230325, 53.906837] },
  sagkPvpf: {
    center: [-96.23027984173098, 50.56812053036582],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 25000),
  },
  sagkWpg: {
    center: [-96.71463080586614, 50.32358012229488],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 85000),
  },
  alexanderDocks: {
    center: [-97.1304820453833, 49.89967988223808],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 2000),
  },
  pumpHouse: { center: [-101.08409267931427, 53.984216803908254] },
  albertaWpg: {
    center: [-95.025504, 59.099538],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 1800000),
  },
  prairies: {
    center: [-105.9394691534559, 55.5],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 2000000),
  },
  fisherRiver: {
    center: [-97.38607310272987, 51.43772267169117],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 2000),
  },
  fisherRiverLandfill: {
    center: [-97.33447685116562, 51.42605127121874],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 2000),
  },
  canada: {
    center: [-100.01, 59],
    zoom: Math.log2((0.55 * screen.height * zeroDist) / 5000000),
  },
};

export { locations, zeroDist };
