<template>
  <div class="itemdetail-container">
    <div class="itemdetail-image">
      <img :src="getImgUrl(product.image)" v-bind:alt="image" />
    </div>
    <div class="itemdetail-infocontainer">
      <div class="item-info">
        <h1 class="productName">{{ product.productName }}</h1>
        <h2><b>$ {{ product.productPrice }}</b></h2>
        <div class="details-container">
          
        </div>
        <p>{{ product.productDescription }}</p>
        
        <div class="details-container">
          
          <div class="quatity-container text-center">
            <button class="btn-squared" v-on:click="decreaseQuantity()">
              <i class="fa fa-minus"></i>
            </button>
            <div class="productQuantityAmount">{{ quantity }}</div>
            <button class="btn-squared" v-on:click="increaseQuantity()">
              <i class="fa fa-plus"></i>
            </button>
          </div>
           
        </div>
        <button v-on:click="addToCart(product.itemId, quantity)" class="addToCartButton">{{addToCartText}}</button>
      </div>
      <UserProductReview :itemId="product.itemId" />
      <ProductRatings :productId="product.itemId" />
    </div>
  </div>
</template>

<script>
import ProductRatings from "../components/ProductRatings.vue";
import UserProductReview from "../components/UserProductReview.vue"
export default {
  name: "ItemList",
  components: {
    ProductRatings,
    UserProductReview
  },
  mounted() {
    this.$store.dispatch("getProductReviews", {productId : this.$route.params.id});
  },
  data() {
        return {
        quantity: 1,
        addToCartText: "Add to cart",
        };
    },
  computed: {
    
    product() {
      let productsArray = this.$store.state.products;
      for (let product of productsArray) {
        if (product.itemId == this.$route.params.id) {
          return product;
        }
      }
      return productsArray[0];
    },
    items() {
      let productsArray = this.$store.state.products;
      let productIds = []
      this.$store.state.cart.forEach(item => {
        productIds.push(item.productId);
      });
      let finalResult = [];
      for(let product of productsArray){
        const needle = productIds.indexOf(product.itemId);
        if(needle == -1){
          finalResult.push(product)
        }
      }
      return finalResult.slice(0, 3);
    }
  },
  methods: {
    decreaseQuantity() {
        if(this.quantity > 1) {
this.quantity -= 1;
        }
        
    },
    increaseQuantity() {
this.quantity += 1;
        
    },

    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    addToCart(productId, quantity) {
      this.$store.dispatch("addProductToCart", { productId, quantity });
      this.addToCartText = "Added";
      setTimeout(function () {
        this.addToCartText = "Add to cart";
      }.bind(this), 700);
    },
  },
};
</script>

<style scoped>

.itemdetail-container {
  margin: 20px;
  margin-top: 145px;
  display: flex;
  flex-direction: row;
}

.itemdetail-image {
  margin-top: 20px;
  width: 800px;
  margin-left: 24px;
}

.itemdetail-image img{

  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-info {
  margin: 5px;
  margin-left: 42px;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.itemdetail-infocontainer {
    flex-grow: 1;
}

.addToCartButton {
  font-size: 20px;
  background-color: #007aff;
  border-radius: 15px;
  width: 182px;
  height: 45px;
  border-color: transparent;
  color: #eff0f4;
  margin-top: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.details-container {
  display: flex;
  padding-top: 15px;
}

.quatity-container {
  display: flex;
}

.btn-rounded {
  background-color: #23b1bb;
  border: none;
  border-radius: 50%;
  color: #fff;
  height: 35px;
  width: 35px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn-squared {
  background-color: #707070;
  border: none;
  border-radius: 15px;
  color: #fff;
  height: 70px;
  width: 70px;
  margin: 10px;
  font-size: 40px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.productQuantityAmount {
  font-size: 40px;
  border-radius: 15px;
  height: 70px;
  width: 70px;

  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn-white {
  background-color: #fff;
  border: none;
  color: #23b1bb;
  height: 35px;
  width: 35px;
  font-size: 35px;
  cursor: pointer;
  align-self: flex-start;
}

.item-info h1 {
  font-size: 40px;
    color:rgb(14, 125, 239);
}

.item-info p {
  font-size: 22px;
  width: 660px;
  color: #868485;
}

.item-info h2 {
  font-size: 27px;
  color: black;
  margin-right: 45px;
}

.item-info h3 {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
}

.promos-container {
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  margin-left: 10px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component {
  padding-left: 40px;
}

.productName {
    color:rgb(14, 125, 239);
}
</style>
