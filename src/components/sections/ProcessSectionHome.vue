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
const slideEls = ref([]);

onMounted(() => {
  initAnimations(containerElement.value, pinHeader, animateSlides); // order of animations is important
  // actualParentContainerHeight.value = containerElement.value.offsetHeight;
});

onUnmounted(() => {
  GSAPContext.revert(); // delete gsap
});

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

let currentIndex = -1;
let animating;
let swipePanels;
let intentObserver;

function animateSlides() {
  swipePanels = gsap.utils.toArray(".process-section__slide");
  // set second panel two initial 100%
  gsap.set(".x-100", { yPercent: 100 });

  // set z-index levels for the swipe panels
  gsap.set(swipePanels, {
    zIndex: (i) => i,
  });

  // create an observer and disable it to start
  intentObserver = ScrollTrigger.observe({
    type: "wheel,touch",
    onUp: () => !animating && gotoPanel(currentIndex + 1, true),
    onDown: () => !animating && gotoPanel(currentIndex - 1, false),
    wheelSpeed: -1, // to match mobile behavior, invert the wheel speed
    tolerance: 10,
    preventDefault: true,
    onPress: (self) => {
      // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
      ScrollTrigger.isTouch && self.event.preventDefault();
    },
  });
  intentObserver.disable();

  let preventScroll = ScrollTrigger.observe({
    preventDefault: true,
    type: "wheel,scroll",
    allowClicks: true,
    onEnable: (self) => (self.savedScroll = self.scrollY()), // save the scroll position
    onChangeY: (self) => self.scrollY(self.savedScroll), // refuse to scroll
  });
  preventScroll.disable();

  // pin swipe section and initiate observer
  ScrollTrigger.create({
    trigger: ".process-section__slides",
    pin: true,
    anticipatePin: true,
    start: "top top",
    end: "+=50%",
    onEnter: (self) => {
      if (preventScroll.isEnabled === false) {
        self.scroll(self.start);
        preventScroll.enable();
        intentObserver.enable();
        gotoPanel(currentIndex + 1, true);
      }
    },
    onEnterBack: (self) => {
      if (preventScroll.isEnabled === false) {
        self.scroll(self.start);
        preventScroll.enable();
        intentObserver.enable();
        gotoPanel(currentIndex - 1, false);
      }
    },
  });

  // handle the panel swipe animations
  function gotoPanel(index, isScrollingDown) {
    animating = true;
    // return to normal scroll if we're at the end or back up to the start
    if (
      (index === swipePanels.length && isScrollingDown) ||
      (index === -1 && !isScrollingDown)
    ) {
      intentObserver.disable();
      preventScroll.disable();
      animating = false;
      // now make it go 1px beyond in the correct direction so that it doesn't trigger onEnter/onEnterBack.
      preventScroll.scrollY(
        preventScroll.scrollY() + (index === swipePanels.length ? 1 : -1)
      );
      return;
    }

    //   target the second panel, last panel?
    let target = isScrollingDown
      ? swipePanels[index]
      : swipePanels[currentIndex];

    gsap.to(target, {
      yPercent: isScrollingDown ? 0 : 100,
      duration: 0.75,
      onComplete: () => {
        animating = false;
      },
    });
    currentIndex = index;
  }
}

windowParams.$subscribe((mutation) => {
  if (mutation.payload.windowHeight) {
    ScrollTrigger.refresh();
  }
});
</script>

<template>
  <div class="process-section" ref="containerElement">
    <div class="process_section__header" ref="headerElement">
      <SectionHeader inverseColor noMargin>{{
        t("SectionProcessHeader")
      }}</SectionHeader>
    </div>
    <div class="process-section__slides">
      <div class="process-section__slide x-100"></div>
      <ProcessSlide
        class="process-section__slide x-100"
        v-for="slide in slides"
        :key="slide.number"
        ref="slideEls"
        :number="slide.number"
        :header="t(slide.headerI18n)"
        :image="slide.image"
      ></ProcessSlide>
      <div class="process-section__slide x-100"></div>
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
  height: 100vh;
  position: relative;
  padding-top: 60px;
  overflow: hidden;
  // scroll-snap-type: mandatory;
}

.process-section__slide {
  position: absolute;
  // scroll-snap-align: center;
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
