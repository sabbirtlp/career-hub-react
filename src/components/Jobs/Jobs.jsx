import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";
import { useState } from "react";

const Jobs = () => {
    const jobs = useLoaderData(); 
    const [dataLength,setDataLength] = useState(4)    
    return (
        <div>
        <section className="py-[150px] bg-[#F9F9FF]">
            <div className="container mx-auto text-center">
                    <h1 className="md:text-6xl text-4xl font-bold text-black">Jobs</h1>
            </div>
        </section>
        
        <section className="py-[100px] bg-[#fff]">
            <div className=" container mx-auto text-center">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto w-9/12">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className={dataLength === jobs.length ? 'hidden' : '' }>
                    <button className="text-lg border-none btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r text-white hover:from-[#9873FF] hover:to-[#7E90FE] mt-5" onClick={() => { setDataLength(jobs.length) }} >Show All Jobs</button>
                </div>
            </div>
        </section>
        </div>

    );
};

export default Jobs;