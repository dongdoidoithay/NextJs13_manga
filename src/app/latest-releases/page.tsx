import LastRelease from "@/app/components/latestReleases/lastUpdate";
import PopupRelease from "@/app/components/latestReleases/popupRelease";
import { GlobalNav } from "@/ui/global-nav";
import AdsDetail from "../components/ads/ads_detail";
import AdsTop from "../components/ads/ads_top_body";
import AdsViews from "../components/ads/ads_view";

const LatestReleasePage = ({ params }: { params: { type: string} }) => {
    return (
        <>
            <GlobalNav />
            <div className="lg:pl-60 ">
                <main className=" bg-slate-900/60 border border-slate-700">
                    <div id="wapper" className="mt-4 px-2">
                    <AdsTop/>
                    <LastRelease typeManga={null}/>
                    <AdsDetail/>
                    <PopupRelease typeManga={null}/>
                    <AdsViews/>
                    </div>
                </main>
            </div>
        </>
    );
}
export default LatestReleasePage;