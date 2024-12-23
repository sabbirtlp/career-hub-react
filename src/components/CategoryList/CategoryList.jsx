import { useEffect, useState } from "react";
import Category from "../../Category/Category";

const CategoryList = () => {
    const [categories,setCategories] = useState([])
    
    
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <section className="bg-[#fff]">
            <div className="mx-auto container py-[100px] ">
                <h2 className="text-black font-semibold md:text-5xl text-3xl py-5 text-center">Job Category List</h2>
                <p className="text-center text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="md:flex justify-center gap-10 md:gap-5 mt-10 flex-row">
                    {
                        categories.map(category => <Category category={category} key={category.id}></Category>)
                    }
                </div>
            </div>

        </section>

    );
};

export default CategoryList;