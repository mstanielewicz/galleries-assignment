import { ExhibitionData } from "../../api/api.types";

export type TableProps = {
  error: boolean;
  fetching: boolean;
  rows: ExhibitionData[];
};
