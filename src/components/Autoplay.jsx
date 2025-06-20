import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageData = [
  {
    id: 1,
    title: "Cricket League",
    subtitle: "Join now!",
    img: "https://imgs.search.brave.com/SvVAYhT-ghibDPQzme2dWvtYZXfSKS5J5pwDIr3_7RQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jcmlj/a2V0LXRvdXJuYW1l/bnQtYmFubmVyLWhl/YWRlci1kZXNpZ24t/aWxsdXN0cmF0aW9u/LXBsYXllcnMtcGxh/eWluZy1wb3Nlcy1h/YnN0cmFjdC13YXZl/cy1ibHVlLWhhbGZ0/b25lLWJhY2tncm91/bmQtMjg1MDMyNDEz/LmpwZw"
  },

  {
    id: 3,
    title: "Basketball Bash",
    subtitle: "Exciting rewards",
    img: " https://imgs.search.brave.com/jaoAKZh37oLkyCCs6BXA_yeltyT-5pB8WoEmcR2LWe0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDMv/MDAzLzU5OS9zbWFs/bC9jcmlja2V0LWJh/bm5lci1jaGFtcGlv/bnNoaXAtYmFja2dy/b3VuZC1wb3N0ZXIt/dGVtcGxhdGUtZmx5/ZXItYmFubmVyLWZy/ZWUtdmVjdG9yLmpw/Zw"
  },
  {
    id: 4,
    title: "Tennis Tourney",
    subtitle: "Register today",
    img: " https://imgs.search.brave.com/8-QkMdaJljxidbt2KTKn4nrOhRvAVAa-FZ82pFI3_G0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDIv/MjE1LzEzMC9zbWFs/bC9jcmlja2V0LWNo/YW1waW9uc2hpcC1i/YWNrZ3JvdW5kLW9y/LWJhbm5lci1mcmVl/LXZlY3Rvci5qcGc"
  }
];

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out"
  };

  return (
    <div className="px-4 py-4">
      <Slider {...settings} className="rounded-2xl">
        {imageData.map((item) => (
          <div key={item.id} className="px-2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={item.img}
                className=" md:w-96 md:h-40  sm:w-64 sm:h-20 object-fill rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
