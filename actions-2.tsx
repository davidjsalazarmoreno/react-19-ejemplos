// Using <form> Actions and useActionState

const updateName = (name: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("")
            reject("Error updating name")
            console.log(name)
        }, 1000);
    });
}


function ChangeName({ name, setName }) {
    const [error, submitAction, isPending] = useActionState(
        async (previousState, formData) => {
            const error = await updateName(formData.get("name"));
            if (error) {
                return error;
            }
            redirect("/path");
            return null;
        },
        null,
    );

    return (
        <form action={submitAction}>
            <input type="text" name="name" />
            <button type="submit" disabled={isPending}>Update</button>
            {error && <p>{error}</p>}
        </form>
    );
}

