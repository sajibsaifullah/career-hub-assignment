import React from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Job = ({job, dynamic}) => {
    const handleApplyNow = (job) => {
        // console.log(job);
        // addToDb({id});
        // console.log(job);
        const prevStoredJob = JSON.parse(localStorage.getItem("stored-job"));
        let storedJob = [];
        const jobDes = job;

        if(prevStoredJob){
            const isJobApplied = prevStoredJob.find((aj) => aj.id == job.id);
            if(isJobApplied){
                // alert('already applied');
                toast("already applied for the post!!!");
            }else{
                storedJob.push(...prevStoredJob, jobDes);
                localStorage.setItem("stored-job", JSON.stringify(storedJob));
            }
        }
        else{
            storedJob.push(jobDes);
            localStorage.setItem("stored-job", JSON.stringify(storedJob));
            toast("successfully applied");
        }

    };
    
    return (
        <div className='container mx-auto flex flex-col lg:flex-row justify-between gap-8'>
            <div className='lg:w-[60%]'>
                { job.id==dynamic.jobId &&
                    <div className='pl-3 mx-4 mt-4 lg:mt-8'>
                        <p className='py-4'><span className='font-bold'>Job Description: &nbsp;</span> {job.job_description}
                        </p>
                        <p className='pb-4'><span className='font-bold'>Job Responsibility: &nbsp;</span> {job.job_responsibility}
                        </p>
                        <p className='pb-4'><span className='font-bold'>Educational Requirements: &nbsp;</span> {job.educational_requirements}
                        </p>
                        <p className='pb-4'><span className='font-bold'>Experiences: &nbsp;</span> {job.experiences}
                        </p>
                    </div>
                }
            </div>
            <div className='lg:w-[40%] text-center'>
                { job.id==dynamic.jobId &&
                    <div className='border rounded-md bg-gray-100 pl-4 py-6 mx-4 mt-4 lg:my-8'>
                        <h1 className='text-xl font-bold mb-6'>Job Details</h1>
                        <p><span className='font-bold'>Salary: &nbsp;</span> {job.salary}</p>
                        <p><span className='font-bold'>Job Title: &nbsp;</span> {job.job_title}</p>

                        <h1 className='text-xl font-bold my-6'>Contact Information</h1>
                        <p><span className='font-bold'>Phone: &nbsp;</span> {job.contact_information.phone}</p>
                        <p><span className='font-bold'>Email: &nbsp;</span> {job.contact_information.email}</p>
                        <p className='pb-8'><span className='font-bold'>Address: &nbsp;</span> {job.location}</p>
                        
                        <div>
                        <button onClick={() => handleApplyNow(job)} className='background'>Apply Now</button>
                        <ToastContainer />
                        </div>

                        
                    </div>
                }
            </div>
        </div>
    );
};

export default Job;