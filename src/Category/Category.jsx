import PropTypes from "prop-types";
const Category = ({category}) => {
    console.log(category);
    
    const {category_name,availability,logo} = category;
    return (
        <div className="bg-[#F9F9FF] py-5 px-8 md:w-3/12 w-12/12 m-4 md:m-1">
            <span className="p-4 inline-block rounded bg-[#fff]"><img src={logo} alt={category_name} /></span>
            <h1 className="font-semibold text-[20px] py-3 text-black">{category_name}</h1>
            <p>{availability}</p>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired,
}
export default Category;


// https://i.ibb.co.com/Lkwbrvr/accounts.png
// https://i.ibb.co.com/nQYjh93/calendar.png
// https://i.ibb.co.com/0rrXqF5/chip.png
// https://i.ibb.co.com/MRRfS4T/creative.png
// https://i.ibb.co.com/K0MWJxG/email.png
// https://i.ibb.co.com/h2nMGz7/Location.png
// https://i.ibb.co.com/1KnKJhm/location2.png
// https://i.ibb.co.com/fQSKWcZ/marketing.png
// https://i.ibb.co.com/5LDXBV1/money.png
// https://i.ibb.co.com/WK0NYLf/phone.png
// https://i.ibb.co.com/yp9BW6C/social.png