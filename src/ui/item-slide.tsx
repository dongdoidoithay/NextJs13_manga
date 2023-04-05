export const ItemSlide = ({ text }: { text: string }) => {
  return (
    <div className="box-content h-auto w-44  border-2 mx-2 bg-slate-800 rounded-lg block">
        <div className="flex flex-col space-y-0 text-sm ">
            <img className="object-cover h-40 w-full rounded-t-lg" src="https://readm.org/uploads/chapter_files/cover/tbn/1589047514_198x0.jpg"/>
            <h2 className="px-1 py-2 truncate ...  first-letter:text-red-800 first-letter:font-bold text-sky-300"> Manga {text}</h2>
            <span className="px-1">Chapter:</span>
        </div>
           
        
    </div>
   
  );
};
