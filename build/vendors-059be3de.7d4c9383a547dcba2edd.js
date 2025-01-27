(self["webpackChunkreact_hello_webapp"] = self["webpackChunkreact_hello_webapp"] || []).push([[472],{

/***/ 9895:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.r = void 0;
const SDK_MERCADOPAGO_URL = 'https://sdk.mercadopago.com/js/v2';
const SDK_MERCADOPAGO_URL_REGEX = /^https:\/\/sdk\.mercadopago\.com\/js\/v2\/?(\?.*)?$/;
const EXISTING_SCRIPT_MESSAGE_INITIALIZED = 'MercadoPago has already been initialized in your window, please remove the duplicate import';
const EXISTING_SCRIPT_MESSAGE_NOT_AVAILABLE = 'MercadoPago.js not available';
const EXISTING_SCRIPT_MESSAGE_FAILED_TO_LOAD = 'Failed to load MercadoPago.js';
const findScript = () => {
    var scripts = document.querySelectorAll(`script[src^="${SDK_MERCADOPAGO_URL}"`);
    for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        if (!SDK_MERCADOPAGO_URL_REGEX.test(script.src)) {
            continue;
        }
        return script;
    }
    return null;
};
const injectScript = () => {
    const script = document.createElement('script');
    script.src = SDK_MERCADOPAGO_URL;
    const headOrBody = document.head || document.body;
    if (!headOrBody) {
        throw new Error('Expected document.body or document.head not to be null. MercadoPago requires a <body> or a <head> element, please add on your project.');
    }
    headOrBody.appendChild(script);
    return script;
};
let LoadPromise = null;
const loadMercadoPago = () => {
    if (LoadPromise !== null) {
        return LoadPromise;
    }
    LoadPromise = new Promise((resolve, reject) => {
        if (typeof window === 'undefined') {
            // Resolve to null when imported server side. This makes the module
            // safe to import in an isomorphic code base.
            resolve(null);
            return;
        }
        if (window.MercadoPago) {
            console.warn(EXISTING_SCRIPT_MESSAGE_INITIALIZED);
            resolve(window.MercadoPago);
            return;
        }
        try {
            let script = findScript();
            if (script) {
                console.warn(EXISTING_SCRIPT_MESSAGE_INITIALIZED);
            }
            else if (!script) {
                script = injectScript();
            }
            script.addEventListener('load', () => {
                if (window.MercadoPago) {
                    resolve(window.MercadoPago);
                }
                else {
                    reject(new Error(EXISTING_SCRIPT_MESSAGE_NOT_AVAILABLE));
                }
            });
            script.addEventListener('error', () => {
                reject(new Error(EXISTING_SCRIPT_MESSAGE_FAILED_TO_LOAD));
            });
        }
        catch (error) {
            reject(error);
            return;
        }
    });
    return LoadPromise;
};
exports.r = loadMercadoPago;


/***/ }),

/***/ 9938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uW: () => (/* reexport */ wallet),
  Lz: () => (/* reexport */ mercadoPago_initMercadoPago)
});

// UNUSED EXPORTS: CardNumber, CardPayment, ExpirationDate, ExpirationMonth, ExpirationYear, Payment, SecurityCode, StatusScreen, createCardToken, getIdentificationTypes, getInstallments, getIssuers, getPaymentMethods, updateCardToken

// EXTERNAL MODULE: ./node_modules/@mercadopago/sdk-js/dist/index.js
var dist = __webpack_require__(9895);
;// ./node_modules/@mercadopago/sdk-react/esm/mercadoPago/initMercadoPago/index.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class initMercadoPago_MercadoPagoInstance {
    static getInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.publicKey) {
                if (!this.loadedInstanceMercadoPago) {
                    yield (0,dist/* loadMercadoPago */.r)();
                    this.loadedInstanceMercadoPago = true;
                }
                if (!this.instanceMercadoPago) {
                    this.instanceMercadoPago = new window.MercadoPago(this.publicKey, this.options);
                }
                return this.instanceMercadoPago;
            }
            else {
                console.error('Expected the PUBLIC_KEY to render the MercadoPago SDK React');
            }
        });
    }
}
initMercadoPago_MercadoPagoInstance.publicKey = null;
initMercadoPago_MercadoPagoInstance.options = {};
initMercadoPago_MercadoPagoInstance.instanceMercadoPago = undefined;
initMercadoPago_MercadoPagoInstance.loadedInstanceMercadoPago = false;
function isOptionsObjectUnchanged(oldOption, newOption) {
    const checkOptionObject = Object.keys(oldOption).length === Object.keys(newOption).length &&
        Object.keys(oldOption).every((key) => {
            return (Object.prototype.hasOwnProperty.call(newOption, key) && oldOption[key] === newOption[key]);
        });
    return checkOptionObject;
}
/**
 * Create an instance of MercadoPago
 * @param publicKey string
 * @param options TOptions
 */
const initMercadoPago = (publicKey, options) => {
    const injectFrontEndOption = Object.assign(Object.assign({}, options), { frontEndStack: 'react' });
    const didOptionsChange = !isOptionsObjectUnchanged(initMercadoPago_MercadoPagoInstance.options, injectFrontEndOption);
    if (publicKey !== initMercadoPago_MercadoPagoInstance.publicKey || didOptionsChange) {
        initMercadoPago_MercadoPagoInstance.publicKey = publicKey;
        initMercadoPago_MercadoPagoInstance.options = injectFrontEndOption;
        initMercadoPago_MercadoPagoInstance.instanceMercadoPago = undefined;
    }
};
/* harmony default export */ const mercadoPago_initMercadoPago = (initMercadoPago);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// ./node_modules/@mercadopago/sdk-react/esm/bricks/util/initial/index.js
var initial_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const initial_onSubmitDefault = () => initial_awaiter(void 0, void 0, void 0, function* () { });
const initial_onReadyDefault = () => { };
const initial_onErrorDefault = (error) => {
    console.error(error);
};
const initial_onBinChangeDefault = (bin) => {
    {
        console.log(bin);
    }
};
const initial_onClickEditShippingDataDefault = () => {
    console.log('onClickEditShippingData default implementation');
};
const initial_onClickEditBillingDataDefault = () => {
    console.log('onClickEditShippingData default implementation');
};
const initial_onRenderNextStepDefault = (currentStep) => {
    console.log(currentStep);
};
const initial_onRenderPreviousStepDefault = (currentStep) => {
    console.log(currentStep);
};


;// ./node_modules/@mercadopago/sdk-react/esm/bricks/util/renderBrick/index.js
var renderBrick_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const renderBrick_initBrick = ({ settings, name, containerId, controller, }) => renderBrick_awaiter(void 0, void 0, void 0, function* () {
    const instanceMercadoPago = yield initMercadoPago_MercadoPagoInstance.getInstance();
    const bricksBuilder = instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.bricks();
    window[controller] = yield (bricksBuilder === null || bricksBuilder === void 0 ? void 0 : bricksBuilder.create(name, containerId, settings));
});

;// ./node_modules/@mercadopago/sdk-react/esm/bricks/cardPayment/index.js




/**
 * Card Payment Brick allows you to offer payments with credit and debit card at yout checkout.
 *
 * Usage:
 *
 * ```ts
 * import CardPayment, {initMercadoPago} from '@mercadopago/sdk-react'
 *
 * initMercadoPago('YOUR_PUBLIC_KEY')
 *
 * const Example = () => {
 *   return(
 *      <CardPayment
 *       initialization={{amount: AMOUNT}} // AMOUNT is the value from the purchase, its the minium data to initialize CardPayment brick
 *       onSubmit={} // Receives a function that send the payment to backend and, through it, to MercadoPago
 *       />
 *  )
 * }
 * export default Example
 * ```
 *
 * @see {@link https://www.mercadopago.com/developers/en/docs/checkout-bricks/card-payment-brick/introduction Card Payment Brick documentation} for more information.
 */
const CardPayment = ({ onReady = onReadyDefault, onError = onErrorDefault, onSubmit = onSubmitDefault, onBinChange = onBinChangeDefault, initialization, customization, locale, id = 'cardPaymentBrick_container', }) => {
    useEffect(() => {
        // CardPayment uses a debounce to prevent unnecessary reRenders.
        const CardPaymentBrickConfig = {
            settings: {
                initialization,
                customization,
                callbacks: {
                    onReady,
                    onSubmit,
                    onError,
                    onBinChange,
                },
                locale,
            },
            name: 'cardPayment',
            containerId: id,
            controller: 'cardPaymentBrickController',
        };
        const timer = setTimeout(() => {
            initBrick(CardPaymentBrickConfig);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.cardPaymentBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [initialization, customization, onBinChange, onReady, onError, onSubmit]);
    return React.createElement("div", { id: id });
};
const useCardPaymentBrick = () => {
    const update = (updateValues) => {
        if (window.cardPaymentBrickController) {
            window.cardPaymentBrickController.update(updateValues);
        }
        else {
            console.warn('[Checkout Bricks] Card Payment Brick is not initialized yet, please try again after a few seconds.');
        }
    };
    return { update };
};
/* harmony default export */ const cardPayment = ((/* unused pure expression or super */ null && (CardPayment)));


;// ./node_modules/@mercadopago/sdk-react/esm/bricks/payment/index.js




/**
 * Payment Brick allows you to add several payment methods to a store and save card data for future purchases with just one Brick.
 *
 * Usage:
 *
 * ```ts
 * import Payment, {initMercadoPago} from '@mercadopago/sdk-react'
 *
 * initMercadoPago('YOUR_PUBLIC_KEY')
 *
 * const Example = () => {
 *   return(
 *    <Payment
        initialization:{{ amount: AMOUNT }}, // AMOUNT is the value from the purchase, its the minium data to initialize CardPayment brick
        onSubmit={async () => {}} // Callback called when clicking on the data submission button
      />
 *   )
 * }
 * export default Example
 * ```
 *
 * @see {@link https://www.mercadopago.com/developers/en/docs/checkout-bricks/payment-brick/introduction Payment Brick documentation} for more information.
 */
const Payment = ({ onReady = onReadyDefault, onError = onErrorDefault, onSubmit = onSubmitDefault, onBinChange = onBinChangeDefault, onClickEditShippingData = onClickEditShippingDataDefault, onClickEditBillingData = onClickEditBillingDataDefault, onRenderNextStep = onRenderNextStepDefault, onRenderPreviousStep = onRenderPreviousStepDefault, initialization, customization, locale, id = 'paymentBrick_container', }) => {
    useEffect(() => {
        // Payment uses a debounce to prevent unnecessary reRenders.
        const PaymentBrickController = {
            settings: {
                initialization,
                customization,
                locale,
                callbacks: {
                    onReady,
                    onError,
                    onSubmit,
                    onBinChange,
                    onClickEditShippingData,
                    onClickEditBillingData,
                    onRenderNextStep,
                    onRenderPreviousStep,
                },
            },
            name: 'payment',
            containerId: id,
            controller: 'paymentBrickController',
        };
        const timer = setTimeout(() => {
            initBrick(PaymentBrickController);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.paymentBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [initialization, customization, onReady, onError, onSubmit, onBinChange]);
    return React.createElement("div", { id: id });
};
const usePaymentBrick = () => {
    const update = (updateValues) => {
        if (window.paymentBrickController) {
            window.paymentBrickController.update(updateValues);
        }
        else {
            console.warn('[Checkout Bricks] Payment Brick is not initialized yet, please try again after a few seconds.');
        }
    };
    return { update };
};
/* harmony default export */ const payment = ((/* unused pure expression or super */ null && (Payment)));


;// ./node_modules/@mercadopago/sdk-react/esm/bricks/statusScreen/index.js




// /**
//  * Status Screen Brick allows you to show buyer the status of a purchase made with any payment method provided by Checkout Bricks.
//  *
//  * Usage:
//  *
//  * ```ts
//  * import StatusScreen, {initMercadoPago} from '@mercadopago/sdk-react'
//  *
//  * initMercadoPago('YOUR_PUBLIC_KEY')
//  *
//  * const Example = () => {
//  *   return(
//  *     <StatusScreen
//  *       initialization={{ preferenceId: '<PREFERENCE_ID>'}} // PREFERENCE_ID generated in backend
//  *       onReady={() => {}} // Callback called when Brick is ready
//  *       onError={() => {}} // Callback called for all Brick error cases
//  *     />
//  *   )
//  * }
//  * export default Example
//  * ```
//  *
//  * @see {@link https://www.mercadopago.com/developers/en/docs/checkout-bricks/status-screen-brick/introduction Status Screen Brick documentation} for more information.
//  */
const StatusScreen = ({ onReady = onReadyDefault, onError = onErrorDefault, customization, initialization, locale, id = 'statusScreenBrick_container', }) => {
    useEffect(() => {
        // Status Screen uses a debounce to prevent unnecessary reRenders.
        const StatusScreenBrickConfig = {
            settings: {
                initialization,
                customization,
                locale,
                callbacks: {
                    onReady,
                    onError,
                },
            },
            name: 'statusScreen',
            containerId: id,
            controller: 'statusScreenBrickController',
        };
        const timer = setTimeout(() => {
            initBrick(StatusScreenBrickConfig);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.statusScreenBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [initialization, customization, onReady, onError]);
    return React.createElement("div", { id: id });
};
/* harmony default export */ const statusScreen = ((/* unused pure expression or super */ null && (StatusScreen)));

;// ./node_modules/@mercadopago/sdk-react/esm/bricks/util/constants/index.js
// Bricks uses a debounce to prevent unnecessary reRenders.
const constants_DEBOUNCE_TIME_RENDER = 200; //ms

;// ./node_modules/@mercadopago/sdk-react/esm/bricks/wallet/index.js




/**
 * Wallet Brick allows you to offer payments from your Mercado Pago account at any stage of the purchase process.
 *
 * Usage:
 *
 * ```ts
 * import Wallet, {initMercadoPago} from '@mercadopago/sdk-react'
 *
 * initMercadoPago('YOUR_PUBLIC_KEY')
 *
 * const Example = () => {
 *   return(
 *     <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>'}} /> // PREFERENCE_ID generated in backend
 *   )
 * }
 * export default Example
 * ```
 *
 * @see {@link https://www.mercadopago.com/developers/en/docs/checkout-bricks/wallet-brick/introduction Wallet Brick documentation} for more information.
 */
const Wallet = ({ onReady = initial_onReadyDefault, onError = initial_onErrorDefault, onSubmit = initial_onSubmitDefault, customization, initialization, brand, locale, id = 'walletBrick_container', }) => {
    (0,react.useEffect)(() => {
        // CardPayment uses a debounce to prevent unnecessary reRenders.
        const WalletBrickConfig = {
            settings: {
                brand,
                initialization,
                customization,
                locale,
                callbacks: {
                    onReady: onReady,
                    onSubmit: onSubmit,
                    onError: onError,
                },
            },
            name: 'wallet',
            containerId: id,
            controller: 'walletBrickController',
        };
        const timer = setTimeout(() => {
            renderBrick_initBrick(WalletBrickConfig);
        }, constants_DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.walletBrickController) === null || _a === void 0 ? void 0 : _a.unmount();
        };
    }, [customization, initialization, onReady, onError, onSubmit]);
    return react.createElement("div", { id: id });
};
/* harmony default export */ const wallet = (Wallet);

;// ./node_modules/@mercadopago/sdk-react/esm/coreMethods/getIdentificationTypes/index.js
var getIdentificationTypes_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Return all the document types based on the public_key
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancegetidentificationtypes method documentation}.
 * @see {@link https://www.mercadopago.com/developers/en/reference/identification_types/_identification_types/get response documentation}.
 */
const getIdentificationTypes = () => getIdentificationTypes_awaiter(void 0, void 0, void 0, function* () {
    const instanceMercadoPago = yield MercadoPagoInstance.getInstance();
    return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getIdentificationTypes();
});
/* harmony default export */ const coreMethods_getIdentificationTypes = ((/* unused pure expression or super */ null && (getIdentificationTypes)));

;// ./node_modules/@mercadopago/sdk-react/esm/coreMethods/getPaymentMethods/index.js
var getPaymentMethods_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Returns a payment methods list.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancegetpaymentmethodspaymentmethodsparams method documentation}.
 * @see {@link https://www.mercadopago.com/developers/en/reference/payment_methods/_payment_methods/get response documentation}.
 */
const getPaymentMethods = (paymentMethodsParams) => getPaymentMethods_awaiter(void 0, void 0, void 0, function* () {
    const instanceMercadoPago = yield MercadoPagoInstance.getInstance();
    return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getPaymentMethods(paymentMethodsParams);
});
/* harmony default export */ const coreMethods_getPaymentMethods = ((/* unused pure expression or super */ null && (getPaymentMethods)));

;// ./node_modules/@mercadopago/sdk-react/esm/coreMethods/getInstallments/index.js
var getInstallments_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Returns all installments available.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancegetinstallmentsinstallmentsparams method documentation}.
 */
const getInstallments = (installmentsParams) => getInstallments_awaiter(void 0, void 0, void 0, function* () {
    const instanceMercadoPago = yield MercadoPagoInstance.getInstance();
    return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getInstallments(installmentsParams);
});
/* harmony default export */ const coreMethods_getInstallments = ((/* unused pure expression or super */ null && (getInstallments)));

;// ./node_modules/@mercadopago/sdk-react/esm/coreMethods/getIssuers/index.js
var getIssuers_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Returns a issuers list.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancegetissuersissuersparams method documentation}.
 */
const getIssuers = (issuersParams) => getIssuers_awaiter(void 0, void 0, void 0, function* () {
    const instanceMercadoPago = yield MercadoPagoInstance.getInstance();
    return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.getIssuers(issuersParams);
});
/* harmony default export */ const coreMethods_getIssuers = ((/* unused pure expression or super */ null && (getIssuers)));

;// ./node_modules/@mercadopago/sdk-react/esm/secureFields/createCardToken/index.js
var createCardToken_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Secure Fields token creation method.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/fields.md#mp-instancefieldscreatecardtokennonpcidata method documentation}.
 */
const createCardToken = (cardTokenParams) => createCardToken_awaiter(void 0, void 0, void 0, function* () {
    const instanceMercadoPago = yield MercadoPagoInstance.getInstance();
    return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.fields.createCardToken(cardTokenParams);
});
/* harmony default export */ const secureFields_createCardToken = ((/* unused pure expression or super */ null && (createCardToken)));

;// ./node_modules/@mercadopago/sdk-react/esm/secureFields/updateCardToken/index.js
var updateCardToken_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** Secure Fields token update method. */
const updateCardToken = (token) => updateCardToken_awaiter(void 0, void 0, void 0, function* () {
    const instanceMercadoPago = yield MercadoPagoInstance.getInstance();
    return instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.fields.updateCardToken(token);
});
/* harmony default export */ const secureFields_updateCardToken = ((/* unused pure expression or super */ null && (updateCardToken)));

;// ./node_modules/@mercadopago/sdk-react/esm/secureFields/util/index.js
var util_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const util_getInitializationDependencies = (params, keysToExclude) => {
    const dependencies = [];
    const entries = Object.entries(params);
    for (const [key, value] of entries) {
        const shouldAdd = !keysToExclude.includes(key);
        shouldAdd && dependencies.push(value);
    }
    return dependencies;
};
const getOptions = ({ enableLuhnValidation, customFonts, placeholder, group, style, mode, }) => {
    return {
        enableLuhnValidation,
        customFonts,
        placeholder,
        group,
        style,
        mode,
    };
};
const secureFieldEvents = (/* unused pure expression or super */ null && ([
    'onValidityChange',
    'onBinChange',
    'onChange',
    'onError',
    'onFocus',
    'onReady',
    'onBlur',
]));
const uncapitalizeFirstLetter = (str) => str.charAt(0).toLowerCase() + str.slice(1);
const formatEventName = (eventName) => uncapitalizeFirstLetter(eventName.slice(2));
const registerEvents = (secureFieldInstance, params) => {
    const keys = Object.keys(params);
    for (const key of keys) {
        if (secureFieldEvents.includes(key)) {
            const event = formatEventName(key);
            const callback = params[key];
            secureFieldInstance.on(event, callback);
        }
    }
};
const util_initSecureField = (fieldName, params) => util_awaiter(void 0, void 0, void 0, function* () {
    const options = getOptions(params);
    const instanceMercadoPago = yield MercadoPagoInstance.getInstance();
    const secureFieldInstance = instanceMercadoPago === null || instanceMercadoPago === void 0 ? void 0 : instanceMercadoPago.fields.create(fieldName, options);
    if (secureFieldInstance) {
        secureFieldInstance.mount(`${fieldName}SecureField_container`);
        registerEvents(secureFieldInstance, params);
    }
    return secureFieldInstance;
});

;// ./node_modules/@mercadopago/sdk-react/esm/secureFields/cardNumber/index.js



const CardNumber = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder', 'length']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('cardNumber', params)
                .then(instance => window.cardNumberInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.cardNumberInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.cardNumberInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "cardNumberSecureField_container" });
};
/* harmony default export */ const cardNumber = ((/* unused pure expression or super */ null && (CardNumber)));

;// ./node_modules/@mercadopago/sdk-react/esm/secureFields/securityCode/index.js



const SecurityCode = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder', 'length', 'mode']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('securityCode', params)
                .then(instance => window.securityCodeInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.securityCodeInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.securityCodeInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "securityCodeSecureField_container" });
};
/* harmony default export */ const securityCode = ((/* unused pure expression or super */ null && (SecurityCode)));

;// ./node_modules/@mercadopago/sdk-react/esm/secureFields/expirationDate/index.js



const ExpirationDate = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('expirationDate', params)
                .then(instance => window.expirationDateInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.expirationDateInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationDateInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "expirationDateSecureField_container" });
};
/* harmony default export */ const expirationDate = ((/* unused pure expression or super */ null && (ExpirationDate)));

;// ./node_modules/@mercadopago/sdk-react/esm/secureFields/expirationMonth/index.js



const ExpirationMonth = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('expirationMonth', params)
                .then(instance => window.expirationMonthInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.expirationMonthInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationMonthInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "expirationMonthSecureField_container" });
};
/* harmony default export */ const expirationMonth = ((/* unused pure expression or super */ null && (ExpirationMonth)));

;// ./node_modules/@mercadopago/sdk-react/esm/secureFields/expirationYear/index.js



const ExpirationYear = (params) => {
    const initializationDependencies = getInitializationDependencies(params, ['placeholder']);
    useEffect(() => {
        // SecureField uses a debounce to prevent unnecessary reRenders.
        let timer;
        timer = setTimeout(() => {
            initSecureField('expirationYear', params)
                .then(instance => window.expirationYearInstance = instance);
        }, DEBOUNCE_TIME_RENDER);
        return () => {
            var _a;
            clearTimeout(timer);
            (_a = window.expirationYearInstance) === null || _a === void 0 ? void 0 : _a.unmount();
            window.expirationYearInstance = undefined;
        };
    }, initializationDependencies);
    return React.createElement("div", { id: "expirationYearSecureField_container" });
};
/* harmony default export */ const expirationYear = ((/* unused pure expression or super */ null && (ExpirationYear)));

;// ./node_modules/@mercadopago/sdk-react/esm/index.js



















/***/ }),

/***/ 181:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ 5606:
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

}]);