// import "swiper/css/pagination";
import '@/styles/carousel.css'


export const CarouselPagination = {
  clickable: true,
  renderBullet: function (index: any, className: any) {
    return '<span class="' + className + '">' + "</span>";
  },
};

