"use client";

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import React, { FC, useEffect, useState } from "react";

type Props = {
  products: ProductWithPrice[];
};

const ModalProvider: FC<Props> = ({ products }) => {
  //   const [isMounted, setIsMounted] = useState(false);

  //   useEffect(() => {
  //     setIsMounted(true);
  //   }, []);

  //   if (!isMounted) {
  //     return null;
  //   }
  return (
    <>
      <UploadModal />
      <AuthModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
