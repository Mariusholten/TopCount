"use client"
import { insertEntry } from "@/app/api/dataFunctions";
import { useState, useEffect } from "react";

export default function button(){

    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        fetch(
            `${process.env.NEXT_PUBLIC_COUNTRIES}`
        )
        .then((response) => response.json())
        .then((data) => {
            const input = data.userSelectValue.label
            const country = input.substring(input.indexOf(" ") + 1);
            console.log("Country: ", country)
            setSelectedCountry(country);
        });
    }, []);

    const updateNumber = async () => {
        await insertEntry(selectedCountry);
    }


    return (
        <button 
            className="button-50"
            role="button"
            onClick={updateNumber}
            >
                CLICK
        </button>
    )
}


