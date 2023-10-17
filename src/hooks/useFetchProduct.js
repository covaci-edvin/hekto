import { productsBaseUrl } from "/src/utils/constants";
import useFetch from "/src/hooks/useFetch";

export default function useFetchProduct(id) {
  const url = `${productsBaseUrl}id=${id}`;

  const { data, isPending } = useFetch(url);

  return { data, isPending };
}
