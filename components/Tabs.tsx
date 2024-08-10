"use client"
import { useState } from "react";
import PortfolioItems from "@/components/PortfolioItems";
import portfolioItems from "@/site/portfolio-items";


type TabsProps = {
  tabs: PortfolioTab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  const activeTabData = tabs.find(tab => tab.value === activeTab)
  
  const filteredItems = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.type.includes(activeTab));

  return (
    <div>
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 rounded ${
              activeTab === tab.value ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <PortfolioItems portfolioItems={filteredItems} />
      </div>
    </div>
  );
}