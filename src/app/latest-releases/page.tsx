import LastRelease from "@/app/components/latestReleases/lastUpdate";
import PopupRelease from "@/app/components/latestReleases/popupRelease";
import { GlobalNav } from "@/ui/global-nav";

const LatestReleasePage = ({ params }: { params: { type: string} }) => {
    return (
        <>
            <GlobalNav />
            <div className="lg:pl-60 ">
                <main className=" bg-slate-900/60 border border-slate-700">
                    <div id="wapper" className="mt-4 px-2">
                    <LastRelease typeManga={null}/>
                    <PopupRelease typeManga={null}/>
                    </div>
                </main>
            </div>
        </>
    );
}
export default LatestReleasePage;