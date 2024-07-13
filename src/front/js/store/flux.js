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
			category:[]
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
				console.log('Login desde flux')
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-type': 'application/json' },
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
			logout: () => {
				console.log('Log out desde flux')
				setStore({auth: false});
				localStorage.removeItem("token");
				localStorage.removeItem("auth");

			},
			getProducts: async () => {

				try {
				   const response = await fetch(process.env.BACKEND_URL+'/api/get_all_products')	
				   const data = await response.json()
				   console.log(data)
				   console.log(response)
				   
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
		}
		}
	}
};

export default getState;
