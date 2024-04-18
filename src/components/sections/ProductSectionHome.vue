<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const container = ref(null);
let GSAPContext = null;

ScrollTrigger.defaults({
  toggleActions: "play none none none", //"play none none reverse"
});

function animate() {
  let images = gsap.utils.toArray(".product-item__item-image");
  GSAPContext = gsap.context((self) => {
    images.forEach((item, index) => {
      if (!(index % 2)) {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleClass: "product-item__item-image--centered",
            start: "center 80%",
            end: "bottom center",
          },
          x: -20,
          opacity: 0,
          duration: 0.1,
        });
      } else {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleClass: "product-item__item-image--centered",
            start: "center 80%",
            end: "bottom center",
          },
          x: 20,
          opacity: 0,
          duration: 0.1,
        });
      }
    });

    let descriptionElements = gsap.utils.toArray(
      ".product-item__item-description"
    );
    descriptionElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "center 80%",
          end: "bottom center",
        },
        y: 20,
        opacity: 0,
        duration: 0.3,
      });
    });
  }, container.value);
}

onMounted(() => {
  animate();
});

onUnmounted(() => {
  GSAPContext.revert();
});
</script>

<template>
  <SectionHeader>{{ t("SectionProductHeader") }}</SectionHeader>
  <svg
    id="hexagon-mask"
    viewBox="0 0 1 1"
    width="100%"
    height="100%"
    preserveAspectRatio="none"
  >
    <clipPath id="hexagon" clipPathUnits="objectBoundingBox">
      <path
        d="M.09.32V.68A.09.09,0,0,0,.14.76L.45.94a.09.09,0,0,0,.1,0L.86.76A.09.09,0,0,0,.91.68V.32A.09.09,0,0,0,.86.24L.55.06a.09.09,0,0,0-.1,0L.14.24A.09.09,0,0,0,.09.32Z"
      />
    </clipPath>
  </svg>

  <div class="product-section" ref="container">
    <div class="product-section__item">
      <div class="product-item__item-image">
        <img src="/images/stairs.webp" alt="" />
      </div>
      <div class="product-item__item-description">
        <h3 class="product-item__item-description-title">Лестницы</h3>
        <p class="product-item__item-description-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          dolorem molestias commodi sed quae autem a distinctio, blanditiis
          nobis explicabo quis impedit illum illo dignissimos minima excepturi
          esse et perspiciatis.
        </p>
      </div>
    </div>

    <Devider class="product-section__devider" size="md"></Devider>

    <div class="product-section__item product-section__item--reversed">
      <div class="product-item__item-image">
        <img src="/images/stair_railing.webp" alt="" />
      </div>
      <div class="product-item__item-description">
        <h3 class="product-item__item-description-title">
          Лестничные ограждения
        </h3>
        <p class="product-item__item-description-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          dolorem molestias commodi sed quae autem a distinctio, blanditiis
          nobis explicabo quis impedit illum illo dignissimos minima excepturi
          esse et perspiciatis.
        </p>
      </div>
    </div>

    <Devider class="product-section__devider" size="md"></Devider>

    <div class="product-section__item">
      <div class="product-item__item-image">
        <img src="/images/gates.webp" alt="" />
      </div>
      <div class="product-item__item-description">
        <h3 class="product-item__item-description-title">Ворота</h3>
        <p class="product-item__item-description-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          dolorem molestias commodi sed quae autem a distinctio, blanditiis
          nobis explicabo quis impedit illum illo dignissimos minima excepturi
          esse et perspiciatis.
        </p>
      </div>
    </div>

    <Devider class="product-section__devider" size="md"></Devider>

    <div class="product-section__item product-section__item--reversed">
      <div class="product-item__item-image">
        <img src="/images/gate.webp" alt="" />
      </div>
      <div class="product-item__item-description">
        <h3 class="product-item__item-description-title">Калитки</h3>
        <p class="product-item__item-description-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          dolorem molestias commodi sed quae autem a distinctio, blanditiis
          nobis explicabo quis impedit illum illo dignissimos minima excepturi
          esse et perspiciatis.
        </p>
      </div>
    </div>

    <!-- <div class="product-section-block">
      <div class="product-item-image">
        <img src="/images/pipe.webp" alt="" />
      </div>
      <div class="product-item-description">
        <h3>Дымники</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
          commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
          dignissimos minima excepturi esse et perspiciatis.
        </p>
      </div>
    </div> -->

    <!-- <div class="product-section-block">
      <div class="product-item-image">
        <img src="/images/address_plate.webp" alt="" />
      </div>
      <div class="product-item-description">
        <h3>Адресные таблички</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
          commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
          dignissimos minima excepturi esse et perspiciatis.
        </p>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

#hexagon-mask {
  position: absolute;
  width: 0;
  height: 0;
}

.product-section__devider {
  color: $secondary;
  width: 150px;

  @include breakpoint(lg) {
    width: 100px;
  }
}

.product-section {
  width: 100%;
  overflow: hidden;

  .product-section__item {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    text-align: justify;

    @include breakpoint(lg) {
      padding: 0 50px;
    }

    @include breakpoint(md) {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
    }

    &.product-section__item--reversed {
      flex-direction: row-reverse;

      h3 {
        text-align: end;
      }

      @include breakpoint(md) {
        flex-direction: column;
      }
    }

    // $items-shadow: drop-shadow(8px 15px 7px rgba(0, 0, 0, 0.2))
    //   drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5));
    $items-shadow: drop-shadow(4px 5px 3px rgba(0, 0, 0, 0.3))
      drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5));
    $items-shadow-hover: drop-shadow(4px 5px 3px rgba(0, 0, 0, 0.3))
      drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5));

    .product-item__item-image {
      // width: 100%;
      // flex: 1 1 auto;
      filter: $items-shadow;
      -webkit-filter: $items-shadow;
      -moz-filter: $items-shadow;
      -ms-filter: $items-shadow;
      -o-filter: $items-shadow;
      transition: all 0.3s ease;
      cursor: pointer;
      transform: translate(1px, 3px);

      // &.product-item__item-image--centered {
      //   filter: $items-shadow-hover;
      //   transform: translate(0, 0);
      // }

      img {
        max-width: 450px;
        // margin-left: calc(
        //   100% - 100% / 1.09
        // ); // Trouble with clip-path position
        clip-path: url(#hexagon);
        -webkit-clip-path: url(#hexagon);

        @include breakpoint(lg) {
          max-width: 350px;
        }

        @include breakpoint(xs) {
          max-width: 250px;
        }
      }
    }

    &:nth-child(2n) {
      text-align: start;
    }

    &:nth-child(2n) img {
      // margin-left: 0; // Trouble with clip-path position
    }

    .product-item__item-description {
      flex: 1 1.5 auto;

      h3 {
        font-size: 2.4rem;
        font-weight: $font-medium;

        @include breakpoint(md) {
          text-align: center;
        }

        @include breakpoint(sm) {
          font-size: 1.6rem;
        }
      }

      p {
        font-size: $paragraph-lg;
        margin-top: 20px;

        @include breakpoint(sm) {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
