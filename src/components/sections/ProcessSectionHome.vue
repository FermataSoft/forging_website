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
    start: "top top",
    end: () => "+=" + containerElement.value.offsetHeight + " bottom",
    pin: headerElement.value,
    pinnedContainer: containerElement.value,
    pinSpacing: false,
    pinType: "fixed",
  });
}

onMounted(() => {
  initAnimations(containerElement.value, animateSlides, pinHeader); // order of animations is important
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
  let sections = gsap.utils.toArray(".process-section__slide");
  let count = sections.length - 1;
  let duration = 1;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerElement.value,
      pin: true,
      scrub: 1,
      start: "top top",
      end: () =>
        "+=" + document.querySelector(".process-section__slides").offsetWidth,
      snap: {
        snapTo: "labelsDirectional", // 1 / (sections.length - 1)
        duration: { min: 0.3, max: 0.7 },
        ease: "power1.inOut",
      },
    },
  });

  sections.forEach((section, i) => tl.add("label" + i, i * (duration / count)));

  tl.to(sections, {
    xPercent: -100 * count,
    duration: duration,
    ease: "none",
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
    <div
      class="process-section__slides"
      :style="{ width: slides.length * 100 + '%' }"
    >
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
  overflow: hidden;
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
  height: calc(100vh - 70px);
  display: flex;
  flex-wrap: nowrap;
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
