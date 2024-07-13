"use client";
import { useState, useEffect } from "react";
import { CastResult } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CastProps {
  cast: CastResult;
}

const Castcrew = ({ cast }: CastProps) => {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePageChange = (
    pageNumber: number,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCast = cast.cast.slice(startIndex, endIndex);
  const totalPages = Math.ceil(cast.cast.length / itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {currentCast.map((item: any, index: number) => (
          <Link href={`/content/person/${item.id}`} key={index} passHref>
            <div key={index} className="flex flex-col items-center shadow-2xl">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
                width={98}
                height={125}
                className="mt-2 h-[145px] w-[98px] border-2 border-persianred"
              />
              <p className="my-2 flex-wrap text-center text-xl">{item.name}</p>
              <p className="flex-wrap text-center">{item.character}</p>
            </div>
          </Link>
        ))}
      </div>
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Castcrew;

interface PaginationSectionProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (
    pageNumber: number,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}

function PaginationSection({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationSectionProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination className="my-4">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => onPageChange(currentPage - 1, event)}
            />
          </PaginationItem>
        )}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={(event) => onPageChange(page, event)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {totalPages > 5 && <PaginationEllipsis />}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(event) => onPageChange(currentPage + 1, event)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
