import { publicRequest, userRequest } from "./requestMethods";
import store from "./store";


export function getBids() {
    publicRequest.get('/api/bids')
        .then((res) => {
            res.data && store.commit("setBids", res.data)
        })
        .catch((err) => console.log(err));
}

export function getBider(body, updateBiderDetails) {
    console.log(body);
    userRequest
        .post("/api/getProductBids", body)
        .then((res) => {
            console.log(res.data);
                res.data && updateBiderDetails(res.data[0]);
        })
        .catch((err) => console.log(err));
};

export function getProducts () {
    return publicRequest.get('/api/product')
    .then((res) => {
        res.data && store.commit('updateProducts', res.data)
    })
    .catch((err) => console.log(err));
}

export function isAuctionEnded (body, updateIsValidUser) {

    userRequest.post("/api/checkEndOfAuction", body)
        .then((res) => {
            updateIsValidUser(res.data)
        })
        .catch((err) => console.log(err));
    
}

export function getUsers (setUsers) {
    publicRequest.get('/api/users')
        .then((res) => {
            res.data && setUsers(res.data)
        })
        .catch((err) => console.log(err));
}

export function getUser (id) {
    publicRequest.get(`/api/users/${id}`)
        .then((res) => {
            store.commit("updateCreditCard", res.data) 
        })
        .catch((err) => console.log(err));
}

export function addProduct(value, setAlertData) {
    userRequest.post('/api/product', value)
    .then((res) => {
        res.data && getProducts()
        setAlertData(res.data)
    })
    .catch((err) => console.log(err));
}

export function login(value, navigateHome, setAlertData) {
    store.commit("loginStart")
    publicRequest.post('/api/login', value)
        .then((res) => {
            const data = res.data
            setAlertData(data)
            if(!data.error){
                const {avatar, email, firstName, lastName, password, CreditCard, _id, } = data.userData
                const accessToken = data.accessToken
                const values = {
                    avatar,
                    email,
                    firstName,
                    lastName,
                    password,
                    _id,
                    accessToken,
                    CreditCard,
                    loggedIn: true
                }
                store.commit('updateUserData', values);
                window.location.reload()
                navigateHome()
            }else if (data.error){
                store.commit('loginFailure');
            }
        })
        .catch((err) => {
            store.commit('loginFailure');
            console.log(err)
        });
}

export function createUser(body, setAlertData, navigateHome) {
    const {firstName, lastName, email, password} = body
    const sendbody = {
        firstName,
        lastName,
        email,
        password
        }
    publicRequest.post("/api/register", sendbody)
        .then((res) => {
                setAlertData(res.data)
                const {avatar, email, firstName, lastName, password, _id } = res.data.userData
                const accessToken = res.data.accessToken
                const values = {
                        avatar,
                        email,
                        firstName,
                        lastName,
                        password,
                        accessToken,
                        _id,
                        loggedIn: true
                    }
                res.data && 
                store.commit('updateUserData', values);
                navigateHome();
        })
        .catch((err) => (err));
};

export function editProfilePicture(value, user, setAlertData){
    userRequest.patch(`/api/users/${user._id}`, {"avatar": value, "public_id": user.avatar.public_id})
        .then((res) => {
            const data = res.data
            console.log(data);
            setAlertData(data)
        })
        .catch((err) => {
            console.log(err)
            setAlertData({error: true, message: "Please add a photo"})
        });
}

export function endAuction(id) {
    userRequest.patch(`api/endAuction/${id}`)
    .then((res) => {
        res.data && getProducts();
    })
    .catch((err) => console.log(err));
}

export function deleteProduct(id) {
    userRequest.delete(`api/product/${id}`)
    .then((res) => {
        res.data && getProducts();
    })
    .catch((err) => console.log(err));
}

export function getUserBids(id, updateBids) {
    userRequest.post(`/api/bidedproduct/`, ({userId: id}))
        .then((res) => {
            updateBids(res.data)
        })
        .catch((err) => {console.log(err)});
}

export function addCreditCard(id, values, setAlertData) {
    userRequest.patch(`api/userCard/${id}`, values)
    .then((res) => {
        const data = res.data
        data.data && store.commit('updateCreditCard', data.data.CreditCard);
        if(data.data == null){
            const newData = {
                error: true, 
                message: "Please fill all of the fields"
             }
            setAlertData(newData)
            return
        }
        setAlertData(data)
        getUser(id)
    })
    .catch((err) =>{
         console.log(err)
         const data = {
            error: false, 
            message: "Please fill all of the fields"
         }
         setAlertData(data)
        });
}

export function changeProductPrice(value, values, setAlertData) {
    userRequest.patch(`/api/product/${values.productId}`, value)
    .then((res) => {
        const data = res.data
        data && setAlertData(data)

        if(!data.error) addBid(values)
        
    })
    .catch((err) => {console.log(err)});
}

export function addBid(value) {
    userRequest.post('/api/bids', value)
    .then((res) => {
        res.data && getBids()
    })
    .catch((err) => console.log(err));
}