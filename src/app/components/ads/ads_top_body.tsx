import Script from "next/script"
import { Helmet } from "react-helmet"

const AdsTop=()=>{

    return(<>
            {/*pubfuture.com */}
            <Script
      async data-cfasync="false" src="https://cdn.adschill.com/v2/unit/pt.js" type="text/javascript"
        strategy="afterInteractive"
      />
            <div id="pf-1769-1"><Script id="google-analytics" strategy="afterInteractive">
        {`
        window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "62bc1cc71f48e100270a3764", id: "pf-1769-1"})
        `}
      </Script></div>
     
           
    </>)
    
    }
    export default AdsTop