/* "use client"; */
import { Metadata } from 'next'; 
import baseSeo from "@/constants/baseSeo";
import  {GlobalNav}  from "@/ui/global-nav";


export default function SearchPage() {
  
  return (
    <>
      <GlobalNav />
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">
        <div className="grid grid-cols-2 gap-2">
  <label className="flex items-center">
    <input type="checkbox" className="form-checkbox" name="option1" value="blue"/>
    <span className="ml-2">Blue</span>
  </label>
  <label className="flex items-center">
    <input type="checkbox" className="form-checkbox" name="option2" value="green"/>
    <span className="ml-2">Green</span>
  </label>
  <label className="flex items-center">
    <input type="checkbox" className="form-checkbox" name="option3" value="red"/>
    <span className="ml-2">Red</span>
  </label>
  <label className="flex items-center">
    <input type="checkbox" className="form-checkbox" name="option4" value="yellow"/>
    <span className="ml-2">Yellow</span>
  </label>
</div>
        </main>
      </div>
    </>
  );
}
