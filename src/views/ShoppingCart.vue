<template>
  <div>
    <div class="shoppingCartHeader">Shopping Cart</div>
    <div class="view-container">
      <div class="items-list-cart">
        <div class="d-none d-md-block">
          <div class="row cartItemRow">
            <div class="col-md-1 cartItemCol offset tableTitle"></div>

            <div class="col-md-2 cartItemCol offset tableTitle"></div>
            <div class="col-md-2 cartItemCol tableTitle">Product</div>
            <div class="col-md-1 cartItemCol tableTitle">Price</div>
            <div class="col-md-3 cartItemCol tableTitle text-center">
              Quantity
            </div>
            <div class="col-md-1 cartItemCol tableTitle">Subtotal</div>
            <div class="col-md-1 offset cartItemCol tableTitle"></div>
          </div>
        </div>
        <div v-for="item in cartItems" v-bind:key="item.itemId">
          <ItemCart
            :itemId="item.itemId"
            :image="item.image"
            :productname="item.productName"
            :productdescription="item.productDescription"
            :productprice="item.productPrice"
            :productquantity="item.productQuantity"
            :selected="item.selected"
          >
          </ItemCart>
        </div>
      </div>
      <CheckoutInformation
        :itemsprice="itemsprice"
        :shippingprice="shippingprice"
      />
    </div>
  </div>
</template>

<script>
import ItemCart from "@/components/ItemShoppingCart.vue";
import CheckoutInformation from "@/components/CheckoutInformation.vue";
//import Item from "@/components/Item.vue";

export default {
  name: "ShoppingCart",
  components: {
    ItemCart,
    CheckoutInformation,
    //Item,
  },
  computed: {
    cartItems() {
      let productIds = [];
      let productQuantities = [];
      let productSelectedBools = [];
      this.$store.state.cart.forEach((item) => {
        productIds.push(item.productId);
        productQuantities.push(item.quantity);
        productSelectedBools.push(item.selected);
      });
      let finalResult = [];
      let productsArray = this.$store.state.products;
      for (let product of productsArray) {
        const needle = productIds.indexOf(product.itemId);
        if (needle >= 0) {
          finalResult.push({
            productQuantity: productQuantities[needle],
            selected: productSelectedBools[needle],
            ...product,
          });
        }
      }
      return finalResult;

      /*let finalResult2 = [];
      for (let product of productsArray) {
        finalResult2.push({ productQuantity: 5, selected: true, ...product });
      }
      // alert(JSON.stringify(finalResult2))
      return finalResult2;
      */
    },

    itemsprice() {
      let totalCost = 0.0;
      this.cartItems.forEach((item) => {
        if (item.selected) {
          totalCost += item.productPrice * item.productQuantity;
        }
      });
      return parseFloat(totalCost.toFixed(2));
    },
    items() {
      let productsArray = this.$store.state.products;
      let productIds = [];
      this.$store.state.cart.forEach((item) => {
        productIds.push(item.productId);
      });
      let finalResult = [];
      for (let product of productsArray) {
        const needle = productIds.indexOf(product.itemId);
        if (needle == -1) {
          finalResult.push(product);
        }
      }
      return finalResult.slice(0, 3);
    },
  },
  data() {
    return {
      shippingprice: 5.23,
    };
  },
  mounted() {
    this.$store.dispatch("getUserCart");
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.view-container {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: stretch;
}

.tableTitle {
  color: rgb(14, 125, 239);

  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 5px;
}

.cartItemRow {
  justify-content: center;
  align-items: center;
}

.cartItemCol {
  justify-content: center;
  align-items: center;
}

.shoppingCartHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 15px;
  background: rgb(158, 202, 251);
  color: rgb(14, 125, 239);
  text-align: center;
  font-size: 3em;
  height: 75px;
  font-weight: bold;
  margin-top: 150px;
}

.items-list-cart {
  flex-grow: 1;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.promos-container {
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item-component {
  padding-left: 40px;
}
</style>
