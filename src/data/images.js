// Free-to-use Pexels photography (industrial / textile subjects), hotlinked via Pexels CDN.
const px = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  yarnSpoolsColorful: px(19644395),
  threadSpoolsWall: px(20190770),
  threadSpoolsClose: px(20578931),
  threadsClose: px(15391103),
  threadSpoolsSelective: px(1212179),
  fabricRollsFactory: px(236748),
  weaverLoomHands: px(6634704),
  weaverLoomCloseup: px(6634341),
  weavingLoomColorful: px(4219107),
  handLoomTopView: px(4219651),
  sewingWorkerMachine: px(31112215),
  factoryWorkerFacility: px(31091544),
  womenSewingFactory: px(4492074),
  womenSewingFactory2: px(4492077),
  smilingTextileWorker: px(31321016),
  dedicatedWorkers: px(31047132),
  industrialWorkers: px(31031051),
  busySewingFloor: px(31031031),
  femaleWorkersModern: px(31047133),
  femaleWorkersRolling: px(31047139),
  warehouseShelvingCart: px(30625283),
  warehouseSteel: px(12771407),
  warehouseInterior: px(10697106),
  warehouseMetalShelves: px(4483773),
  warehouseShelves: px(4483608),
  warehouseConcrete: px(4483609),

  // Higher-resolution versions for large display contexts (e.g. carousels)
  weavingLoomColorfulHD: px(4219107, 1920),
  fabricRollsFactoryHD: px(236748, 1920),
  sewingWorkerMachineHD: px(31112215, 1920),
  warehouseSteelHD: px(12771407, 1920),
  industrialWorkersHD: px(31031051, 1920),
  handLoomTopViewHD: px(4219651, 1920),
};
