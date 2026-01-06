import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export default function TestimonialCard({
  data,
}: {
  data: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-brand-black flex min-h-[280px] w-[320px] shrink-0 flex-col justify-between rounded-[20px] border border-[#d92319] p-6 text-white md:min-h-[320px] md:p-10">
      <p className="font-raleway mb-6 text-base leading-[1.3] font-normal text-gray-300 md:text-xl">
        {data.text}
      </p>
      <div>
        <p className="font-raleway mb-0 text-base leading-none font-bold text-white">
          - {data.name}
        </p>
        <p className="font-raleway mb-5 text-base font-bold text-white">
          {data.designation}
        </p>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < data.rating
                  ? "fill-[#FFC700] text-[#FFC700]"
                  : "text-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
