import useFetch from "/src/hooks/useFetch";

export default function useFetchProducts(productIds) {
  let url;
  if (productIds.length > 0) {
    url = `http://localhost:3000/products?${productIds
      .map((id) => `id=${id}`)
      .join("&")}`;
  } else {
    url = "";
  }

  const { data, isPending } = useFetch(url);

  return { data, isPending };
}
