var TcHmi;!function(TcHmi){let Controls;!function(Controls){let BaseTemplate;!function(BaseTemplate){class TcHmiNavigation extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__navigationStructure=[],this.__activeHistory=[],this.__eventDestroyFunctions=[],this.__randomElementId=1,this.__breadcrumbCallbackFunction=content=>{var _a;null===(_a=this.__targetRegion)||void 0===_a||_a.setTargetContent(content)},this.__onResolverForNavgiationStructureWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("navigationStructure"),tchmi_equal(data.value,this.__navigationStructure)||(data.value&&(this.__navigationStructure=data.value),TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"NavigationStructure"}),this.__processNavigationStructure())},this.__onResolverForTextColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textColor"),tchmi_equal(data.value,this.__textColor)||(this.__textColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextColor"}),this.__processTextColor())},this.__mouseupHandler=this.__onMouseUp()}__previnit(){if(this.__elementTemplateRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_BaseTemplate_TcHmiNavigation-Template")[0],!this.__elementTemplateRoot)throw new Error("Invalid Template.html");if(this.__elementNavigationRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_BaseTemplate_TcHmiNavigation-Navigation")[0],!this.__elementNavigationRoot)throw new Error("Invalid Template.html");if(this.__elementStaticRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_BaseTemplate_TcHmiNavigation-Static")[0],!this.__elementStaticRoot)throw new Error("Invalid Template.html");if(this.__elementContextRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_BaseTemplate_TcHmiNavigation-Context")[0],!this.__elementContextRoot)throw new Error("Invalid Template.html");if(this.__elementBackRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_BaseTemplate_TcHmiNavigation-Back")[0],!this.__elementBackRoot)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),this.__targetRegion&&!this.__regionChangeEvent&&(this.__regionChangeEvent=TcHmi.EventProvider.register(this.__targetRegion.getId()+".onTargetContentReplaced",this.__onRegionContentChanged()));const passiveEventOptions={passive:!0,capture:!1};document.addEventListener("mouseup",this.__mouseupHandler,passiveEventOptions),document.addEventListener("touchend",this.__mouseupHandler,passiveEventOptions)}__detach(){super.__detach();const passiveEventOptions={passive:!0,capture:!1};document.removeEventListener("mouseup",this.__mouseupHandler,passiveEventOptions),document.removeEventListener("touchend",this.__mouseupHandler,passiveEventOptions)}destroy(){if(!this.__keepAlive){if(super.destroy(),this.__eventDestroyFunctions)for(let e of this.__eventDestroyFunctions)e();this.__regionChangeEvent&&this.__regionChangeEvent(),this.__buttonBack&&this.__buttonBack.destroy(),this.__destroyContextMenu(),this.__destroyStaticMenu()}}__createNavigation(){var _a;if(this.__elementStaticRoot.textContent="",this.__navigationStructure){for(let e of this.__navigationStructure){if(e.tchmi_button&&e.tchmi_button.destroy(),e.events)for(let a of e.events)a();e.events=[],e.icon&&(e.icon.empty(),e.icon=void 0),this.__createNavButton(e),void 0!==e.tchmi_button&&this.__elementStaticRoot.append(e.tchmi_button.getElement()[0])}(null===(_a=this.__activeElement)||void 0===_a?void 0:_a.tchmi_button)&&this.__activeElement.tchmi_button.getElement().addClass("active"),this.__createContextMenu(),this.__createBackButton(),this.__updateIcons()}}__setRegionContent(element){void 0!==this.__targetRegion&&null!==this.__targetRegion&&this.__targetRegion.setTargetContent(element.content)}__setContentHeights(){if(this.__staticMenuHeight&&this.__staticMenuHeightUnit&&this.__elementStaticRoot&&this.__elementContextRoot&&this.__elementNavigationRoot)if("%"===this.__staticMenuHeightUnit)this.__elementStaticRoot.style.height=this.__staticMenuHeight+"%",this.__elementContextRoot.style.height=100-this.__staticMenuHeight+"%";else if("px"===this.__staticMenuHeightUnit){let height=this.__elementNavigationRoot.clientHeight;height>this.__staticMenuHeight&&(this.__elementStaticRoot.style.height=this.__staticMenuHeight+"px",this.__elementContextRoot.style.height=height-this.__staticMenuHeight+"px")}}__createNavButton(element){let observeAccessId=element.id+":observe",operateAccessId=element.id+":operate",observeAccess=TcHmi.Access.checkAccess(this,observeAccessId),operateAccess=TcHmi.Access.checkAccess(this,operateAccessId);void 0===TcHmi.Controls.get(this.getId()+"."+element.id)&&observeAccess&&(element.tchmi_button=TcHmi.ControlFactory.create("TcHmi.Controls.Beckhoff.TcHmiButton",this.getId()+"."+element.id,this),void 0!==element.tchmi_button&&(TcHmi.Symbol.isSymbolExpression(element.name)?TcHmi.Binding.createEx(element.name,"setText",element.tchmi_button):element.tchmi_button.setText(element.name),this.__textFontSize&&element.tchmi_button.setTextFontSize(this.__textFontSize),this.__textFontSizeUnit&&element.tchmi_button.setTextFontSizeUnit(this.__textFontSizeUnit),this.__textColor&&this.__activeElement!==element&&element.tchmi_button.setTextColor(this.__textColor),element.tchmi_button.setIsEnabled(operateAccess),operateAccess&&(void 0===element.events&&(element.events=[]),element.events.push(TcHmi.EventProvider.register(this.getId()+"."+element.id+".onPressed",this.__onMouseUp(element))),element.events.push(TcHmi.EventProvider.register(this.getId()+"."+element.id+".onMouseDown",this.__onNavButtonDown(element))),element.events.push(TcHmi.EventProvider.register(this.getId()+"."+element.id+".onTouchStart",this.__onNavButtonDown(element))),element.events.push(TcHmi.EventProvider.register(this.getId()+"."+element.id+".onMouseLeave",this.__onNavButtonCancel(element))),element.events.push(TcHmi.EventProvider.register(this.getId()+"."+element.id+".onTouchCancel",this.__onNavButtonCancel(element))),element.events.push(TcHmi.EventProvider.register(this.getId()+"."+element.id+".onTouchEnd",this.__onNavButtonCancel(element))),element.events.push(TcHmi.EventProvider.register(this.getId()+"."+element.id+".onMouseEnter",this.__onNavButtonEnter(element)))),this.__createIcon(element)))}__createIcon(element){element&&element.tchmi_button&&!element.icon&&(this.__iconHeight&&element.tchmi_button.setIconHeight(this.__iconHeight),this.__iconHeightUnit&&element.tchmi_button.setIconHeightUnit(this.__iconHeightUnit),this.__iconWidth&&element.tchmi_button.setIconWidth(this.__iconWidth),this.__iconWidthUnit&&element.tchmi_button.setIconWidthUnit(this.__iconWidthUnit),element.icon_n&&element!==this.__activeElement?element.tchmi_button.getElement()[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiButton-template")[0].style.backgroundImage="url("+element.icon_n+")":element.icon_a&&element===this.__activeElement&&(element.tchmi_button.getElement()[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiButton-template")[0].style.backgroundImage="url("+element.icon_a+")"))}__createBackButton(){void 0===TcHmi.Controls.get(this.getId()+".__back")&&(this.__buttonBack=TcHmi.ControlFactory.createEx("TcHmi.Controls.Beckhoff.TcHmiButton",this.getId()+".__back",{"data-tchmi-text":"%l%Control::TcHmi.Controls.BaseTemplate.TcHmiNavigation::ButtonBack_Text%/l%","data-tchmi-text-font-size":this.__textFontSize,"data-tchmi-text-font-size-unit":this.__textFontSizeUnit},this),void 0!==this.__buttonBack&&this.__elementBackRoot.append(this.__buttonBack.getElement()[0]),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".__back.onPressed",this.__onBackButtonPressed())),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".__back.onMouseDown",this.__onBackButtonDown())),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".__back.onTouchStart",this.__onBackButtonDown())),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".__back.onMouseLeave",this.__onBackButtonCancel())),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".__back.onTouchCancel",this.__onBackButtonCancel())),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".__back.onTouchEnd",this.__onBackButtonCancel())),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".__back.onMouseEnter",this.__onBackButtonEnter())))}__destroyStaticMenu(){if(this.__elementContextRoot.textContent="",this.__navigationStructure)for(let e of this.__navigationStructure){if(e.events)for(let d of e.events)d();e.tchmi_button&&(e.tchmi_button.destroy(),e.tchmi_button=void 0)}}__destroyContextMenu(){var _a;if(this.__elementContextRoot.textContent="",null===(_a=this.__activeElement)||void 0===_a?void 0:_a.subItem)for(let e of this.__activeElement.subItem){if(e.events)for(let s of e.events)s();e.events=[],e.tchmi_button&&(e.tchmi_button.destroy(),e.tchmi_button=void 0),e.icon&&(e.icon.empty(),e.icon=void 0)}}__createContextMenu(){if(this.__elementContextRoot.textContent="",this.__activeElement)if(this.__activeElement.subItem)for(let e of this.__activeElement.subItem)this.__createNavButton(e),e.tchmi_button&&this.__elementContextRoot.append(e.tchmi_button.getElement()[0]),this.__setNormalIcon(e);else if(this.__keepLowestLevel){for(let element of this.__navigationStructure)if(element===this.__activeElement)return;let parentStructure=this.__getParentStructure(this.__navigationStructure,this.__activeElement);if(parentStructure)for(let e of parentStructure)this.__createNavButton(e),e.tchmi_button&&this.__elementContextRoot.append(e.tchmi_button.getElement()[0]),e===this.__activeElement?this.__setActiveIcon(e):this.__setNormalIcon(e)}}__createBreadcrumb(){if(this.__breadcrumb){let bcItems=this.__getBreadcrumbPath(this.__navigationStructure);bcItems&&this.__breadcrumb.setBreadcrumbData(bcItems,this.__breadcrumbCallbackFunction)}}__getBreadcrumbPath(element){let breadcrumbData=[];if(this.__activeElement)for(let e of element){if(e===this.__activeElement)return breadcrumbData.unshift(e),breadcrumbData;if(e.subItem){let result=this.__getBreadcrumbPath(e.subItem);if(null!=result){for(let bc of result)breadcrumbData.push(bc);return breadcrumbData.unshift(e),breadcrumbData}}}return null}__setActiveElement(element){var _a;this.__activeElement!==element?(this.__activeHistory.unshift(element),this.__activeHistory.length>50&&this.__activeHistory.pop(),this.__destroyContextMenu(),(null===(_a=this.__activeElement)||void 0===_a?void 0:_a.tchmi_button)&&(this.__setNormalIcon(this.__activeElement),this.__activeElement.tchmi_button.getElement().removeClass("active")),this.__activeElement=element,this.__setRegionContent(element),this.__createContextMenu(),element.tchmi_button&&(this.__setActiveIcon(this.__activeElement),element.tchmi_button.getElement().addClass("active")),this.__createBreadcrumb()):this.__setActiveIcon(this.__activeElement)}__backAction(){this.__activeHistory&&this.__activeHistory.length>=2&&this.__activeElement&&(this.__destroyContextMenu(),this.__activeElement.tchmi_button&&(this.__setNormalIcon(this.__activeElement),this.__activeElement.tchmi_button.getElement().removeClass("active")),this.__activeElement=this.__activeHistory[1],this.__setRegionContent(this.__activeHistory[1]),this.__createContextMenu(),this.__activeHistory.shift(),this.__activeElement.tchmi_button&&(this.__setActiveIcon(this.__activeElement),this.__activeElement.tchmi_button.getElement().addClass("active")),this.__createBreadcrumb()),this.__textColor&&this.__buttonBack&&(this.__buttonBack.setTextColor(this.__textColor),this.__buttonBack.getElement()[0].classList.remove("down"))}__searchForActiveContent(element){for(let e of element){if(!this.__activeElement||!this.__targetRegion)return;if(this.__activeElement.content===this.__targetRegion.getTargetContent())return;if(e.content===this.__targetRegion.getTargetContent())return void this.__setActiveElement(e);void 0!==e.subItem&&this.__searchForActiveContent(e.subItem)}}__getParentStructure(structure,childElement){for(let element of structure){if(element===childElement)return structure;if(element.subItem){let result=this.__getParentStructure(element.subItem,childElement);if(result)return result}}return null}__setNormalIcon(element){var _a,_b,_c;element.icon_n?((null===(_a=element.tchmi_button)||void 0===_a?void 0:_a.getElement()[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiButton-template")[0]).style.backgroundImage="url("+element.icon_n+")",null===(_b=element.tchmi_button)||void 0===_b||_b.getElement()[0].classList.add("icon")):null===(_c=element.tchmi_button)||void 0===_c||_c.getElement()[0].classList.remove("icon")}__setPressedIcon(element){var _a,_b,_c,_d,_e;element.icon_p?((null===(_a=element.tchmi_button)||void 0===_a?void 0:_a.getElement()[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiButton-template")[0]).style.backgroundImage="url("+element.icon_p+")",null===(_b=element.tchmi_button)||void 0===_b||_b.getElement()[0].classList.add("icon")):element.icon_n?((null===(_c=element.tchmi_button)||void 0===_c?void 0:_c.getElement()[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiButton-template")[0]).style.backgroundImage="url("+element.icon_n+")",null===(_d=element.tchmi_button)||void 0===_d||_d.getElement()[0].classList.add("icon")):null===(_e=element.tchmi_button)||void 0===_e||_e.getElement()[0].classList.remove("icon")}__setActiveIcon(element){var _a,_b,_c,_d,_e;element.icon_a?((null===(_a=element.tchmi_button)||void 0===_a?void 0:_a.getElement()[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiButton-template")[0]).style.backgroundImage="url("+element.icon_a+")",null===(_b=element.tchmi_button)||void 0===_b||_b.getElement()[0].classList.add("icon")):element.icon_n?((null===(_c=element.tchmi_button)||void 0===_c?void 0:_c.getElement()[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiButton-template")[0]).style.backgroundImage="url("+element.icon_n+")",null===(_d=element.tchmi_button)||void 0===_d||_d.getElement()[0].classList.add("icon")):null===(_e=element.tchmi_button)||void 0===_e||_e.getElement()[0].classList.remove("icon")}__updateIcons(){var _a;if(this.__navigationStructure)for(let element of this.__navigationStructure)element!==this.__activeElement?this.__setNormalIcon(element):this.__setActiveIcon(element);if(null===(_a=this.__activeElement)||void 0===_a?void 0:_a.subItem)for(let element of this.__activeElement.subItem)this.__setNormalIcon(element);this.__buttonBack&&(this.__textColor?this.__buttonBack.setTextColor(this.__textColor):this.__buttonBack.setTextColor(null))}getAccessConfig(){const currentAccessConfig=super.getAccessConfig();return this.__getSubRights(this.__navigationStructure,currentAccessConfig)}__getSubRights(element,accessList){var _a,_b;if(!element)return accessList;for(let i=0;i<element.length;i++){if(0!==(null===(_b=null===(_a=element[i])||void 0===_a?void 0:_a.accessRights)||void 0===_b?void 0:_b.length))for(let j=0;j<element[i].accessRights.length;j++)if(element[i].accessRights[j]){let curAccess={accessright:element[i].id+":"+element[i].accessRights[j].accessright,group:element[i].accessRights[j].group,permission:element[i].accessRights[j].permission};accessList.push(curAccess)}if(element[i].subItem&&void 0!==accessList&&accessList){let accessListTmp=this.__getSubRights(element[i].subItem,accessList);accessListTmp&&(accessList=accessListTmp)}}return accessList}__onMouseUp(element){return event=>{element&&this.__setActiveElement(element),this.__mouseDownButton=void 0}}__onNavButtonDown(element){return event=>{element.tchmi_button&&(this.__mouseDownButton=element.tchmi_button),element!==this.__activeElement&&this.__setPressedIcon(element)}}__onNavButtonCancel(element){return event=>{this.__mouseFokus=void 0,element!==this.__activeElement?this.__setNormalIcon(element):this.__setActiveIcon(element)}}__onNavButtonEnter(element){return event=>{element!==this.__activeElement&&this.__mouseDownButton===element.tchmi_button&&this.__setPressedIcon(element),element.tchmi_button&&(this.__mouseFokus=element.tchmi_button)}}__onBackButtonPressed(){return event=>{this.__backAction()}}__onBackButtonDown(){return event=>{this.__buttonBack&&(this.__mouseDownButton=this.__buttonBack)}}__onBackButtonCancel(){return event=>{this.__mouseFokus=void 0,this.__buttonBack&&(this.__textColor&&this.__buttonBack?this.__buttonBack.setTextColor(this.__textColor):this.__buttonBack.setTextColor(null))}}__onBackButtonEnter(){return event=>{this.__buttonBack&&(this.__mouseFokus=this.__buttonBack)}}__onRegionContentChanged(){return event=>{this.__activeElement&&this.__targetRegion&&this.__activeElement.content!==this.__targetRegion.getTargetContent()&&this.__searchForActiveContent(this.__navigationStructure)}}setNavigationStructure(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("NavigationStructure")),!convertedValue||Array.isArray(convertedValue)?convertedValue!==this.__navigationStructure&&(this.__destroyContextMenu(),this.__destroyStaticMenu(),this.__navigationStructure=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"NavigationStructure"}),this.__processNavigationStructure()):TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.BaseTemplate.TcHmiNavigation, Id="+this.getId()+", Attribute=NavigationStructure] Non array values are not supported.")}getNavigationStructure(){return this.__navigationStructure}__processNavigationStructure(){if(this.__navigationStructure&&(this.__setNavElementId(this.__navigationStructure),this.__activeElement=this.__navigationStructure[0],this.__activeHistory&&(this.__activeHistory.splice(0,this.__activeHistory.length),this.__activeHistory.unshift(this.__navigationStructure[0])),this.__targetRegion)){this.__targetRegion.getTargetContent()?this.__searchForActiveContent(this.__navigationStructure):this.__activeHistory.unshift(this.__navigationStructure[0])}this.__createNavigation(),this.__createBreadcrumb()}__setNavElementId(element){var _a;for(let e of element){if(!e.id&&e.name){let name;name=TcHmi.Symbol.isSymbolExpression(e.name)?null!==(_a=new TcHmi.SymbolExpression(e.name).getContent())&&void 0!==_a?_a:e.name:e.name.replace(/ /g,"_"),e.id=name+"_"+this.__randomElementId,this.__randomElementId++}e.subItem&&this.__setNavElementId(e.subItem)}}setTextColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextColor"));let resolverInfo=this.__objectResolvers.get("textColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("textColor",{resolver:resolver,watchCallback:this.__onResolverForTextColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextColorWatchCallback)})}getTextColor(){return this.__textColor}__processTextColor(){var _a;if(this.__navigationStructure&&void 0!==this.__textColor){for(let element of this.__navigationStructure)element!==this.__activeElement&&(element.tchmi_button&&element.tchmi_button.setTextColor(this.__textColor),element.icon&&TcHmi.StyleProvider.processStrokeColor(element.icon.children(),this.__textColor));if(null===(_a=this.__activeElement)||void 0===_a?void 0:_a.subItem)for(let e of this.__activeElement.subItem)e.tchmi_button&&e.tchmi_button.setTextColor(this.__textColor),e.icon&&TcHmi.StyleProvider.processStrokeColor(e.icon.children(),this.__textColor)}this.__buttonBack&&void 0!==this.__textColor&&this.__buttonBack.setTextColor(this.__textColor)}setTargetRegion(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetRegion")),convertedValue!==this.__targetRegion&&(this.__targetRegion=valueNew,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetRegion"}),this.__processTargetRegion())}getTargetRegion(){return this.__targetRegion}__processTargetRegion(){this.__targetRegion&&(this.__targetRegion&&(this.__regionChangeEvent=TcHmi.EventProvider.register(this.__targetRegion.getId()+".onTargetContentReplaced",this.__onRegionContentChanged())),this.__navigationStructure&&this.__setRegionContent(this.__navigationStructure[0]))}setBreadcrumb(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Breadcrumb")),convertedValue!==this.__breadcrumb&&(this.__breadcrumb=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Breadcrumb"}),this.__processBreadcrumb())}getBreadcrumb(){return this.__breadcrumb}__processBreadcrumb(){this.__createBreadcrumb()}setTextFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSize")),convertedValue!==this.__textFontSize&&(this.__textFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){var _a;if(void 0!==this.__textFontSize){if(this.__navigationStructure)for(let e of this.__navigationStructure)e.tchmi_button&&e!==this.__activeElement&&e.tchmi_button.setTextFontSize(this.__textFontSize);if(null===(_a=this.__activeElement)||void 0===_a?void 0:_a.subItem)for(let e of this.__activeElement.subItem)e.tchmi_button&&e.tchmi_button.setTextFontSize(this.__textFontSize);this.__buttonBack&&this.__buttonBack.setTextFontSize(this.__textFontSize)}}setTextFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),convertedValue!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSizeUnit())}getTextFontSizeUnit(){return this.__textFontSizeUnit}__processTextFontSizeUnit(){var _a;if(void 0!==this.__textFontSizeUnit){if(this.__navigationStructure)for(let e of this.__navigationStructure)e.tchmi_button&&e.tchmi_button.setTextFontSizeUnit(this.__textFontSizeUnit);if(null===(_a=this.__activeElement)||void 0===_a?void 0:_a.subItem)for(let e of this.__activeElement.subItem)e.tchmi_button&&e.tchmi_button.setTextFontSizeUnit(this.__textFontSizeUnit);this.__buttonBack&&this.__buttonBack.setTextFontSizeUnit(this.__textFontSizeUnit)}}setIconWidth(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconWidth")),convertedValue!==this.__iconWidth&&(this.__iconWidth=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconWidth"}),this.__processIconWidth())}getIconWidth(){return this.__iconWidth}__processIconWidth(){var _a;if(void 0!==this.__iconWidth){if(this.__navigationStructure)for(let e of this.__navigationStructure)e.tchmi_button&&e.tchmi_button.setIconWidth(this.__iconWidth);if(null===(_a=this.__activeElement)||void 0===_a?void 0:_a.subItem)for(let e of this.__activeElement.subItem)e.tchmi_button&&e.tchmi_button.setIconWidth(this.__iconWidth);this.__buttonBack&&this.__buttonBack.setIconWidth(this.__iconWidth)}}setIconWidthUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toDimensionUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconWidthUnit")),convertedValue!==this.__iconWidthUnit&&(this.__iconWidthUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconWidthUnit"}),this.__processIconWidthUnit())}getIconWidthUnit(){return this.__iconWidthUnit}__processIconWidthUnit(){var _a;if(void 0!==this.__iconWidthUnit){if(this.__navigationStructure)for(let e of this.__navigationStructure)e.tchmi_button&&e.tchmi_button.setIconWidthUnit(this.__iconWidthUnit);if(null===(_a=this.__activeElement)||void 0===_a?void 0:_a.subItem)for(let e of this.__activeElement.subItem)e.tchmi_button&&e.tchmi_button.setIconWidthUnit(this.__iconWidthUnit);this.__buttonBack&&this.__buttonBack.setIconWidthUnit(this.__iconWidthUnit)}}setIconHeight(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconHeight")),convertedValue!==this.__iconHeight&&(this.__iconHeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconHeight"}),this.__processIconHeight())}getIconHeight(){return this.__iconHeight}__processIconHeight(){var _a,_b,_c;if(void 0!==this.__iconHeight){if(this.__navigationStructure)for(let e of this.__navigationStructure)null===(_a=e.tchmi_button)||void 0===_a||_a.setIconHeight(this.__iconHeight);if(null===(_b=this.__activeElement)||void 0===_b?void 0:_b.subItem)for(let e of this.__activeElement.subItem)null===(_c=e.tchmi_button)||void 0===_c||_c.setIconHeight(this.__iconHeight);this.__buttonBack&&this.__buttonBack.setIconHeight(this.__iconHeight)}}setIconHeightUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toDimensionUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IconHeightUnit")),convertedValue!==this.__iconHeightUnit&&(this.__iconHeightUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IconHeightUnit"}),this.__processIconHeightUnit())}getIconHeightUnit(){return this.__iconHeightUnit}__processIconHeightUnit(){var _a,_b,_c;if(void 0!==this.__iconHeightUnit){if(this.__navigationStructure)for(let e of this.__navigationStructure)null===(_a=e.tchmi_button)||void 0===_a||_a.setIconHeightUnit(this.__iconHeightUnit);if(null===(_b=this.__activeElement)||void 0===_b?void 0:_b.subItem)for(let e of this.__activeElement.subItem)null===(_c=e.tchmi_button)||void 0===_c||_c.setIconHeightUnit(this.__iconHeightUnit);this.__buttonBack&&this.__buttonBack.setIconHeightUnit(this.__iconHeightUnit)}}setStaticMenuHeight(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StaticMenuHeight")),convertedValue!==this.__staticMenuHeight&&(this.__staticMenuHeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StaticMenuHeight"}),this.__processStaticMenuHeight())}getStaticMenuHeight(){return this.__staticMenuHeight}__processStaticMenuHeight(){this.__isAttached&&this.__setContentHeights()}setStaticMenuHeightUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toDimensionUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StaticMenuHeightUnit")),convertedValue!==this.__staticMenuHeightUnit&&(this.__staticMenuHeightUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StaticMenuHeightUnit"}),this.__processStaticMenuHeightUnit())}getStaticMenuHeightUnit(){return this.__staticMenuHeightUnit}__processStaticMenuHeightUnit(){this.__isAttached&&this.__setContentHeights()}setNavigationOrientation(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("NavigationOrientation")),convertedValue!==this.__navigationOrientation&&(this.__navigationOrientation=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"NavigationOrientation"}),this.__processNavigationOrientation())}getNavigationOrientation(){return this.__navigationOrientation}__processNavigationOrientation(){"Horizontal"===this.__navigationOrientation?this.__elementTemplateRoot.classList.add("horizontal"):this.__elementTemplateRoot.classList.remove("horizontal")}setKeepLowestLevel(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("KeepLowestLevel")),convertedValue!==this.__keepLowestLevel&&(this.__keepLowestLevel=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"KeepLowestLevel"}))}getKeepLowestLevel(){return this.__keepLowestLevel}}BaseTemplate.TcHmiNavigation=TcHmiNavigation}(BaseTemplate=Controls.BaseTemplate||(Controls.BaseTemplate={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiNavigation","TcHmi.Controls.BaseTemplate",TcHmi.Controls.BaseTemplate.TcHmiNavigation);