/* eslint-disable jsx-a11y/alt-text */
import { CastResult } from "@/types";
import Image from "next/image";

interface CastProps {
  cast: CastResult;
}

const Castcrew = ({ cast }: CastProps) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {cast &&
        cast.cast.slice(0, 15).map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center shadow-2xl">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
              width={98}
              height={125}
              className="mt-2 border-2 border-persianred"
            />
            <p className="my-2 flex-wrap text-center text-xl">{item.name}</p>
            <p className="flex-wrap text-center"> {item.character}</p>
          </div>
        ))}
    </div>
  );
};

export default Castcrew;
