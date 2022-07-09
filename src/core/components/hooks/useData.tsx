import {useState, useEffect} from "react";

function useData<T>(serviceFn: () => Promise<T[]>): T[] {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        serviceFn().then(data => setData(data));
    }, []);

    return data;
};

export default useData;