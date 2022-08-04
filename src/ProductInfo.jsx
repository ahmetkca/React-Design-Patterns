export const ProductInfo = ({ product }) => {
    
    const { name, price, description, rating } = product;
    
    return product ? (
        <>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <h4>Description:</h4>
            <p>{description}</p>
            <p>Average Rating: {rating}</p>
        </>
    ) : <div>Loading...</div>;
}