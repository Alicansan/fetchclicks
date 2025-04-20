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

  // Pagination states
  const [trendingPage, setTrendingPage] = useState(1);
  const [moviesPage, setMoviesPage] = useState(1);
  const [tvPage, setTvPage] = useState(1);

  const [isLoadingTrendingData, setisLoadingTrendingData] = useState(false);

  const [trendingData, setTrendingData] = useState<TrendingResponse | null>(null);
  const [movieData, setMovieData] = useState<MovieResponse | null>(null);
  const [tvData, setTvData] = useState<TvResponse | null>(null);

  // Fetch trending data with pagination
  const fetchTrending = async (page = 1, limit = 12) => {
    try {
      setisLoadingTrendingData(true);
      const response = await fetch(`/api/trending?page=${page}&limit=${limit}`);
      const trendingData = (await response.json()) as TrendingResponse;

      setTrendingData(trendingData);
      setTrendingPage(page);
    } catch (error) {
      console.error(error);
    } finally {
      setisLoadingTrendingData(false);
    }
  };

  // Fetch movies data with pagination
  const fetchMovies = async (page = 1, limit = 12) => {
    try {
      const response = await fetch(`/api/movies?page=${page}&limit=${limit}`);
      const movieData = (await response.json()) as MovieResponse;

      setMovieData(movieData);
      setMoviesPage(page);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch TV data with pagination
  const fetchTv = async (page = 1, limit = 12) => {
    try {
      const response = await fetch(`/api/tv?page=${page}&limit=${limit}`);
      const tvData = (await response.json()) as TvResponse;
      
      setTvData(tvData);
      setTvPage(page);
    } catch (error) {
      console.error(error);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchTrending();
    fetchMovies();
    fetchTv();
  }, []);

  // Pagination handlers
  const handleTrendingPagination = (newPage: number) => {
    fetchTrending(newPage);
  };

  const handleMoviesPagination = (newPage: number) => {
    fetchMovies(newPage);
  };

  const handleTvPagination = (newPage: number) => {
    fetchTv(newPage);
  };

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
                    trendingData && (
                      <>
                        <Trending trendingData={trendingData} />
                        <div className="flex justify-center mt-4 space-x-4">
                          <button 
                            onClick={() => handleTrendingPagination(trendingPage - 1)}
                            disabled={trendingPage === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                          >
                            Previous
                          </button>
                          <button 
                            onClick={() => handleTrendingPagination(trendingPage + 1)}
                            disabled={!trendingData.total_pages || trendingPage >= trendingData.total_pages}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )
                  )}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                  {movieData && (
                    <>
                      <Movies movieData={movieData} />
                      <div className="flex justify-center mt-4 space-x-4">
                        <button 
                          onClick={() => handleMoviesPagination(moviesPage - 1)}
                          disabled={moviesPage === 1}
                          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <button 
                          onClick={() => handleMoviesPagination(moviesPage + 1)}
                          disabled={!movieData.total_pages || moviesPage >= movieData.total_pages}
                          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className={openTab === 3 ? "block" : "hidden"}>
                  {tvData && (
                    <>
                      <Tv tvData={tvData} />
                      <div className="flex justify-center mt-4 space-x-4">
                        <button 
                          onClick={() => handleTvPagination(tvPage - 1)}
                          disabled={tvPage === 1}
                          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <button 
                          onClick={() => handleTvPagination(tvPage + 1)}
                          disabled={!tvData.total_pages || tvPage >= tvData.total_pages}
                          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}
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
