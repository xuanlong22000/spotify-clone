"use client";

import React, { FC, useState } from "react";
import Modal from "./Modal";
import { Price, ProductWithPrice } from "@/types";
import Button from "./Button";
import { useUser } from "@/hooks/useUser";
import { toast } from "react-hot-toast";
import { postData } from "@/libs/helper";
import { getStripe } from "@/libs/stripeClient";
import useSubscribeModal from "@/hooks/useSubscribeModal";

type Props = {
  products: ProductWithPrice[];
};

const formatPrice = (price: Price) => {
  const priceString = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0,
  }).format((price?.unit_amount || 0) / 100);

  return priceString;
};

const SubscribeModal: FC<Props> = ({ products }) => {
  const { user, isLoading, subscription } = useUser();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const subscribe = useSubscribeModal();
  let content = <div className="text-center">No product available</div>;

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      setPriceIdLoading(undefined);
      return toast.error("Must be logged in");
    }

    if (subscription) {
      setPriceIdLoading(undefined);
      return toast("Already subscribed");
    }

    try {
      const { sessionId } = await postData({
        url: "/api/create-checkout-session",
        data: { price },
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return toast.error((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  if (products.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices?.length) {
            return <div key={product.id}>No price available</div>;
          }

          return product.prices.map((price) => (
            <Button
              disabled={isLoading || price.id === priceIdLoading}
              onClick={() => handleCheckout(price)}
              key={price.id}
            >{`Subscribe for $${formatPrice(price)} a ${
              price?.interval
            }`}</Button>
          ));
        })}
      </div>
    );
  }

  if (subscription) {
    content = <div className="text-center">Already subscribe</div>;
  }
  return (
    <Modal
      title="Only for premium users"
      isOpen={subscribe.isOpen}
      onChange={subscribe.onClose}
      description="Listen to music with Spotify Premium"
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
