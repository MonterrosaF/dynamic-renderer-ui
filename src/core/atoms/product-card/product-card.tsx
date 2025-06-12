import {
  WishlistHoverProps,
  withWishlistHover,
} from "@/core/hocs/with-wishlist-hover";
import WishList from "../wishlist";

export interface ProductCardProps extends WishlistHoverProps {
  productId: string;
  children: React.ReactNode;
}

const ProductCard = ({
  hovered,
  onMouseEnter,
  onMouseLeave,
  productId,
  children,
}: ProductCardProps) => {
  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative"
    >
      {hovered && <WishList id={productId} />}
      {children}
    </article>
  );
};

export default withWishlistHover(ProductCard);
