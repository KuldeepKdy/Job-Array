import { Share, Star } from "lucide-react";

interface TestimonialData {
  rating: number;
  review: string;
  image: string;
  name: string;
  position: string;
}

const TestimonialCard = ({ data }: { data: TestimonialData }) => {
  return (
    <div className="p-4 rounded-lg bg-white border sticky top-20 border-gray-200 flex flex-col">
      <div className="w-full h-fit flex items-center justify-between">
        <div className="px-2 py-1 text-gray-400 rounded-full border border-gray-200 text-xs">
          User Testimonial
        </div>
        <div className="w-fit flex gap-1 items-center">
          {data?.rating >= 1 && <Star className="size-4 fill-primary" />}
          {data?.rating >= 2 && <Star className="size-4 fill-primary" />}
          {data?.rating >= 3 && <Star className="size-4 fill-primary" />}
          {data?.rating >= 4 && <Star className="size-4 fill-primary" />}
          {data?.rating >= 5 && <Star className="size-4 fill-primary" />}
        </div>
      </div>
      <h3 className="text-sm text-gray-900 line-clamp-5 font-medium mt-2">
        {data?.review}
      </h3>
      <div className="w-full flex items-center justify-between pt-4 mt-4 border-t border-gray-200">
        <div className="w-full flex items-center gap-2">
          <div className="w-10 overflow-hidden h-9 rounded-full border border-gray-200">
            <img src={data?.image} alt="img" />
          </div>
          <div className="w-full flex flex-col">
            <h2 className="font-semibold text-gray-900 text-sm">
              {data?.name}
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              {data?.position}
            </p>
          </div>
        </div>
        <Share className="size-4" />
      </div>
    </div>
  );
};

export default TestimonialCard;
