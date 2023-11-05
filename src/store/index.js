import { createStore } from "vuex";
import { getProducts } from "../middleWare";

export default createStore({
    state:{
        products: [],
        user: {
          data: {
            CreditCard:{
              
            },
            loggedIn: false
          },
          isFetching: false
        },
        bids:[],
        cardData: {
          cardNumber: "",
          month: "",
          year: "",
          cvv: "",
        }
    },
    mutations:{
        updateProducts(state, values){
            state.products = values
        },
        loginStart: (state) => {
          state.user.isFetching = true
        },
        updateUserData: (state, values) => {
            state.user.data = values;
            localStorage.setItem("user", JSON.stringify(values));
            state.user.isFetching = false
        },
        setUser: (state, user) => {
          state.user.data = user
          state.cardData = user.CreditCard
        },
        loginFailure: (state) => {
            state.user.isFetching = false
        },
        setBids: (state, values) => {
          state.bids = values
        },
        updateCreditCard: (state, values) => {
          state.user.data.CreditCard = values.CreditCard
          state.cardData = values.CreditCard
          console.log(state.user.data);
          localStorage.setItem("user", JSON.stringify(state.user.data));

        }
    },
    actions:{
      setUser: ({ commit }, user) => {
        commit("setUser", user);
      },
      getAndUpdateProducts(){
        getProducts()
      },
      getAndUpdateUser(){
        getUser()
      },

    },
    getters:{
        getProductById: (state) => (id) =>{
          return state.products.find((product) => product._id === id)
        }
    },
    modules:{

    }
})