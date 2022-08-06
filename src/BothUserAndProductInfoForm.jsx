import { withEditableResource } from "./withEditableResource";

export const BothUserAndProductInfoForm = withEditableResource(
    withEditableResource(
        ({ user, onChangeUser, onSaveUser, onResetUser, product, onChangeProduct, onSaveProduct, onResetProduct }) => {

            return user && product ? (
                <>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>
                            <input type="text" value={user.name} onChange={(e) => onChangeUser({ name: e.target.value })} />
                        </label>
                        <label>
                            <input type="number" value={user.age} onChange={(e) => onChangeUser({ age: e.target.value })} />
                        </label>
                        <label>
                            <input type="text" value={user.hairColor} onChange={(e) => onChangeUser({ hairColor: e.target.value })} />
                        </label>
                        <label>
                            <input type="text" value={user.hobbies.join(", ")} onChange={(e) => onChangeUser({ hobbies: e.target.value.split(", ") })} />
                        </label>

                        <button onClick={onSaveUser}>Save</button>
                        <button onClick={onResetUser}>Reset</button>
                    </form>
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
        "/users/1", 
        "user"
    ), 
    "/products/1", 
    "product"
);
