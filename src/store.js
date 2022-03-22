import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
// import dotenv from 'dotenv';
// dotenv.config()

const listino = 'https://api.ninoxdb.de/v1/teams/yF798GWcx2GyC9Sf2/databases/g66xh8o7t0zx/tables/X/records?perPage=100'
const token =  process.env.VUE_APP_NINOX_TOKEN
console.log(token)

Vue.use(Vuex);

let sp = [];
aspetta()

async function aspetta(){
  
  sp =  await getItems()
  return sp
}

async function getItems(){
    const prodotti_raw = await get(listino, token);
  
    const prodotti = []
    prodotti_raw['data'].forEach(prod => {
      
        prodotti.push({
            name: prod['fields']['Descrizione Articolo'],
            price: prod['fields']['Imponibile'],
            qta: 1,
            um: prod['fields']['u.m.'],
            categoria: prod['fields']['Categorie Articoli'],
            image: 'https://cdn.manomano.com/images/images_products/833509/L/2427304_1.jpg'

        })
    });
  
    return prodotti;
  }

async function get(url, ninoxToken){
    try {
        console.log('ci provo')
        const res =  await axios.get(url, {headers:{Authorization: 'Bearer ' + ninoxToken}, 'Content-Type': 'application/json'} );
   
        return res
    } catch (error) {
       // console.log('status',error.response.status)
        console.log(url)
        throw Error("problemi con la chiamata \n" + url+"\nprobabilmente il token o i parametri sono rotti")
    }
  }


export default new Vuex.Store({
    state: {
      

      prodotti: [],
      selected:[],
      cartProducts: [],
      currentProduct: {},
      showPopupCart: false,
    },
  
    getters: {
 
      getTutti: state => state.prodotti,
      selected: (state)  => {
        return state.selected
      },

      // selected: (state) => (id) => {
      //   return (state.prodotti.filter(prodotto => prodotto.categoria == id))
      // },
      
  
  
      getProductsInCart: state => state.cartProducts,
      getCurrentProduct: state => state.currentProduct,
      getPopupCart: state => state.showPopupCart,
    },
  
    mutations: {
      ADD_PRODUCT: (state, product) => {
        state.cartProducts.push(product);
      },
      REMOVE_PRODUCT: (state, index) => {
        state.cartProducts.splice(index, 1);
      },
      CURRENT_PRODUCT: (state, product) => {
        state.currentProduct = product;
      },
      SET_SELECTED: (state, cat) => {
        state.selected = state.prodotti.filter(prodotto => prodotto.categoria == cat)
      },

      SHOW_POPUP_CART: (state) => {
        state.showPopupCart = !state.showPopupCart;
      },

      SET_PROD: (state, products) => {
        console.log('modifica ')
        state.prodotti = products
        state.selected = products
        console.log(products)
      }
    },
  
    actions: {
      addProduct: (context, product) => {
        context.commit('ADD_PRODUCT', product);
      },
      removeProduct: (context, index) => {
        context.commit('REMOVE_PRODUCT', index);
      },
      currentProduct: (context, product) => {
        context.commit('CURRENT_PRODUCT', product);
      },
      updateChart: (context, cat) =>{
        console.log('update chart')
        context.commit('SET_SELECTED', cat);
      },

      showOrHiddenPopupCart: (context) => {
        context.commit('SHOW_POPUP_CART');
      },
      async getProdotti (context) {
        console.log('azione ')
        const prodotti = await getItems();
        context.commit('SET_PROD', prodotti)
      },
    }
    },
  );
  