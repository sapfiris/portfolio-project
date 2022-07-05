import {useState, useEffect} from "react";
import {IServiceCreator} from "../../../services/IServiceCreator";

function useData<T1, T2>(serviceCreator: IServiceCreator<T1, T2>): T2[] {
    const [data, setData] = useState<T2[]>([]);

    useEffect(() => {
        const service = serviceCreator.create();
        service.getAll()
            .then(data => setData(data));
    }, []);

    return data;
};

export default useData;