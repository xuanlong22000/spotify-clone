import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import PlayButton from "./PlayButton";

type Props = {
  onClick: (id: string) => void;
  data: Song;
};

const SongItem: FC<Props> = ({ onClick, data }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3
        "
    >
      <div
        className="
            relative 
            aspect-square 
            w-full 
            h-full 
            rounded-md 
            overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
          By {data.author}
        </p>
      </div>
      <div
        className="
            absolute
            bottom-24
            right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
