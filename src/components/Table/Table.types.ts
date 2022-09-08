import { ExhibitionData } from "../../api/api.types";

export type TableProps = {
  error: boolean;
  fetching: boolean;
  onSortingBy: (sorting: string) => void;
  rows: ExhibitionData[];
  sortingBy?: string;
};
