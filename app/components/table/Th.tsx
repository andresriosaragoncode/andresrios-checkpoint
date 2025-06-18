const TH = (headings: string[], onClick: any) => {
  const headingComponents = headings.map((heading) => (
    <th onClick={onClick} key={heading}>
      {heading}
    </th>
  ));
  const headingRow = <tr>{headingComponents}</tr>;
};

export { TH };
