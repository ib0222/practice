
const Card = ({ id, image, title, price }) => {
  return (
    <div className="relative border p-3 rounded-xl bg-slate-300 hover:bg-slate-500 ease-in-out duration-300 flex flex-col h-[300px]">
      <div className="flex-1 flex justify-center items-center h-1/2 mt-8">
        <img
          src={image}
          alt={title}
          className="rounded object-contain mix-blend-multiply w-full h-full"
        />
      </div>
      <div className="flex-1 text-center font-bold flex flex-col justify-center items-center h-1/2">
        <h3 className="text-lg font-semibold tracking-wide text-slate-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-lg mt-2 text-slate-700">{price} $</p>
      </div>
      <button
        className="bg-white p-1 rounded-full absolute right-3 top-3"
      >
        💗
      </button>
    </div>
  );
};

export default Card;
