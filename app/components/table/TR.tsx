const TR = (cells: any[]) => {
  const headingComponents = cells.map((cell) => <td key="cell">{cell}</td>);
  const row = <tr>{headingComponents}</tr>;
  return row;
};

export { TR };
