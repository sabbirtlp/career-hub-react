import PropTypes from "prop-types";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const {id, job_title, logo, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    return (
        <div className=" py-8 px-8 shadow-xl rounded-md bg-white">
            <figure>
                <img className="h-[40px]"
                    src={logo}
                    alt={job_title} 
                />
            </figure>
            <div className="flex flex-col gap-3">
                <h2 className="card-title text-left text-2xl font-bold mt-3">{job_title}</h2>
                <p className="text-left text-xl font-semibold">{company_name}</p>
                
                {/* JobType Box */}
                <div className="flex justify-start gap-3">
                    <button className="border-solid font-bold text-[#9873FF] border-[#9873FF] border px-4 py-2 rounded">{remote_or_onsite}</button>
                    <button className="font-bold text-[#9873FF] border-[#9873FF] border px-4 py-2 rounded">{job_type}</button>
                </div>
                {/* Address And Salary Box */}
                <div className="flex justify-start gap-3 mt-4">
                    <div>
                        <LiaMapMarkerSolid className="inline text-2xl"/>
                    {location}</div>
                    <div><LuBadgeDollarSign className="inline text-2xl"/>
                    {salary}</div>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`} ><button  className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-orange-500  border-none text-white btn-primary font-bold mt-4">Job Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
}

export default Job;