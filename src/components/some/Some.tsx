import {useSearchParams} from "react-router";
import {useEffect} from "react";

export const Some = () => {

    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg');
        console.log(pg);
        fetch('https://reqres.in/api/users?page=' + pg)
            .then(value => value.json())
            .then(value => {
                console.log(value)
            })
    }, [query])


    return (
        <div>
            Some content
        </div>
    );
};