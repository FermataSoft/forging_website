<script setup>
import SectionHeader from '../elements/SectionHeader.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <SectionHeader>{{ t('SectionProductHeader') }}</SectionHeader>
  <svg id="hexagon-mask" viewBox="0 0 1 1" width="100%" height="100%" preserveAspectRatio="none">
    <clipPath id="hexagon" clipPathUnits="objectBoundingBox">
      <path
        d="M.09.32V.68A.09.09,0,0,0,.14.76L.45.94a.09.09,0,0,0,.1,0L.86.76A.09.09,0,0,0,.91.68V.32A.09.09,0,0,0,.86.24L.55.06a.09.09,0,0,0-.1,0L.14.24A.09.09,0,0,0,.09.32Z"
      />
    </clipPath>
  </svg>

  <div class="product-section">
    <div class="product-section-block">
      <div class="product-item-image">
        <img src="../../images/section_product/stairs.webp" alt="" />
      </div>
      <div class="product-item-description">
        <h3>Лестницы</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
          commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
          dignissimos minima excepturi esse et perspiciatis.
        </p>
      </div>
    </div>

    <div class="product-section-block">
      <div class="product-item-image">
        <img src="../../images/section_product/stair_railing.webp" alt="" />
      </div>
      <div class="product-item-description">
        <h3>Лестничные ограждения</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
          commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
          dignissimos minima excepturi esse et perspiciatis.
        </p>
      </div>
    </div>

    <div class="product-section-block">
      <div class="product-item-image">
        <img src="../../images/section_product/gates.webp" alt="" />
      </div>
      <div class="product-item-description">
        <h3>Ворота</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
          commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
          dignissimos minima excepturi esse et perspiciatis.
        </p>
      </div>
    </div>

    <div class="product-section-block">
      <div class="product-item-image">
        <img src="../../images/section_product/gate.webp" alt="" />
      </div>
      <div class="product-item-description">
        <h3>Калитки</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
          commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
          dignissimos minima excepturi esse et perspiciatis.
        </p>
      </div>
    </div>

    <div class="product-section-block">
      <div class="product-item-image">
        <img src="../../images/section_product/pipe.webp" alt="" />
      </div>
      <div class="product-item-description">
        <h3>Дымники</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
          commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
          dignissimos minima excepturi esse et perspiciatis.
        </p>
      </div>
    </div>

    <div class="product-section-block">
      <div class="product-item-image">
        <img src="../../images/section_product/address_plate.webp" alt="" />
      </div>
      <div class="product-item-description">
        <h3>Адресные таблички</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
          commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
          dignissimos minima excepturi esse et perspiciatis.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

#hexagon-mask {
  position: absolute;
  width: 0;
  height: 0;
}

h3 {
  font-size: 3rem;
  font-weight: $font-regular;
}

.product-section {
  .product-section-block {
    position: relative;
    height: 80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;

    margin-bottom: 100px;

    &:not(:last-child)::after {
      content: url('../icons/header_elements/Devider.png');

      position: absolute;
      bottom: -85px;
      left: auto;
    }

    &:nth-child(2n) {
      flex-direction: row-reverse;

      .product-item-description {

        h3 {
          text-align: end;
        }
      }
    }

    .product-item-image {
      width: 100%;
      flex: 1 1 auto;

      img {
        width: 100%;
        margin-left: calc(100% - 100% / 1.09); // Trouble with clip-path position
        clip-path: url(#hexagon);
        -webkit-clip-path: url(#hexagon);
      }
    }

    &:nth-child(2n) img {
      margin-left: 0; // Trouble with clip-path position
    }

    .product-item-description {
      text-align: justify;
      flex: 1 1.5 auto;

      p {
        font-size: 2rem;
        margin-top: 20px;
      }
    }
  }
}
</style>
