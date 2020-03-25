import Swiper from 'swiper'
import 'swiper/css/swiper.css'

const options = {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  effect: 'slide',
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 6,
    },
  }
}
const mySwiper = () => {
  new Swiper('.swiper-container', options)
}
export default mySwiper