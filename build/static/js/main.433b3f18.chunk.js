(this["webpackJsonpspeedgolf-react"]=this["webpackJsonpspeedgolf-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/Parking-Information.0c883f75.png"},11:function(e,t,a){e.exports=a.p+"static/media/reservation.4abe3c5f.png"},12:function(e,t,a){e.exports=a.p+"static/media/payment.83814cc1.jpeg"},14:function(e,t,a){e.exports=a(32)},21:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/cusService.744e30b9.png"},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),s=(a(19),a(20),a(21),a(1)),c=a(2),i=a(4),u=a(3),m=a(5),d={LOGIN:"LoginMode",RESERVATIONS:"ReservationsMode",RESERVATIONS_LOGRESERVATION:"ReservationsMode-LogReservation",RESERVATIONS_EDITRESERVATION:"ReservationsMode-EditReservation",MAINPAGE:"MainPage",INFOPAGE:"InfoPage"};Object.freeze(d);var p=d,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getMenuBtnIcon=function(){return a.props.mode===p.RESERVATIONS_LOGRESERVATION||a.props.mode===p.RESERVATIONS_EDITRESERVATION?"fa fa-arrow-left":a.props.menuOpen?"fa fa-times":"fa fa-bars"},a.handleMenuBtnClick=function(){a.props.mode===p.RESERVATIONS_LOGRESERVATION||a.props.mode===p.RESERVATIONS_EDITRESERVATION?a.props.changeMode(p.RESERVATIONS):a.props.mode!=p.LOGIN&&a.props.toggleMenuOpen()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("span",{className:"navbar-items"},o.a.createElement("button",{className:"sidemenu-btn",onClick:this.handleMenuBtnClick},o.a.createElement("span",{id:"menuBtnIcon",className:"sidemenu-btn-icon "+this.getMenuBtnIcon()})),o.a.createElement("img",{src:"https://lh3.googleusercontent.com/d/1dPo6A82TYZ-Q9aXyVLGfCohRPeVccNuf=s220?authuser=0",alt:"Speed Score Logo",height:"38px",width:"38px","border-radius":"50px"}),o.a.createElement("span",{className:"navbar-title"},"\xa0",this.props.title)))}}]),t}(o.a.Component),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderModeMenuItems=function(){switch(a.props.mode){case p.MAINPAGE:return o.a.createElement("div",null,o.a.createElement("a",{className:"sidemenu-item "},o.a.createElement("span",{className:"fa fa-exclamation-circle"}),"\xa0Car Plate"));case p.RESERVATIONS:return o.a.createElement("div",null,o.a.createElement("a",{className:"sidemenu-item",onClick:function(){return a.props.openRoundsForm()}},o.a.createElement("span",{className:"fa fa-plus"}),"\xa0Make New Reservation"),o.a.createElement("a",{className:"sidemenu-item"},o.a.createElement("span",{className:"fa fa-search"}),"\xa0Search Reservations"));default:return null}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"sidemenu "+(this.props.menuOpen?"sidemenu-open":"sidemenu-closed"),onClick:this.props.toggleMenuOpen},o.a.createElement("div",{className:"sidemenu-title"},o.a.createElement("img",{src:"https://lh3.googleusercontent.com/d/1qyej0Pdi1IwJNLMgJ3Feag6ojUX-CCfw=s220?authuser=0",height:"50",width:"50"}),o.a.createElement("span",{id:"userID",className:"sidemenu-userID"},"\xa0",this.props.userId)),this.renderModeMenuItems(),o.a.createElement("a",{id:"aboutBtn",className:"sidemenu-item",onClick:function(){return e.props.showAbout()}},o.a.createElement("span",{className:"fa fa-info-circle"}),"\xa0About"),o.a.createElement("a",{id:"logOutBtn",className:"sidemenu-item",onClick:function(){return e.props.logOut(p.LOGIN)}},o.a.createElement("span",{className:"fa fa-sign-out-alt"}),"\xa0Log Out"))}}]),t}(o.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t={opacity:this.props.opa};return o.a.createElement("div",{style:t,className:"modebar"+(this.props.mode===p.LOGIN?" invisible":this.props.menuOpen?" ignore-click visible":" visible")},o.a.createElement("fieldset",{disabled:this.props.disable},o.a.createElement("a",{className:this.props.mode===p.ROUNDS||this.props.mode===p.ROUNDS_EDITROUND||this.props.mode===p.ROUNDS_LOGROUND?" item-selected":null,onClick:function(){return e.props.changeMode(p.ROUNDS)}},o.a.createElement("span",{className:"modebar-icon  fa fa-history"}),o.a.createElement("span",{className:"modebar-text"},"Rounds")),o.a.createElement("a",{className:this.props.mode===p.MAINPAGE?" item-selected":null,onClick:function(){return e.props.changeMode(p.MAINPAGE)}},o.a.createElement("span",{className:"modebaricon fa fa-th-list"}),o.a.createElement("span",{className:"modebar-text"},"Coming Soon!"))))}}]),t}(o.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.menuOpen;return o.a.createElement("div",{type:"button",className:"floatbtn",onClick:this.props.handleClick},o.a.createElement("span",{className:"floatbtn-icon fa fa-plus"}))}}]),t}(o.a.Component),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){e.setState({faIcon:"fa fa-spin fa-spinner"});var a=e.state;delete a.faIcon,setTimeout(e.login,1e3,a),t.preventDefault(),e.props.setUserId(e.carplateRef.current.value)},e.login=function(){e.props.changeMode(p.MAINPAGE)},e.carplateRef=o.a.createRef(),e.state={faIcon:"fa fa-sign-in"},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.carplateRef.current.focus()}},{key:"render",value:function(){return o.a.createElement("div",{id:"login-mode-div",className:"padded-page"},o.a.createElement("center",null,o.a.createElement("h1",null),o.a.createElement("form",{id:"loginInterface",onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"carplateInput",style:{padding:0,fontSize:24}},"Car Plate:",o.a.createElement("input",{ref:this.carplateRef,className:"form-control login-text",placeholder:"Enter Your Car Plate",id:"carplateInput",pattern:"[A-Z0-9]+",required:!0})),o.a.createElement("p",null),o.a.createElement("label",{htmlFor:"phonenumInput",style:{padding:0,fontSize:24}},"Phone Number:",o.a.createElement("input",{className:"form-control login-text",type:"password",placeholder:"Enter Phone Number",pattern:"[0-9]+{10}",required:!0})),o.a.createElement("p",{className:"bg-danger",id:"feedback",style:{fontSize:16}}),o.a.createElement("button",{type:"submit",className:"btn-color-theme btn btn-primary btn-block login-btn"},o.a.createElement("span",{id:"login-btn-icon",className:this.state.faIcon}),"\xa0Submit"),o.a.createElement("br",null),o.a.createElement("a",{role:"button",className:"login-btn"},o.a.createElement("img",{src:"https://drive.google.com/uc?export=view&id=1YXRuG0pCtsfvbDSTzuM2PepJdbBpjEut"})),o.a.createElement("a",{role:"button",className:"login-btn"},o.a.createElement("img",{src:"https://drive.google.com/uc?export=view&id=1ZoySWomjxiCnC_R4n9CZWxd_qXzY1IeL"})),o.a.createElement("p",null,o.a.createElement("i",null,"Version SKS-SPS parking system.")),o.a.createElement("p",null,o.a.createElement("i",null,"\xa9 2021 Develope Team of SKS-SPS parking system. All rights reserved.")))))}}]),t}(o.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"modal",role:"dialog"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("p",{className:"modal-title"},"Confirm Round Deletion"),o.a.createElement("button",{className:"close-modal-button",onClick:function(){return e.props.cancel()}},"\xd7")),o.a.createElement("div",{className:"modal-body"},o.a.createElement("h4",null,"Are you sure that you want to delete this round?"),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.confirm()}},"Yes, delete round"),o.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.cancel()}},"No, do not delete round")))))}}]),t}(o.a.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).editRound=function(e){alert("This function is under maintance!  ")},a.DeleteDialog=function(e){a.props.setDeleteId(e),a.setState({showDeleteDialog:!0}),a.setState({target:e})},a.cancelDelete=function(){a.setState({showDeleteDialog:!1})},a.confirmDelete=function(){a.props.deleteRound(),a.setState({showDeleteDialog:!1})},a.renderTable=function(){var e=[],t=function(t){e.push(o.a.createElement("tr",{key:t},o.a.createElement("td",null,a.props.rounds[t].date),o.a.createElement("td",null,a.props.rounds[t].minutes+":"+a.props.rounds[t].seconds),o.a.createElement("td",null,a.props.rounds[t].plate),o.a.createElement("td",null,a.props.rounds[t].slot),o.a.createElement("td",null,o.a.createElement("button",{onClick:a.props.menuOpen?null:function(){return a.editRound(t)}},o.a.createElement("span",{className:"fa fa-eye"}))),o.a.createElement("td",null,o.a.createElement("button",{onClick:a.props.menuOpen?null:function(){return a.DeleteDialog(t)}},o.a.createElement("span",{className:"fa fa-trash"})))))};for(var n in a.props.rounds)t(n);return e},a.state={showDeleteDialog:a.props.showConfirmDelete,target:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,1==this.state.showDeleteDialog?o.a.createElement(S,{confirm:this.confirmDelete,cancel:this.cancelDelete}):null,o.a.createElement("div",{className:"padded-page"},o.a.createElement("h1",null),o.a.createElement("table",{className:"table table-hover"},o.a.createElement("thead",{className:"thead-light"},o.a.createElement("tr",null,o.a.createElement("th",null,"Date"),o.a.createElement("th",null,"Times"),o.a.createElement("th",null,"Plate"),o.a.createElement("th",null,"Assinged slot"),o.a.createElement("th",null,"View/Edit..."),o.a.createElement("th",null,"Delete"))),o.a.createElement("tbody",null,0===Object.keys(this.props.rounds).length?o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"5",style:{fontStyle:"italic"}},"No reservation found")):this.renderTable()))))}}]),t}(o.a.Component),N=a(9),v=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name;if("seconds"===t){var n=e.target.value.length<2?"0"+e.target.value:e.target.value,o=a.computeSGS(a.state.strokes,a.state.minutes,n);a.setState({seconds:n,SGS:o})}else if("strokes"===t){var r=e.target.value,l=a.computeSGS(r,a.state.minutes,a.state.seconds);a.setState({strokes:r,SGS:l})}else if("minutes"===t){var s=e.target.value,c=a.computeSGS(a.state.strokes,s,a.state.seconds);a.setState({minutes:s,SGS:c})}else a.setState(Object(N.a)({},t,e.target.value))},a.handleSubmit=function(e){a.setState({faIcon:"fa fa-spin fa-spinner",btnLabel:a.props.mode===p.RESERVATIONS_LOGRESERVATION?"Saving...":"Updating..."});var t=a.state;delete t.faIcon,delete t.btnLabel,setTimeout(a.props.saveRound,1e3,t),e.preventDefault()},a.computeSGS=function(e,t,a){return Number(e)+Number(t)+":"+a};var n=new Date(Date.now()-6e4*(new Date).getTimezoneOffset());return a.props.mode===p.RESERVATIONS_LOGRESERVATION?a.state={date:n.toISOString().substr(0,10),plate:"",slot:"",notes:"",faIcon:"fa fa-save",btnLabel:"Save Round Data"}:(a.state=a.props.startData,a.state.faIcon="fa fa-edit",a.state.btnLabel="Update Reservation Data"),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"padded-page",onSubmit:this.handleSubmit},o.a.createElement("center",null,o.a.createElement("label",null,"Date:",o.a.createElement("input",{name:"date",className:"form-control form-center",type:"date",value:this.state.date,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("label",null,"Time: ",o.a.createElement("br",null),o.a.createElement("input",{name:"minutes",type:"number",size:"3",min:"0",max:"400",value:this.state.minutes,onChange:this.handleChange}),":",o.a.createElement("input",{name:"seconds",type:"number",size:"2",min:"1",max:"60",value:this.state.seconds,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("label",null,"Plate:",o.a.createElement("input",{name:"plate",className:"form-control form-center",type:"text",value:this.state.plate,onChange:this.handleChange,placeholder:"Plate Number",size:"50",maxLength:"50"})),o.a.createElement("p",null),o.a.createElement("label",null,"Preferred Slot:",o.a.createElement("input",{name:"slot",className:"form-control form-center",type:"text",value:this.state.slot,onChange:this.handleChange,placeholder:"Prefer Slot ID",size:"20",maxLength:"20"})),o.a.createElement("p",null),o.a.createElement("label",null,"Notes:",o.a.createElement("textarea",{name:"notes",className:"form-control",rows:"6",cols:"75",placeholder:"Enter round notes",value:this.state.notes,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("p",null),o.a.createElement("button",{type:"submit",style:{width:"70%",fontSize:"36px"},className:"btn btn-primary btn-color-theme"},o.a.createElement("span",{className:this.state.faIcon}),"\xa0",this.state.btnLabel)))}}]),t}(o.a.Component),I=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).addRound=function(e){var t=JSON.parse(localStorage.getItem(a.props.userId));t.rounds[++t.roundCount]=e,localStorage.setItem(a.props.userId,JSON.stringify(t)),a.setState({rounds:t.rounds,roundCount:t.roundCount}),a.props.changeMode(p.RESERVATIONS)},a.editRound=function(e){var t=JSON.parse(localStorage.getItem(a.props.userId));t.rounds[a.state.editId]=e,localStorage.setItem(a.props.userId,JSON.stringify(t)),a.setState({rounds:t.rounds,editId:""}),a.props.changeMode(p.RESERVATIONS)},a.deleteRound=function(){var e=JSON.parse(localStorage.getItem(a.props.userId));delete e.rounds[a.state.deleteId],localStorage.setItem(a.props.userId,JSON.stringify(e)),a.setState({rounds:e.rounds,deleteId:""})},a.setDeleteId=function(e){a.setState({deleteId:e})},a.setEditId=function(e){a.setState({editId:e})};var n=JSON.parse(localStorage.getItem(a.props.userId));return null==n&&(n={rounds:{},roundCount:0},localStorage.setItem(a.props.userId,JSON.stringify(n))),a.state={rounds:n.rounds,roundCount:n.roundCount,deleteId:"",editId:"",showConfirmDelete:!1,menuOpened:a.props.menuOpened},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;switch(this.props.mode){case p.RESERVATIONS:return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{rounds:this.state.rounds,setEditId:this.setEditId,setDeleteId:this.setDeleteId,deleteRound:this.deleteRound,changeMode:this.props.changeMode,menuOpen:this.props.menuOpen}),o.a.createElement(g,{handleClick:function(){return e.props.changeMode(p.RESERVATIONS_LOGRESERVATION)},menuOpen:this.props.menuOpen,icon:"fa fa-plus"}));case p.RESERVATIONS_LOGRESERVATION:return o.a.createElement(v,{mode:this.props.mode,startData:"",saveRound:this.addRound});case p.RESERVATIONS_EDITRESERVATION:return o.a.createElement(v,{mode:this.props.mode,startData:this.state.rounds[this.state.editId],saveRound:this.editRound})}}}]),t}(o.a.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"aboutModal",className:"modal",role:"dialog"},o.a.createElement("div",{className:"modal-content",style:{background:"#fff"}},o.a.createElement("div",{className:"modal-header"},o.a.createElement("center",null,o.a.createElement("h3",{className:"modal-title"},o.a.createElement("b",null,"About SKS-SPS Parking Express System"),o.a.createElement("button",{id:"modalClose",className:"close",style:{border:"2px solid black",backgroundColor:"black",color:"white"},onClick:function(){return e.props.closeAbout()}},"\xd7")))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("center",null,o.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/awuwr1vpuw1lkyl/SpeedScore4SplashLogo.png",height:"200",width:"200"}),o.a.createElement("h3",null,"The World's First and Only Suite of Apps for Speedgolf"),o.a.createElement("p",{style:{fontStyle:"italic"}},"Version 5 (Live), Build 20.6.2018 \xa9 2017-20 The Professor of Speedgolf. All rights.")),o.a.createElement("p",null,"SpeedScore apps support"),o.a.createElement("ul",null,o.a.createElement("li",null,"live touranment scoring (",o.a.createElement("i",null,"SpeedScore Live\xae"),")"),o.a.createElement("li",null,"tracking personal speedgolf rounds and sharing results (",o.a.createElement("i",null,"SpeedScore Track\xae"),")"),o.a.createElement("li",null,"finding speedgolf-friendly courses, booking tee times, and paying to play speedgolf by the minute (",o.a.createElement("i",null,"SpeedScore Play\xae"),")")),o.a.createElement("p",null,"SpeedScore was first developed by Dr. Chris Hundhausen, associate professor of computer science at Washington State University and the ",o.a.createElement("i",null,"Professor of Speedgolf"),", with support from Scott Dawley, CEO of Speedgolf USA, LLC. It leverages Google server-side technologies."),o.a.createElement("p",null,"For more information on SpeedScore, visit ",o.a.createElement("a",{href:"http://speedscore.live",target:"_blank"},"SpeedScore's web site"),". For more information on speedgolf, visit ",o.a.createElement("a",{href:"http://playspeedgolf.com",target:"_blank"},"playspeedgolf.com")," and ",o.a.createElement("a",{href:"http://usaspeedgolf.com",target:"_blank"},"Speedgolf USA"),".")),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{id:"aboutOK",className:"close",style:{border:"2px solid black",padding:"4px",backgroundColor:"black",color:"white"},onClick:function(){return e.props.closeAbout()}},"OK"))))}}]),t}(o.a.Component),y=a(10),A=a.n(y),C=a(11),k=a.n(C),j=a(12),T=a.n(j),M=(a(22),a(13)),D=a.n(M),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).ChangeModeRounds=function(){a.props.changeMode(p.RESERVATIONS_LOGRESERVATION)},a.ChangeModeFee=function(){a.props.changeMode(p.RESERVATIONS)},a.ChangeModeService=function(){a.props.changeMode(p.RESERVATIONS)},a.ChangeModeInfo=function(){a.props.changeMode(p.INFOPAGE)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={width:"180px",height:"45px"};return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("center",null,o.a.createElement(D.a,{format:"HH:mm:ss",ticking:!0,timezone:"US/Pacific"}))),o.a.createElement("center",null,o.a.createElement("div",{style:{marginTop:"10%"}},o.a.createElement("h1",null,"Welcome to SKS-SPS parking system"),o.a.createElement("h2",null,"To access following service, please click on related button"))),o.a.createElement("div",{style:{marginTop:"10%"}},o.a.createElement("center",null,o.a.createElement("a",{role:"button",className:"login-btn",onClick:this.ChangeModeInfo},o.a.createElement("img",{style:e,src:A.a})),o.a.createElement("a",{role:"button",className:"login-btn",onClick:this.ChangeModeRounds},o.a.createElement("img",{style:e,src:k.a})),o.a.createElement("a",{role:"button",className:"login-btn",onClick:this.ChangeModeFee},o.a.createElement("img",{style:e,src:T.a}))),o.a.createElement("div",{type:"button",className:"floatbtn",onClick:this.ChangeModeService},o.a.createElement("span",{className:"floatbtn-icon fa fa-phone"}))))}}]),t}(o.a.Component),V=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("center",null,o.a.createElement("div",{style:{marginTop:"30%"}},o.a.createElement("h1",null,"This Page is under construction."),o.a.createElement("h2",null,"Look three small"),o.a.createElement("h3",null,"This Page is under construction."))))}}]),t}(o.a.Component),P={};P[p.LOGIN]="Welcome to SKS-SPS Parking System",P[p.RESERVATIONS]="My Reservation",P[p.RESERVATIONS_LOGRESERVATION]="Log New Exercise",P[p.RESERVATIONS_EDITRESERVATION]="Edit Reservation",P[p.MAINPAGE]="SKS-SPS Parking System",P[p.INFOPAGE]="Parking Information";var L={};L[p.LOGIN]=b,L[p.RESERVATIONS]=I,L[p.RESERVATIONS_LOGRESERVATION]=I,L[p.RESERVATIONS_EDITRESERVATION]=I,L[p.MAINPAGE]=w,L[p.INFOPAGE]=V;var G=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleChangeMode=function(t){e.Switchopacity(t),"ReservationsMode-LogReservation"==t&&1==e.state.menuOpen?e.setState({mode:e.state.mode}):e.setState({mode:t})},e.Switchopacity=function(t){"ReservationsMode-LogReservation"==t?e.setState({opa:.2}):e.setState({opa:1})},e.openMenu=function(){e.setState({menuOpen:!0})},e.closeMenu=function(){e.setState({menuOpen:!1})},e.toggleMenuOpen=function(){e.setState((function(e){return{menuOpen:!e.menuOpen}}))},e.setUserId=function(t){e.setState({userId:t})},e.openRoundsForm=function(){e.setState({mode:p.RESERVATIONS_LOGRESERVATION})},e.closeAboutDialog=function(){e.setState({showAbout:!1})},e.showAboutDialog=function(){e.setState({showAbout:!0})},e.state={mode:p.LOGIN,menuOpen:!1,userId:"",showAbout:!1,opa:1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=L[this.state.mode];return o.a.createElement("div",null,1==this.state.showAbout?o.a.createElement(R,{closeAbout:this.closeAboutDialog}):null,o.a.createElement(h,{title:P[this.state.mode],mode:this.state.mode,changeMode:this.handleChangeMode,menuOpen:this.state.menuOpen,toggleMenuOpen:this.toggleMenuOpen}),o.a.createElement(E,{menuOpen:this.state.menuOpen,mode:this.state.mode,toggleMenuOpen:this.toggleMenuOpen,userId:this.state.userId,showAbout:this.showAboutDialog,openRoundsForm:this.openRoundsForm,logOut:this.handleChangeMode}),o.a.createElement(f,{mode:this.state.mode,changeMode:this.handleChangeMode,menuOpen:this.state.menuOpen,disableNavBar:this.state.disableNavBar,opa:this.state.opa}),o.a.createElement(e,{menuOpen:this.state.menuOpen,mode:this.state.mode,changeMode:this.handleChangeMode,userId:this.state.userId,setUserId:this.setUserId}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.433b3f18.chunk.js.map