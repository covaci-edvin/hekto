import { productsBaseUrl } from "/src/utils/constants";
import useFetch from "/src/hooks/useFetch";

export default function useFetchProducts(productIds) {
  let url;

  if (productIds.length > 0) {
    const productsParams = productIds.map((id) => `id=${id}`).join("&");
    url = `${productsBaseUrl}${productsParams}`;
  } else {
    url = "";
  }

  const { data, isPending } = useFetch(url);

  return { data, isPending };
}
