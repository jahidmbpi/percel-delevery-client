import { Marquee } from "@/components/ui/marquee";

interface IreView {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
}

export default function CoustomerReview() {
  const reviews: IreView[] = [
    {
      id: 1,
      name: "Rahim Uddin",
      location: "Dhaka",
      rating: 5,
      review:
        "আমি আমার অনলাইন শপের জন্য প্রতিদিন পার্সেল পাঠাই। এই সার্ভিসটা খুব দ্রুত এবং নির্ভরযোগ্য। কখনো দেরি হয়নি, কাস্টমারও সবসময় খুশি।",
    },
    {
      id: 2,
      name: "Sadia Akter",
      location: "Chattogram",
      rating: 4,
      review:
        "আমি জরুরি ডকুমেন্ট পাঠাতে চেয়েছিলাম, তারা সেদিনই ডেলিভারি করে দিয়েছে। খুবই দ্রুত সার্ভিস। শুধু ট্র্যাকিং UI একটু আরও সুন্দর হলে ভালো হতো।",
    },
    {
      id: 3,
      name: "Mehedi Hasan",
      location: "Rajshahi",
      rating: 5,
      review:
        "সবার আগে আমি নিরাপত্তা দেখি। তাদের প্যাকেজিং আর হ্যান্ডলিং অসাধারণ। একবারও আমার পার্সেল ক্ষতিগ্রস্ত হয়নি।",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      location: "Sylhet",
      rating: 4,
      review:
        "ডেলিভারি চার্জ সাশ্রয়ী, আর টিম অনেক ভদ্র আচরণ করে। আমি আমার ফ্যাশন ব্যবসার জন্য রেগুলারলি ব্যবহার করি।",
    },
    {
      id: 5,
      name: "Imran Hossain",
      location: "Khulna",
      rating: 5,
      review:
        "আমার পার্সেল সময়মতো এবং নিরাপদে পৌঁছেছে। Customer Support খুবই হেল্পফুল ছিল। Highly recommended!",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-center mx-auto mb-8">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium capitalize font-serif">
          Customer Reviews
        </h3>
      </div>
      <div className="space-y-4">
        <div>
          <Marquee pauseOnHover repeat={2}>
            {reviews.map((item) => (
              <div
                key={item.id}
                className="border border-foreground shadow-2xl rounded-lg w-72 p-4 mx-2"
              >
                <div className="flex gap-4 items-center mb-2">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span>Img</span>
                  </div>
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
                <p className="text-gray-700">{item.review}</p>
              </div>
            ))}
          </Marquee>
        </div>
        <div>
          <Marquee pauseOnHover reverse>
            {reviews.map((item) => (
              <div
                key={item.id}
                className="border border-foreground shadow-2xl rounded-lg w-72 p-4 mx-2"
              >
                <div className="flex  items-center mb-2 justify-between">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <span>Img</span>
                    </div>
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </div>
                  <p>{item.rating}</p>
                </div>
                <p className="text-gray-700">{item.review}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
