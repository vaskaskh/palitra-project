import React from 'react'
import news from '../../data/news.json';
import Card from '../shared/Card';


const Hero = () => {
  return (
    <div className="bg-black flex flex-col w-full h-full">
      <div className="container mx-auto mt-[76px] flex gap-6 flex-col lg:flex-row px-4 md:px-8 xl:px-32">
        <img
          src="/images/Hero.png"
          alt=""
          className="rounded-sm max-w-[650px] max-h-[342px] lg:max-w-2xl"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-white md:text-[28px] text-base leading-snug ">
            "ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები
          </h2>
          <p className="text-[14px] md:text-base text-[#B5B5B5] mt-4 leading-relaxed wrap-break-word">
            სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და
            მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ,
            გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ. გადანერგვისთვის
            საჭირო, ადამიანის ორგანოების მწვავე დეფიციტის პრობლემის მოსაგვარებლად,
            მეცნიერები უჩვეულო გადაწყვეტილებებს ეძებენ, მათ შორის ისეთსაც, რომელიც
            შესაძლოა, საყოველთაოდ მიღებული წარმოდგენების და მორალური ნორმებისთვის,
            ნამდვილი გამოწვევა იყოს.
          </p>
        </div>
      </div>

      <div className="container text-white mx-auto max-w-[1440px] flex flex-wrap justify-around mt-12 px-4 md:px-8 lg:px-16 ">
        {news.slice(0, 3).map((item) => (
         <div
      key={item.id}
      className="mb-[20px] last:mb-[29px] max-w-0=[412px]"
    >
      <Card {...item}  inlineUser/>
    </div>
        ))}
      </div>
    </div>
  )
}

export default Hero