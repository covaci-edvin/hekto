import { useParams } from "react-router-dom";

import ProductDetails from "./Details";
import ProductInfo from "./Info";
import RelatedProducts from "./Related";
import useFetchProduct from "../../hooks/useFetchProduct";

function Product() {
  const params = useParams();

  const { data: product } = useFetchProduct(params.id);

  return (
    <>
      {product && <ProductDetails product={product[0]} />}
      <ProductInfo />
      <RelatedProducts />
    </>
  );
}

export default Product;
