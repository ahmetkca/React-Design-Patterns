import { withEditableUser } from "./withEditableUser";

export const UserInfoForm = withEditableUser(
    ({ user, onChangeUser, onSaveUser, onResetUser }) => {

        return user ? (
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
            </>
        ) : <div>Loading...</div>;
    },
    1,
    "user"
);
