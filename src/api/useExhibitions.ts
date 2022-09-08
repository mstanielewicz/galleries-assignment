import { useQuery } from "@tanstack/react-query";

const getExhibitions = async ({ queryKey: [, { page }] }: any) => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/exhibitions?fields=id,description,gallery_title,is_featured,title,type&limit=30&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Problem fetching exhibitions");
  }

  const exhibitions = await response.json();

  return exhibitions;
};

const useExhibitions = ({ page }: any) => {
  const query = useQuery(["exhibitions", { page }], getExhibitions);

  return query;
};

export default useExhibitions;
