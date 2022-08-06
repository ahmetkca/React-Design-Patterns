import { withEditableResource } from "./withEditableResource";

export const ProductInfoForm = withEditableResource(
    ({ product, onChangeProduct, onSaveProduct, onResetProduct }) => {

        return product ? (
            <>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        <input type="text" value={product.name} onChange={(e) => onChangeProduct({ name: e.target.value })} />
                    </label>
                    <label>
                        <input type="number" value={product.price} onChange={(e) => onChangeProduct({ price: parseFloat(e.target.value) })} />
                    </label>
                    <label>
                        <input type="text" value={product.description} onChange={(e) => onChangeProduct({ description: e.target.value })} />
                    </label>
                    <label>
                        <input type="number" value={product.rating} onChange={(e) => onChangeProduct({ rating: parseFloat(e.target.value) })} />
                    </label>
                    <button onClick={onSaveProduct}>Save</button>
                    <button onClick={onResetProduct}>Reset</button>
                </form>
            </>
        ) : <div>Loading...</div>;
    },
    "/products/1",
    "product"
);
