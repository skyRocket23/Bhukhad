const CartBox = ({ item }) => {
  console.log(item);
  return (
    <div className="w-72 m-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-gray-800 flex flex-col items-center">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.imageId}`}
        alt="imagefailed"
        className="rounded-lg m-3 text-center"
      />
      <h1 className="text-red-600 font-bold text-lg text-center">{item.name}</h1>
      <h1 className="text-indigo-600 text-center">{item.description}</h1>
      <h1 className="text-sky-400 font-bold text-3xl text-center">{item.price/100}₹</h1>
    </div>
  );
};

export default CartBox;
