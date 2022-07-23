"use strict";(self.webpackChunkweb3uikit=self.webpackChunkweb3uikit||[]).push([[589],{"./node_modules/.pnpm/@web3auth+metamask-adapter@1.1.1_@babel+runtime@7.18.3/node_modules/@web3auth/metamask-adapter/dist/metamaskAdapter.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MetamaskAdapter:()=>MetamaskAdapter});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.18.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@metamask+detect-provider@1.2.0/node_modules/@metamask/detect-provider/dist/index.js"),_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__),_web3auth_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@web3auth+base@1.1.1_@babel+runtime@7.18.3/node_modules/@web3auth/base/dist/base.esm.js");class MetamaskAdapter extends _web3auth_base__WEBPACK_IMPORTED_MODULE_1__.J5{constructor(){let adapterOptions=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.Z)(this,"adapterNamespace",_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.yk.EIP155),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.Z)(this,"currentChainNamespace",_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.EN.EIP155),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.Z)(this,"type",_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.hN.EXTERNAL),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.Z)(this,"name",_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.rW.METAMASK),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.Z)(this,"status",_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.NOT_READY),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.Z)(this,"rehydrated",!1),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.Z)(this,"metamaskProvider",null),this.chainConfig=adapterOptions.chainConfig||null}get provider(){return this.status===_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null}set provider(_){throw new Error("Not implemented")}async init(options){if(super.checkInitializationRequirements(),this.metamaskProvider=await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default()({mustBeMetaMask:!0}),!this.metamaskProvider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_1__.Ty.notInstalled("Metamask extension is not installed");this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.READY,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.n2.READY,_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.rW.METAMASK);try{_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.cM.debug("initializing metamask adapter"),options.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(error){this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.n2.ERRORED,error)}}setAdapterSettings(_){}async connect(){if(super.checkConnectionRequirements(),this.chainConfig||(this.chainConfig=(0,_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.h2)(_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.EN.EIP155,1)),this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.CONNECTING,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.n2.CONNECTING,{adapter:_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.rW.METAMASK}),!this.metamaskProvider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_1__.RM.notConnectedError("Not able to connect with metamask");try{await this.metamaskProvider.request({method:"eth_requestAccounts"});const{chainId}=this.metamaskProvider;if(chainId!==this.chainConfig.chainId&&await this.switchChain(this.chainConfig),this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.CONNECTED,!this.provider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_1__.RM.notConnectedError("Failed to connect with provider");return this.provider.once("disconnect",(()=>{this.disconnect()})),this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.n2.CONNECTED,{adapter:_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.rW.METAMASK,reconnected:this.rehydrated}),this.provider}catch(error){throw this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.READY,this.rehydrated=!1,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.n2.ERRORED,error),_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.RM.connectionError("Failed to login with metamask wallet")}}async disconnect(){var _this$provider;let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.CONNECTED)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_1__.RM.disconnectionError("Not connected with wallet");null===(_this$provider=this.provider)||void 0===_this$provider||_this$provider.removeAllListeners(),options.cleanup?(this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.NOT_READY,this.metamaskProvider=null):this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.READY,this.rehydrated=!1,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.n2.DISCONNECTED)}async getUserInfo(){if(this.status!==_web3auth_base__WEBPACK_IMPORTED_MODULE_1__.MP.CONNECTED)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_1__.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async switchChain(chainConfig){if(!this.metamaskProvider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_1__.RM.notConnectedError("Not connected with wallet");try{await this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:chainConfig.chainId}]})}catch(switchError){if(4902!==switchError.code)throw switchError;await this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:chainConfig.chainId,chainName:chainConfig.displayName,rpcUrls:[chainConfig.rpcTarget]}]})}}}}}]);