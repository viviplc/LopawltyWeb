<template>
  <div class="home">
    <body>
      <div class="home-banner">
        <img src="../assets/home_banner.svg" />
      </div>
      <div class="home-filters">
        <div
          class="filterbtn-component"
          v-for="filter in filters"
          v-bind:key="filter.filterId"
        >
          <FilterButton
            :filterId="filter.filterId"
            :image="filter.image"
            :filtername="filter.filterName"
          >
          </FilterButton>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import FilterButton from "@/components/FilterButton.vue";

export default {
  name: "Home",
  components: {
    FilterButton,
  },
  data() {
    return {
      filters: [
        {
          filterId: 1,
          image: "filter1.png",
          filterName: "Dogs",
        },
        {
          filterId: 2,
          image: "filter2.png",
          filterName: "Cats",
        },
        {
          filterId: 3,
          image: "filter3.png",
          filterName: "Fish",
        },
        {
          filterId: 4,
          image: "filter4.png",
          filterName: "Birds",
        },
      ],
    };
  },
};
</script>


<style>
body {
  margin: 0%;
  background: #f1f8ff;
  justify-content: center;
}

.home-banner img {
  width: 100%;
}

.home-filters{ 
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;
}

.filterbtn-component {
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
}
</style>
