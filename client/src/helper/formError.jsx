export const userOnError = async (errors) => {
    try {
        const error = errors.user;
        for (let e in error) {
            toast.error(error[e].message);
        }
    } catch (e) {
        toast.error(e.message);
    }
};

export const todoOnError = async (errors) => {
    try {
        const error = errors.todo;
        for (let e in error) {
            toast.error(error[e].message);
        }
    } catch (e) {
        toast.error(e.message);
    }
};
