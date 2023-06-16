import React from "react";
import truncate from "lodash.truncate";
import {
  STableRow,
  STableRowShowMoreButton,
  STableRowTitle,
} from "./TableRow.styles";
import { ExhibitionData } from "../../api/api.types";

type TitleProps = {
  title: string;
};

const Title = ({ title = "" }: TitleProps) => {
  const [showWholeTitle, setShowWholeTitle] = React.useState(false);

  const handleButtonClick = () => setShowWholeTitle((previous) => !previous);

  const isTruncated = title.length > 30;

  return (
    <STableRowTitle>
      {!isTruncated || (isTruncated && showWholeTitle)
        ? title
        : truncate(title, { length: 30, separator: " " })}
      {isTruncated ? (
        <STableRowShowMoreButton onClick={handleButtonClick}>
          {showWholeTitle ? "Show less" : "Show more"}
        </STableRowShowMoreButton>
      ) : null}
    </STableRowTitle>
  );
};

const TableRow = ({
  description,
  gallery_title,
  is_featured,
  title,
  type,
}: ExhibitionData) => {
  return (
    <STableRow featured={is_featured}>
      <td>
        <Title title={title} />
      </td>
      <td>{truncate(description || "-", { length: 200, separator: " " })}</td>
      <td>{is_featured ? "Yes" : "No"}</td>
      <td>{gallery_title || "-"}</td>
      <td>{type || "-"}</td>
    </STableRow>
  );
};

export default TableRow;
