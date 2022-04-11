<template>
  <div class="btn_filter">
    <a v-on:click="setFilter()" class="filterButton">
      <div class="filter-img">
        <img :src="getImgUrl(image)" v-bind:alt="image" />
      </div>
      <div class="filter-text">
        <h2>{{ filtername }}</h2>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    filterId: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    filtername: {
      type: String,
      required: true,
    },
    filtercode: {
      type: String,
      required: true,
    },
    filterLink: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    getFilterUrl() {
      return "";
    },
    setFilter() {
      this.$store.dispatch("setFilterType", { filter: this.filtercode });
      if(this.filterLink){
        this.$router.push('/Product');
        
      }
    }
  }
};
</script>

<style>
.filterButton {
  cursor: pointer; 
}

.btn_filter {
  display: flex;
  height: 130px;
  width: 130px;
  background-color: rgba(204, 228, 255, 0.93);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}

.btn_filter a{
    text-decoration: none;
    color: #007aff !important;
}

.filter-img img{
  height: 60px;
  width: 60px;
}

.filter-text h2{
    font-size: 25px;
    
}

.btn_filter:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

</style>