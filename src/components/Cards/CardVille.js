export default function CardVille({ name, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center">
        <h3 className="text-md font-semibold">{name}</h3>
        <button className="mt-2 bg-lightBlue-500 text-white px-3 py-1 rounded-full text-xs hover:bg-lightBlue-600 transition">
          En savoir plus
        </button>
      </div>
    </div>
  );
}
