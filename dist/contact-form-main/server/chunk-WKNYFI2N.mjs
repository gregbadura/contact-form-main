import './polyfills.server.mjs';
import{C,a as c,b as e,c as t,d as i,e as s,f as g,g as p,h as n,i as u,p as f,r as h,s as x,v as y,z as b}from"./chunk-X2TM47IO.mjs";var q=["option"],M=(()=>{let a=class a{constructor(){this.title="contact-form-main"}ngOnInit(){let l=document.getElementsByClassName("option");Array.from(l).forEach(r=>{r.addEventListener("change",o)});function o(r){let m=r.target.checked;Array.from(l).forEach(_=>{_.checked=!1}),r.target.checked=m}}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=c({type:a,selectors:[["app-root"]],viewQuery:function(o,r){if(o&1&&s(q,5),o&2){let m;g(m=p())&&(r.option=m.first)}},standalone:!0,features:[u],decls:63,vars:0,consts:[["inputemail",""],["option",""],["agreed",""],[1,"main"],[1,"content"],[1,"h1"],["action","","onsubmit",`  
                                
                                if (this.fname.value.length < 1)
                                { let fnamereq = document.getElementById('fname-req');
                                  fnamereq.classList.remove('hidden');
                                };

                                if (this.lname.value.length < 1)
                                { let lnamereq = document.getElementById('lname-req');
                                  lnamereq.classList.remove('hidden');
                                };

                                if (this.message.value.length < 1)
                                { let messagereq = document.getElementById('message-req');
                                  messagereq.classList.remove('hidden');
                                };

                                if (this.supportreq.checked == false && this.generalenq.checked == false)
                                { let querytype = document.getElementById('query-req');
                                  querytype.classList.remove('hidden');
                                };

                                let emailInput = document.getElementById('email').value;
                                
                                function validateEmail(emailInput) {
                                let re = /\\S+@\\S+\\.\\S+/;
                                return re.test(emailInput);
                                };
                                
                                if (validateEmail(emailInput) == false)
                                { let incemail = document.getElementById('incorrectemail');
                                  incemail.classList.remove('hidden');
                                }
                                

                                let agreedbox = document.querySelector('#agreed');
                                if (agreedbox.checked == false)
                                { let agreed = document.getElementById('agreedreq');
                                  agreed.classList.remove('hidden');
                                  return false;
                                };

                                if(this.fname.value.length > 0
                                && this.lname.value.length > 0
                                && this.message.value.length > 0
                                && ((this.supportreq.checked == true && this.generalenq.checked == false) || (this.supportreq.checked == false && this.generalenq.checked == true))
                                && validateEmail(emailInput) == true
                                && agreedbox.checked == true)
                                {
                                  let succesdialoginf = document.getElementById('succesdialog');
                                  succesdialoginf.classList.remove('hidden');
                                  return false;
                                }
                                `],[1,"mobildesign",2,"display","flex","align-items","center","justify-content","space-between"],[1,"mobile",2,"display","flex","flex-direction","column","width","50rem","margin-right","15px"],["for","fname"],["type","text","name","fname","id","fname"],["id","fname-req",1,"red-text","hidden"],[1,"mobile",2,"display","flex","flex-direction","column","width","50rem"],["for","lname"],["type","text","name","lname","id","lname"],["id","lname-req",1,"red-text","hidden"],["for","email"],["type","text","name","email","id","email"],["id","incorrectemail",1,"red-text","hidden"],[2,"margin-top","1rem"],[2,"margin-bottom",".5rem"],["for","generalenq"],[2,"display","flex","align-items","center"],[1,"whichtypebox",2,"margin-right","15px"],["type","checkbox","name","generalenq","id","generalenq",1,"rounded","option"],[1,"whichtypebox",2,"padding-left","1rem"],["type","checkbox","name","supportreq","id","supportreq",1,"rounded","option"],["id","query-req",1,"red-text","hidden"],[2,"display","flex","flex-direction","column","margin-bottom","1rem"],["for","message"],["type","textarea","name","message","id","message",2,"padding","1rem","height","6.5rem","max-width","48rem"],["id","message-req",1,"red-text","hidden"],[2,"display","flex","flex-direction","wrap","height","40px"],["type","checkbox","name","agreed","id","agreed"],["for","agreed",2,"margin-left",".7rem"],["id","agreedreq",1,"red-text","hidden"],["type","submit","value","Submit"],["id","succesdialog",1,"hidden",2,"display","flex","flex-direction","column"],[2,"font-weight","700"],[2,"font-weight","400"]],template:function(o,r){o&1&&(e(0,"main",3)(1,"div",4)(2,"p",5),n(3,"Contact Us"),t(),e(4,"form",6)(5,"div",7)(6,"div",8)(7,"label",9),n(8,"First Name"),t(),i(9,"input",10),e(10,"span",11),n(11,"This field is required"),t()(),e(12,"div",12)(13,"label",13),n(14,"Last Name"),t(),i(15,"input",14),e(16,"span",15),n(17,"This field is required"),t()()(),e(18,"label",16),n(19,"Email Address"),t(),i(20,"input",17,0),e(22,"span",18),n(23,"Please enter a valid email address"),t(),e(24,"div",19)(25,"div",20)(26,"label",21),n(27,"Query Type"),t()(),e(28,"div",22)(29,"div",23),i(30,"input",24,1),e(32,"span"),n(33,"\xA0\xA0"),t(),n(34,"General Enquiry"),t(),e(35,"div",25),i(36,"input",26,1),e(38,"span"),n(39,"\xA0\xA0"),t(),n(40,"Support Request"),t()(),e(41,"span",27),n(42,"Please select a query type"),t()(),e(43,"div",28)(44,"label",29),n(45,"Message"),t(),i(46,"textarea",30),e(47,"span",31),n(48,"This field is required"),t()(),e(49,"div",32),i(50,"input",33,2),e(52,"label",34),n(53,"I consent to being contacted by the team"),t()(),e(54,"span",35),n(55,"To submit this form, please consent to being contacted"),t(),i(56,"input",36),t(),e(57,"dialog",37)(58,"span",38),n(59,"\u2705 Message Sent!"),t(),e(60,"span",39),n(61,"Thanks for completing the form. We'll be in touch soon!"),t()()()(),i(62,"router-outlet"))},dependencies:[b],styles:["@media only screen and (max-width: 811px){.mobildesign[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between}}.main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-left:2rem;padding-right:2rem;width:50rem;height:50rem;background-color:#fff;border-radius:.9rem;margin-top:5rem}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:.5rem}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover, .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .whichtypebox[_ngcontent-%COMP%]:hover{border-radius:.5rem;border:1px hsl(169,82%,27%) solid}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:1rem;border-radius:.5rem;border:1px hsl(187,24%,22%) solid}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{margin-top:1.7rem;background-color:#0c7d69;color:#fff;border:none;height:3.8rem;font-weight:700}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover{margin-top:1.7rem;background-color:#095d4d;color:#fff;border:none;height:3.8rem;font-weight:700}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked{background-color:#0c7d69}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:3px}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #agreed[_ngcontent-%COMP%]:checked{accent-color:hsl(169,82%,27%)}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{width:20px;height:20px;background-color:#fff;border-radius:50%;vertical-align:middle;border:2px solid #ddd;appearance:none;-webkit-appearance:none;outline:none;cursor:pointer}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .whichtypebox[_ngcontent-%COMP%]{height:2.7rem;padding-left:1rem;width:50rem;display:flex;align-items:center;border-radius:.5rem;border:1px hsl(187,24%,22%) solid}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid hsl(187,24%,22%);border-radius:.5rem}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   dialog[_ngcontent-%COMP%]{top:1.5vh;background-color:#0c7d69;border:none;border-radius:.5rem;color:#fff;font-family:Karla,sans-serif}"]});let d=a;return d})();var O=[];var P={providers:[C(O),x()]};var E={providers:[y()]},v=f(P,E);var S=()=>h(M,v),K=S;export{K as a};
