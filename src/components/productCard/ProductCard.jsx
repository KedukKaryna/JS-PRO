

export default function ProductCard({name,price,brands,image,description}){
    return (
        <div>
          <img src={image} alt={name}/>
        <div >

            <h3>
              {name} 
              ${price}
            </h3>

            <p>{description}</p>

        <div >
            {brands.map((brand) => (
                <button>{brand}</button>
              ))}
        </div>

          </div>
        </div>
      );
}