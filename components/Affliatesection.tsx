"use client";

import React from "react";

export default function AffiliateSection() {
  const partners = [
    {
      name: "Expedia",
      url: "https://bit.ly/46APrvI",
      color: "bg-yellow-500",
      icon: "E",
      description: "Unlock deals on hotels, flights & more",
    },
    {
      name: "Viator",
      url: "https://bit.ly/4poICor",
      color: "bg-blue-500",
      icon: "V",
      description: "Tours & experiences worldwide",
    },
    {
      name: "Travelstart",
      url: "https://bit.ly/4gny4lv",
      color: "bg-green-500",
      icon: "T",
      description: "Affordable flights & hotel deals",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Trusted Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <div
              className={`h-16 w-16 mb-4 flex items-center justify-center rounded-full text-white text-2xl font-bold ${partner.color}`}
            >
              {partner.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
            <p className="text-gray-600">{partner.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
