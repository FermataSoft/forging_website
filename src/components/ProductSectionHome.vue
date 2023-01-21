<script setup>
import SectionHeader from "./elements/SectionHeader.vue";
</script>

<template>
    <SectionHeader text="Продукция"></SectionHeader>
    <svg height="0" width="0" viewBox="0 0 600 600">
      <clipPath id="hexagon">
        <path
          d="M0,203.1v193.71c0,37.96,20.25,73.03,53.12,92.01l167.76,96.86c32.87,18.98,73.37,18.98,106.25,0l167.76-96.86c32.87-18.98,53.12-54.05,53.12-92.01V203.1c0-37.96-20.25-73.03-53.12-92.01L327.13,14.23c-32.87-18.98-73.37-18.98-106.25,0L53.12,111.09C20.25,130.07,0,165.14,0,203.1Z"
        />
      </clipPath>
    </svg>
    <div class="product-section">
      <div class="product-section-block">
        <div class="product-item-image">
          <img src="../images/section_product/stairs.webp" alt="" />
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
          <img src="../images/section_product/section_stair_railing.webp" alt="" />
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
          <img src="../images/section_product/gates.webp" alt="" />
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
          <img src="../images/section_product/gate.webp" alt="" />
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
          <img src="../images/section_product/pipe.webp" alt="" />
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
          <img src="../images/section_product/address_plate.webp" alt="" />
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
@import "../assets/_vars.scss";

svg {
  position: absolute;
  width: 0;
  height: 0;
  transform: scale(0.9);
}

h3 {
  font-size: 3rem;
  font-weight: $font-regular;
}

.product-section {
  .product-section-block {
    position: relative;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;

    margin-bottom: 120px;

    &:not(:last-child)::after {
      content: url("./icons/header_elements/Devider.png");

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
      height: 100%;

      img {
        height: 100%;
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

      p {
        font-size: 2rem;
        margin-top: 20px;
      }
    }
  }
}
</style>
