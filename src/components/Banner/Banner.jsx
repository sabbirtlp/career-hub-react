import './Banner.css'
import bannerImage from '../../assets/images/user.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className=" md:h-[80vh] h-[100vh] pt-[50px] md:py-0 bg-[#F9F9FF]">
            <div className="overflow-hidden banner-inner container mx-auto md:flex md:flex-row md:items-end md:justify-between gap-5 text-center md:text-left">
                <div className="left-content md:w-2/5 w-5/5 md:mb-[150px]">
                    <h1 className="text-black md:text-7xl text-4xl md:leading-[80px] font-bold">One Step<br/> Closer To Your<br/> <span className="gradient_text">Dream Job</span></h1>
                    <p className='text-[#757575] my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link to={'/jobs'}>
                    <button className='py-3 px-6 font-semibold text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#9873FF] hover:to-[#7E90FE] rounded text-white'>Get Started</button>
                    </Link>
                </div>
                <div className="right-content md:w-3/5 w-5/5 flex justify-center flex-nowrap  ">
                    <img src={bannerImage} className='w-[38%] block h-auto md:w-[89%] md:h-[100%] max-w-[100%]'/>
                </div>
            </div>

        </section>
    );
};

export default Banner;