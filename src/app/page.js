"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JobCard from "@/components/JobCard";
import { useEffect, useState } from "react";
import supabase from "@/supabase";

const sampleJob = {
  title: "SWE",
  company: "Mango",
  url: "https://jobs.lever.co/tripalink/2b2897fd-e236-4b2c-9e56-11ec3f9c38c3",
  selected: false,
};

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("jobs").select();
      console.log(data);
      if (error) {
        console.log("error fetching data: ", error);
      } else {
        setJobs(data);
      }
    };
    fetchData();
  }, []);

  return (
    // <div className={styles.container}>
    //   <h3>Automated Application</h3>
    //   <div className="job-container">
    //     {/* <JobCard job={sampleJob} />
    //     <JobCard job={sampleJob} />
    //     <JobCard job={sampleJob} />
    //     <JobCard job={sampleJob} />
    //     <JobCard job={sampleJob} />
    //     <JobCard job={sampleJob} />
    //     <JobCard job={sampleJob} />
    //     <JobCard job={sampleJob} /> */}
    //     {jobs.map((job,index)=>(
    //       <JobCard key={job.id} job={job} />
    //     ))}
    //     <br></br>
    //     <button>Start Application Process</button>
    //   </div>

    <div className={styles.container}>
      <h3 className="mb-5" style={{ fontWeight: "bold" }}>
        Automated Application
      </h3>

      <div className="container" style={{maxWidth:'1200px', marginLeft:'-10px'}}>
        <div className="row row-cols-1 row-cols-md-4 g-3">
          {jobs.map((job, index) => (
            <div class="col" key={job.id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="btn btn-outline-primary btn-lg mt-5 mb-5"
        style={{
          color: "rgb(102,16,242)",
          borderColor: "rgb(102,16,242)",
          fontWeight: "bold",
        }}
      >
        Start Application Process
      </button>
    </div>
  );
}
