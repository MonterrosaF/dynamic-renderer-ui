import { useWishlistStore } from "@/app/store/wishlist.store";
import { BaseProps } from "@/core/components/typing";
import { HeartIcon } from "@heroicons/react/outline";
import cn from "classnames";

export interface WishListProps extends BaseProps {
  id: string;
  className?: string;
}

export const WishList = ({ id, className }: WishListProps) => {
  const { isInWishlist, toggle } = useWishlistStore();

  return (
    <button
      onClick={() => toggle(id)}
      className={cn("absolute right-4 top-4 cursor-pointer", {
        "text-red-500": isInWishlist(id),
        "text-gray-400": !isInWishlist(id),
      })}
    >
      <HeartIcon className={cn("w-4 min-w-4", className)} />
    </button>
  );
};

export default WishList;
