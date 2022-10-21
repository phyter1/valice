export const removeProperties = <T extends object = any>(
    properties: string | string[],
    obj: T
) => {
    const excludedProperties =
        typeof properties === "string" ? properties.split(",") : properties;
    return Object.keys(obj).reduce((newObj, property) => {
        if (!excludedProperties.includes(property)) {
            newObj[property] = obj[property];
        }
        return newObj;
    }, {} as T);
};
