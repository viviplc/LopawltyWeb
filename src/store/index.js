import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        itemId: 1,
        image: "Picture1.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
          
        ],
      },
      {
        itemId: 2,
        image: "Picture2.jpg",
        productName: "Product Name 2",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
          
        ],
      },
      {
        itemId: 3,
        image: "Picture3.jpg",
        productName: "Product Name 3",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
          
        ],
      },
      {
        itemId: 4,
        image: "Picture4.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
       
        ],
      },
      {
        itemId: 5,
        image: "Picture5.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
       
        ],
      },
      {
        itemId: 6,
        image: "Picture6.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
         
        ],
      },
      {
        itemId: 7,
        image: "Picture7.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
         
        ],
      },
      {
        itemId: 8,
        image: "Picture8.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
          
         
        ],
      },
      {
        itemId: 9,
        image: "Picture9.jpg",
        productName: "Product Name",
        productDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        productPrice: 9.19,
        reviews: [
        
        ],
      },
     
    ],
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
})
