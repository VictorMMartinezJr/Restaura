import { REVIEW } from "../constants";
import xaviour from "../assets/review/xaviour.jpeg";
import customer1 from "../assets/review/customer1.jpeg";
import customer2 from "../assets/review/customer2.jpeg";
import customer3 from "../assets/review/customer3.jpeg";
import customer4 from "../assets/review/customer4.jpeg";

const Review = () => {
  return (
    <section id="review" className="container mx-auto mb-8 mt-12">
      <div className="flex flex-col">
        {/* Main Review */}
        <p className="px-2 mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]">
          {REVIEW.content}
        </p>

        {/* Reviewer Info */}
        <div className="flex items-center justify-center gap-6">
          <img
            src={xaviour}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />

          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </div>
      </div>

     {/* Customer Images */}
      <div className="mt-20 grid grid-cols-2 justify-center gap-2 lg:grid-cols-4">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={customer}
              alt={`Customer ${++index}`}
              className="h-75 w-50 rounded-br-3xl rounded-tl-3xl object-cover lg:w-75"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
