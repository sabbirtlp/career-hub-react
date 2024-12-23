import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localStorage";
import { FaAngleDown } from "react-icons/fa6";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        const appliedJobs = [];


        for (const id of storedJobIds) {
            const job = jobs.find(job => job.id === id);
            if (job) {
                appliedJobs.push(job)
            }
        }
        setAppliedJobs(appliedJobs);
        setDisplayJobs(appliedJobs)
        // if(jobs.length > 0 ){
        //     const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
        //     console.log(jobs, storedJobIds,jobApplied);  
        // }
    }, [])

    return (
        <div className="bg-white">
            <section className="py-[150px] bg-[#F9F9FF]">
                <div className="container mx-auto text-center">
                    <h1 className="md:text-6xl text-4xl font-bold text-black">Applied Jobs</h1>
                </div>
            </section>
            <div className="container mx-auto py-[50px] md:py-[100px]">
                <div className="w-9/12 mx-auto">
                <div className="flex justify-end ">
                    <details className="dropdown">
                        <summary className="btn bg-[#F4F4F4] text-black hover:bg-[#f2f2f2] m-1">Filter By <FaAngleDown />
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                            <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                        </ul>
                    </details>
                </div>

                <div className="grid grid-cols-1 gap-5 mt-10 ">
                    {
                        displayJobs.map(job => <AppliedJob job={job} key={job.id}></AppliedJob>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;