import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";

interface PropsType {
    id: string;
    img: string;
    category: string;
    title: string;
    price: number;
}

const ProductCart = ({ id, img, category, title, price }: PropsType) => {
    const dispatch = useAppDispatch();

    const addProductToCart = () => {
        const payload = {
            id,
            img,
            title,
            price,
            quantity: 1,
        };

        console.log('Dispatching payload: ', payload);
        dispatch(addToCart(payload));
        makeToast("Added to Cart");
    };

    return (
        <div className="px-8 py-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md">
            <p className="text-gray-500 text-[14px] font-medium">{category}</p>
            <h2 className="font-medium text-lg mt-2">{title}</h2>
            <div className="mt-3 text-[#FFB21D] items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <p className="text-gray-600 text-[14px] ml-2">(3 Reviews)</p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <h2 className="font-medium text-accent text-xl">${price.toFixed(2)}</h2>
                <div
                    className="flex gap-2 items-center bg-pink-500 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-accent transition-colors"
                    onClick={addProductToCart}
                >
                    <AiOutlineShoppingCart /> Add To Cart
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
