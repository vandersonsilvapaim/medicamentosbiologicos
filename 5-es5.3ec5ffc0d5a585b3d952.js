function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var a=0;a<i.length;a++){var t=i[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,i,a){return i&&_defineProperties(e.prototype,i),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1D2W":function(e,i,a){"use strict";a.r(i),a.d(i,"AdministracaoModule",(function(){return G}));var t=a("tyNb"),o=a("VTKa"),n=a("dMsE"),r=a("LRne"),d=a("J3qu"),l=a("wRzG"),c=a("fXoL"),s=a("2ChS"),m=a("NFeN"),u=a("Rv7U"),b=a("3Pt+"),f=a("/zY6"),p=a("ofXK"),h=a("bTqV"),v=a("Qu3c"),_=a("LpNs"),g=a("pxjv"),y=a("kmnG"),T=a("qFsG");function C(e,i){1&e&&(c.Tb(0,"mat-error",20),c.Cc(1,"In\xedcio obrigatoria"),c.Sb())}function k(e,i){1&e&&(c.Tb(0,"mat-error",20),c.Cc(1,"Fim obrigatoria"),c.Sb())}function S(e,i){1&e&&(c.Tb(0,"mat-error",20),c.Cc(1,"Observa\xe7\xe3o obrigatoria"),c.Sb())}function w(e,i){if(1&e){var a=c.Ub();c.Tb(0,"form",5),c.Tb(1,"div",6),c.Tb(2,"div",7),c.Tb(3,"div",8),c.Ob(4,"paciente-medico",9),c.Sb(),c.Tb(5,"div",8),c.Tb(6,"h2",10),c.Cc(7," Informa\xe7\xf5es da prescri\xe7\xe3o e dispensa\xe7\xe3o realizada "),c.Sb(),c.Ob(8,"medicamento",11),c.Sb(),c.Tb(9,"div",8),c.Tb(10,"div",8),c.Tb(11,"h2",10),c.Cc(12," Controle da administra\xe7\xe3o do medicamento "),c.Sb(),c.Sb(),c.Tb(13,"mat-form-field",12),c.Tb(14,"mat-label"),c.Cc(15,"In\xedcio"),c.Sb(),c.Ob(16,"input",13),c.Bc(17,C,2,0,"mat-error",14),c.Sb(),c.Tb(18,"mat-form-field",15),c.Tb(19,"mat-label"),c.Cc(20,"Fim"),c.Sb(),c.Ob(21,"input",16),c.Bc(22,k,2,0,"mat-error",14),c.Sb(),c.Tb(23,"button",17),c.ac("click",(function(){return c.uc(a),c.ec().regIntercorrencia()})),c.Cc(24,"Registrar Intercorr\xeancia"),c.Sb(),c.Tb(25,"div",8),c.Tb(26,"mat-form-field",18),c.Tb(27,"mat-label"),c.Cc(28,"Observa\xe7\xe3o"),c.Sb(),c.Ob(29,"input",19),c.Bc(30,S,2,0,"mat-error",14),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&e){var t,o,n,r=c.ec(),d=null==(t=r.fb.get("inicio"))?null:t.invalid,l=null==(o=r.fb.get("fim"))?null:o.invalid,s=null==(n=r.fb.get("obs"))?null:n.invalid;c.jc("formGroup",r.fb),c.Bb(4),c.jc("paciente",r._paciente_medico),c.Bb(4),c.jc("medicamento",r.medicamento_input),c.Bb(9),c.jc("ngIf",d),c.Bb(5),c.jc("ngIf",l),c.Bb(8),c.jc("ngIf",s)}}function I(e,i){if(1&e){var a=c.Ub();c.Tb(0,"button",21),c.ac("click",(function(){return c.uc(a),c.ec().back_stepper()})),c.Tb(1,"mat-icon"),c.Cc(2,"arrow_back"),c.Sb(),c.Tb(3,"strong"),c.Cc(4,"Voltar"),c.Sb(),c.Sb()}}var q,R,N,x,L,j=((q=function(){function e(i,a,t,o){_classCallCheck(this,e),this.log=i,this.router=a,this.service=t,this.alert=o,this.isLive=!1,this.action=new c.o,this.fb=new b.h({}),this.fb.addControl("inicio",new b.e("",b.u.required)),this.fb.addControl("fim",new b.e("",b.u.required)),this.fb.addControl("obs",new b.e("",b.u.required)),this.fb.addControl("intercorrencia",new b.e("",b.u.required))}return _createClass(e,[{key:"onMouseLeave",value:function(){}},{key:"ngOnDestroy",value:function(){this.isLive=!1,this.fb=null,this._fb=null,this.alert.clearAll()}},{key:"ngOnInit",value:function(){this.isLive=!0,this._form&&(this._paciente_medico=this._form.paciente_medico,this.medicamento_input={enable:!1,medicine:this._form.medicamento.medicine,pharmaceutical_form:{dose:this._form.medicamento.pharmaceutical_form.dose,unit:this._form.medicamento.pharmaceutical_form.unit,presentation:this._form.medicamento.pharmaceutical_form.presentation},dosage:{route:this._form.medicamento.dosage.route,intervalo:this._form.medicamento.dosage.intervalo,duracao:this._form.medicamento.dosage.duracao},justification:this._form.medicamento.justification,lote:this._form.dispensacao.lote,validade:this._form.dispensacao.validade,note:this._form.medicamento.note,dilute:this._form.medicamento.dilute})}},{key:"regIntercorrencia",value:function(){this.service.addIntercorrencia({_form:this._form,administracao:this.fb.value,paciente_medico:this._paciente_medico}),this.alert.showToaster("Intercorrencia registrada com sucesso !")}},{key:"back_stepper",value:function(){this.action.emit({back_stepper:!0})}},{key:"next_stepper",value:function(){this.service.addAdministracoes({_form:this._form,administracao:this.fb.value,paciente_medico:this._paciente_medico}),this.router.navigate(["/"],{skipLocationChange:!1}),this.alert.showToaster("Administra\xe7\xe3o realizada com sucesso !")}},{key:"forms",set:function(e){e&&this._form!=e&&(this._form=e,this.isLive&&this.ngOnInit())}}]),e}()).\u0275fac=function(e){return new(e||q)(c.Nb(n.a),c.Nb(t.a),c.Nb(f.a),c.Nb(o.a))},q.\u0275cmp=c.Hb({type:q,selectors:[["administracao-form"]],hostBindings:function(e,i){1&e&&c.ac("mouseleave",(function(){return i.onMouseLeave()}))},inputs:{forms:"forms"},outputs:{action:"action"},decls:9,vars:2,consts:[["class","form-margin",3,"formGroup",4,"ngIf"],["id","actions",2,"align-items","center","display","flex","flex-direction","row","flex-wrap","wrap","justify-content","center","margin-top","15px"],[2,"margin","0 auto"],["mat-button","","style","color: #1d9bbb","matTooltipPosition","above","matTooltip","Voltar",3,"click",4,"ngIf"],["mat-raised-button","","matTooltipPosition","above","matTooltip","Administrado",2,"color","#1dbb3f",3,"click"],[1,"form-margin",3,"formGroup"],[1,"division",2,"display","flex"],[1,"block","m10",2,"margin","auto"],[1,"division"],[3,"paciente"],[1,"raleway",2,"color","#0376bb"],[3,"medicamento"],["hideRequiredMarker","false","floatLabel","always",1,"block","m4",2,"padding-right","7px"],["aria-label","In\xedcio","matInput","","type","text","placeholder","01/01/2021 13:51","formControlName","inicio"],["align","end",4,"ngIf"],["hideRequiredMarker","false","floatLabel","always",1,"block","m4"],["aria-label","Fim","matInput","","type","text","placeholder","01/01/2021 14:52","formControlName","fim"],["mat-button","",1,"block","m4",2,"background-color","#d84b4b",3,"click"],["hideRequiredMarker","false","floatLabel","always",1,"block","m12"],["aria-label","obs","matInput","","type","text","placeholder","Observa\xe7\xe3o xpto","formControlName","obs"],["align","end"],["mat-button","","matTooltipPosition","above","matTooltip","Voltar",2,"color","#1d9bbb",3,"click"]],template:function(e,i){1&e&&(c.Bc(0,w,31,6,"form",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Bc(3,I,5,0,"button",3),c.Tb(4,"button",4),c.ac("click",(function(){return i.next_stepper()})),c.Tb(5,"mat-icon"),c.Cc(6,"done_outline"),c.Sb(),c.Tb(7,"strong"),c.Cc(8,"Reagistar Administra\xe7\xe3o"),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.jc("ngIf",i.fb),c.Bb(3),c.jc("ngIf",null!=i.fb))},directives:[p.k,h.a,v.a,m.a,b.v,b.o,b.i,_.a,g.a,y.d,y.h,T.b,b.c,b.n,b.g,y.c],styles:[""]}),q),D=[{path:"",component:(R=function(){function e(i,a,t,o,n){_classCallCheck(this,e),this.alert=i,this.service=a,this.log=t,this.sheet=o,this.sheetService=n,this._form=null}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.isLive=null,this.values=null,this.settings=null,this._form=null}},{key:"ngAfterViewInit",value:function(){this.isLive=!0,this.settings=Object(r.a)({show_action:{search:!0,edit:!1,remove:!1,radio:!1,name:"",consulta_label:"Consultar",consulta_placeholder:"Digite aqui algo relacionado ao Paciente"}});var e=[];this.service.dispensacoes.forEach((function(i){var a=i._form;e.push([{displayed:"ID",placeholder:"ID",favorite:"0",name:"id_dispensacao",value:i.id_dispensacao,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do paciente",placeholder:"Id do paciente",favorite:"1",name:"id_paciente",value:a.patient.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do paciente",placeholder:"Nome do paciente",favorite:"2",name:"paciente",value:a.patient.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Registro Hospitalar",placeholder:"Registro Hospitalar",favorite:"3",name:"reg_hosp",value:a.patient.reg_hosp,validators:[],disabled:!0,hideRequired:!0},{displayed:"Imagem do perfil",placeholder:"Imagem do perfil",favorite:null,name:"img",value:a.patient.img,validators:[],disabled:!0,hideRequired:!0},{displayed:"Genero",placeholder:"Genero",favorite:null,name:"genero",value:a.patient.genero,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data de nascimento",placeholder:"Data de nascimento",favorite:null,name:"dt_nascimento",value:a.patient.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"CPF",placeholder:"CPF",favorite:null,name:"cpf",value:a.patient.cpf,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone",placeholder:"Telefone",favorite:null,name:"telefone",value:a.patient.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Endereco",placeholder:"Endereco",favorite:null,name:"endereco",value:a.patient.endereco,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do emitente",placeholder:"Id do emitente",favorite:null,name:"doctor_id",value:a.doctor.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do emitente",placeholder:"Nome do emitente",favorite:"4",name:"doctor_name",value:a.doctor.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma\xe7\xe3o do emitente",placeholder:"Forma\xe7\xe3o do emitente",favorite:null,name:"doctor_formacao",value:a.doctor.formacao,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nascimento do emitente",placeholder:"Nascimento do emitente",favorite:null,name:"doctor_dt_nascimento",value:a.doctor.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"Conselho do emitente",placeholder:"Conselho do emitente",favorite:null,name:"doctor_conselho",value:a.doctor.conselho,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone do emitente",placeholder:"Telefone do emitente",favorite:null,name:"doctor_telefone",value:a.doctor.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data e Hora",placeholder:"Data e Hora",favorite:"5",name:"time",value:"".concat(a.hospital.data," - ").concat(a.hospital.hora),validators:[],disabled:!0,hideRequired:!0},{displayed:"Hospital",placeholder:"Hospital",favorite:null,name:"nome_hospital",value:a.hospital.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Medicamento",placeholder:"Medicamento",favorite:"6",name:"medicine",value:"Biologico "+i.medicamento.medicine,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma farmaceutica",placeholder:"Forma farmaceutica",favorite:null,name:"pharmaceutical_form",value:"Dose: ".concat(i.medicamento.pharmaceutical_form.dose,", Unidade de medida: ").concat(i.medicamento.pharmaceutical_form.unit,", Apresenta\xe7\xe3o: ").concat(i.medicamento.pharmaceutical_form.presentation," "),validators:[],disabled:!0,hideRequired:!0},{displayed:"Posologia",placeholder:"Posologia",favorite:null,name:"dosage",value:"Via de administra\xe7\xe3o: ".concat(i.medicamento.dosage.route,", Intervalo: ").concat(i.medicamento.dosage.intervalo,", Dura\xe7\xe3o: ").concat(i.medicamento.dosage.duracao," "),validators:[],disabled:!0,hideRequired:!0},{displayed:"Diluir",placeholder:"Diluir",favorite:null,name:"dilute",value:i.medicamento.dilute,validators:[],disabled:!0,hideRequired:!0}])})),this.values=Object(r.a)({push:e})}},{key:"elementListEvent",value:function(e){e&&(e.view?this._form=this.service.dispensacoes.find((function(i){return e.view.id_dispensacao==i.id_dispensacao})):e.filteredData?(this.sheetService.setInfo({desc1:'"'.concat(e.filteredData,'" n\xe3o foi encontrado !'),desc2:"Por favor verifique se a informa\xe7\xe3o esta correta ! "}),this.sheet.open(d.c)):e.error&&this.alert.showToaster(n.a.LISTA_DE_CODIGOS_E_STATUS._1_INFORMATIVA))}},{key:"formEvent",value:function(e){e&&e.back_stepper&&(this._form=null)}}]),e}(),R.\u0275fac=function(e){return new(e||R)(c.Nb(o.a),c.Nb(l.a),c.Nb(n.a),c.Nb(s.b),c.Nb(d.d))},R.\u0275cmp=c.Hb({type:R,selectors:[["ng-component"]],decls:11,vars:7,consts:[[2,"position","relative","min-height","420px"],[1,"division",2,"padding","5px 5px 0 10px","margin-left","10%","margin-right","10%","margin-top","7px"],[1,"hraleway",2,"color","#0376bb!important"],[2,"position","relative"],[2,"font-size","28px","color","#0376bb","position","absolute","left","-28px","padding-top","3px"],[1,"container-margin"],[1,"division",2,"padding-bottom","17px"],[3,"settings","values","action"],[3,"forms","action"]],template:function(e,i){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"h2",2),c.Tb(3,"span",3),c.Tb(4,"mat-icon",4),c.Cc(5," library_add_check "),c.Sb(),c.Sb(),c.Cc(6," Administra\xe7\xe3o "),c.Sb(),c.Sb(),c.Tb(7,"div",5),c.Tb(8,"div",6),c.Tb(9,"element-list",7),c.ac("action",(function(e){return i.elementListEvent(e)})),c.Sb(),c.Sb(),c.Tb(10,"administracao-form",8),c.ac("action",(function(e){return i.formEvent(e)})),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.Bb(8),c.Eb("hide",i._form),c.Bb(1),c.jc("settings",i.settings)("values",i.values),c.Bb(1),c.Eb("hide",!i._form),c.jc("forms",i._form))},directives:[m.a,u.a,j],styles:[""]}),R)}],O=((N=function e(){_classCallCheck(this,e)}).\u0275mod=c.Lb({type:N}),N.\u0275inj=c.Kb({factory:function(e){return new(e||N)},imports:[[t.d.forChild(D)],t.d]}),N),B=a("/bhW"),M=a("XRci"),P=a("gqU8"),A=a("beWR"),E=a("ZwK7"),F=((L=function e(){_classCallCheck(this,e)}).\u0275mod=c.Lb({type:L}),L.\u0275inj=c.Kb({factory:function(e){return new(e||L)},providers:[],imports:[[A.a,E.a,p.c,B.MaterialModule]]}),L),G=((x=function e(){_classCallCheck(this,e)}).\u0275mod=c.Lb({type:x}),x.\u0275inj=c.Kb({factory:function(e){return new(e||x)},providers:[f.a,l.a],imports:[[F,M.a,P.a,B.MaterialModule,p.c,O]]}),x)}}]);