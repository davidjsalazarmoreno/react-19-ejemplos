export const updateName = (name: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("");
            reject("Error updating name");
            console.log(name);
        }, 1000);
    });
};
