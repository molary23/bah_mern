export default function paginate(pageNumber: number, contentPerPage: number) {
  const offset: number = contentPerPage * (pageNumber - 1),
    limit = contentPerPage * pageNumber;

  return [offset, limit];
}
