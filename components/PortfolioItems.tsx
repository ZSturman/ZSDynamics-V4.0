import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

type PortfolioItemsProps = {
  portfolioItems: PortfolioItem[];
};

const PortfolioItems = ({
  portfolioItems,
}: PortfolioItemsProps) => {

  return (
    <div className="flex flex-wrap flex-row gap-4 items-start">
      {portfolioItems.map((portfolioItem) => (
        <div 
          key={portfolioItem.title}
          className="w-[300px] h-[350px]" 
        >
          <Link
            className="w-full h-full flex flex-col items-center hover:scale-105 hover:translate-y-2 transition-transform duration-300 group"
            href={portfolioItem.url}
          >
            <ExportedImage
              src={portfolioItem.image}
              alt={portfolioItem.title}
              width={300}
              height={200}
              className="w-full h-[200px] object-cover saturate-50 group-hover:saturate-100" 
            />
            <h3 className="mt-2 text-center">{portfolioItem.title}</h3>
            <p className="text-gray-600 text-center text-sm">{portfolioItem.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PortfolioItems;
