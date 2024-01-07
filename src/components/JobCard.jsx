"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./JobCard.module.css";
import supabase from "@/supabase";

const JobCard = ({ job }) => {
  const [isSelected, setIsSelected] = useState(job.selected);
  const handleCheckboxChange = async () => {
    const { data, error } = await supabase
      .from("jobs")
      .update({ selected: !isSelected })
      .eq("id", job.id);
    if (error) {
      console.log("error changing checkbox", error);
    } else {
      setIsSelected(!isSelected);
    }
  };

  return (
    // <div className={styles.jobCard}>
    //   <div className={styles.checkbox}>
    //     <input
    //         type="checkbox"
    //         checked={isSelected}
    //         onChange={handleCheckboxChange}
    //     />
    //   </div>
    //   <h2>{job.title}</h2>
    //   <h3>{job.company}</h3>
    //   <br />
    //   <Link href={job.url}>See job</Link>
    // </div>

    <div className="card" style={{width:'290px',height:'180px'}}>
      <div className="card-body">
      <div className="form-check float-end">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="d-flex justify-content-between">
        <h5 className="card-title">{job.title}</h5>
      </div>
        <h6 className="card-subtitle mt-2 mb-3 text-muted mb-3 position-absolute" style={{bottom:'60px'}}>{job.company}</h6>
        {/* <h6 className="card-subtitle mb-3 ">Location</h6> */}
        <button type="button" className="btn btn-primary position-absolute bottom-0 mb-3" href={job.url}>See job</button>
      </div>
    </div>
  );
};

export default JobCard;
