export default function Item({
    image,
    product,
    quantity,
    price,
    handleRemove,
    handleIncreaseCartItem,
    handleDecreaseCartItem,
  }) {
    console.log("Item props:", image, product, quantity, price, handleRemove, handleIncreaseCartItem, handleDecreaseCartItem);
    const compoundPrice = quantity * price;
    return (
      <tr>
        <td className="p-4">
          <div className="flex items-center gap-4 w-max">
            <div className="h-32 shrink-0">
              <img
                src={image}
                alt={product}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div>
              <p className="text-base font-bold text-gray-800">{product}</p>
              <button
                type="button"
                className="mt-2 font-semibold text-red-400 text-sm"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </td>
        <td className="p-4">
          <div className="flex divide-x border w-max rounded-lg overflow-hidden">
            <button
              type="button"
              className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
              onClick={handleDecreaseCartItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-current"
                viewBox="0 0 124 124"
              >
                <path
                  d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base"
            >
              {quantity}
            </button>
            <button
              type="button"
              className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
              onClick={handleIncreaseCartItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-current"
                viewBox="0 0 42 42"
              >
                <path
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
          </div>
        </td>
        <td className="p-4">
          <h4 className="text-base font-bold text-gray-800">{`${compoundPrice}`} {/*<span className="subscript">{price}</span> */}</h4>
        </td>
      </tr>
    );
  }
  