import useFetchLocalStorageProducts from "/src/hooks/useFetchLocalStorageProducts";

function Wishlist() {
  const { data, isPending } = useFetchLocalStorageProducts("wishlist");

  return (
    <div>
      {!isPending && !data && (
        <h1 className="heading-2">Your wishlist is empty :(</h1>
      )}
      {data?.map((product) => (
        <h1 className="heading-1" key={product.id}>
          {product.title}
        </h1>
      ))}
    </div>
  );
}

export default Wishlist;
