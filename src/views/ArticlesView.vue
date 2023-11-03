<script setup>
import { useI18n } from "vue-i18n";
import SectionHeader from "../components/elements/SectionHeader.vue";
import ArticleCard from "../components/elements/ArticleCard.vue";

const { t } = useI18n();
</script>

<template>
  <div class="wrapper">
    <SectionHeader>{{ t("ArticlesHeader") }}</SectionHeader>

    <div class="articles">
        <ArticleCard
          :title="'gsdfgfsd'"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae felis leo. Nunc viverra lacus urna. Vestibulum accumsan convallis quam non dictum. Maecenas lacinia ultricies convallis. Duis sagittis lorem vitae erat facilisis, ac mollis sapien finibus. Vestibulum ultricies consectetur porta. Ut tempus lorem ac turpis tempor, eu malesuada nibh aliquam. Ut egestas magna vel erat efficitur finibus. Nullam et lorem a odio lobortis rutrum sed ac tortor. Donec accumsan venenatis diam, quis viverra turpis rhoncus vel. Morbi pulvinar eget mi ut pretium.'"
        >
    </ArticleCard>

      <ArticleCard
        :title="'gsdfgfsd'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae felis leo. Nunc viverra lacus urna. Vestibulum accumsan convallis quam non dictum. Maecenas lacinia ultricies convallis. Duis sagittis lorem vitae erat facilisis, ac mollis sapien finibus. Vestibulum ultricies consectetur porta. Ut tempus lorem ac turpis tempor, eu malesuada nibh aliquam. Ut egestas magna vel erat efficitur finibus. Nullam et lorem a odio lobortis rutrum sed ac tortor. Donec accumsan venenatis diam, quis viverra turpis rhoncus vel. Morbi pulvinar eget mi ut pretium.'"
      >
      </ArticleCard>
      <ArticleCard
        :title="'gsdfgfsd'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae felis leo. Nunc viverra lacus urna. Vestibulum accumsan convallis quam non dictum. Maecenas lacinia ultricies convallis. Duis sagittis lorem vitae erat facilisis, ac mollis sapien finibus. Vestibulum ultricies consectetur porta. Ut tempus lorem ac turpis tempor, eu malesuada nibh aliquam. Ut egestas magna vel erat efficitur finibus. Nullam et lorem a odio lobortis rutrum sed ac tortor. Donec accumsan venenatis diam, quis viverra turpis rhoncus vel. Morbi pulvinar eget mi ut pretium.'"
      >
      </ArticleCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.wrapper {
  margin-bottom: 50px;
}

.articles {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
}

.articles__item {
}
</style>

<i18n>
  {
    "ru-RU": {
      ArticlesHeader: "Статьи"
    },
    "by-BY": {
      ArticlesHeader: "Артыкул"
    }
  }
</i18n>
