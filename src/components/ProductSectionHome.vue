<script></script>

<template>
  <div class="wrapper">
    <div class="product-section">
      <h1>ПРОДУКЦИЯ</h1>

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
        
        <div class="product-item-description">
          <h3>Лестничные ограждения</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem molestias
            commodi sed quae autem a distinctio, blanditiis nobis explicabo quis impedit illum illo
            dignissimos minima excepturi esse et perspiciatis.
          </p>
        </div>
        <div class="product-item-image">
          <img src="../images/section_product/section_stair_railing.webp" alt="" />
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
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_vars.scss";
.wrapper {
  max-width: $wrapper-width;
  margin: 0 auto;
}

h1 {
  font-size: 4rem;
  font-weight: $font-bold;
  margin-top: 50px;
  margin-bottom: 50px;
  color: $navbar;

  &::before {
    content: url(../components/icons/header_elements/header_before.svg);
    margin-right: 10px;
  }
  &::after {
    content: url(../components/icons/header_elements/header_after.svg);
    margin-left: 10px;
  }
}

h3 {
  font-size: 3rem;
  font-weight: $font-regular;
}

.product-section {
  .product-section-block {
    height: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    margin-top: 40px;
    .product-item-image {
      height: 100%;
      img {
        height: 100%;
      }
    }
    .product-item-description {
      text-align: start;
    }
  }
}
</style>
