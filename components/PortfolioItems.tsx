import Image from 'next/image';

type PortfolioItemProps = {
    portfolioItem: PortfolioItem;
}

const PortfolioItem = ({ portfolioItem }: PortfolioItemProps) => {
    return (
        <div>
            <a href={portfolioItem.url} target="_blank" rel="noreferrer">
                <Image src={portfolioItem.image} alt={portfolioItem.title} width={300} height={200} />
                <h3 className="text-xl font-bold mt-2">{portfolioItem.title}</h3>
                <p className="text-gray-600">{portfolioItem.description}</p>
            </a>
        </div>
    )
}


type PortfolioItemsProps = {
    portfolioItems: PortfolioItem[];
}

const PortfolioItems = ({ portfolioItems }: PortfolioItemsProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.map((portfolioItem) => (
                <PortfolioItem key={portfolioItem.title} portfolioItem={portfolioItem} />
            ))}
        </div>
    )
}

export default PortfolioItems;