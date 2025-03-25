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
				const store = getStore();  // Get the current store state
				const cart = store?.cart || []; // Ensure cart is always an array
			
				console.log("Current cart before adding:", cart);
			
				const exist = cart.find((item) => item.id === product.id);
			
				let updatedCart;
				if (exist) {
					console.log("Product exists, increasing quantity...");
					updatedCart = cart.map((item) =>
						item.id === product.id ? { ...item, qty: item.qty + 1 } : item
					);
				} else {
					console.log("Product does not exist, adding new product...");
					updatedCart = [...cart, { ...product, qty: 1 }];
				}
			
				console.log("Updated cart after adding:", updatedCart);
			
				setStore({ cart: updatedCart });
				localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist cart
			},						
			removeFromCart: (product) => {
				const store = getStore();
				
				// Check if the product exists in the cart
				const exist = store.cart.find((item) => item.id === product.id);
				if (!exist) {
					console.error("Product not found in cart.");
					return; // Exit if the product is not found
				}
			
				// If quantity is 1, remove the product from the cart
				if (exist.qty === 1) {
					const newCartItems = store.cart.filter((item) => item.id !== product.id);
					setStore({ cart: newCartItems });
					localStorage.setItem('cart', JSON.stringify(newCartItems));
				} else {
					// If quantity is more than 1, decrease the quantity by 1
					const newCartItems = store.cart.map((item) =>
						item.id === product.id ? { ...item, qty: item.qty - 1 } : item
					);
					setStore({ cart: newCartItems });
					localStorage.setItem('cart', JSON.stringify(newCartItems));
				}
			},			
			getProducts: async () => {
				try {
					if (!process.env.BACKEND_URL) {
						console.error("BACKEND_URL is not defined.");
						return;
					}
					
					const url = `${process.env.BACKEND_URL}/api/get_all_products`;
					console.log("Attempting to fetch products from:", url);
					
					const response = await fetch(url, {
						method: 'GET',
						credentials: 'include', // Include cookies for cross-origin requests
						headers: {
							'Content-Type': 'application/json',
							'Accept': 'application/json',
							// You can add custom headers here if needed for your API
						},
						mode: 'cors' // Explicitly set CORS mode
					});
					
					// Log full response details
					console.log("Response status:", response.status);
					console.log("Response headers:", Object.fromEntries([...response.headers]));
					
					// Check if response is ok before parsing JSON
					if (!response.ok) {
						const errorText = await response.text();
						console.error(`Server returned ${response.status} ${response.statusText}`);
						console.error("Error response body:", errorText);
						throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText.substring(0, 200)}`);
					}
					
					// Check content type
					const contentType = response.headers.get('content-type');
					if (!contentType || !contentType.includes('application/json')) {
						const textResponse = await response.text();
						console.error("Expected JSON but received:", contentType);
						console.error("Response preview:", textResponse.substring(0, 200));
						throw new TypeError(`Expected JSON response but received ${contentType || 'unknown'} content type`);
					}
					
					const data = await response.json();
					console.log("Successfully parsed JSON data:", data);
					setStore({ products: data });
					
				} catch (error) {
					console.error("Error fetching products:", error);
					// You could also add state handling for the error
					// setStore({ productError: error.message });
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
				console.log(process.env.BACKEND_URL)
				const requestOptions = {
					method: 'POST',
					credentials: 'include',
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
						setStore({ users: data });
						console.log(data)
						localStorage.setItem("token", data.access_token);
						localStorage.setItem("auth", true);
						return data.redirect;
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
			// filterProducts: (query) => {
            //     const store = getStore();
            //     const lowerCaseQuery = query.toLowerCase();

			// 	console.log("Current store:", store); // Check initial state
    		// 	console.log("Search query:", lowerCaseQuery);

			// 	// First, make sure products exist in your store
			// 	if (!store.products) {
			// 		console.error("No products found in store");
			// 		return;
			// 	}
            //     const filtered = store.products.filter(product => {
			// 		console.log("Checking product:", product);
            //         return (
            //             product.name.toLowerCase().includes(lowerCaseQuery) ||
            //             product.description.toLowerCase().includes(lowerCaseQuery) ||
            //             product.category_name.toLowerCase().includes(lowerCaseQuery)
            //         );
            //     });
			// 	console.log("Filtered results:", filtered);

            //     setStore({ ...store, filteredProducts: filtered });

			// 	console.log("Updated store:", getStore());
            // },
			filterProducts: (query) => {
				const store = getStore();
				const lowerCaseQuery = query.toLowerCase();

				// If products aren't loaded yet, load them first
				if (!store.products || store.products.length === 0) {
					actions.getProducts(); // Make sure you have this action
					return;
				}
				
				// Debug logs
				console.log("Current store products:", store.products);
				console.log("Query:", lowerCaseQuery);
				
				// Check if products exist and have data
				if (!store.products || store.products.length === 0) {
					console.error("No products in store");
					return;
				}
			
				// Log a sample product to check its structure
				console.log("Sample product structure:", store.products[0]);
			
				const filtered = store.products.filter(product => {
					// Debug each product comparison
					console.log("Checking product:", {
						name: product.name?.toLowerCase(),
						description: product.description?.toLowerCase(),
						category: product.category_name?.toLowerCase()
					});
					
					// Add null checks for each property
					const nameMatch = product.name && product.name.toLowerCase().includes(lowerCaseQuery);
					const descMatch = product.description && product.description.toLowerCase().includes(lowerCaseQuery);
					const catMatch = product.category_name && product.category_name.toLowerCase().includes(lowerCaseQuery);
					
					return nameMatch || descMatch || catMatch;
				});
			
				console.log("Filtered results:", filtered);
				setStore({ ...store, filteredProducts: filtered });
			},			
			emptyCart: () => {
				setStore({cart:{}})
			}
		},
	};
};

export default getState;
