"use client";

import React from "react";

export default function AffiliatePage() {
  const partners = [
    {
      name: "Expedia",
      url: "https://bit.ly/46APrvI",
      color: "bg-yellow-500",
      icon: "E",
      description: "unlock exclusive deals on hotels, flights & more.",
    },
    {
      name: "Viator",
      url: "https://bit.ly/4poICor",
      color: "bg-blue-500",
      icon: "V",
      description: "book tours & experiences worldwide with trusted guides.",
    },
    {
      name: "Travelstart",
      url: "https://bit.ly/4gny4lv",
      color: "bg-green-500",
      icon: "T",
      description: "affordable flights & hotel packages made easy.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          book with our affiliate partners
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          we’ve partnered with leading travel platforms to bring you the best
          flight, hotel, and activity deals in one place. click a partner to
          start booking securely.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 p-10 flex flex-col items-center text-center"
          >
            <div
              className={`h-20 w-20 mb-6 flex
