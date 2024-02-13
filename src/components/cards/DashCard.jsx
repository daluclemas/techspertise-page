import React from "react";

const DashCard = ({ title, total }) => {
  return (
    <div className="border border-customGray200 rounded-xl p-6">
      <h3 className="text-base font-medium mb-6">{title}</h3>

      <p className="text-2xl md:text-4xl font-semibold">{total}</p>
    </div>
  );
};

export default DashCard;
