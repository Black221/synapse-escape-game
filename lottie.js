import { DotLottie } from "https://esm.sh/@lottiefiles/dotlottie-web";


const canvas = document.querySelector("#dotLottie-canvas");
const src = "https://assets-v2.lottiefiles.com/a/b462e6a4-1152-11ee-ad2b-ffed2e52febb/xXgFcXvFjv.lottie";

const dotLottie = new DotLottie({
  canvas,
  src,
  loop: false,
  autoplay: false
});

export {
  dotLottie
}