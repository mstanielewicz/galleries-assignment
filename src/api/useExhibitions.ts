import React from "react";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { stringify } from "qs";
import sortBy from "lodash.sortby";
import {
  ExhibitionDataResponse,
  GetExhibitionsParams,
  UseExhibitionsParams
} from "./api.types";

const getExhibitions = async ({
  queryKey: [, { page, search }],
}: GetExhibitionsParams): Promise<ExhibitionDataResponse> => {
  const body = stringify({
    from: page === 1 ? 0 : page * 30 + 1,
    size: 30,
    query: {
      multi_match: {
        query: search,
        fields: ["description", "gallery_title", "title", "type"],
      },
    },
  });

  const response = await fetch(
    search
      ? `https://api.artic.edu/api/v1/exhibitions/search?${body}`
      : `https://api.artic.edu/api/v1/exhibitions?fields=id,description,gallery_title,is_featured,title,type&limit=30&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Problem fetching exhibitions");
  }

  const exhibitions = await response.json();

  return exhibitions;
};

const useExhibitions = ({ page, search, sort = "" }: UseExhibitionsParams) => {
  const { data, ...rest } = useQuery<
    ExhibitionDataResponse,
    Error,
    ExhibitionDataResponse,
    [resource: string, params: { page: number; search: string }]
  >(["exhibitions", { page, search }], getExhibitions, {
    keepPreviousData: true,
  });

  const sortedData = React.useMemo(
    () => sortBy(data?.data || Array.from({ length: 30 }, () => ({})), sort),
    [data?.data, sort]
  );

  return {
    data: { data: sortedData, totalPages: data?.pagination?.total_pages },
    ...rest,
  };
};

export default useExhibitions;
