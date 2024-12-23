import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { saveJobApplication } from "../../utilities/localStorage";
import salaryIcon from '../../assets/icons/money.png'
import jobTitleIcon from '../../assets/icons/calendar.png'
import phoneIcon from '../../assets/icons/phone.png'

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    
    const {phone,email,address} = job.contact_information;

    
    

    const applyBtnHandler = () => {
        saveJobApplication(idInt)
        toast(
            'You have applied Successfully'
        )
    }

    return (
        <div className="bg-white">
            <section className="py-[150px] bg-[#F9F9FF]">
                <div className="container mx-auto text-center">
                    <h1 className="md:text-6xl text-4xl font-bold text-black">Job Details</h1>
                </div>
            </section>

            <div className="container mx-auto w-9/12 md:py-[100px] py-[50px]">
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3 col-span-4">
                    <p><span className="text-black font-bold">Job Description: </span>
                    {job.job_description}
                    </p>
                    <br></br>
                    <p>
                    <span className="text-black font-bold">Job Responsibility: </span>
                    {job.job_responsibility}
                    </p>
                    <br></br>
                    <p>
                    <strong className="text-black">Educational Requirements:</strong>
                    <br />
                    {job.educational_requirements}
                    </p>
                    <br></br>
                    <p>
                    <strong className="text-black">Experiences:</strong>
                    <br />
                    {job.experiences}
                    </p>
                    
                </div>

                <div className="md:col-span-1 col-span-4 bg-[#F4F2FF] px-5 py-4">
                    <h1 className="text-xl pb-3 text-black font-semibold">Job Details</h1>
                    <hr />
                    <br />

                    <div className="flex flex-col">
                    <div className="flex gap-1">
                        <img src={salaryIcon} alt={job.job_title} />
                        <p><strong className="text-black">Sarary: </strong>{job.salary}</p>
                    </div>
                    <div className="flex gap-1">
                        <img src={jobTitleIcon} alt={job.job_title} />
                        <p><strong className="text-black">Job Title: </strong>{job.job_title}</p>
                    </div>
                    </div>
                    <br></br>
                    <hr></hr>
                    <br />
                    <div className="flex flex-col gap-3">
                    <div className="flex gap-1">
                        <img src={phoneIcon} alt={job.job_title} />
                        <p><strong className="text-black">Phone: </strong>{phone}</p>
                    </div>
                    <div className="flex gap-1">
                        <img src={jobTitleIcon} alt={job.job_title} />
                        <p><strong className="text-black">Email: </strong>{email}</p>
                    </div>
                    <div className="flex gap-1">
                        <img src={jobTitleIcon} alt={job.job_title} />
                        <p><strong className="text-black">Address: </strong>{address}</p>
                    </div>
                    </div>
                    <button onClick={applyBtnHandler} className="text-lg border-none btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r text-white hover:from-[#9873FF] hover:to-[#7E90FE] w-full mt-4">Apply Now</button>
                </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;