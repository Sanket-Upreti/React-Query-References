import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DemonstrateUseQuery = () => {
  const getDummyJson = async () => {
    const getData = await axios.get("http://localhost:4000/cars");
    return getData;
  };

  const onSuccess = (data) => {
    console.log(data);
  };

  const onError = (err) => {
    console.log(err);
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["dummyJson"],
    queryFn: getDummyJson,
  });

  if (isLoading) {
    return <header>loading.....</header>;
  }

  if (isError) {
    return <header>Error-{error.message}</header>;
  }

  return (
    <>
      <header>Demonstrating React Query</header>
      <section className="cars-wrapper">
        {data.data.map((car) => {
          const { picture, id, product_name, price } = car;
          return (
            <main key={`${product_name}-${id}`} className="car-details">
              <img className="car-name" src={picture} />
              <div className="car-name" key={id}>
                {product_name}
              </div>
              <div className="car-price">{price}$</div>
            </main>
          );
        })}
      </section>
    </>
  );
};

export default DemonstrateUseQuery;
