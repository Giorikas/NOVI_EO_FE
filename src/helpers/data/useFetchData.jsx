import axios from "axios";
import {useEffect, useState} from "react";


export function useFetchData (endpoint, method = "GET", body, options = {}){

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const fetchData = async() => {
            setLoading(true);
            try {
                const r = await axios({
                    url: endpoint,
                method: method.toUpperCase(),
                data: body,
                ...options,
                });
                setData(r.data)
                console.log("useFetchData")
                console.log(r.data)
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [])

    return { data: data, loading: loading, error: error};
}