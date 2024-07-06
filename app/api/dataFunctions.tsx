'use server';
import supabase from "./supabase";

export const fetchNumber = async () => {
    const {data, error} = await supabase
    .from('topcount')
    .select('id')
    .order('id', { ascending: false})
    .limit(1)
    .single()

    //if(data) console.log("Number: ", data);
    if(error) console.error("Fetch error: ", error);

    return data;
};

export const insertEntry = async (country: string) => {
    const {error} = await supabase
    .from('topcount')
    .insert(
        {country: country}
    )

    if(error) console.error("Insert error: ", error);
}

export type Countries = [
    { 
        country: string, 
        total: number }
]

export const fetchTop10Countries = async () => {
    const {data, error} = await supabase
    .from('countries')
    .select('*')
    .order('total', { ascending: false})
    .limit(10)

    if(data) console.log("Top 10: ", data);
    if(error) console.error("Fetch error: ", error);

    return data as Countries;
}

export const fetchCountries = async () => {
    const {data, error} = await supabase
    .from('countries')
    .select('*')
    .order('total', { ascending: false})

    //if(data) console.log("Country: ", data);
    if(error) console.error("Fetch error: ", error);

    return data as Countries;
}