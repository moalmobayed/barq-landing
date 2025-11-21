import React from "react";
import Image from "next/image";
import SectionBadge from "../common/SectionBadge";
import SectionTitle from "../common/SectionTitle";
import dishOne from "../../images/dishes/dish-1.png";
import dishTwo from "../../images/dishes/dish-2.png";
import dishThree from "../../images/dishes/dish-3.png";
import dishFour from "../../images/dishes/dish-4.png";

const DishesSection: React.FC = () => {
  const dishes = [
    {
      id: 1,
      src: dishOne,
      alt: "Salmon rice bowl with sesame seeds",
    },
    {
      id: 2,
      src: dishTwo,
      alt: "Gourmet burger with fresh vegetables",
    },
    {
      id: 3,
      src: dishThree,
      alt: "Spaghetti with tomato sauce and basil",
    },
    {
      id: 4,
      src: dishFour,
      alt: "Penne pasta with vegetables",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <div className="mb-8 space-y-4 text-center sm:mb-12 md:mb-16">
        <SectionBadge text="YUMMY DISHES!" />
        <SectionTitle className="text-[#010949]">
          Access Thousands of Dishes with Just a Tap
        </SectionTitle>
        <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
          Our system grants you instant access to thousands of dishes and
          diverse cuisines—all it takes is a single tap on your screen.
        </p>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="aspect-4/3 overflow-hidden">
              <Image
                src={dish.src}
                alt={dish.alt}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DishesSection;
