"use client"
import { useState } from "react";
import PortfolioItems from "@/components/PortfolioItems";
import portfolioItems from "@/site/portfolio-items";
import { motion } from "framer-motion";
import { portfolioTabs } from "@/site/portfolio-tabs";


export default function Tabs() {
  const [activeTab, setActiveTab] = useState(portfolioTabs[0].value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };
  
  const filteredItems = portfolioItems.filter(item => item.type.includes(activeTab));

  return (
    <div className="m-10">
      <div className="flex flex-row justify-center gap-8 mb-4">
        {portfolioTabs.map((tab) => (
          <motion.button
            key={tab.value}

            className={`px-4 py-2 text-dark-shade hover:opacity-80 ${
              activeTab === tab.value ? " border-b-2" : ""
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      <div >
        <PortfolioItems portfolioItems={filteredItems}/>
      </div>
    </div>
  );
}
