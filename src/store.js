import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
// import dotenv from 'dotenv';
// dotenv.config()

const listino = 'https://api.ninoxdb.de/v1/teams/yF798GWcx2GyC9Sf2/databases/g66xh8o7t0zx/tables/X/records?perPage=1000'
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
      cartProducts: [],
      currentProduct: {},
      showPopupCart: false,
    },
  
    getters: {
      get13: state => state.prodotti.filter(prodotto => prodotto.categoria == 13),
      get3: state => state.prodotti.filter(prodotto => prodotto.categoria == 3),
      get5: state => state.prodotti.filter(prodotto => prodotto.categoria == 5),
      get6: state => state.prodotti.filter(prodotto => prodotto.categoria == 6),
      getTutti: state => state.prodotti,
  
  
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

      SHOW_POPUP_CART: (state) => {
        state.showPopupCart = !state.showPopupCart;
      },

      SET_PROD: (state, products) => {
        console.log('modifica ')
        state.prodotti = products
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
  