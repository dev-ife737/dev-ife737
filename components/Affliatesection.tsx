"use client";

export default function AffiliateCards() {
  const cards = [
    {
      name: "Expedia",
      href: "https://expedia.com/affiliate/VaSAcKD",
      color: "bg-yellow-500",
      icon: "E",
      description: "Unlock deals on hotels, flights & more",
    },
    {
      name: "Viator",
      href: "https://tinyurl.com/viator-vingel",
      color: "bg-blue-500",
      icon: "V",
      description: "Tours & experiences worldwide",
    },
    {
      name: "Travelstart",
      href: "https://tinyurl.com/travelstart-vingel",
      color: "bg-green-500",
      icon: "T",
      description: "Affordable flights & hotel deals",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {cards.map((card) => (
        <a
          key={card.name}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center transform hover:scale-105 float animate-fade-in-up"
        >
          <div
            className={`h-16 w-16 mb-4 flex items-center justify-center rounded-full text-white text-2xl font-bold ${card.color}`}
          >
            {card.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
          <p className="text-gray-600">{card.description}</p>
        </a>
      ))}
    </div>
  );
}
