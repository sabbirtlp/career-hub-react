import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { LuBadgeDollarSign } from "react-icons/lu";

const AppliedJob = ({ job }) => {
    console.log(job)
    const { job_title, job_description, salary, logo, id, job_type, company_name, remote_or_onsite,location } = job;
    return (
        <div className="border border-gray-300 flex md:justify-between md:items-center gap-6  py-4 md:px-8 px-3 flex-grow md:flex-row flex-col">
            <div className="flex md:justify-between md:items-center gap-4 md:w-8/12 w-12/12 md:flex-row flex-col " >
            <div className="px-3 py-5 bg-gray-200 rounded-lg md:w-1/5 h-[200px] md:h-[160px] flex justify-center items-center">
                <img src={logo} className="h-auto" alt={job_title} />
            </div>
            <div className="w-4/5 flex flex-col gap-3">
                <div className="flex flex-col justify-start">
                    <h2 className="card-title text-xl font-semibold mt-3 text-black">{job_title}</h2>
                    <p className="text-left text-[18px] font-semibold">{company_name}</p>
                </div>
                <div className="flex justify-start gap-3">
                    <button className="border-solid font-bold text-[#9873FF] border-[#9873FF] border px-4 py-2 rounded">{remote_or_onsite}</button>
                    <button className="font-bold text-[#9873FF] border-[#9873FF] border px-4 py-2 rounded">{job_type}</button>
                </div>
                <div className="flex justify-start gap-3 mt-4">
                    <div>
                        <LiaMapMarkerSolid className="inline text-2xl"/>
                    {location}</div>
                    <div><LuBadgeDollarSign className="inline text-2xl"/>
                    {salary}</div>
                </div>
            </div>
            </div>
            <div className="w-4/12 flex justify-end items-center">
                <div className="card-actions">
                    <Link to={`/job/${id}`} ><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-orange-500  border-none text-white btn-primary font-bold mt-4">Job Details</button></Link>
                </div>
            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object.isRequired,
}
export default AppliedJob;