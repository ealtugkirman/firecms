import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-28 font-gs mx-auto  bg-light text-first  md:px-24 lg:px-8 lg:py-40">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4   text-lg md:text-xl lg:text-2xl  font-bold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Hakkımızda{" "}
          </p>
        </div>
        <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
          </span>{" "}
          ATİLA Hukuk & Danışmanlık
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          ATİLA Hukuk & Danışmanlık 2022 yılında Ankara merkezli olarak kurulmuş
          olup yerli ve yabancı müvekkillerine, yurt içi ve yurt dışındaki
          çeşitli konularda hukuki danışmanlık vermeyi sürdürmektedir.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            {/* <h6 className="mb-2   text-lg md:text-xl lg:text-2xl  font-bold leading-5">
              ATİLA Hukuk & Danışmanlık
            </h6> */}
            <p className=" text-sm md:text-md lg:text-lg text-gray-900">
              Av. Ahmet Atila tarafından kurulan ofisimiz Ankara ekibinin yanı
              sıra İstanbul, İzmir ve Adana’da bulunan çözüm ortaklarımız ile
              örülü iş organizasyonumuz çerçevesinde yerinde ve etkili hizmet
              anlayışıyla çalışmalarına devam etmektedir.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <p className=" text-sm md:text-md lg:text-lg text-gray-900">
              Günümüz iş dünyasının sürekli değişen dinamik koşulları
              karşısında, güncel hukuki mevzuatın takip edilmesi ve asli
              görevimiz olarak yürürlükteki mevzuat karşısında müvekkillerimizin
              iş organizasyonlarını ve faaliyetlerini muhafaza etmek ve değişen
              koşullara uyarlamak için disiplinli bir ekip olarak çalışmamız
              gerektiğine inanıyoruz.
            </p>
          </div>
          <div>
            {/* <h6 className="mb-2   text-lg md:text-xl lg:text-2xl  font-bold leading-5">
              A flower in my garden, a mystery
            </h6> */}
            <p className=" text-sm md:text-md lg:text-lg text-gray-900">
              Bu bağlamda, başarımızın sırrını; müvekkillerimizin ihtiyaçlarına
              doğru analiz etmemize ve problemlerine en uygun çözümleri
              önerebilmemize borçluyuz. Atila Hukuk ve Danışmanlık olarak
              çalışma disiplini ve katılımcı iş takibimiz ile müvekkillerimize
              iş yaşamında katma değer sağlamayı amaç edinmiş olup çalışma
              kültürü ve ilkelerimiz ile başarıyı kaçınılmaz hale getirmeyi
              hedefliyoruz.
            </p>
          </div>
        </div>
      {/* <p className="mx-4 md:mx-12  lg:mx-40 mt-4 text-sm md:text-md lg:text-lg text-gray-900">
        Bu bağlamda, başarımızın sırrını; müvekkillerimizin ihtiyaçlarına doğru
        analiz etmemize ve problemlerine en uygun çözümleri önerebilmemize
        borçluyuz. Atila Hukuk ve Danışmanlık olarak çalışma disiplini ve
        katılımcı iş takibimiz ile müvekkillerimize iş yaşamında katma değer
        sağlamayı amaç edinmiş olup çalışma kültürü ve ilkelerimiz ile başarıyı
        kaçınılmaz hale getirmeyi hedefliyoruz.
      </p> */}
      </div>
    </div>
  );
};

export default Hero;
