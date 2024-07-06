"use client"
import { Countries, fetchCountries } from "@/app/api/dataFunctions";
import { useEffect, useState } from "react";


export default function TopComp(){
    const [data, setData] = useState<Countries>([] as unknown as Countries);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchCountries();
                setData(response); 
            } catch (error) {
                console.error('An error occurred fetching number:', error);
                setData([{country: "N/A", total: 0,}]);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="ranking">
            {data.map((item, rank) => (
                <p key={item.country}>
                    {rank + 1}. {item.country}: {item.total}
                </p>
        ))}
        </div>
    );
}