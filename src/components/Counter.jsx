export default function Counter({ remaining, total, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="bg-white p-6 rounded-lg shadow-md inline-block cursor-pointer"
    >
      <div className=" text-2xl md:text-4xl font-bold text-red-600">
        {remaining ? `${remaining} / 150 قطعة متبقية ` : "لقد نفدت الكمية"}
      </div>
    </div>
  );
}
