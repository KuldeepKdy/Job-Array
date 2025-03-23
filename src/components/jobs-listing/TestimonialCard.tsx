import { Share, Star } from "lucide-react";

const TestimonialCard = () => {
  return (
    <div className="p-4 rounded-lg bg-white border sticky top-20 border-gray-200 flex flex-col">
      <div className="w-full h-fit flex items-center justify-between">
        <div className="px-2 py-1 text-gray-400 rounded-full border border-gray-200 text-xs">
          User Testimonial
        </div>
        <div className="w-fit flex gap-1 items-center">
          <Star className="size-4 fill-primary" />
          <Star className="size-4 fill-primary" />
          <Star className="size-4 fill-primary" />
          <Star className="size-4 fill-primary" />
          <Star className="size-4 fill-primary" />
        </div>
      </div>
      <h3 className="text-sm text-gray-900 font-medium mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        suscipit odit eum cupiditate nostrum, adipisci sapiente quod, est maxime
        non quaerat, mollitia libero laudantium in!
      </h3>
      <div className="w-full flex items-center justify-between pt-4 mt-4 border-t border-gray-200">
        <div className="w-full flex items-center gap-2">
          <div className="w-10 h-9 rounded-full border border-gray-200">
            <img src="" alt="" />
          </div>
          <div className="w-full flex flex-col">
            <h2 className="font-semibold text-gray-900 text-sm">Yash Kumar</h2>
            <p className="text-xs text-gray-400 font-medium">Lead Designer</p>
          </div>
        </div>
        <Share className="size-4" />
      </div>
    </div>
  );
};

export default TestimonialCard;
