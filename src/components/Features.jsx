//images
import featuresImage from "/assets/shared/desktop/image-best-gear.jpg";

function Features() {
  return (
    <section className="container  mb-[230px]">
      <div className="features-section flex  gap-[50px] items-center justify-between p-[35px]">
        <div className="">
          <h2 className="text-[40px] leading-[50px] max-w-[445px] tracking-[1.9px] font-[700] uppercase mb-[30px] ">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h2>
          <p className="max-w-[525px] text-[#7D7D7D]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="">
          <img
            src={featuresImage}
            alt="Bringing you the best audio gear"
            className="rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
