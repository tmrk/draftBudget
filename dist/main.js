(()=>{"use strict";var __webpack_modules__={426:(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(81),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(645),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  cursor: default;\r\n}\r\n\r\n.hidden {\r\n  display: none!important;\r\n}\r\n\r\n.invisible {\r\n  visibility: hidden;\r\n}\r\n\r\n.alignright {\r\n  text-align: right;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  font-family: \'Roboto Mono\', monospace;\r\n  background: #000;\r\n  color: rgba(255,255,255,0.9);\r\n  /*background: linear-gradient(135deg, rgba(0,68,170,1) 0%, rgba(187,0,187,1) 100%);*/\r\n}\r\n\r\n.budget {\r\n  width: 100%;\r\n  max-width: 1800px;\r\n  margin: 20px auto;\r\n  display: block;\r\n  --borderradius: 0;\r\n  --width-col1: 9ch; /* index */\r\n  --width-col2: 14ch; /* title */\r\n  --width-col3: 4ch; /* unitNumber */\r\n  --width-col4: 5ch; /* unitType */\r\n  --width-col5: 10ch; /* unitCost */\r\n  --width-col6: 3ch; /* frequency */\r\n  --width-col7: 12ch; /* cost */\r\n  --width-col8: 12ch; /* total */\r\n  --width-col9: 5ch; /* currency */\r\n  --width-col10: 22ch; /* tools */\r\n  border-radius: var(--borderradius);\r\n}\r\n\r\n.budget > header {\r\n  border-top-left-radius: var(--borderradius);\r\n  border-top-right-radius: var(--borderradius);\r\n}\r\n\r\n.budget > footer {\r\n  height: 70px;\r\n  border-bottom-left-radius: var(--borderradius);\r\n  border-bottom-right-radius: var(--borderradius);\r\n}\r\n\r\nul.root > li > .props {\r\n\r\n}\r\n\r\nli.line {\r\n}\r\n\r\nul.root > li.line > .props {\r\n  height: 70px;\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n.budget > ul.root > li.line > .props > div > span {\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.budget > ul.root > li.line > .props > div.alignright > span {\r\n  justify-content: flex-end;\r\n}\r\n\r\nul.root > li.line > .props,\r\nli.line.level1 > .props {\r\n  font-weight: bold;\r\n}\r\n\r\n.budget > header {\r\n  background: rgba(255,255,255,0.15);\r\n}\r\n\r\n.props {\r\n  margin: 2px 0;\r\n  background-color: rgba(255,255,255,0.5);\r\n\r\n}\r\n\r\n.props,\r\n.budget > header {\r\n  padding: 0 0 0 2ch;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.budget *[class^="col"] {\r\n  overflow: hidden;\r\n}\r\n\r\n.budget *[class^="col"] > span {\r\n  height: 100%;\r\n  padding: 1ch 1ch;\r\n  display: block;\r\n}\r\n\r\n.budget header > span {\r\n  text-align: center;\r\n}\r\n\r\n.budget .col1 { width: var(--width-col1); }\r\n.budget .col2 { width: var(--width-col2); flex-grow: 1; }\r\n.budget .col3 { width: var(--width-col3); }\r\n.budget .col4 { width: var(--width-col4); }\r\n.budget .col5 { width: var(--width-col5); }\r\n.budget .col6 { width: var(--width-col6); }\r\n.budget .col7 { width: var(--width-col7); }\r\n.budget .col8 { width: var(--width-col8); }\r\n.budget .col9 { width: var(--width-col9); }\r\n.budget .col10 { width: var(--width-col10); }\r\n\r\n.props > .col10,\r\n.budget > header > .col10 {\r\n  margin-left: 2ch;\r\n  padding-left: calc(2ch - 1px);\r\n  border-left: 1px solid rgba(255,255,255,0.3);\r\n  display: flex;\r\n}\r\n\r\n.budget > header > .col10 {\r\n  justify-content: center;\r\n}\r\n\r\n.props > .col10 > span {\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nul.root > li.line > .props > .tools .button.delete,\r\n.hide-add-button .tools .button.add {\r\n  display: none;\r\n}\r\n\r\n.props > .col10 > .delete:hover {\r\n  background-color: red;\r\n  color: #fff;\r\n}\r\n\r\n.props > .col10 > .add:hover {\r\n  background-color: green;\r\n  color: #fff;\r\n}\r\n\r\nul.root > li.line > .props > .index {\r\n  visibility: hidden;\r\n}\r\n\r\n.props > * {\r\n  color: rgba(255,255,255,0.6);\r\n}\r\n\r\n.props > .editable > span {\r\n  color: rgba(255,255,255,0.9);\r\n  cursor: pointer;\r\n}\r\n\r\n.props > .editable > span:hover {\r\n  background: rgba(255,255,255,0.5);\r\n}\r\n\r\n\r\n.props > .editable.editing {\r\n  cursor: text;\r\n}\r\n\r\n.props > .editable.editing:hover {\r\n  background: none;\r\n}\r\n\r\n.props > div.editing > span {\r\n  display: none;\r\n}\r\n\r\n.editing input {\r\n  width: 100%;\r\n  height: calc(100% - 1ch);\r\n  padding: 1ch 1ch;\r\n  border: none;\r\n  outline: none;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  display: flex;\r\n  user-select: text;\r\n  -webkit-user-select: text;\r\n  cursor: text;\r\n}\r\n\r\n.editing.alignright input {\r\n  text-align: right;\r\n}\r\n\r\n/* --- Grand total row --- */\r\n\r\n.grandtotal {\r\n  padding: 0 calc(var(--width-col9) + var(--width-col10));\r\n  background: rgba(255,255,255,0.1);\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.grandtotal .title {\r\n  display: inline-block;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.grandtotal .amount {\r\n  width: 10ch;\r\n  padding: 0 1ch;\r\n  display: inline-block;\r\n  user-select: text;\r\n  -webkit-user-select: text;\r\n  cursor: text;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.grandtotal .currency {\r\n  width: 3ch;\r\n  padding-left: 1ch;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#export {\r\n  margin: 20px 0 0;\r\n  text-align: center;\r\n}\r\n\r\n#export > span {\r\n  padding: 10px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n#export > span:hover {\r\n  color: yellow;\r\n}\r\n\r\npre {\r\n  background: rgba(255,255,255,0.1);\r\n  max-height: 400px;\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n  line-height: 1.2rem;\r\n  text-align: left;\r\n  overflow-x: auto;\r\n}\r\n\r\nbody > header {\r\n  margin: 40px auto;\r\n  text-align: center;\r\n}\r\n\r\nbody > header h1 {\r\n\r\n}\r\n\r\nbody > header h2 {\r\n  color: rgba(255,255,255,0.6);\r\n}\r\n\r\nbody > footer {\r\n  height: 100px;\r\n  display: flex;\r\n  gap: 40px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nbody > footer strong {\r\n  cursor: pointer;\r\n}\r\n\r\nbody > footer strong:hover {\r\n  color: yellow;\r\n}\r\n\r\nbody > footer {\r\n  text-align: center;\r\n  color: rgba(255,255,255,0.6);\r\n}\r\n',""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},645:module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},81:module=>{module.exports=function(i){return i[1]}},379:module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},569:module=>{var memo={};module.exports=function(insert,style){var target=function(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},216:module=>{module.exports=function(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},565:(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},795:module=>{module.exports=function(options){var styleElement=options.insertStyleElement(options);return{update:function(obj){!function(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function(){!function(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},589:module=>{module.exports=function(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},672:()=>{let quietMode,config={roundDecimals:2,showDecimals:2,levelNames:["Budget","Heading","Sub-heading","Activity","Sub-activity"],prefix:["R","A"],default:{currency:"USD",lineColours:["rgba(255,255,255,0.1)","rgba(255,255,255,0.2)","rgba(255,255,255,0.3)","rgba(255,255,255,0.5)","rgba(255,255,255,0.65)"],warnBeforeDelete:!1}},syslog=JSON.parse(localStorage.getItem("syslog"))||[];window.symbols={};let rates={};const n=(tag,content,listener)=>{var el=document.createElement(tag.split("#")[0].split(".")[0].split("|").shift());if(tag.split("#")[1]&&(el.id=tag.split("#")[1].split(".")[0].split("|")[0]),tag.split(".")[1]&&el.classList.add(...tag.split(".").slice(1).join(".").split("|")[0].split(".")),tag.split("|")[1])for(var attrTemp=tag.split("|").slice(1),i=0;i<attrTemp.length;i++)el.setAttribute(attrTemp[i].split("=")[0],attrTemp[i].split("=")[1]);if(content)if("string"==typeof content||"number"==typeof content)el.insertAdjacentHTML("beforeend",content);else if(content.constructor===Array)for(i=0;i<content.length;i++)"string"==typeof content||"number"==typeof content?el.insertAdjacentHTML("beforeend",content[i]):el.appendChild(content[i]);else el.appendChild(content);if(listener)for(var event in listener)listener.hasOwnProperty(event)&&el.addEventListener(event,listener[event]);return el},formatN=function(number,showDecimals=config.showDecimals,if0){if(number){let parts=parseFloat(number).toFixed(showDecimals).toString().split(".");return parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),parts.join(".")}return if0||0},log=function(message,type,timestamp){type=type||"log",timestamp=timestamp||(new Date).getTime(),syslog.push({m:message,t:type,ts:timestamp}),console[type](message)},saveRatesToLocalStorage=()=>{localStorage.setItem("rates",JSON.stringify(rates)),localStorage.setItem("symbols",JSON.stringify(symbols)),localStorage.setItem("ratesUpdated",(new Date).toISOString().split("T")[0]),log("Exchange rates updated ("+localStorage.getItem("ratesUpdated")+")")},fetchData=async base=>{const requestURL=base?"https://api.exchangerate.host/latest?base="+base:"https://api.exchangerate.host/symbols";await fetch(requestURL).then((response=>response.json())).then((response=>{if(base)rates[base]=response.rates;else for(var code in symbols=response.symbols,symbols)fetchData(code)})).then((response=>{saveRatesToLocalStorage()}))},addMockData=function(b){b&&b instanceof Line&&(quietMode=!0,b.add(),b.getLine(1).add(),b.getLine("1.1").add(),b.getLine("1.1.1").add(),quietMode=!1,console.log(budget))},createBudget=(varName,options={})=>{log(varName),window[varName]?log('The variable "'+varName+'" is not available. Please choose a different variable name.',"error"):(window[varName]=new Line(options),window[varName].appendToBody())},cloneLine=line=>{const clone="string"==typeof line?JSON.parse(line):line,newLine=new Line;if(clone.children&&clone.children.length)for(let i=0;i<clone.children.length;i++){const cloneChild=clone.children[i];newLine.addLine(cloneLine(cloneChild))}for(let property in clone)clone.hasOwnProperty(property)&&clone[property]&&(["created"].includes(property)?newLine[property]=clone[property]:["_modified","_currency","_start","_end","_title","_unitNumber","_unitType","_unitCost","_frequency"].includes(property)&&(newLine[property.replace("_","")]=clone[property]));return newLine};class Line{constructor(options={}){const[buttonDelete,buttonAdd]=[n("span.button.delete","Delete",{click:function(){this.remove()}.bind(this)}),n("span.button.add","Add Subline",{click:function(){this.add();this.children[this.children.length-1].viewEdit("title")}.bind(this)})];for(var v in this.viewProps={index:n("div.col1.index",n("span",this.index)),title:n("div.col2.title.editable",n("span",this.title)),unitNumber:n("div.col3.unitnumber.editable",n("span",this.unitNumber)),unitType:n("div.col4.unittype.editable",n("span",this.unitType)),unitCost:n("div.col5.unitcost.alignright.editable",n("span",formatN(this.unitCost))),frequency:n("div.col6.frequency.alignright.editable",n("span",this.frequency)),cost:n("div.col7.cost.alignright",n("span",formatN(this.cost))),total:n("div.col8.total.alignright",n("span",formatN(this.total))),currency:n("div.col9.currency.editable",n("span",this.currency)),tools:n("div.col10.tools",[buttonDelete,buttonAdd])},this.created=this.created||(new Date).getTime(),this.modified=this.modified||this.created,options)options.hasOwnProperty(v)&&"children"!==v&&(this[v]=options[v]);this.currency=this.currency||config.default.currency,this._start||(this.start=(new Date).getTime()),this._end||(this.end=this._start+864e5);const viewProps=n("div.props",[this.viewProps.index,this.viewProps.title,this.viewProps.unitNumber,this.viewProps.unitType,this.viewProps.unitCost,this.viewProps.frequency,this.viewProps.cost,this.viewProps.total,this.viewProps.currency,this.viewProps.tools]);for(var property in this.viewChildren=n("ul"),this.viewProps){const propNode=this.viewProps[property];propNode.setAttribute("data-property",property),propNode.classList.contains("editable")?propNode.addEventListener("click",function(e){e.stopPropagation();const property=propNode.dataset.property;this.viewEdit(property)}.bind(this)):"total"!=property&&"cost"!=property||propNode.addEventListener("click",function(e){e.stopPropagation(),this.children&&this.children.length||this.viewEdit("unitCost")}.bind(this))}this.view=n("li.line",[viewProps,this.viewChildren])}set modified(date){this._modified=date}set start(date){this._start=date}set end(date){this._end=date}set title(title){title&&title.trim()&&title!==this.title&&(this._title=title),this.viewUpdate(!1,["title"])}set unitNumber(unitNumber){this._unitNumber=unitNumber,this.viewUpdate(!1,["unitNumber","cost"]),this.viewUpdate("up",["total"])}set unitType(unitType){this._unitType=unitType,"ls"!=unitType&&"lumpsum"!=unitType||(this.unitNumber=1),this.viewUpdate(!1,["unitType"])}set unitCost(unitCost){this._unitCost=unitCost,this.viewUpdate(!1,["unitCost","cost"]),this.viewUpdate("up",["total"])}set frequency(frequency){this._frequency=frequency,this.viewUpdate(!1,["frequency"]),this.viewUpdate("up",["total"])}set currency(currency){symbols.hasOwnProperty(currency.toUpperCase())&&(this._currency=currency),this.viewUpdate(!1,["currency"]),this.viewUpdate("up",["total"])}set category(category){Array.isArray(category)?this._category=category:this._category=[category]}get start(){return(this.getFirst("_start",!0)||this)._start}get end(){return(this.getLast("_end",!0)||this)._end}get duration(){return this.end-this.start}get title(){return(this._title||this.levelName+"-"+this.lineNumber).trim()}get unitNumber(){return this._unitNumber}get unitType(){return this._unitType}get unitCost(){return this._unitCost}get frequency(){return this._frequency}get currency(){return(this._currency||config.default.currency).substring(0,3).toUpperCase()}get cost(){return this.unitNumber*this.unitCost}get total(){let total=0;if(this.children&&this.children.length)for(var i=0;i<this.children.length;i++){let base=this.children[i].currency;this.currency!==base?total+=(amount=this.children[i].total,from=base,to=this.currency,(from=from.toUpperCase()||config.default.currency.toUpperCase())===(to=to.toUpperCase()||config.default.currency.toUpperCase())?amount:rates[from]?rates[to]?amount*rates[from][to]:"No rates found for "+to:"No rates found for "+from):total+=this.children[i].total}else total=this.cost?this.cost*this.frequency:0;var amount,from,to;return total}get level(){return this.parent?this.parent.level+1:0}get levelName(){return config.levelNames[this.level]}get category(){return this._category||[]}get lineNumber(){return this.level>0?this.parent.children.indexOf(this)+1:1}get absLineNumber(){let line=this,absLineNumber=0;for(;line.before;)absLineNumber+=1,line=line.before;return absLineNumber}get index(){let index=[],line=this;for(;line.level>0;)index.unshift(line.lineNumber),line=line.parent;return index.length?index.join("."):0}get root(){let root=this;for(;root.level;)root=root.parent;return root}get ancestors(){let ancestors=[],current=this;for(;current.parent;)ancestors.push(current.parent),current=current.parent;return ancestors}get siblings(){let siblings=[];for(var i=0;i<this.parent.children.length;i++)this.parent.children[i]!==this&&siblings.push(this.parent.children[i]);return siblings}get descendants(){let descendants=[];if(this.children)for(var i=0;i<this.children.length;i++)descendants.push(this.children[i]),descendants=descendants.concat(this.children[i].descendants);return descendants}get before(){if(1===this.lineNumber)return this.parent;{let prevSibling=this.parent.getLine(this.lineNumber-1);return prevSibling.children?prevSibling.descendants[prevSibling.descendants.length-1]:prevSibling}}get after(){if(this.children)return this.children[0];if(this.level&&this.parent.children[this.lineNumber])return this.parent.children[this.lineNumber];if(this.level){for(var current=this;current.level&&!current.parent.children[current.lineNumber];)current=current.parent;return current.parent.children[current.lineNumber]}}get currencies(){let currencies=[this.currency];if(currencies.includes(config.default.currency)||currencies.push(config.default.currency),this.children)for(var i=0;i<this.children.length;i++)for(var j=0;j<this.children[i].currencies.length;j++)currencies.includes(this.children[i].currencies[j])||currencies.push(this.children[i].currencies[j]);return currencies.sort()}viewAdd(newLine,index){this.viewChildren.appendChild(newLine.view),newLine.view.dataset.level=this.level+1,newLine.view.classList.add("level"+(this.level+1)),this.level+2==config.levelNames.length&&newLine.view.classList.add("hide-add-button"),newLine.viewUpdate(),newLine.parent.viewUpdate("up")}viewEdit(property){const propNode=this.viewProps[property],propNodeInput=propNode.querySelector("input");if(propNodeInput)propNodeInput.focus();else{const previousEditing=this.root.view.querySelector(".editing input"),pressEnter=new KeyboardEvent("keydown",{key:"Enter"});previousEditing&&previousEditing.dispatchEvent(pressEnter),propNode.classList.add("editing");const originalValue=this[property],inputUnfocused=(cancel,event)=>{this[property]=cancel?originalValue:inputEdit.value,inputEdit.remove(),propNode.classList.remove("editing"),log("Editing "+this.index+" "+property+" finished, changes "+(cancel?"discarded.":"saved."),"info")},inputEdit=n("input|value="+originalValue,"",{input:function(event){this[property]=event.target.value}.bind(this),keydown:function(event){switch(event.key){case"Tab":event.preventDefault();const editables=this.root.view.querySelectorAll(".editable:not(.invisible)"),thisIndex=Array.from(editables).indexOf(propNode),nextIndex=editables.length-1!==thisIndex?thisIndex+1:0;inputUnfocused(),editables[nextIndex].click();break;case"ArrowUp":case"ArrowDown":event.preventDefault();const sameColumn=this.root.view.querySelectorAll(".editable:not(.invisible)[data-property="+property+"]"),thisIndexCol=Array.from(sameColumn).indexOf(propNode),prevIndexCol=0!==thisIndexCol?thisIndexCol-1:sameColumn.length-1,nextIndexCol=sameColumn.length-1!==thisIndexCol?thisIndexCol+1:0,indexToSelect="ArrowUp"==event.key?prevIndexCol:nextIndexCol;inputUnfocused(),sameColumn[indexToSelect].click();break;case"Enter":event.preventDefault(),inputUnfocused();break;case"Escape":event.preventDefault(),inputUnfocused(!0)}}.bind(this)});propNode.appendChild(inputEdit),inputEdit.focus(),log("Editing "+this.index+" "+property)}}viewRemove(){this.view.remove(),this.parent.viewUpdate("updown")}viewUpdate(recursion,properties){switch(recursion){case"down":if(this.viewUpdate(!1,properties),this.children)for(let i=0;i<this.children.length;i++)this.children[i].viewUpdate("down",properties);break;case"up":this.viewUpdate(!1,properties),this.parent&&this.parent.viewUpdate("up");break;case"updown":this.viewUpdate("down",properties),this.viewUpdate("up",properties);break;case"side":this.viewUpdate(!1,properties),console.log(this.siblings);for(var i=0;i<this.siblings.length;i++)this.siblings[i].viewUpdate("down",properties);default:if(properties)for(let i=0;i<properties.length;i++){const property=properties[i];if(this.viewProps[property]){let newValue="unitCost"==property||"cost"==property||"total"==property?formatN(this[property]):this[property];this.viewProps[property].querySelector("span").textContent=newValue,"unitCost"!=property&&"unitNumber"!=property&&"frequency"!=property||this.viewUpdate(!1,["cost","total"])}}else for(let property in this.viewProps)if("tools"!==property&&this.viewProps.hasOwnProperty(property)){let newValue="unitCost"==property||"cost"==property||"total"==property?formatN(this[property]):this[property];this.viewProps[property].querySelector("span").textContent=newValue}this.viewUpdateGrandTotal(),this.view&&(this.view.querySelector(".props").style.backgroundColor=config.default.lineColours[this.level])}const leafFields=[this.viewProps.unitNumber,this.viewProps.unitType,this.viewProps.unitCost,this.viewProps.frequency,this.viewProps.cost];for(let i=0;i<leafFields.length;i++)this.children&&this.children.length?leafFields[i].classList.add("invisible"):leafFields[i].classList.remove("invisible")}viewUpdateGrandTotal(){if(this.root.viewGrandTotal){const grandTotal=this.root.viewGrandTotal.querySelector(".amount"),currency=this.root.viewGrandTotal.querySelector(".currency");grandTotal.textContent=formatN(this.root.total),currency.textContent=this.root.currency}}appendToBody(){if(this.root.appendedToBody)log("The root of this budget has already been added to the page.","error");else{const header=n("header",[n("span.col1","Index"),n("span.col2","Title"),n("span.col3","Unit Number"),n("span.col4","Unit Type"),n("span.col5","Unit Cost"),n("span.col6","Frequency"),n("span.col7","Cost"),n("span.col8","Total"),n("span.col9","Currency"),n("span.col10","Tools")]);this.root.viewGrandTotal=n("footer.grandtotal",[n("strong.title.alignright","Grand Total"),n("strong.amount.alignright",this.root.total),n("strong.currency",this.root.currency)]),document.body.appendChild(n("div.budget",[header,n("ul.root",this.root.view),this.root.viewGrandTotal])),this.root.appendedToBody=!0}}add(options={},index){let newParent=this;if(options.unitNumber=options.unitNumber||newParent.unitNumber||1,options.unitType=options.unitType||newParent.unitType||"ls",options.unitCost=options.unitCost||newParent.unitCost||0,options.frequency=options.frequency||newParent.frequency||1,options.currency=options.currency||newParent.currency||this.root.currency,this.unitNumber=0,this.unitType="",this.unitCost=0,this.frequency=0,index&&"string"==typeof index){let map=index.split(".");index=Number(map.pop()),newParent=this.getLine(map.join("."))}const newLine=new Line(options);Object.defineProperty(newLine,"parent",{get:()=>newParent}),newParent.children?index&&index<newParent.children.length?newParent.children.splice(index-1,0,newLine):this.children.push(newLine):newParent.children=[newLine],newParent.viewAdd(newLine),quietMode||log("New line added at "+newLine.index)}addLine(newLine,index){if(newLine instanceof Line){let newParent=this;Object.defineProperty(newLine,"parent",{get:()=>newParent}),newParent.children?index&&index<this.children.length?newParent.children.splice(index-1,0,newLine):this.children.push(newLine):newParent.children=[newLine],newParent.viewAdd(newLine,index)}else log(newLine.toString()+" is not a Line object","error")}remove(quietMode){let index=this.index,lineNumber=this.lineNumber;this.parent.children.splice(lineNumber-1,1),this.viewRemove(),quietMode||log("Line "+index+" deleted","info")}move(newIndex,addAsChild){const oldIndex=this.index,indexMap=addAsChild?[]:newIndex.toString().split("."),parentIndex=addAsChild?newIndex:indexMap.slice(0,-1).join("."),newParent=this.root.getLine(parentIndex);newParent?(newParent.addLine(cloneLine(JSON.stringify(this))),this.remove(),newParent.viewUpdate("down"),log("Line "+oldIndex+" moved to line "+newIndex,"info")):log("There is no line at the index"+parentIndex,"error")}recurse(line,callback){if(callback(line),line.children)for(var i=0;i<line.children.length;i++)recurse(line.children[i])}getDuration(measure){switch(measure){case"y":return this.duration/31536e6;case"m":return this.duration/2628e6;case"w":return this.duration/6048e5;case"d":return this.duration/864e5;default:return this.duration}}getLine(index){if(index){if("number"==typeof index){if(this.children){if(this.children[index-1])return this.children[index-1];console.error("Line "+this.index+"."+index+" does not exist")}else console.error("Line "+this.index+" does not have any children");return!1}{let map=index.split("."),line=this;for(var i=0;i<map.length;i++)line=line.getLine(Number(map[i]));return line}}return this}getFirst(property,deepSearch,type){return this.getLast(property,deepSearch,type,!0)}getLast(property="created",deepSearch,type="children",getFirst){let items=deepSearch?this.descendants:this[type],map=[];for(var i=0;i<items.length;i++)map.push({index:items[i].index,property:items[i][property]});if(map.length){map=map.sort((function(a,b){return a.property>b.property?-1:b.property>a.property?1:0}));let index=getFirst?map[map.length-1].index:map[0].index;return this.root.getLine(index)}}addCategory(category){if(this._category&&Array.isArray(category))for(var i=0;i<category.length;i++)this._category.push(category[i]);else this.category=category}removeCategory(category){}listCategory(category,line){let list=[];if((line=line||this).category&&line.category.includes(category)&&list.push(line.index),line.children)for(var i=0;i<line.children.length;i++)this.listCategory(category,line.children[i]),console.log(line.index);return list}update(options){for(var variable in options&&options.modified||(this.modified=(new Date).getTime()),options)options.hasOwnProperty(variable)&&(this[variable]=options[variable]);this.viewUpdate("up",Object.keys(options))}}var forceRefresh,date;!localStorage.getItem("rates")||localStorage.getItem("ratesUpdated")<(date=(date=new Date)?new Date(date):new Date).toISOString().split("T")[0]||forceRefresh?localStorage.getItem("rates")&&localStorage.getItem("ratesLocked")?log("Exchange rates loaded from cache (locked on "+localStorage.getItem("ratesUpdated")+")"):(log("Accessing online exchange rates..."),fetchData()):(rates=JSON.parse(localStorage.getItem("rates")),symbols=JSON.parse(localStorage.getItem("symbols")),log("Exchange rates loaded from cache ("+localStorage.getItem("ratesUpdated")+")")),function(){window.addEventListener("offline",(function(e){log("You've just gone offline.","warn")})),window.addEventListener("online",(function(e){log("Back online.","info")}));n("div#export",[n("span","Show current data",{click:()=>{document.getElementById("exportoutput").classList.toggle("hidden")}}),n("pre#exportoutput.hidden")]);document.body.appendChild(n("header",[n("h1","DraftBudget"),n("h2","pre-alpha")])),createBudget("budget",{title:"My new budget"}),addMockData(budget),document.body.appendChild(n("footer",[n("span","Debug:"),n("strong","Clear localStorage",{click:function(){localStorage.clear(),log("Local Storage cleared.","info")}}),n("strong","Save rates and symbols to localStorage",{click:function(){saveRatesToLocalStorage()}})]))}();budget}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),__webpack_require__.nc=void 0,(()=>{__webpack_require__(672);var injectStylesIntoStyleTag=__webpack_require__(379),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__(795),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__(569),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__(565),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__(216),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__(589),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style=__webpack_require__(426),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style.Z,options);style.Z&&style.Z.locals&&style.Z.locals})()})();