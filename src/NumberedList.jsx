export const NumberedList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
}) => {

    return (
        <>
            <h1>Numbered List</h1>
            {items.map((item, key) => (
                <div key={key}>
                    <h3>{key + 1}</h3>
                    <ItemComponent 
                        {...{ [resourceName]: item }} />
                </div>
            ))}
        </>
    )
}