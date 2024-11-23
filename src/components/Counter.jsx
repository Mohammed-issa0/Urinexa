export default function Counter({ remaining, total, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="bg-white p-6 rounded-lg shadow-xl inline-block "
    >
      <div className=" text-2xl md:text-4xl font-bold text-red-600">
        {4 ? `${4} / 150 قطعة متبقية ` : "لقد نفدت الكمية"}
      </div>
    </div>
  );
}
