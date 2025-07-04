"use client";
import "@/styles/text.css";
import Cards from "@/components/ui/Cards";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Participant {
  name: string;
  role: string;
  bio: string;
  info: string;
}

export default function Home() {
  const [participants, setParticipants] = useState<any[]>([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch("/api/participants");
        const data = await response.json();
        setParticipants(data);
      } catch (error) {
        console.error("Error fetching participants", error);
      }
    };
    fetchParticipants();
  }, []);

  return (
    <div className="min-h-screen px-40 grid justify-items-center bg-black/70">
      <div className="flex items-center justify-center h-60 w-full ">
        <Image
          className="animate-pulse ease-in-out cursor-pointer"
          src="/logo.png"
          alt="logo"
          width={300}
          height={300}
        />
        <h1 className="text-6xl text-amber-300 cursor-pointer transition-all duration-300 hover:text-[--shine-text] z-10">
          <span className="text-pink-500">C</span>aramelito{" "}
          <span className="text-orange-600">A</span>cido
        </h1>
      </div>
      <h2 className="text-5xl ">
        Bienvenidos al Caos mas sabroso de la semana
      </h2>
    </div>
  );
}
