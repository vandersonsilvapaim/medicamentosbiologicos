(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1D2W":function(e,i,a){"use strict";a.r(i),a.d(i,"AdministracaoModule",(function(){return M}));var o=a("tyNb"),t=a("VTKa"),r=a("dMsE"),n=a("LRne"),d=a("J3qu"),l=a("wRzG"),s=a("fXoL"),c=a("2ChS"),m=a("NFeN"),b=a("Rv7U"),u=a("3Pt+"),p=a("/zY6"),f=a("ofXK"),h=a("bTqV"),v=a("Qu3c"),_=a("LpNs"),g=a("pxjv"),T=a("kmnG"),y=a("qFsG");function S(e,i){1&e&&(s.Tb(0,"mat-error",20),s.Cc(1,"In\xedcio obrigatoria"),s.Sb())}function I(e,i){1&e&&(s.Tb(0,"mat-error",20),s.Cc(1,"Fim obrigatoria"),s.Sb())}function q(e,i){1&e&&(s.Tb(0,"mat-error",20),s.Cc(1,"Observa\xe7\xe3o obrigatoria"),s.Sb())}function w(e,i){if(1&e){const e=s.Ub();s.Tb(0,"form",5),s.Tb(1,"div",6),s.Tb(2,"div",7),s.Tb(3,"div",8),s.Ob(4,"paciente-medico",9),s.Sb(),s.Tb(5,"div",8),s.Tb(6,"h2",10),s.Cc(7," Informa\xe7\xf5es da prescri\xe7\xe3o e dispensa\xe7\xe3o realizada "),s.Sb(),s.Ob(8,"medicamento",11),s.Sb(),s.Tb(9,"div",8),s.Tb(10,"div",8),s.Tb(11,"h2",10),s.Cc(12," Controle da administra\xe7\xe3o do medicamento "),s.Sb(),s.Sb(),s.Tb(13,"mat-form-field",12),s.Tb(14,"mat-label"),s.Cc(15,"In\xedcio"),s.Sb(),s.Ob(16,"input",13),s.Bc(17,S,2,0,"mat-error",14),s.Sb(),s.Tb(18,"mat-form-field",15),s.Tb(19,"mat-label"),s.Cc(20,"Fim"),s.Sb(),s.Ob(21,"input",16),s.Bc(22,I,2,0,"mat-error",14),s.Sb(),s.Tb(23,"button",17),s.ac("click",(function(){return s.uc(e),s.ec().regIntercorrencia()})),s.Cc(24,"Registrar Intercorr\xeancia"),s.Sb(),s.Tb(25,"div",8),s.Tb(26,"mat-form-field",18),s.Tb(27,"mat-label"),s.Cc(28,"Observa\xe7\xe3o"),s.Sb(),s.Ob(29,"input",19),s.Bc(30,q,2,0,"mat-error",14),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb()}if(2&e){const e=s.ec();var a;const i=null==(a=e.fb.get("inicio"))?null:a.invalid;var o;const r=null==(o=e.fb.get("fim"))?null:o.invalid;var t;const n=null==(t=e.fb.get("obs"))?null:t.invalid;s.jc("formGroup",e.fb),s.Bb(4),s.jc("paciente",e._paciente_medico),s.Bb(4),s.jc("medicamento",e.medicamento_input),s.Bb(9),s.jc("ngIf",i),s.Bb(5),s.jc("ngIf",r),s.Bb(8),s.jc("ngIf",n)}}function R(e,i){if(1&e){const e=s.Ub();s.Tb(0,"button",21),s.ac("click",(function(){return s.uc(e),s.ec().back_stepper()})),s.Tb(1,"mat-icon"),s.Cc(2,"arrow_back"),s.Sb(),s.Tb(3,"strong"),s.Cc(4,"Voltar"),s.Sb(),s.Sb()}}let C=(()=>{class e{constructor(e,i,a,o){this.log=e,this.router=i,this.service=a,this.alert=o,this.isLive=!1,this.action=new s.o,this.fb=new u.h({}),this.fb.addControl("inicio",new u.e("",u.u.required)),this.fb.addControl("fim",new u.e("",u.u.required)),this.fb.addControl("obs",new u.e("",u.u.required)),this.fb.addControl("intercorrencia",new u.e("",u.u.required))}set forms(e){e&&this._form!=e&&(this._form=e,this.isLive&&this.ngOnInit())}onMouseLeave(){}ngOnDestroy(){this.isLive=!1,this.fb=null,this._fb=null,this.alert.clearAll()}ngOnInit(){this.isLive=!0,this._form&&(this._paciente_medico=this._form.paciente_medico,this.medicamento_input={enable:!1,medicine:this._form.medicamento.medicine,pharmaceutical_form:{dose:this._form.medicamento.pharmaceutical_form.dose,unit:this._form.medicamento.pharmaceutical_form.unit,presentation:this._form.medicamento.pharmaceutical_form.presentation},dosage:{route:this._form.medicamento.dosage.route,intervalo:this._form.medicamento.dosage.intervalo,duracao:this._form.medicamento.dosage.duracao},justification:this._form.medicamento.justification,lote:this._form.dispensacao.lote,validade:this._form.dispensacao.validade,note:this._form.medicamento.note,dilute:this._form.medicamento.dilute})}regIntercorrencia(){this.service.addIntercorrencia({_form:this._form,administracao:this.fb.value,paciente_medico:this._paciente_medico}),this.alert.showToaster("Intercorrencia registrada com sucesso !")}back_stepper(){this.action.emit({back_stepper:!0})}next_stepper(){this.service.addAdministracoes({_form:this._form,administracao:this.fb.value,paciente_medico:this._paciente_medico}),this.router.navigate(["/"],{skipLocationChange:!1}),this.alert.showToaster("Administra\xe7\xe3o realizada com sucesso !")}}return e.\u0275fac=function(i){return new(i||e)(s.Nb(r.a),s.Nb(o.a),s.Nb(p.a),s.Nb(t.a))},e.\u0275cmp=s.Hb({type:e,selectors:[["administracao-form"]],hostBindings:function(e,i){1&e&&s.ac("mouseleave",(function(){return i.onMouseLeave()}))},inputs:{forms:"forms"},outputs:{action:"action"},decls:9,vars:2,consts:[["class","form-margin",3,"formGroup",4,"ngIf"],["id","actions",2,"align-items","center","display","flex","flex-direction","row","flex-wrap","wrap","justify-content","center","margin-top","15px"],[2,"margin","0 auto"],["mat-button","","style","color: #1d9bbb","matTooltipPosition","above","matTooltip","Voltar",3,"click",4,"ngIf"],["mat-raised-button","","matTooltipPosition","above","matTooltip","Administrado",2,"color","#1dbb3f",3,"click"],[1,"form-margin",3,"formGroup"],[1,"division",2,"display","flex"],[1,"block","m10",2,"margin","auto"],[1,"division"],[3,"paciente"],[1,"raleway",2,"color","#0376bb"],[3,"medicamento"],["hideRequiredMarker","false","floatLabel","always",1,"block","m4",2,"padding-right","7px"],["aria-label","In\xedcio","matInput","","type","text","placeholder","01/01/2021 13:51","formControlName","inicio"],["align","end",4,"ngIf"],["hideRequiredMarker","false","floatLabel","always",1,"block","m4"],["aria-label","Fim","matInput","","type","text","placeholder","01/01/2021 14:52","formControlName","fim"],["mat-button","",1,"block","m4",2,"background-color","#d84b4b",3,"click"],["hideRequiredMarker","false","floatLabel","always",1,"block","m12"],["aria-label","obs","matInput","","type","text","placeholder","Observa\xe7\xe3o xpto","formControlName","obs"],["align","end"],["mat-button","","matTooltipPosition","above","matTooltip","Voltar",2,"color","#1d9bbb",3,"click"]],template:function(e,i){1&e&&(s.Bc(0,w,31,6,"form",0),s.Tb(1,"div",1),s.Tb(2,"div",2),s.Bc(3,R,5,0,"button",3),s.Tb(4,"button",4),s.ac("click",(function(){return i.next_stepper()})),s.Tb(5,"mat-icon"),s.Cc(6,"done_outline"),s.Sb(),s.Tb(7,"strong"),s.Cc(8,"Reagistar Administra\xe7\xe3o"),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&e&&(s.jc("ngIf",i.fb),s.Bb(3),s.jc("ngIf",null!=i.fb))},directives:[f.k,h.a,v.a,m.a,u.v,u.o,u.i,_.a,g.a,T.d,T.h,y.b,u.c,u.n,u.g,T.c],styles:[""]}),e})();const k=[{path:"",component:(()=>{class e{constructor(e,i,a,o,t){this.alert=e,this.service=i,this.log=a,this.sheet=o,this.sheetService=t,this._form=null}ngOnDestroy(){this.isLive=null,this.values=null,this.settings=null,this._form=null}ngAfterViewInit(){this.isLive=!0,this.settings=Object(n.a)({show_action:{search:!0,edit:!1,remove:!1,radio:!1,name:"",consulta_label:"Consultar",consulta_placeholder:"Digite aqui algo relacionado ao Paciente"}});const e=[];this.service.dispensacoes.forEach(i=>{const a=i._form;e.push([{displayed:"ID",placeholder:"ID",favorite:"0",name:"id_dispensacao",value:i.id_dispensacao,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do paciente",placeholder:"Id do paciente",favorite:"1",name:"id_paciente",value:a.patient.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do paciente",placeholder:"Nome do paciente",favorite:"2",name:"paciente",value:a.patient.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Registro Hospitalar",placeholder:"Registro Hospitalar",favorite:"3",name:"reg_hosp",value:a.patient.reg_hosp,validators:[],disabled:!0,hideRequired:!0},{displayed:"Imagem do perfil",placeholder:"Imagem do perfil",favorite:null,name:"img",value:a.patient.img,validators:[],disabled:!0,hideRequired:!0},{displayed:"Genero",placeholder:"Genero",favorite:null,name:"genero",value:a.patient.genero,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data de nascimento",placeholder:"Data de nascimento",favorite:null,name:"dt_nascimento",value:a.patient.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"CPF",placeholder:"CPF",favorite:null,name:"cpf",value:a.patient.cpf,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone",placeholder:"Telefone",favorite:null,name:"telefone",value:a.patient.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Endereco",placeholder:"Endereco",favorite:null,name:"endereco",value:a.patient.endereco,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do emitente",placeholder:"Id do emitente",favorite:null,name:"doctor_id",value:a.doctor.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do emitente",placeholder:"Nome do emitente",favorite:"4",name:"doctor_name",value:a.doctor.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma\xe7\xe3o do emitente",placeholder:"Forma\xe7\xe3o do emitente",favorite:null,name:"doctor_formacao",value:a.doctor.formacao,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nascimento do emitente",placeholder:"Nascimento do emitente",favorite:null,name:"doctor_dt_nascimento",value:a.doctor.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"Conselho do emitente",placeholder:"Conselho do emitente",favorite:null,name:"doctor_conselho",value:a.doctor.conselho,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone do emitente",placeholder:"Telefone do emitente",favorite:null,name:"doctor_telefone",value:a.doctor.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data e Hora",placeholder:"Data e Hora",favorite:"5",name:"time",value:`${a.hospital.data} - ${a.hospital.hora}`,validators:[],disabled:!0,hideRequired:!0},{displayed:"Hospital",placeholder:"Hospital",favorite:null,name:"nome_hospital",value:a.hospital.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Medicamento",placeholder:"Medicamento",favorite:"6",name:"medicine",value:"Biologico "+i.medicamento.medicine,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma farmaceutica",placeholder:"Forma farmaceutica",favorite:null,name:"pharmaceutical_form",value:`Dose: ${i.medicamento.pharmaceutical_form.dose}, Unidade de medida: ${i.medicamento.pharmaceutical_form.unit}, Apresenta\xe7\xe3o: ${i.medicamento.pharmaceutical_form.presentation} `,validators:[],disabled:!0,hideRequired:!0},{displayed:"Posologia",placeholder:"Posologia",favorite:null,name:"dosage",value:`Via de administra\xe7\xe3o: ${i.medicamento.dosage.route}, Intervalo: ${i.medicamento.dosage.intervalo}, Dura\xe7\xe3o: ${i.medicamento.dosage.duracao} `,validators:[],disabled:!0,hideRequired:!0},{displayed:"Diluir",placeholder:"Diluir",favorite:null,name:"dilute",value:i.medicamento.dilute,validators:[],disabled:!0,hideRequired:!0}])}),this.values=Object(n.a)({push:e})}elementListEvent(e){e&&(e.view?this._form=this.service.dispensacoes.find(i=>e.view.id_dispensacao==i.id_dispensacao):e.filteredData?(this.sheetService.setInfo({desc1:`"${e.filteredData}" n\xe3o foi encontrado !`,desc2:"Por favor verifique se a informa\xe7\xe3o esta correta ! "}),this.sheet.open(d.c)):e.error&&this.alert.showToaster(r.a.LISTA_DE_CODIGOS_E_STATUS._1_INFORMATIVA))}formEvent(e){e&&e.back_stepper&&(this._form=null)}}return e.\u0275fac=function(i){return new(i||e)(s.Nb(t.a),s.Nb(l.a),s.Nb(r.a),s.Nb(c.b),s.Nb(d.d))},e.\u0275cmp=s.Hb({type:e,selectors:[["ng-component"]],decls:11,vars:7,consts:[[2,"position","relative","min-height","420px"],[1,"division",2,"padding","5px 5px 0 10px","margin-left","10%","margin-right","10%","margin-top","7px"],[1,"hraleway",2,"color","#0376bb!important"],[2,"position","relative"],[2,"font-size","28px","color","#0376bb","position","absolute","left","-28px","padding-top","3px"],[1,"container-margin"],[1,"division",2,"padding-bottom","17px"],[3,"settings","values","action"],[3,"forms","action"]],template:function(e,i){1&e&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"h2",2),s.Tb(3,"span",3),s.Tb(4,"mat-icon",4),s.Cc(5," library_add_check "),s.Sb(),s.Sb(),s.Cc(6," Administra\xe7\xe3o "),s.Sb(),s.Sb(),s.Tb(7,"div",5),s.Tb(8,"div",6),s.Tb(9,"element-list",7),s.ac("action",(function(e){return i.elementListEvent(e)})),s.Sb(),s.Sb(),s.Tb(10,"administracao-form",8),s.ac("action",(function(e){return i.formEvent(e)})),s.Sb(),s.Sb(),s.Sb()),2&e&&(s.Bb(8),s.Eb("hide",i._form),s.Bb(1),s.jc("settings",i.settings)("values",i.values),s.Bb(1),s.Eb("hide",!i._form),s.jc("forms",i._form))},directives:[m.a,b.a,C],styles:[""]}),e})()}];let N=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(i){return new(i||e)},imports:[[o.d.forChild(k)],o.d]}),e})();var x=a("/bhW"),L=a("XRci"),j=a("gqU8"),D=a("beWR"),O=a("ZwK7");let B=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(i){return new(i||e)},providers:[],imports:[[D.a,O.a,f.c,x.MaterialModule]]}),e})(),M=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(i){return new(i||e)},providers:[p.a,l.a],imports:[[B,L.a,j.a,x.MaterialModule,f.c,N]]}),e})()}}]);