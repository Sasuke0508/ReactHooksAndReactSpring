(this.webpackJsonpreact_life_cycle_and_hooks=this.webpackJsonpreact_life_cycle_and_hooks||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r,a,o,c,s,i,l,d,u,b,m,h,j,f,p,x,k,O=n(1),g=n(11),N=n.n(g),T=(n(25),n.p,n(26),n(5)),v=n(6),C=n(9),y=n(8),D=n(3),w=n(2),E=(w.b.div(r||(r=Object(D.a)(["\n    background-color: ",";\n    color: ",";\n    border: 5px solid ",";\n    padding: 15px;\n    margin-right: auto;\n    margin-left: auto;\n    \n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.color}),(function(e){return e.theme.color})),w.b.div(a||(a=Object(D.a)(["\n    background-color: ",";\n    color: ",";\n    border: 5px solid ",";\n    padding: 15px;\n    margin-right: auto;\n    margin-left: auto;\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.color}),(function(e){return e.theme.color}))),S=w.b.select(o||(o=Object(D.a)(["\n    width: 100%;\n    height: 50px;\n    font-size: 100%;\n    font-weight: bold;\n    cursor: pointer;\n    border-radius: 0;\n    background-color: ",";\n    border: 2px solid ",";\n    color: ",";\n    padding: 10px;\n    padding-right: 38px;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    /* Adding transition effect */\n    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;\n    &:hover {\n        color: ",";\n        background-color: ",";\n        border-bottom-color: #DCDCDC;\n    }\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.color}),(function(e){return e.theme.color}),(function(e){return e.theme.hoverTextColor}),(function(e){return e.theme.hoverBgColor})),_=(w.b.h1(c||(c=Object(D.a)(["\n    font-size:4rem;\n    font-weight:300;\n    line-height:1.2;\n    color: ","\n"])),(function(e){return e.theme.color})),w.b.h2(s||(s=Object(D.a)(["\n    font-size:3rem;\n    font-weight:300;\n    line-height:1.2;\n    color: ","\n"])),(function(e){return e.theme.color}))),B=w.b.h3(i||(i=Object(D.a)(["\n    font-size:2rem;\n    font-weight:300;\n    line-height:1.2;\n    color: ","\n"])),(function(e){return e.theme.color})),L=(w.b.h4(l||(l=Object(D.a)(["\n    font-size:1rem;\n    font-weight:300;\n    line-height:1.2;\n    color: ","\n    \n"])),(function(e){return e.theme.color})),w.b.h5(d||(d=Object(D.a)(["\n    font-size:0.5rem;\n    font-weight:300;\n    line-height:1.2;\n    color: ","\n"])),(function(e){return e.theme.color})),n(4)),A=(n(20),n(0)),U=w.b.input(u||(u=Object(D.a)(["\n    border: 1px solid ",";\n    min-height:35px;\n    height:35px;\n    font-size:17px;\n    width:100%;\n    display:initial;\n    padding: 2px 10px;\n"])),(function(e){return e.theme.color})),z=w.b.span(b||(b=Object(D.a)(["\n    color:",";\n    width:auto;\n"])),(function(e){return e.theme.color})),P=w.b.button(m||(m=Object(D.a)(["\n    apperance: none;\n    background-color: ",";\n    color: ",";\n    border: ",";\n    padding: .25em .5em;\n    transition: all .5s;\n    font-size:17px;\n    &:hover {\n        color: ",";\n        background-color:",";\n        border: ",";\n    };\n    &:disabled{\n        cursor: no-drop;\n    }\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.color}),(function(e){return e.theme.borderButton}),(function(e){return e.theme.hoverTextColor}),(function(e){return e.theme.hoverBgColor}),(function(e){return e.theme.borderButton})),R=w.b.table(h||(h=Object(D.a)(["\n    color: ",";\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 1rem;\n    background-color: transparent;\n  \n    border-spacing: 2px;\n    border-color: ",";\n  \n"])),(function(e){return e.theme.color}),(function(e){return e.theme.color})),q=w.b.thead(j||(j=Object(D.a)(["\n    display: table-header-group;\n    vertical-align: middle;\n    border:1px solid ",";\n"])),(function(e){return e.theme.color})),F=(w.b.tbody(f||(f=Object(D.a)(["\n    display: table-row-group;\n    vertical-align: middle;\n    border-color: inherit;\n"]))),w.b.tr(p||(p=Object(D.a)(["\n    display: table-row;\n    vertical-align: inherit;\n    border:1px solid ",";\n    \n"])),(function(e){return e.theme.color}))),I=(w.b.td(x||(x=Object(D.a)(["\n    padding: .75rem;\n    vertical-align: top;\n    border: 1px solid ",";\n"])),(function(e){return e.theme.color})),w.b.th(k||(k=Object(D.a)(["\n    background-color: ","\n    color: ","\n    vertical-align: bottom;\n    text-align: inherit;\n    border-top: 1px solid ",";\n    padding: .75rem;\n    vertical-align: middle;\n    border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.color}),(function(e){return e.theme.color}),(function(e){return e.theme.color}))),M={bgColor:"#fff",color:"#343a40",borderButton:"1px solid #343a40",borderRadius:"none",hoverTextColor:"#fff",hoverBgColor:"#343a40"},H=n(12),J="ADD_TASK",K="CHANGE_THEM",W="DONE_TASK",Q="DELETE_TASK",G="EDIT_TASK",V="UPDATE_TASK",X=function(e){return{type:W,idTask:e}},Y=function(e){return{type:Q,idTask:e}},Z=function(e){return{type:G,idTask:e}},$=[{themeName:"Default Theme",type:M},{themeName:"Dark Theme",type:{bgColor:"#343a40",color:"white",borderButton:"1px solid #fff",borderRadius:"none",hoverTextColor:"#343a40",hoverBgColor:"#fff"}},{themeName:"Light Theme",type:{bgColor:"#fff",color:"rgb(139, 90, 249)",borderButton:"1px solid rgb(139, 90, 249)",borderRadius:"none",hoverTextColor:"#fff",hoverBgColor:"rgb(139, 90, 249)"}}],ee=function(e){Object(C.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(T.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={taskName:"",disabled:!0},e.renderTaskToDo=function(){return e.props.listTask.filter((function(e){return!e.done})).map((function(t,n){return Object(A.jsxs)(F,{children:[Object(A.jsx)(I,{children:t.taskName}),Object(A.jsxs)(I,{className:"text-end",children:[Object(A.jsx)(P,{className:"me-1",onClick:function(){e.setState({disabled:!1},(function(){e.props.dispatch(Z(t.id))}))},children:Object(A.jsx)("i",{className:"fa fa-edit"})}),Object(A.jsx)(P,{className:"me-1",onClick:function(){e.props.dispatch(X(t.id))},children:Object(A.jsx)("i",{className:"fa fa-check"})}),Object(A.jsx)(P,{className:"me-1",onClick:function(){e.props.dispatch(Y(t.id))},children:Object(A.jsx)("i",{className:"fa fa-trash"})})]})]},n)}))},e.renderTaskComplete=function(){return e.props.listTask.filter((function(e){return e.done})).map((function(t,n){return Object(A.jsxs)(F,{children:[Object(A.jsx)(I,{children:t.taskName}),Object(A.jsx)(I,{className:"text-end",children:Object(A.jsx)(P,{className:"me-1",onClick:function(){e.props.dispatch(Y(t.id))},children:Object(A.jsx)("i",{className:"fa fa-trash"})})}),"``"]},n)}))},e.renderTheme=function(){return $.map((function(e,t){return Object(A.jsx)("option",{value:e.themeName,index:t,children:e.themeName})}))},e}return Object(v.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.taskEdit.taskName!==this.props.taskEdit.taskName&&this.setState({taskName:this.props.taskEdit.taskName})}},{key:"render",value:function(){var e=this;return Object(A.jsx)(w.a,{theme:this.props.themeToDoList,children:Object(A.jsxs)(E,{className:"w-50 mt-3",children:[Object(A.jsx)(S,{onChange:function(t){var n=t.target.value;e.props.dispatch({type:K,themeName:n})},children:this.renderTheme()}),Object(A.jsx)(_,{className:"text-center",children:"To Do List"}),Object(A.jsx)(z,{children:"Task name"}),Object(A.jsx)("br",{}),Object(A.jsx)(U,{value:this.state.taskName,className:"mb-2",onChange:function(t){e.setState({taskName:t.target.value})},name:"taskName"}),this.state.disabled?Object(A.jsxs)(P,{className:"me-1",onClick:function(){var t=e.state.taskName,n={id:e.props.listTask.length+1,taskName:t,done:!1};e.props.dispatch(function(e){return{type:J,newTask:e}}(n))},children:[Object(A.jsx)("i",{className:"fa fa-plus"})," Add"]}):Object(A.jsxs)(P,{disabled:!0,className:"me-1",children:[Object(A.jsx)("i",{className:"fa fa-plus"})," Add"]}),this.state.disabled?Object(A.jsxs)(P,{disabled:!0,className:"me-1",children:[Object(A.jsx)("i",{className:"fa fa-upload"})," Update"]}):Object(A.jsxs)(P,{className:"me-1",onClick:function(){e.setState({disabled:!0},(function(){var t;e.props.dispatch((t=e.state.taskName,{type:V,taskName:t}))}))},children:[Object(A.jsx)("i",{className:"fa fa-upload"})," Update"]}),Object(A.jsxs)(P,{className:"me-1",children:[Object(A.jsx)("i",{className:"fa fa-search"})," Search"]}),Object(A.jsx)("hr",{}),Object(A.jsx)(B,{children:"Task to do"}),Object(A.jsx)(R,{children:Object(A.jsx)(q,{children:this.renderTaskToDo()})}),Object(A.jsx)("hr",{}),Object(A.jsx)(B,{children:"Task complete"}),Object(A.jsx)(R,{children:Object(A.jsx)(q,{children:this.renderTaskComplete()})})]})})}}]),n}(O.Component),te=(Object(H.b)((function(e){return{themeToDoList:e.ToDoListReducer.themeToDoList,listTask:e.ToDoListReducer.listTask,taskEdit:e.ToDoListReducer.taskEdit}}))(ee),function(e){Object(C.a)(n,e);var t=Object(y.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate_Child"),e.number!==this.props.number}},{key:"render",value:function(){return console.log("Render Child Component..."),Object(A.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(A.jsxs)("div",{className:"card",style:{width:"30%"},children:[Object(A.jsx)("img",{src:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",className:"card-img-top",alt:"..."}),Object(A.jsxs)("div",{className:"card-body",children:[Object(A.jsx)("h5",{className:"card-title",children:"Card title"}),Object(A.jsx)("h6",{className:"card-subtitle mb-2 text-muted ",children:"Card subtitle"}),Object(A.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),"b5"]})]}),Object(A.jsxs)("div",{className:"card",style:{width:"30%"},children:[Object(A.jsx)("img",{src:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",className:"card-img-top",alt:"..."}),Object(A.jsxs)("div",{className:"card-body",children:[Object(A.jsx)("h5",{className:"card-title",children:"Card title"}),Object(A.jsx)("h6",{className:"card-subtitle mb-2 text-muted ",children:"Card subtitle"}),Object(A.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),"b5"]})]}),Object(A.jsxs)("div",{className:"card",style:{width:"30%"},children:[Object(A.jsx)("img",{src:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",className:"card-img-top",alt:"..."}),Object(A.jsxs)("div",{className:"card-body",children:[Object(A.jsx)("h5",{className:"card-title",children:"Card title"}),Object(A.jsx)("h6",{className:"card-subtitle mb-2 text-muted ",children:"Card subtitle"}),Object(A.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),"b5"]})]})]})}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("getDerivedStateFromProps_Child"),null}}]),n}(O.Component)),ne=function(e){Object(C.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(T.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={number:1},e}return Object(v.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){var e=this;return console.log("Render Parent component..."),Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{children:"Parent Component"}),Object(A.jsxs)("span",{children:["Number: ",this.state.number]}),Object(A.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({number:e.state.number+1})},children:"+"}),Object(A.jsx)(te,{number:this.state.number})]})}},{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("getDerivedStateFromProps"),null}}]),n}(O.Component);var re=function(){return Object(A.jsx)("div",{children:Object(A.jsx)(ne,{})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},oe=n(13),ce=n(14),se={themeToDoList:M,listTask:[{id:1,taskName:"Task 1",done:!0},{id:2,taskName:"Task 2",done:!0},{id:3,taskName:"Task 3",done:!1},{id:4,taskName:"Task 4",done:!1}],taskEdit:{id:0,taskName:"",done:!1}},ie=Object(oe.a)({ToDoListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:if(""===t.newTask.taskName.trim())return alert("Task name is required!"),Object(L.a)({},e);var n=e.listTask.findIndex((function(e){return e.taskName===t.newTask.taskName}));return-1!==n?(alert("Task name already exits"),Object(L.a)({},e)):(e.listTask=[].concat(Object(ce.a)(e.listTask),[t.newTask]),Object(L.a)({},e));case K:var r=$.findIndex((function(e){return e.themeName===t.themeName}));return e.themeToDoList=$[r].type,Object(L.a)({},e);case W:var a=e.listTask.findIndex((function(e){return e.id===t.idTask}));return e.listTask[a].done=!0,e.listTask=Object(ce.a)(e.listTask),Object(L.a)({},e);case Q:return e.listTask=e.listTask.filter((function(e){return e.id!==t.idTask})),Object(L.a)({},e);case G:return Object(L.a)(Object(L.a)({},e),{},{taskEdit:e.listTask.find((function(e){return e.id===t.idTask}))});case V:if(""===t.taskName.trim())return alert("Task name is required!"),Object(L.a)({},e);var o=e.listTask.findIndex((function(e){return e.taskName===t.taskName}));if(-1!==o)return alert("Task name already exits"),Object(L.a)({},e);var c=e.listTask.findIndex((function(t){return t.id===e.taskEdit.id}));return-1===c?(alert("Choose task need edit!"),Object(L.a)({},e)):(e.listTask[c].taskName=t.taskName,e.listTask=Object(ce.a)(e.listTask),e.taskEdit={id:0,taskName:"",done:!1},Object(L.a)({},e));default:return Object(L.a)({},e)}}}),le=Object(oe.b)(ie);N.a.render(Object(A.jsx)(H.a,{store:le,children:Object(A.jsx)(re,{})}),document.getElementById("root")),ae()}},[[33,1,2]]]);
//# sourceMappingURL=main.99527c90.chunk.js.map