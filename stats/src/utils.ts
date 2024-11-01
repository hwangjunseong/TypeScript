export const dateStringToDate = (dateString: string): Date => {
  //28/10/2018
  //dateParts는  const dateParts: number[]
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value, 10);
  });
  //ex => new Date(2024, 0, 15) => 2024년 Jan 15
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
