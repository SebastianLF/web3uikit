(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./node_modules/@web3auth/metamask-adapter/dist/metamaskAdapter.esm.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"MetamaskAdapter",(function(){return MetamaskAdapter}));var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/detect-provider/dist/index.js"),_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__),_web3auth_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@web3auth/base/dist/base.esm.js");class MetamaskAdapter extends _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.e{constructor(){let adapterOptions=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"adapterNamespace",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.c.EIP155),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"currentChainNamespace",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.f.EIP155),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"type",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.a.EXTERNAL),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"name",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.METAMASK),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"status",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.NOT_READY),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"rehydrated",!1),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"metamaskProvider",null),this.chainConfig=adapterOptions.chainConfig||null}get provider(){return this.status===_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null}set provider(_){throw new Error("Not implemented")}async init(options){if(super.checkInitializationRequirements(),this.metamaskProvider=await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default()({mustBeMetaMask:!0}),!this.metamaskProvider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.j.notInstalled("Metamask extension is not installed");this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.READY,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.READY,_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.METAMASK);try{options.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(error){this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.ERRORED,error)}}setAdapterSettings(_){}async connect(){if(super.checkConnectionRequirements(),this.chainConfig||(this.chainConfig=Object(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.m)(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.f.EIP155,1)),this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.CONNECTING,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.CONNECTING,{adapter:_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.METAMASK}),!this.metamaskProvider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.notConnectedError("Not able to connect with metamask");try{await this.metamaskProvider.request({method:"eth_requestAccounts"});const{chainId:chainId}=this.metamaskProvider;if(chainId!==this.chainConfig.chainId&&await this.switchChain(this.chainConfig),this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.CONNECTED,!this.provider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.notConnectedError("Failed to connect with provider");return this.provider.once("disconnect",(()=>{this.disconnect()})),this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.CONNECTED,{adapter:_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.METAMASK,reconnected:this.rehydrated}),this.provider}catch(error){throw this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.READY,this.rehydrated=!1,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.ERRORED,error),_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.connectionError("Failed to login with metamask wallet")}}async disconnect(){var _this$provider;let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.CONNECTED)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.disconnectionError("Not connected with wallet");null===(_this$provider=this.provider)||void 0===_this$provider||_this$provider.removeAllListeners(),options.cleanup?(this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.NOT_READY,this.metamaskProvider=null):this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.READY,this.rehydrated=!1,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.DISCONNECTED)}async getUserInfo(){if(this.status!==_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.CONNECTED)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async switchChain(chainConfig){if(!this.metamaskProvider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.notConnectedError("Not connected with wallet");try{await this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:chainConfig.chainId}]})}catch(switchError){if(4902!==switchError.code)throw switchError;await this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:chainConfig.chainId,chainName:chainConfig.displayName,rpcUrls:[chainConfig.rpcTarget]}]})}}}}}]);