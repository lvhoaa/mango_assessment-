"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./JobCard.module.css"
import supabase from "@/supabase";

const JobCard = ({ job }) => {
  const [isSelected, setIsSelected] = useState(job.selected);

  const handleCheckboxChange = async () => {
    const {data,error} = await supabase 
      .from('jobs')
      .update({selected:!isSelected})
      .eq('id',job.id)
    if (error){
        console.log("error changing checkbox", error);
    } else {
        setIsSelected(!isSelected);
    }

    
  };

  return (
    <div className={styles.jobCard}>
      <div className={styles.checkbox}>
        <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
        />
      </div>
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <br />
      <Link href={job.url}>See job</Link>
    </div>
  );
};

export default JobCard;
