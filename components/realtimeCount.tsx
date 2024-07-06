"use client"
import supabase from "@/app/api/supabase";
import { useEffect, useState } from "react";
import { fetchNumber } from "@/app/api/dataFunctions";

export default function RealtimeData(){
    const [number, setNumber] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNumber();
                setNumber(data?.id);
            } catch (error) {
                console.error('An error occurred fetching number:', error);
                setNumber(0);
            }
        }
        fetchData()
        
        const channel = supabase
        .channel('realtime data')
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'topcount'
        }, (payload) => {
            setNumber(payload.new.id)
        }).subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase]);

    return (
        <p className="countNumber">
            {number}
        </p>
    )
}