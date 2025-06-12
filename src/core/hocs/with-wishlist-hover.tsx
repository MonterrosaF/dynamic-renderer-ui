"use client";

import { useWishlistStore } from "@/app/store/wishlist.store";
import React, { useState } from "react";

export interface WishlistHoverProps {
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

export function withWishlistHover<P extends WishlistHoverProps>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithHover = (props: Omit<P, keyof WishlistHoverProps>) => {
    const [hovered, setHovered] = useState(false);
    const toggleWishlist = useWishlistStore((s) => s.toggle);
    const isInWishlist = useWishlistStore((s) => s.isInWishlist);

    return (
      <WrappedComponent
        {...(props as P)}
        hovered={hovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        toggleWishlist={toggleWishlist}
        isInWishlist={isInWishlist}
      />
    );
  };

  return ComponentWithHover;
}
