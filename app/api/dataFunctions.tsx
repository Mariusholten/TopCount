import supabase from "./supabase";

export const fetchNumber = async () => {
    const {data, error} = await supabase
    .from('topcount')
    .select('id')
    .order('id', { ascending: false})
    .limit(1)
    .single()

    if(data) console.log("Number: ", data);
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

export const fetchTop10Countries = async () => {

}