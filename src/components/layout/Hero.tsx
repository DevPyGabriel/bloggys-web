import Icons from "../Icons";

export const Hero = () => {
  return (
    <div className="py-6">
      <div className="flex lg:flex-row flex-col items-center lg:w-full justify-between gap-8">
        <img
          src="./hero.webp"
          alt="Hero"
          className="object-cover lg:w-lg xl:w-164 rounded-base"
        />
        <div className="w-full flex flex-col lg:items-end">
          <div className="w-full flex items-center lg:justify-end">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold pb-4 lg:pb-6 tracking-tighter">
              Bienvenido a <span className="text-blue-500">Bloggy</span>
            </h1>
          </div>
          <div className="text-base md:text-lg lg:text-base xl:text-lg text-body lg:text-end pb-4">
            En Bloggy, los estudiantes universitarios comparten sus proyectos, investigaciones y procesos creativos. Descubre el talento emergente y únete a la conversación crea tus blogs para inspirar a otros.
          </div>
          
            <a href="#blog-showcase" className="px-6 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium text-sm xs:text-base w-fit mb-6">
              Ver Blogs
            </a>

          <div className="flex items-center lg:justify-end gap-3">
            <div className="flex flex-col lg:items-end">
              <span className="text-lg font-medium">Dra. Maria Gonzalez</span>
              <span className="text-sm text-body-subtle">
                "Deja tu huella para que otros sigan tus pasos"
              </span>
            </div>
            <div className="size-12 bg-blue-500/5 border-blue-500/25 border-2 rounded-full flex items-center justify-center text-blue-500/70 lg:order-last order-first">
              <Icons.User size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
