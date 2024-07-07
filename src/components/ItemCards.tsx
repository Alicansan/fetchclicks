import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
interface ItemCardsProp {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  vote_avarage: number;
  type: "movie" | "tv" | "person";
  backdrop_path?: string;
}

const ItemCards = ({
  id,
  title,
  name,
  overview,
  poster_path,
  vote_avarage,
  type,
  backdrop_path,
}: ItemCardsProp) => {
  return (
    <Link href={`/content/${type}/${id}`}>
      <div
        key={id}
        className="relative mb-4 border-2 border-darkslategray lg:mb-0"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="absolute bottom-0 z-20 flex h-full flex-col justify-between border-2 border-darkslategray bg-black bg-opacity-70 bg-gradient-to-t from-black to-transparent p-2 opacity-0 transition delay-150 duration-100 ease-in-out hover:border-champagnepink hover:opacity-100">
          <div className="m-2 text-clip">
            <span className="my-2 bg-darkslategray px-2 text-center">
              Score {vote_avarage.toFixed(2)}
            </span>
            <p className="mx-4 mt-2 text-clip font-thin">{overview}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCards;
