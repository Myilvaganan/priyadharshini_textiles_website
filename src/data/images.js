// Free-to-use Pexels photography (industrial / narrow-fabric subjects, no people), hotlinked via Pexels CDN.
const px = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  yarnSpoolsColorful: px(19644395),
  threadSpoolsWall: px(20190770),
  threadSpoolsClose: px(20578931),
  threadsClose: px(15391103),
  threadSpoolsSelective: px(1212179),
  fabricRollsFactory: px(236748),
  narrowLoomMachine: px(36327497),
  loomMachineDetail: px(36327502),
  yarnSpinningLine: px(8246482),
  weavingLoomColorful: px(4219107),
  sewingMachineDetail: px(3763234),
  yarnRackFacility: px(6717035),
  sewingMachineNeedle: px(4614221),
  sewingMachineThreaded: px(31591460),
  idCardLanyardBlank: px(7319158),
  yarnSpinningMachine: px(8246480),
  narrowFabricMachinery: px(18484117),
  yarnSpinningFrames: px(8246743),
  shoelaceCloseup: px(9781859),
  drawstringPouch: px(3850539),
  measuringTape: px(3143082),
  warehouseShelvingCart: px(30625283),
  warehouseSteel: px(12771407),
  warehouseInterior: px(10697106),
  warehouseMetalShelves: px(4483773),
  warehouseShelves: px(4483608),
  warehouseConcrete: px(4483609),

  // Higher-resolution versions for large display contexts (e.g. carousels)
  weavingLoomColorfulHD: px(4219107, 1920),
  fabricRollsFactoryHD: px(236748, 1920),
  sewingMachineDetailHD: px(3763234, 1920),
  warehouseSteelHD: px(12771407, 1920),
  narrowFabricMachineryHD: px(18484117, 1920),
  yarnSpinningLineHD: px(8246482, 1920),
};
