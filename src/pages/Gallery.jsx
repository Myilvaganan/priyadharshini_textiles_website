import { useState } from "react";
import PageHeaderBanner from "../components/PageHeaderBanner";
import Reveal from "../components/Reveal";
import { images } from "../data/images";

const galleryItems = [
  { src: images.weavingLoomColorful, caption: "Air-jet weaving loom in production", category: "Weaving" },
  { src: images.narrowLoomMachine, caption: "Narrow-fabric weaving machine in production", category: "Weaving" },
  { src: images.loomMachineDetail, caption: "Close-up of narrow loom threading", category: "Weaving" },
  { src: images.yarnSpinningLine, caption: "Overhead view of the yarn spinning line", category: "Weaving" },
  { src: images.yarnSpoolsColorful, caption: "Dyed yarn spools ready for weaving", category: "Yarn" },
  { src: images.threadSpoolsWall, caption: "Thread spool inventory wall", category: "Yarn" },
  { src: images.threadSpoolsClose, caption: "Close-up of spun thread spools", category: "Yarn" },
  { src: images.threadSpoolsSelective, caption: "Sorted thread spools by shade", category: "Yarn" },
  { src: images.fabricRollsFactory, caption: "Finished tape rolls in the factory", category: "Tape" },
  { src: images.threadsClose, caption: "Detail of woven tape texture", category: "Tape" },
  { src: images.shoelaceCloseup, caption: "Finished shoelaces, ready for dispatch", category: "Tape" },
  { src: images.drawstringPouch, caption: "Drawcord finished with tipping detail", category: "Tape" },
  { src: images.sewingMachineDetail, caption: "Detail of an industrial sewing machine", category: "Production" },
  { src: images.yarnRackFacility, caption: "Yarn rack inside the manufacturing facility", category: "Production" },
  { src: images.sewingMachineNeedle, caption: "Sewing machine needle detail", category: "Production" },
  { src: images.sewingMachineThreaded, caption: "Threaded sewing machine on the finishing line", category: "Production" },
  { src: images.idCardLanyardBlank, caption: "Blank ID card lanyard, ready for branding", category: "Production" },
  { src: images.yarnSpinningMachine, caption: "Yarn spinning machine at work", category: "Production" },
  { src: images.narrowFabricMachinery, caption: "Braiding and cord processing machinery", category: "Production" },
  { src: images.yarnSpinningFrames, caption: "Yarn spinning frames in operation", category: "Production" },
  { src: images.warehouseShelvingCart, caption: "Finished goods warehouse racking", category: "Warehouse" },
  { src: images.warehouseSteel, caption: "Warehouse structure and storage bays", category: "Warehouse" },
  { src: images.warehouseInterior, caption: "Interior view of the warehouse", category: "Warehouse" },
  { src: images.warehouseMetalShelves, caption: "Barcoded metal racking system", category: "Warehouse" },
  { src: images.warehouseShelves, caption: "Organized inventory shelving", category: "Warehouse" },
  { src: images.warehouseConcrete, caption: "Loading floor of the warehouse", category: "Warehouse" },
];

const categories = ["All", "Weaving", "Yarn", "Tape", "Production", "Warehouse"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      <PageHeaderBanner
        title="Gallery"
        breadcrumbItems={[{ label: "Gallery" }]}
        image={images.narrowFabricMachinery}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="eyebrow">Home &gt; Gallery</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              Inside Our Facilities
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  active === c
                    ? "bg-brand-gold text-brand-dark"
                    : "border border-brand-dark/20 text-brand-dark hover:border-brand-gold hover:text-brand-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((item, i) => (
              <Reveal key={item.src + i} delay={(i % 8) * 60}>
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group relative aspect-square w-full overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-medium text-white">{item.caption}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-dark/90 p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-3xl animate-scale-in">
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/80">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
