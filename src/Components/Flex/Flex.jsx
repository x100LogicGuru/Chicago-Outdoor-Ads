// Reusable StatCard component
function StatCard({ description, value, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 h-full flex flex-col items-center justify-center text-center gap-4 ${className}`}
    >
      <p className="text-sm text-gray-600 mb-10">{description}</p>
      <h1 className="text-4xl font-bold text-gray-900">{value}</h1>
    </div>
  );
}

// Statistics data
const statistics = [
  {
    description: "Chicagoans reach per week",
    value: "91%",
  },
  {
    description: "Digital displays in Chicago's",
    value: "270+",
  },
  {
    description: "Monthly CTA ridership",
    value: "32mm",
  },
  {
    description: "Exterior Rail in Chicago's",
    value: "43%",
  },
];

export default function Flex() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[95%] min-h-[20vh] justify-between items-center mx-auto mt-1 gap-4 sm:gap-6">
      {statistics.map((stat, index) => (
        <StatCard
          key={index}
          description={stat.description}
          value={stat.value}
        />
      ))}
    </div>
  );
}

// Export the StatCard component for reuse
export { StatCard };
