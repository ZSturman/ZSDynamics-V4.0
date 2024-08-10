import Tabs from "@/components/Tabs";
import { portfolioTabs } from "@/site/portfolio-tabs";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10 pb-24">
      <h1 className="text-3xl">Zachary Sturman</h1>

      <div className="w-full max-w-7xl">
        <Tabs tabs={portfolioTabs} />
      </div>
    </div>
  );
}