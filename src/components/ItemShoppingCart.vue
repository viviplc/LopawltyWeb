<template>
  <div>
    <div class="row cartItemRow">
      <div class="col-md-1 cartItemCol text-center">
        <label class="checkbox-container delete-item-holder">
          <input
            type="checkbox"
            id="itemId"
            :checked="selected"
            v-on:click="toggleSelect()"
          />
          <span class="check-mark"></span>
        </label>
      </div>

      <div class="col-md-2 cartItemCol text-center">
        <div class="item-image">
          <img class="img-fluid" :src="getImgUrl(image)" v-bind:alt="image" />
        </div>
      </div>
      <div class="col-md-2 cartItemCol">
        <h3>{{ productname }}</h3>
      </div>
      <div class="col-md-1 cartItemCol">
        <h3>$ {{ productprice }}</h3>
      </div>
      <div class="col-md-3 cartItemCol">
        <div class="details-container">
          <div class="quatity-container text-center">
            <button class="btn-squared" v-on:click="decreaseQuantity()">
              <i class="fa fa-minus"></i>
            </button>
            <div class="productQuantityAmount">{{ productquantity }}</div>
            <button class="btn-squared" v-on:click="increaseQuantity()">
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-1 cartItemCol">
        <h4>$ {{ subTotal }}</h4>
      </div>
      <div class="col-md-1 cartItemCol text-center">
        <div class="delete-item-holder">
          <button class="btn-white" v-on:click="deleteCartItem(itemId)">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <!--
<div class="cartItemContainer">
  <div class="item">
    <label class="checkbox-container">
      <input type="checkbox" id="itemId" :checked="selected" v-on:click="toggleSelect()"/>
      <span class="check-mark"></span>
    </label>
    <div class="item-image">
      <img :src="getImgUrl(image)" v-bind:alt="image" />
    </div>
    <div class="item-info">
      <h1>{{ productname }}</h1>
      <p>{{ productdescription }}</p>
      <div class="details-container">
        <h2>Unit Price</h2>
        <h3>$ {{ productprice }}</h3>
      </div>
      <div class="details-container">
        <h2>Quantity</h2>
        <div class="quatity-container">
          <button class="btn-rounded" v-on:click="decreaseQuantity()">
            <i class="fa fa-minus"></i>
          </button>
          <h3>{{ productquantity }}</h3>
          <button class="btn-rounded" v-on:click="increaseQuantity()">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
    <button class="btn-white" v-on:click="deleteCartItem(itemId)">
      <i class="fa fa-trash"></i>
    </button>
  </div>
  </div> -->
  </div>
</template>

<script>
export default {
  props: {
    itemId: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    productname: {
      type: String,
      required: true,
    },
    productdescription: {
      type: String,
      required: true,
    },
    productprice: {
      type: Number,
      required: true,
    },
    productquantity: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    subTotal() {
      var num = this.productprice * this.productquantity;
      return num.toFixed(2);
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    toggleSelect() {
      let quantity = this.productquantity;
      let selected = !this.selected;
      let productId = this.itemId;
      this.$store.dispatch("updateProductInCart", {
        productId,
        quantity,
        selected,
      });
    },
    decreaseQuantity() {
      if (this.productquantity > 1) {
        let quantity = this.productquantity - 1;
        let selected = this.selected;
        let productId = this.itemId;
        this.$store.dispatch("updateProductInCart", {
          productId,
          quantity,
          selected,
        });
        //this.productquantity -= 1;
      }
    },
    increaseQuantity() {
      let quantity = this.productquantity + 1;
      let selected = this.selected;
      let productId = this.itemId;
      this.$store.dispatch("updateProductInCart", {
        productId,
        quantity,
        selected,
      });
    },
    deleteCartItem(productId) {
      this.$store.dispatch("deleteProductFromCart", { productId });
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 23px;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.tableTitle {
  color: rgb(14, 125, 239);
  text-align: center;
  font-size: 30px;
}

.cartItemRow {
  justify-content: center;
  align-items: center;
  border: solid 5px rgb(212, 228, 244);
  border-radius: 15px;
  margin: 10px;
  padding: 8px;
}

.cartItemColCenter {
  justify-content: center;
  align-items: center;
}

.cartItemCol {
  align-items: center;
}

.delete-item-holder {
  justify-content: center;
  align-items: center;
}

.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.check-mark {
  position: absolute;
  top: 0;
  left: 0;
  height: 27px;
  width: 27px;
  border: 4px solid #007aff;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.checkbox-container:hover input ~ .check-mark {
  background-color: rgb(212, 228, 244);
}

.checkbox-container input:checked ~ .check-mark {
  background-color: #007aff;
}

.check-mark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .check-mark:after {
  display: block;
}

.checkbox-container .check-mark:after {
  left: 6px;
  top: 0px;
  width: 7px;
  height: 15px;
  border: solid white;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.item-image img {
  overflow: hidden;
  border-radius: 15px;
  margin-left: 24px;
}

.item-info {
  margin: 5px;
  margin-left: 42px;
}

.details-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.quatity-container {
  display: flex;
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

.btn-rounded {
  background-color: #007aff;
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

.btn-white {
  background-color: #fff;
  border: none;
  color: #007aff;
  height: 35px;
  width: 35px;
  font-size: 35px;
  cursor: pointer;
  align-self: flex-start;
}

.item-info h1 {
  font-size: 40px;
  color: black;
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
</style>
