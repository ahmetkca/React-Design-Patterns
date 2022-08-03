export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
}) => {

    return (
        <>
        <h1>Regular List</h1>
            {items.map((item, key) => (
                <ItemComponent 
                    key={key + item}
                    {...{ [resourceName]: item }} />
            ))}
        </>
    )
}