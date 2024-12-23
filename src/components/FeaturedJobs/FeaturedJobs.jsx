import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    })

    return (
        <section className="py-[100px] bg-[#F9F9FF]">
            <div className="text-center container mx-auto">
                <h2 className="font-semibold py-5 text-black md:text-5xl text-3xl">Featured Jobs</h2>
                <p className="text-[#757575] py-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mx-auto mx-4 w-12/12 md:w-9/12">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className={dataLength === jobs.length ? 'hidden' : '' }>
                    <button className="text-lg border-none btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r text-white hover:from-[#9873FF] hover:to-[#7E90FE] mt-5" onClick={() => { setDataLength(jobs.length) }} >Show All Jobs</button>
                </div>
            </div>
        </section>

    );
};

export default FeaturedJobs;