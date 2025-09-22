import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* পেজ হেডার */}
      <h1 className="text-3xl font-bold text-center mb-6">
        📦 আমাদের পার্সেল ডেলিভারি সম্পর্কে
      </h1>
      <p className="text-center text-gray-600 mb-12">
        দ্রুত, নিরাপদ এবং নির্ভরযোগ্য পার্সেল ডেলিভারি সেবা, যেটার উপর আপনি ভরসা
        করতে পারেন।
      </p>

      {/* পরিচিতি */}
      <Card className="mb-8 shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">আমরা কে</h2>
          <p className="text-gray-700 leading-relaxed">
            আমরা একটি বিশ্বস্ত পার্সেল ডেলিভারি সেবা প্রদানকারী। আমাদের লক্ষ্য
            হলো পার্সেল পাঠানো এবং গ্রহণ করার প্রক্রিয়াকে আরও সহজ করা। আপনি
            ব্যবসায়ী হোন বা ব্যক্তিগতভাবে পাঠান— আমাদের প্ল্যাটফর্ম আপনাকে
            রিয়েল-টাইমে পার্সেল ট্র্যাকিং, ডেলিভারি ম্যানেজমেন্ট এবং ঝামেলাহীন
            লজিস্টিকস সুবিধা দিচ্ছে।
          </p>
        </CardContent>
      </Card>

      {/* ফিচারসমূহ */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        ✨ আমাদের প্রধান ফিচারসমূহ
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="shadow-sm hover:shadow-md transition">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">🚚 দ্রুত ডেলিভারি</h3>
            <p className="text-gray-600">
              দেশের যেকোনো স্থানে দ্রুত এবং নির্ভরযোগ্য ডেলিভারি সেবা।
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">🔐 নিরাপদ হ্যান্ডলিং</h3>
            <p className="text-gray-600">
              প্রতিটি পার্সেল যত্ন সহকারে হ্যান্ডল করা হয় এবং নিরাপদে পৌঁছে
              দেওয়া হয়।
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">📍 লাইভ ট্র্যাকিং</h3>
            <p className="text-gray-600">
              আপনার পার্সেল যেকোনো সময় রিয়েল-টাইম আপডেটসহ ট্র্যাক করুন।
            </p>
          </CardContent>
        </Card>
      </div>

      {/* মিশন ও ভিশন */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold">🎯 আমাদের মিশন</h2>
            <p className="text-gray-700">
              লজিস্টিকসকে সহজ করা এবং প্রতিটি পার্সেলকে সময়মতো, নিরাপদে এবং
              কার্যকরভাবে গন্তব্যে পৌঁছে দেওয়া।
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold">🌍 আমাদের ভিশন</h2>
            <p className="text-gray-700">
              সবচেয়ে বিশ্বস্ত এবং গ্রাহকবান্ধব পার্সেল ডেলিভারি সেবা হওয়া, যা
              মানুষ ও ব্যবসাকে সর্বত্র সংযুক্ত করে।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
