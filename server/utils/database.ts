export const getInsertId = <Row extends number | { id: number }>(row: Row) => {
  if (typeof row === 'number') {
    return row;
  }
  return row.id;
};
