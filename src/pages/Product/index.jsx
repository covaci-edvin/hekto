import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  return <h1 className="heading-1">{params.id}</h1>;
}

export default Product;
