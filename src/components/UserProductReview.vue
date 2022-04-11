<template>
  <div v-if="isVisible" class="view-container review-container">
    <b-form-textarea
      id="textarea"
      v-model="currentUserReviewText"
      placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr. "
      rows="4"
      max-rows="6"
    ></b-form-textarea>
    <div class="ratingAndButtonHolder">
      <b-form-rating
        id="rating-sm-no-border"
        v-model="currentUserReviewRating"
        color="#23B1BB"
        size="lg"
        no-border
      ></b-form-rating>
      <button
        type="button"
        @click="
          reviewButtonClicked(
            itemId,
            currentUserReviewText,
            currentUserReviewRating
          )
        "
        id="productReviewSubmitButton"
        class="btn btn-primary float-right border-0"
      >
        Submit Review
      </button>
    </div>
    <div class="row" id="productReviewSubmitButtonHolder">
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      reviewText: "",
      currentUserReviewText: "",
      currentUserReviewRating: 0,
    };
  },
  computed: {
    products() {
      let productsArray = this.$store.state.productsBought;
      for (let product of productsArray) {
        product.currentUserReviewText = "";
        product.currentUserReviewRating = 0;
      }
      return productsArray;
    },
    isVisible() {
      let productsArray = this.$store.state.productsBought;
      for (let product of productsArray) {
        if (product.itemId == this.itemId) {
          return true;
        }
      }
      return false;
    },
  },
  mounted() {
    this.$store.dispatch("getProductsBought");
  },
  methods: {
    reviewButtonClicked: function (id, text, rating) {
      //alert(`Creating review for product #${id} with text: '${text}' and rating: ${rating}`)
      this.$store.dispatch("addReviewToProduct", {
        productId: id,
        reviewText: text,
        reviewRating: rating,
      });
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style>
.ratingAndButtonHolder {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.view-container {
  display: flex;
  flex-wrap: wrap;
}

#productReviewTextBoxHolder {
  margin: 10px;
}

#productReviewSubmitButton {
  margin-right: 10px;
  font-size: 22px;
  background-color: #23b1bb;
  border-radius: 15px;
  width: 322px;
  height: 62px;
  border-color: transparent;
  color: #eff0f4;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#productImage {
  margin: 10px;
  width: 252px;
  overflow: hidden;
  border-radius: 15px;
}

.userReviews-container {
  margin: 23px;
}

.review-container {
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.review-container h4 {
  font-size: 40px;
  color: black;
}
</style>
