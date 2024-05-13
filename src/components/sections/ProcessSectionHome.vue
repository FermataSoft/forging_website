<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import ProcessSlide from "../elements/ProcessSlide.vue";
import { useWindowParamsStore } from "@/stores/WindowParamsStore.js";

const windowParams = useWindowParamsStore();
const { t } = useI18n();
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slides = ref([
  {
    number: 1,
    headerI18n: "Measurement",
    image: "Measurement@1080w.webp",
  },
  {
    number: 2,
    headerI18n: "PreliminaryDesign",
    image: "Preliminary-design@1080w.webp",
  },
  {
    number: 3,
    headerI18n: "3DVisualization",
    image: "3D-Visualization@1080w.webp",
  },
  {
    number: 4,
    headerI18n: "Forging",
    image: "Forging@1080w.webp",
  },
  {
    number: 5,
    headerI18n: "Delivery",
    image: "Delivery@1080w.webp",
  },
]);

const containerElement = ref(null);
const headerElement = ref(null);
let GSAPContext = null;

function initAnimations(context, ...animations) {
  GSAPContext = gsap.context((self) => {
    animations.forEach((animation) => {
      animation();
    });
  }, context);
}

function pinHeader() {
  ScrollTrigger.create({
    trigger: headerElement.value,
    start: "-15px top",
    end: () => "+=" + containerElement.value.offsetHeight + " bottom",
    pin: headerElement.value,
    pinnedContainer: containerElement.value,
    pinSpacing: false,
    pinType: "fixed",
  });
}

/* function animateSlidesArchive() {
  const slidesElements = gsap.utils.toArray(".process-section__slide");
  const count = slidesElements.length - 1;
  const duration = 1;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".process-section__slides",
      start: "-=100 top",
      end: () =>
        "+=" + document.querySelector(".process-section__slides").offsetHeight,
      scrub: 1,
      pin: true,
      snap: {
        snapTo: "labels",
        duration: 0.5,
        delay: 0.2,
      },
    },
  });

  slidesElements.forEach((slide, i) =>
    tl.add("label" + i, i * (duration / count))
  );

  tl.to(slidesElements, {
    yPercent: -100 * count,
    duration: duration,
    ease: "none",
  });
} */

onMounted(() => {
  initAnimations(containerElement.value, animateSlides, pinHeader); // order of animations is important
  // actualParentContainerHeight.value = containerElement.value.offsetHeight;
});

onUnmounted(() => {
  GSAPContext.revert(); // delete gsap
});

windowParams.$subscribe((mutation) => {
  if (mutation.payload.windowHeight) {
    ScrollTrigger.refresh();
  }
});

const slideEls = ref([]);

function animateSlides() {
  let current = 0;
  let panels = gsap.utils.toArray(".process-section__slide");
  let observer = ScrollTrigger.normalizeScroll({
    preventDefault: true,
    type: "touch",
    momentum: (self) => Math.min(0.3, Math.abs(self.velocityY / 1000)),
  });
  let scrollTween;

  observer.disable();

  function goToSection(panel, i) {
    scrollTween = gsap.to(".process-section__slide", {
      scrollTo: { y: i * panel.offsetHeight, autoKill: false },
      duration: 1,
      onComplete: () => {
        scrollTween = null;
      },
      overwrite: true,
    });
  }

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      scrub: 0.1,
      start: "top center",
      end: "bottom 20%",
      onToggle: (self) =>
        self.isActive && !scrollTween && goToSection(panel, i),
    });
  });

  // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
  ScrollTrigger.create({
    trigger: containerElement.value,
    start: "top top",
    end: "bottom bottom",
    snap: 1 / (panels.length - 1),
    onEnter: () => {
      observer.enable();
    },
    onLeave: () => {
      observer.disable();
    },
  });
}
</script>

<template>
  <div class="process-section" ref="containerElement">
    <div class="process_section__header" ref="headerElement">
      <SectionHeader inverseColor noMargin>{{
        t("SectionProcessHeader")
      }}</SectionHeader>
    </div>
    <div class="process-section__slides">
      <ProcessSlide
        class="process-section__slide"
        v-for="slide in slides"
        :key="slide.number"
        ref="slideEls"
        :number="slide.number"
        :header="t(slide.headerI18n)"
        :image="slide.image"
      ></ProcessSlide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/vars";
.process-section {
  width: 100%;
  // height: 500%;
  background-color: $inverse-surface;
  margin-top: 50px;
}

.process_section__header {
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  background-color: $inverse-surface;
  z-index: 4;
}

.process-section__slides {
  // height: calc(100vh - 70px);
  // overflow: hidden;
  scroll-snap-type: mandatory;
}

.process-section__slide {
  scroll-snap-align: center;
}
</style>

<i18n>
    {
    "ru-RU": {
      "Measurement": "Снятие необходимых размеров",
      "PreliminaryDesign": "Создание дизайна и предварительное проектирование",
      "3DVisualization": "Корректировка проекта и отрисовка в 3D",
      "Forging": "Изготовление кованого изделия",
      "Delivery": "Доставка и монтаж"
    },
    "by-BY": {
      "Measurement": "",
      "PreliminaryDesign": "",
      "3DVisualization": "",
      "Forging": "",
      "Delivery": ""
    }
  }
</i18n>
