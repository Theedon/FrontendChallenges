import BrowserCard from "@/components/blanding/BrowserCard";
import { browsersInfo } from "@/lib/data";

function DownloadsSection() {
  return (
    <div>
      <section className="mx-auto flex flex-col items-center justify-center gap-5 justify-self-center md:max-w-md">
        <h3 className="text-2xl font-semibold">Download the extension</h3>
        <p className="text-md text-center text-blandingColors-gBlue">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </section>

      <section className="mx-auto flex h-fit flex-col items-center gap-10 md:flex-row md:gap-0">
        {browsersInfo.map((browser, index) => (
          <BrowserCard
            key={index}
            browserName={browser.browserName}
            browserLogoUrl={browser.browserLogoUrl}
            minimumVersion={browser.minimumVersion}
            indexMargin={index}
          />
        ))}
      </section>
    </div>
  );
}

export default DownloadsSection;
