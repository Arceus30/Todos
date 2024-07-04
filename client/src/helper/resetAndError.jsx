export const onError = async (errors) => {
    try {
        const error = errors.user;
        for (let e in error) {
            toast.error(error[e].message);
        }
    } catch (e) {
        toast.error(e.message);
    }
};

export const handleReset = (e) => {
    e.preventDefault();
    reset();
};
