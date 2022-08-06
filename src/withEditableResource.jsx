import React, { useEffect, useState } from 'react';

const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export const withEditableResource = (Component, resourcePath, resourceName) => {
    return (props) => {
        const [originalResource, setOriginalResource] = useState(null);
        const [currentResource, setCurrentResource] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await fetch(`http://localhost:8080${resourcePath}`);
                const resource = await response.json();
                setOriginalResource(resource);
                setCurrentResource(resource);
            })();
        } , [resourcePath]);

        const onChangeResource = (changes) => {
            console.log("Changes: ", changes);
            console.log("Before: ", currentResource);
            setCurrentResource({ ...currentResource, ...changes });
            console.log("After: ", currentResource);
        }

        const onSaveResource = async () => {
            console.log("Saving resource: ", currentResource);
            const response = await fetch(`http://localhost:8080${resourcePath}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentResource)
            });
            const resource = await response.json();
            console.log("Saved resource: ", resource);
            setOriginalResource(resource);
            setCurrentResource(resource);
        }

        const onResetResource = () => {
            setCurrentResource(originalResource);
        }

        const resourceProps = {
            [resourceName]: currentResource,
            [`onChange${capitalize(resourceName)}`]: onChangeResource,
            [`onSave${capitalize(resourceName)}`]: onSaveResource,
            [`onReset${capitalize(resourceName)}`]: onResetResource
        }

        return <Component {...props} {...resourceProps}  />
    }
}