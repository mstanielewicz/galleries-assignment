import { useQuery } from "@tanstack/react-query";

const getExhibitions = async () => {
  const response = await fetch(
    "https://api.artic.edu/api/v1/exhibitions?fields=id,description,gallery_title,is_featured,title,type&limit=30"
  );

  if (!response.ok) {
    throw new Error("Problem fetching exhibitions");
  }

  const exhibitions = await response.json();

  return exhibitions;
};

const useExhibitions = () => {
  const query = useQuery(["exhibitions"], getExhibitions);

  return query;
};

export default useExhibitions;
