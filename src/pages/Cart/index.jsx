import useFetchLocalStorageProducts from "/src/hooks/useFetchLocalStorageProducts";

function Cart() {
  const { data, isPending } = useFetchLocalStorageProducts("cart");

  return (
    <div>
      {!isPending && !data && (
        <h1 className="heading-2">Your cart is empty :(</h1>
      )}
      {data?.map((product) => (
        <h1 className="heading-1" key={product.id}>
          {product.title}
        </h1>
      ))}
    </div>
  );
}

export default Cart;
