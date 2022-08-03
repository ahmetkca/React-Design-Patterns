export const SmallProductListItem = ({ product }) => {
    
    const { name, price } = product;
    
    return (
        <>
            <h4>Name: {name}</h4>
            <h5>Price: {price}</h5>
        </>
    );
}
