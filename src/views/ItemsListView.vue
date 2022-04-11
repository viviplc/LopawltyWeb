<template>
  <div class="mainContainer">
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
          :filtercode="filter.filterCode"
          :filterLink="false"
        >
        </FilterButton>
      </div>
    </div>
    <div class="items-container" id="itemView">
      <div
        class="item-component"
        v-for="item in items"
        v-bind:key="item.itemId"
      >
        <Item
          :itemId="item.itemId"
          :image="item.image"
          :productname="item.productName"
          :productdescription="item.productDescription"
          :productprice="item.productPrice"
        >
        </Item>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "@/components/Item.vue";
import FilterButton from "@/components/FilterButton.vue";

export default {
  name: "ItemList",
  components: {
    Item,
    FilterButton,
  },
  computed: {
    items() {
      if (this.$store.state.currentFilter == "") {
        return this.$store.state.products;
      } else {
        let productsArray = this.$store.state.products;
        //productCategory
        let filter = this.$store.state.currentFilter;
        var newArray = productsArray.filter(function (el) {
          return el.productCategory == filter;
        });
        return newArray;
      }
    },
  },
  data() {
    return {
      filters: [
        {
          filterId: 1,
          image: "filter1.png",
          filterName: "Dogs",
          filterCode: "dog",
        },
        {
          filterId: 2,
          image: "filter2.png",
          filterName: "Cats",
          filterCode: "cat",
        },
        {
          filterId: 3,
          image: "filter3.png",
          filterName: "Fish",
          filterCode: "fish",
        },
        {
          filterId: 4,
          image: "filter4.png",
          filterName: "Birds",
          filterCode: "bird",
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.mainContainer {
  margin-top: 145px;
}
.items-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component {
  flex-basis: 340px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
