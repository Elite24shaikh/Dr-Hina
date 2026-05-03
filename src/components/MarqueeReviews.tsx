import { Star } from "lucide-react";

const reviews = [
  "Review 1 : I want to share my experience with lichen planus Dr hina has been great in guiding me through weight lose and life style changes. Alhamdulillah I lose 5 kg in a month after following Dr hina personalized diet plan I control my cravings , reduced bloating and also reduced belly fat , improved energy . Thanks ma'am for supporting me...🫶🏻👍🏻",
  "Review 2 : I have joined Dr.Hina's 90 days program,lost 4.5kg in a month with ghar ka khana ,and home base exercise,gain confidence,lower belly fat, improve energy 💪😁, feeling Amazing, thank you Dr.Hina,my msg to all if I can do it u can also do it.",
  "Review 3 : I have joined one month before for PCOD and infertility, within in a month got 3kg fat loss,in healthy way without any medicine in holistic way with ghar ka khana and minimal life style change, thanks Dr Hina you taught me about eating right in holistic way ,Now I am more energetic and feeling fresh , recommend for reverse PCOD,best clinic ❤️",
  "Review 4 : I have Reverse My diabetes,and PCOD in healthy way under guidance of Dr Hina ,got 10kg fat lose Alhamdulillah. ❤️🙏2",
  "Review 5 : Dr. Hina has been great in guiding me through weight loss and lifestyle changes. She focuses on mindset, stress, meal planning, and physical activity, not just numbers. Her constant support, motivation, and follow ups keep me on track even when I struggle. I haven’t reached my goal yet, but I feel confident and excited about the journey. Highly recommend!",
  "Review 6 : My plan was start from 1Nov 25 in one week Alhamdulillah My period finally came after nearly three months. Mam Is so good, Her diet plans and explanation are excellent.",
  "Review 7 : Hello I m Noorjahan Mai Dr. hina se Waight loss krwari hu Muje bht Acha Laga Wo bht achi Diet plan Excercise Krwate hai Mera Wait 104kg tha Ab Alhamdulillah 💕 92kg hua hai Amazing Dr. Hina..... Muje ab Bht acha Feel hota h Ab mai Sab Kuch Positive sochti hu Or mere Andr Bht Saari Changes Agyee hai Ab mai bht Khush rahne Lagi hu Thank you so much Hina Madam Is Mukaam tak pohchane k lye or age bhi mai apna Best Dugii ❤️ Inshallah mera Allah mere Sath hai Hamesha❤️💯",
  "Review 8 : My experience with Dr Hina has been beyond amazing in switching to a healthy lifestyle.The knowledge she has and the way she explains the specifics is commendable. Not only she understood my requirements very well but also chalked out a perfect plan which was very practical as well as easy to follow.I am grateful to Dr Hina and her team for assisting me in this successful weight loss journey.🙏2",
  "Review 9 : I loss 28kg fat loss In healthy way under guidenece of Dr Hina Sarim Ansari❤☺💝",

];

export function MarqueeReviews() {
  return (
    <div className="w-full bg-white py-10 overflow-hidden border-y border-emerald-900/5 mt-4 rounded-3xl mx-3 md:mx-5 shadow-sm" style={{ width: 'calc(100% - 24px)', maxWidth: 'calc(100% - 40px)' }}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-emerald-950">
          Patients Words
        </h2>
      </div>
      <div className="relative flex w-full overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((review, idx) => (
            <div key={idx} className="mx-4 w-[350px] md:w-[450px] p-6 rounded-2xl bg-white shadow-lg border border-emerald-900/10 flex flex-col whitespace-normal">
              <div className="flex text-amber-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-body text-black leading-relaxed line-clamp-4">"{review.replace(/^Review \d+ : /, '')}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
