const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			auth: false,
			users:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			products: [],
			categories: [],
			productDetails: [],
			category:[],
			productsByCategory: [],
			cart: [],
			preferenceId: [],
			filteredProducts: [],
			brands: [],
			productsByBrands: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			signUpAdmin: (name,email,password) => {
				console.log('Signup desde flux')
				console.log(name,email,password)
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', 'Origin': '*',
					'Access-Control-Allow-Headers': '*',
					'Access-Control-Allow-Origin': '*' },
					body: JSON.stringify({

						"name": name,
						"email": email,
						"password": password
					})
				}
				const isLogin = fetch(process.env.BACKEND_URL +'/api/admin_signup', requestOptions)
					.then((response) => {
						if(response.status === 200){
							setStore({auth: true});
						}
						return response.json()
					})
					.then((data) =>{
						console.log(data)
						setStore({ users: data })
						localStorage.setItem("token", data.access_token)
						localStorage.setItem("auth", true)
						return true
						}
					)
					return isLogin
			},
			loginAdmin: async (email, password) => {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', 'Origin': '*',
						'Access-Control-Allow-Headers': '*',
						'Access-Control-Allow-Origin': '*' },
					body: JSON.stringify(
					{
						"email": email,
						"password": password
					})
				};
				let response = await fetch(process.env.BACKEND_URL +"/api/admin_login", requestOptions)
				let data = await response.json()	
					if(response.status === 200){
						setStore({auth: true});
						setStore({ users: data })
						console.log(data)
						localStorage.setItem("token", data.access_token)
						localStorage.setItem("auth", true)
					}
						
				return response.status
			},
			getProducts: async () => {

				try {
				   const response = await fetch(process.env.BACKEND_URL+'/api/get_all_products')	
				   const data = await response.json()
				   
				   if(response.ok){
					   setStore({ products: data})
				   }
				} catch (error) {
				   console.log(error)
				}
		    },
			getProductDetails: async (result) => {
				try {
					const idToDisplay = result.id				
					const response = await fetch(process.env.BACKEND_URL+'/api/get_product/'+idToDisplay)
					const data = await response.json()

					if(response.ok){
						setStore({ productDetails: data})
					}
				} catch (error) {
					console.log(error)
					
				}
			},
			getProductByCategory: async (theid) => {
				try {
					const response = await fetch(process.env.BACKEND_URL+'/api/get_product_by_category/'+theid)
					const data = await response.json()

					if(response.ok){
						setStore({ productsByCategory: data})
					}
				} catch (error) {
					console.log(error)
					
				}
			},
			addProduct: async (result) => {
				
				console.log(result)

				let token = localStorage.getItem("token")

				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json',
								'Authorization': `Bearer ${token}`},
					body: JSON.stringify(data)
				}

				let response = await fetch(process.env.BACKEND_URL +'/api/add_products/', requestOptions)
				let data = await response.json();
				if (response.ok === 200){
					getActions().getProducts()
				}
				console.log(data)
			},
			editProduct: (product, theid) =>{
				
				let token = localStorage.getItem("token")
				
			    const requestOptions = {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json',
								'Authorization': `Bearer ${token}`},
					body: JSON.stringify( {product} )
				};
				fetch(process.env.BACKEND_URL +'/api/update_products/'+theid, requestOptions)
					.then((response) => response.json())
					.then((data) =>  { getActions().getProducts()
									   console.log(data)
									})
					.catch((error) => {console.log(error)})
			},
			saveToDelete: (theid) =>{
				setStore({
					idToDelete: theid
				})
			},
			deleteProduct: (item) => {

				const indexMap = getStore().idToDelete
				console.log(indexMap)
				
				const requestOptions = {
					method: 'DELETE',
					headers: { 'Content-Type': 'application/json',
								'Authorization': `Bearer ${token}`}
				}

				fetch(process.env.BACKEND_URL +"/api/delete_product/" + indexMap, requestOptions)
					.then(response => response.json())
					.then( () => {
						fetch(process.env.BACKEND_URL+ '/api/delete_product/')
						.then((response) => response.json())
						.then((data) => setStore({products: data}))
					})
					.catch(error => console.log('error', error));
					
				getActions().getProducts();	
			},
			getCategories: async () => {

				try {

				   const response = await fetch(process.env.BACKEND_URL+'/api/get_category')	
				   const data = await response.json()
				   
				   if(response.ok){
					   setStore({ categories: data})
				   }
				} catch (error) {
				   console.log(error)
				}
		    },
			getCategory: async (result) => {

				try {

					const idToDisplay = result.id				
					const response = await fetch(process.env.BACKEND_URL+'/api/get_category/'+idToDisplay)
					const data = await response.json()

					if(response.ok){
						setStore({ category: data})
					}
				} catch (error) {
					console.log(error)
					
				}
			},
			addCategory: async (result) => {
				
				console.log(result)

				let token = localStorage.getItem("token")

				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json',
								'Authorization': `Bearer ${token}`},
					body: JSON.stringify(data)
				}

				let response = await fetch(process.env.BACKEND_URL +'/api/add_category', requestOptions)
				let data = await response.json();
				if (response.ok === 200){
					getActions().getCategories()
				}
				console.log(data) 
			},
			getBrands : async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL+'/api/get_all_brands')	
					const data = await response.json()
					
					if(response.ok){
						setStore({ brands: data})
					}
				 } catch (error) {
					console.log(error)
				 }
			},
			getProductsByBrands: async (result) => {

				try {

				   const idToDisplay = result.id				
				   const response = await fetch(process.env.BACKEND_URL+'/api/get_all_product_by_brand/' + idToDisplay)	
				   const data = await response.json()
				   
				   if(response.ok){
					   setStore({ productsByBrands: data})
				   }
				} catch (error) {
				   console.log(error)
				}
		    },
			getShoppingCart: () => {

				setStore ({ cart: localStorage.getItem('cart')
					? JSON.parse(localStorage.getItem('cart'))
					: []
				})
			},
			addToCart: (product) => {

				const store = getStore();
				const exist = store.cart.find((item) => item.id === product.id );
				if (exist){
					const newCartItems = store.cart.map((item) => 
					item.id === product.id ? {...exist, qty: exist.qty + 1} : item
				);
					setStore({ cart: newCartItems })
					localStorage.setItem('cart', JSON.stringify(newCartItems));

				} else {
					const newCartItems = [...store.cart, { ...product, qty: 1}];
					setStore({ cart: newCartItems })
					localStorage.setItem('cart', JSON.stringify(newCartItems));
				}
			},
			addToCartQty: (product, quantity) => {
				const store = getStore();
				const productIndex = store.cart.findIndex(item => item.id === product.id);
			
				if (productIndex !== -1) {
					// If the product exists, update the quantity by adding the new quantity
					const updatedCart = [...store.cart];
					updatedCart[productIndex].quantity += quantity;
					setStore({ cart: updatedCart });
				} else {
					// If the product doesn't exist in the cart, add it with the given quantity
					const updatedProduct = { ...product, quantity };
					setStore({ cart: [...store.cart, updatedProduct] });
				}
			},			
			removeFromCart: (product) => {
				const store = getStore();
				const exist = store.cart.find((item) => item.id === product.id );
				if (exist.qty === 1) {
					const newCartItems = store.cart.filter((item) => item.id !== product.id)
					setStore({ cart: newCartItems })
					localStorage.setItem('cart', JSON.stringify(newCartItems));
				} else{
					const newCartItems = store.cart.map((item) => 
					item.id === product.id ? { ...exist, qty: exist.qty -1} : item
					);
					setStore({ cart: newCartItems })
					localStorage.setItem('cart', JSON.stringify(newCartItems));
				}
			},
			createPreference: async (preferencia) => {

				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json',
					body: JSON.stringify(preferencia)
				}
			}
				let response = await fetch(process.env.BACKEND_URL +'/api/add_preference', requestOptions)
				let data = await response.json();
				if (response.ok === 200){
					setStore({preferenceId: data.id})
				}
				console.log(data.id) 

			},
            filterProducts: (query) => {
                const store = getStore();
                const lowerCaseQuery = query.toLowerCase();

                const filtered = store.products.filter(product => {
                    return (
                        product.name.toLowerCase().includes(lowerCaseQuery) ||
                        product.description.toLowerCase().includes(lowerCaseQuery) ||
                        product.category_name.toLowerCase().includes(lowerCaseQuery)
                    );
                });

                setStore({ filteredProducts: filtered });
            },
			emptyCart: () => {
				setStore({cart:{}})
			}
		}
	}
};

export default getState;
