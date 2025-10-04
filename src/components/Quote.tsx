"use client";   
import React, { useEffect, useState } from "react";

function Quote() {
  const [verse, setVerse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQoutes = async ()=>{
       try {
        const response = await fetch("/api/qoute");
        const data = await response.text();
        console.log(data);
        
        setLoading(false);
       } catch (error) {
        console.log(error);
        
       }
    }

    fetchQoutes();
  }, []);

  return <div>{verse}</div>;
}

export default Quote;
