export const getTagLink = (page: string|undefined, tag: string) => {
  const path = page !== 'project2' ? [page, tag].join('/') : tag;

  return `/${path}`;
};
