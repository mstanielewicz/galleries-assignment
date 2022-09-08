import { useQuery } from "@tanstack/react-query";
import { stringify } from "qs";
import sortBy from "lodash.sortby";
import {
  ExhibitionData,
  ExhibitionDataResponse,
  GetExhibitionsParams,
  UseExhibitionsParams
} from "./api.types";

const getExhibitions = async ({
  queryKey: [, { page, search }],
}: GetExhibitionsParams): Promise<ExhibitionDataResponse> => {
  if (search) {
    const body = stringify({
      from: page === 1 ? 0 : (page - 1) * 30 + 1,
      size: 30,
      query: {
        multi_match: {
          query: search,
          fields: ["description", "gallery_title", "title", "type"],
        },
      },
    });

    const idsReponse = await fetch(`https://api.artic.edu/api/v1/exhibitions/search?${body}`)
    const idsData = await idsReponse.json();
    const ids = idsData.data.map(({ id }:ExhibitionData) => id)

    const dataResponse = await fetch(
      `https://api.artic.edu/api/v1/exhibitions?ids=${ids.join(',')}&fields=id,description,gallery_title,is_featured,title,type&limit=30&page=${page}`
    );

    if (!dataResponse.ok) {
      throw new Error("Problem fetching exhibitions");
    }

    const data = await dataResponse.json();

    return { ...data, pagination: { total_pages: idsData.pagination.total_pages } }
  }


  const response = await fetch(
    `https://api.artic.edu/api/v1/exhibitions?fields=id,description,gallery_title,is_featured,title,type&limit=30&page=${page}`
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

  return {
    data: {
      data: sortBy(data?.data || Array.from({ length: 30 }, () => ({})), sort),
      totalPages: data?.pagination?.total_pages
    },
    ...rest
  }
};

export default useExhibitions;
