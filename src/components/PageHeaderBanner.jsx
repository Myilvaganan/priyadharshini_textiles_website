import Breadcrumb from "./Breadcrumb";

export default function PageHeaderBanner({ title, breadcrumbItems = [], image }) {
  return (
    <div
      className="relative flex min-h-[180px] w-full items-center bg-brand-dark bg-cover bg-center"
      style={
        image
          ? { backgroundImage: `linear-gradient(100deg, rgba(27,58,46,0.92), rgba(27,58,46,0.75)), url(${image})` }
          : undefined
      }
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <div className="mt-3">
          <Breadcrumb items={breadcrumbItems} light />
        </div>
      </div>
    </div>
  );
}
