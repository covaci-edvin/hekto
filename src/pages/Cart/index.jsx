import useFetchProducts from "/src/hooks/useFetchProducts";

function Cart() {
  const localStorageItems = { ...localStorage };
  const productIds = [];

  for (const [key, value] of Object.entries(localStorageItems)) {
    if (key.startsWith("cart")) productIds.push(value);
  }

  const { data, isPending } = useFetchProducts(productIds);

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
