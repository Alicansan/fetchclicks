"use client";
import Movies from "@/containers/Movies";
import Trending from "@/containers/Trending";
import Tv from "@/containers/Tv";
import { cn } from "@/lib/utils";
import { TrendingResponse, MovieResponse, TvResponse } from "@/types";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

const tabItems = [{ title: "Trending" }, { title: "Movie" }, { title: "TV" }];

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  const [isLoadingTrendingData, setisLoadingTrendingData] = useState(false);

  const [trendingData, setTrendingData] = useState<TrendingResponse | null>(
    null,
  );

  const [movieData, setMovieData] = useState<MovieResponse | null>(null);

  const [tvData, setTvData] = useState<TvResponse | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setisLoadingTrendingData(true);
        const response = await fetch(
          "/api/trending", //  Bu veri  api/trending/route.ts dosyasından çekmek için kullanılan bir NExtJS API Route sistemi
        );
        const trendingData = (await response.json()) as TrendingResponse;

        setTrendingData(trendingData);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoadingTrendingData(false);
      }
    };
    fetchTrending();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");
        const movieData = (await response.json()) as MovieResponse;

        setMovieData(movieData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchTv = async () => {
      try {
        const response = await fetch("/api/tv");
        const tvData = (await response.json()) as TvResponse;
        setTvData(tvData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTv();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full">
          <ul
            className="flex justify-center gap-12 pb-4 pt-3 text-2xl"
            role="tablist"
          >
            {tabItems.map((item, index) => (
              <TabHeaderItem
                key={index}
                index={index + 1}
                openTab={openTab}
                setOpenTab={setOpenTab}
                title={item.title}
              />
            ))}
          </ul>
          <div className="relative grid justify-center border-t-4 border-champagnepink">
            <div className="flex px-4 py-5">
              <div className="">
                <div className={openTab === 1 ? "block" : "hidden"}>
                  {isLoadingTrendingData ? (
                    <p>Loading</p>
                  ) : (
                    trendingData && <Trending trendingData={trendingData} />
                  )}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                  {movieData ? (
                    <Movies movieData={movieData} />
                  ) : (
                    <p>Loading</p>
                  )}
                </div>
                <div className={openTab === 3 ? "block" : "hidden"}>
                  {tvData ? <Tv tvData={tvData} /> : <p>Loading</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

interface TabHeaderProp {
  title: string;
  index: number;
  openTab: number;
  setOpenTab: Dispatch<SetStateAction<number>>;
}
const TabHeaderItem = ({
  title,
  index,
  openTab,
  setOpenTab,
}: TabHeaderProp) => {
  return (
    <li>
      <button
        className={cn("px-5 py-3", {
          "text-red-300": openTab === index,
        })}
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(index);
        }}
        data-toggle="tab"
        role="tablist"
      >
        {title}
      </button>
    </li>
  );
};
