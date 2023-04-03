export const ItemSlideStart = ({ text }: { text: string }) => {
  return (
    <a>
    <div className="grow items-center justify-center rounded-lg overflow-hidden w-96 mx-auto">
      <div className="relative w-full h-56 bg-cover bg-no-repeat bg-center bg-[url(https://readm.org/uploads/chapter_files/cover/tbn/1589047514_198x0.jpg)]">
      <div className="absolute inset-0 opacity-80 bg-stripes-gray bg-slate-800 mt-32 text-sm">
          <h2 className="px-1 py-1 truncate ... text-sky-300 first-letter:text-2xl first-letter:font-bold first-letter:text-black">Tensei Shitara Slime Datta Ken Shitara Slime Datta Ken</h2>
          <span className="block text-black px-1">Genres: </span>
          <span className="block  text-black px-1">Date: </span>
      </div>
      </div>
    </div>
  </a>
  );
};
