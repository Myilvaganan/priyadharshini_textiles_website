import { useState } from "react";
import PageHeaderBanner from "../components/PageHeaderBanner";
import Reveal from "../components/Reveal";
import { images } from "../data/images";

const galleryItems = [
  { src: images.weavingLoomColorful, caption: "Air-jet weaving loom in production", category: "Weaving" },
  { src: images.weaverLoomHands, caption: "Weaver setting up a fabric run", category: "Weaving" },
  { src: images.weaverLoomCloseup, caption: "Close-up of loom threading", category: "Weaving" },
  { src: images.handLoomTopView, caption: "Overhead view of weaving process", category: "Weaving" },
  { src: images.yarnSpoolsColorful, caption: "Dyed yarn spools ready for weaving", category: "Yarn" },
  { src: images.threadSpoolsWall, caption: "Thread spool inventory wall", category: "Yarn" },
  { src: images.threadSpoolsClose, caption: "Close-up of spun thread spools", category: "Yarn" },
  { src: images.threadSpoolsSelective, caption: "Sorted thread spools by shade", category: "Yarn" },
  { src: images.fabricRollsFactory, caption: "Finished fabric rolls in the factory", category: "Fabric" },
  { src: images.threadsClose, caption: "Detail of woven thread texture", category: "Fabric" },
  { src: images.sewingWorkerMachine, caption: "Operator on industrial sewing machine", category: "Workforce" },
  { src: images.factoryWorkerFacility, caption: "Worker in the manufacturing facility", category: "Workforce" },
  { src: images.womenSewingFactory, caption: "Sewing floor operations", category: "Workforce" },
  { src: images.womenSewingFactory2, caption: "Quality checks on the sewing line", category: "Workforce" },
  { src: images.smilingTextileWorker, caption: "Team member on the factory floor", category: "Workforce" },
  { src: images.dedicatedWorkers, caption: "Production team at work", category: "Workforce" },
  { src: images.industrialWorkers, caption: "Technical textiles processing", category: "Workforce" },
  { src: images.busySewingFloor, caption: "Full sewing floor in operation", category: "Workforce" },
  { src: images.femaleWorkersModern, caption: "Modern manufacturing facility floor", category: "Workforce" },
  { src: images.femaleWorkersRolling, caption: "Rolling finished fabric for dispatch", category: "Fabric" },
  { src: images.warehouseShelvingCart, caption: "Finished goods warehouse racking", category: "Warehouse" },
  { src: images.warehouseSteel, caption: "Warehouse structure and storage bays", category: "Warehouse" },
  { src: images.warehouseInterior, caption: "Interior view of the warehouse", category: "Warehouse" },
  { src: images.warehouseMetalShelves, caption: "Barcoded metal racking system", category: "Warehouse" },
  { src: images.warehouseShelves, caption: "Organized inventory shelving", category: "Warehouse" },
  { src: images.warehouseConcrete, caption: "Loading floor of the warehouse", category: "Warehouse" },
];

const categories = ["All", "Weaving", "Yarn", "Fabric", "Workforce", "Warehouse"];

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
        image={images.industrialWorkers}
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
