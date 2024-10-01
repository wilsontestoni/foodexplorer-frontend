export const getOnlyDigits = (data: string): string => data?.replace(/\D/g, '') ?? data;
export const getNumberWithComma = (data: string) => parseFloat(data.replace(/\./g, '').replace(',', '.'));
export const convertDotToComma = (data: number | string) => data.toString().replace('.', ',');
export const addLeadingZero = (data: number) => data.toString().padStart(2, '0');
export const formatCodeForSix = (data: number) => data.toString().padStart(6, '0');
export const formatCodeForEight = (data: number) => data.toString().padStart(8, '0');
export const formatDate = (data: Date | string) => {
  const date = new Date(data);
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const formatedDate = `${day}/${month} às ${hours}h${minutes}`;

  return formatedDate
}




