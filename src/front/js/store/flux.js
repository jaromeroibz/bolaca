const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			auth: false,
			error: null,
            loading: false,
			users: [],
			demo: [
				{ title: "FIRST", background: "white", initial: "white" },
				{ title: "SECOND", background: "white", initial: "white" },
			],
			products: [],
			categories: [],
			productDetails: [],
			category: [],
			productsByCategory: [],
			cart: [],
			preferenceId: [],
			filteredProducts: [],
			brands: [],
			productsByBrands: [],
		},
		actions: {
			getShoppingCart: () => {
				try {
					const cart = localStorage.getItem("cart")
						? JSON.parse(localStorage.getItem("cart"))
						: [];

					if (JSON.stringify(getStore().cart) !== JSON.stringify(cart)) {
						setStore({ cart });
					}
				} catch (error) {
					console.error("Error retrieving shopping cart:", error);
				}
			},
			addToCart: (product) => {
				const store = getStore();
				const exist = store.cart.find((item) => item.id === product.id);
				if (exist) {
					const newCartItems = store.cart.map((item) =>
						item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
					);
					setStore({ cart: newCartItems });
					localStorage.setItem("cart", JSON.stringify(newCartItems));
				} else {
					const newCartItems = [...store.cart, { ...product, qty: 1 }];
					setStore({ cart: newCartItems });
					localStorage.setItem("cart", JSON.stringify(newCartItems));
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
			getProducts: async () => {
				try {
					if (!process.env.BACKEND_URL) {
						console.error("BACKEND_URL is not defined.");
						return;
					}
					const response = await fetch(`${process.env.BACKEND_URL}/api/get_all_products`);
					const data = await response.json();
					if (response.ok) {
						setStore({ products: data });
					}
				} catch (error) {
					console.error("Error fetching products:", error);
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
			getCategories: async () => {
				try {
					if (!process.env.BACKEND_URL) {
						console.error("BACKEND_URL is not defined.");
						return;
					}
					// Remove credentials and simplify headers
					const response = await fetch(`${process.env.BACKEND_URL}/api/get_category`);
					
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					const data = await response.json();
					setStore({ categories: data });
				} catch (error) {
					console.error("Error fetching categories:", error);
				}
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
			addToCartQty: (product, quantity) => {
				const store = getStore();
				const productIndex = store.cart.findIndex((item) => item.id === product.id);

				if (productIndex !== -1) {
					const updatedCart = [...store.cart];
					updatedCart[productIndex].qty += quantity;
					setStore({ cart: updatedCart });
				} else {
					const updatedProduct = { ...product, qty: quantity };
					setStore({ cart: [...store.cart, updatedProduct] });
				}
			},
			loginAdmin: async (email, password) => {
				console.log('Login desde flux')
				const requestOptions = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					},
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
			saveToDelete: (theid) =>{
				setStore({
					idToDelete: theid
				})
			},
			createPreference: async (preferencia) => {

				const requestOptions = {
					method: 'POST',
					body: JSON.stringify(preferencia)
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
		},
	};
};

export default getState;
