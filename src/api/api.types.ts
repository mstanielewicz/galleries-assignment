export interface ExhibitionDataResponse {
  data: {
    data: ExhibitionData[];
  };
  pagination: {
    total_pages: number;
  };
}

export interface ExhibitionData {
  id: number;
  title: string;
  description: string;
  is_featured: boolean;
  gallery_title: string;
  type: string;
}

export interface GetExhibitionsParams {
  queryKey: [
    resource: string, params: { page: number, search: string, sort?: string }
  ]
}


export type UseExhibitionsParams = {
  page: number,
  search: string,
  sort?: string
}