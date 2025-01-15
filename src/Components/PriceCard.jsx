const PricingCard = ({ title, price, features, isPopular }) => {
    return (
        <div
            className={`relative max-w-sm rounded-lg shadow-lg p-6 ${
                isPopular
                    ? "bg-gradient-to-r from-white to-subheader/30 text-black"
                    : "bg-white text-black"
            } text-center`}
        >
            {isPopular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold px-2 py-1 rounded-bl-lg uppercase">
                    Popular
                </div>
            )}
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-4xl font-bold my-4">${price}</p>
            <ul className="text-left mb-6 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                className={`w-full py-3 rounded-lg font-bold transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90`}
            >
                Choose Plan
            </button>
        </div>
    );
};

export default PricingCard;
