"use client"
import { insertEntry } from "@/app/api/dataFunctions";
import { useState, useEffect } from "react";

// Country images
// https://gist.github.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02

export default function Button(){
    const [selectedCountry, setSelectedCountry] = useState('');
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        fetch(
            `${process.env.NEXT_PUBLIC_COUNTRIES}`
        )
        .then((response) => response.json())
        .then((data) => {
            const input = data.userSelectValue.label
            const country = input.substring(input.indexOf(" ") + 1);

            if (!country) {
                setSelectedCountry('Unknown');
            } else {
                setSelectedCountry(country);
            }
        });
    }, []);

    const updateNumber = async () => {
        setDisabled(true);
        await insertEntry(selectedCountry);
        await delay(150);
        setDisabled(false);
    };
      
    const delay = (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    return (
        <button 
            className="button-50"
            role="button"
            disabled={disabled}
            onClick={updateNumber}
            >
                COUNT
        </button>
    )
}
