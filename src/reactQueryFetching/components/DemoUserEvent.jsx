import React from 'react'
import { useCarsHook } from '../../customHooks/useCarsHook'

const DemoUserEvent = () => {
    const configs = {
        enabled: false
    } 

    const {data, error,  isLoading, isError, isFetching, refetch} = useCarsHook(configs)

    if(isLoading || isFetching){
        return <header>Loading....</header>
    }

    if(isError){
        return <header>{error.message}</header>
    }


  return (
    <>    
    <button onClick={refetch}>Fetch</button>
    <section className="cars-wrapper">
      {data.data.map((car) => {
        const { picture, id, product_name, price } = car;
        return (
          <main key={`${product_name}-${id}`} className="car-details">
            <img className="car-name" src={picture} />
            <div className="car-name" key={id}>
              {product_name}
            </div>
            <div className="car-price">
              {price}$
            </div>
          </main>
        );
      })}
    </section>
    </>
  )
}

export default DemoUserEvent