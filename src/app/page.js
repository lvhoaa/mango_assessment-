"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import JobCard from '@/components/JobCard'
import { useEffect, useState } from 'react';
import supabase from '@/supabase';

const sampleJob={
  "title":"SWE",
  "company":"Mango",
  "url":"https://jobs.lever.co/tripalink/2b2897fd-e236-4b2c-9e56-11ec3f9c38c3",
  "selected":false
}

export default function Home() {

  const [jobs,setJobs]= useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      const {data, error} = await supabase 
        .from('jobs')
        .select();
      console.log(data);
      if (error){
        console.log("error fetching data: ",error);
      } else{
        setJobs(data);
      }
    }
    fetchData();
  },[])

  return (
    <div>
    
      <h1>Automated Application</h1>
      <br></br>
      <br></br>
      

      <div className="job-container">
        {/* <JobCard job={sampleJob} />
        <JobCard job={sampleJob} />
        <JobCard job={sampleJob} />
        <JobCard job={sampleJob} />
        <JobCard job={sampleJob} />
        <JobCard job={sampleJob} />
        <JobCard job={sampleJob} />
        <JobCard job={sampleJob} /> */}

        {jobs.map((job,index)=>(
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
    </div>
  )
}
