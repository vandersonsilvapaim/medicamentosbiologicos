(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rrLE:function(e,i,a){"use strict";a.r(i),a.d(i,"NotificacaoModule",(function(){return z}));var t=a("ofXK"),o=a("/bhW"),n=a("XRci"),r=a("gqU8"),s=a("tyNb"),d=a("I02E"),l=a("LRne"),c=a("J3qu"),m=a("VTKa"),u=a("dMsE"),p=a("fXoL"),b=a("2ChS"),f=a("NFeN"),h=a("Rv7U"),v=a("3Pt+"),g=a("bTqV"),_=a("Qu3c"),T=a("92lz"),S=a("LpNs"),y=a("pxjv"),w=a("Wp6s");function D(e,i){if(1&e&&(p.Tb(0,"mat-card"),p.Tb(1,"mat-card-content"),p.Tb(2,"div",1),p.Tb(3,"div",2),p.Tb(4,"p",3),p.Dc(5),p.Sb(),p.Tb(6,"p",3),p.Dc(7),p.Sb(),p.Tb(8,"p",4),p.Dc(9),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&e){const e=p.ec();p.Bb(5),p.Fc(" In\xedcio: ",e._administracao.inicio," "),p.Bb(2),p.Fc(" Fim: ",e._administracao.fim," "),p.Bb(2),p.Fc(" Intervalo: ",e._administracao.obs," ")}}let q=(()=>{class e{constructor(){this.isLive=!1,this.enable=!1,this.action=new p.o}set administracao(e){e&&(this.enable=e.enable,this._administracao=e)}ngOnDestroy(){this.isLive=!1,this.enable=!1,this._administracao=null}ngOnInit(){this.isLive=!0}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p.Hb({type:e,selectors:[["administracao-info"]],inputs:{administracao:"administracao"},outputs:{action:"action"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"division",2,"text-align","justify"],[1,"block","m4"],[2,"margin","0","color","#383838","padding","0px 0px 7px 0px"],[2,"margin","0","white-space","nowrap","text-overflow","ellipsis","overflow","hidden","font-size","14px","color","#0000008a"]],template:function(e,i){1&e&&p.Bc(0,D,10,3,"mat-card",0),2&e&&p.jc("ngIf",i._administracao)},directives:[t.k,w.a,w.b],styles:[""]}),e})();var I=a("kmnG"),R=a("qFsG"),x=a("ihCf");function L(e,i){1&e&&(p.Tb(0,"mat-hint",18),p.Dc(1," Situa\xe7\xe3o obrigatoria "),p.Sb())}function N(e,i){if(1&e&&(p.Tb(0,"form",5),p.Tb(1,"div",6),p.Tb(2,"div",7),p.Tb(3,"div",8),p.Ob(4,"responsavel",9),p.Sb(),p.Tb(5,"div",8),p.Tb(6,"h2",10),p.Dc(7," Informa\xe7\xf5es da prescri\xe7\xe3o e dispensa\xe7\xe3o realizada "),p.Sb(),p.Ob(8,"paciente-medico",11),p.Ob(9,"medicamento",12),p.Sb(),p.Tb(10,"div",8),p.Tb(11,"h2",10),p.Dc(12," Informa\xe7\xf5es da Administra\xe7\xe3o realizada "),p.Sb(),p.Tb(13,"div",8),p.Tb(14,"div",13),p.Ob(15,"responsavel",9),p.Sb(),p.Tb(16,"div",13),p.Ob(17,"administracao-info",14),p.Sb(),p.Sb(),p.Sb(),p.Tb(18,"div",8),p.Tb(19,"div",8),p.Tb(20,"h2",10),p.Dc(21," Controle da Notifica\xe7\xe3o "),p.Sb(),p.Sb(),p.Tb(22,"div",8),p.Tb(23,"mat-form-field",15),p.Tb(24,"mat-label"),p.Dc(25,"Descreva a situa\xe7\xe3o"),p.Sb(),p.Ob(26,"textarea",16),p.Bc(27,L,2,0,"mat-hint",17),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&e){const e=p.ec();var a;const i=null==(a=e.fb.get("situacao"))?null:a.invalid;p.jc("formGroup",e.fb),p.Bb(4),p.jc("responsavel",e.responsavel),p.Bb(4),p.jc("paciente",e._paciente_medico),p.Bb(1),p.jc("medicamento",e.medicamento_input),p.Bb(6),p.jc("responsavel",null==e.administracao_input?null:e.administracao_input.responsavel),p.Bb(2),p.jc("administracao",e.administracao_input),p.Bb(10),p.jc("ngIf",i)}}function j(e,i){if(1&e){const e=p.Ub();p.Tb(0,"button",19),p.ac("click",(function(){return p.uc(e),p.ec().back_stepper()})),p.Tb(1,"mat-icon"),p.Dc(2,"arrow_back"),p.Sb(),p.Tb(3,"strong"),p.Dc(4,"Voltar"),p.Sb(),p.Sb()}}let k=(()=>{class e{constructor(e,i,a,t){this.log=e,this.router=i,this.service=a,this.alert=t,this.isLive=!1,this.responsavel={id:null,img:"r1img.jpg",identificacao:"Identifica\xe7\xe3o do Emitente da Notifica\xe7\xe3o",nome:"DeLuca",formacao:"Enfermeiro",dt_nascimento:"26/03/1966",conselho:"00000-0/SP",telefone:"+1 2064047000",hospital:{img:"himg.jpg",nome:"Grace Hospital (Seattle)",data:(new Date).toLocaleDateString(),hora:(new Date).toLocaleTimeString()}},this.action=new p.o,this.fb=new v.h({}),this.fb.addControl("situacao",new v.e("",v.u.required))}set forms(e){e&&this._form!=e&&(this._form=e,this.isLive&&this.ngOnInit())}onMouseLeave(){}ngOnDestroy(){this.isLive=!1,this.fb=null,this._fb=null,this.alert.clearAll()}ngOnInit(){this.isLive=!0,this._form&&(this.administracao_input=this._form.administracao,this._paciente_medico={id:this._form.patient.id,enable:!1},this.medicamento_input={enable:!1,medicine:this._form.medicine,pharmaceutical_form:{dose:this._form.pharmaceutical_form.dose,unit:this._form.pharmaceutical_form.unit,presentation:this._form.pharmaceutical_form.presentation},dosage:{route:this._form.dosage.route,intervalo:this._form.dosage.intervalo,duracao:this._form.dosage.duracao},justification:this._form.justification,note:this._form.note,dilute:this._form.dilute})}back_stepper(){this.action.emit({back_stepper:!0})}next_stepper(){if(this.fb.invalid)return void this.fb.markAllAsTouched();const e=this._form;e.notificacao=this.fb.value,e.notificacao.responsavel=this.responsavel,e.notificacao.data_realizacao=(new Date).toLocaleTimeString(),this.service.addData(e),this.router.navigate(["/"],{skipLocationChange:!1}),this.alert.showToaster("Notifica\xe7\xe3o realizada com sucesso !")}}return e.\u0275fac=function(i){return new(i||e)(p.Nb(u.a),p.Nb(s.a),p.Nb(d.a),p.Nb(m.a))},e.\u0275cmp=p.Hb({type:e,selectors:[["notificacao-form"]],hostBindings:function(e,i){1&e&&p.ac("mouseleave",(function(){return i.onMouseLeave()}))},inputs:{forms:"forms"},outputs:{action:"action"},decls:9,vars:2,consts:[["class","form-margin",3,"formGroup",4,"ngIf"],["id","actions",2,"align-items","center","display","flex","flex-direction","row","flex-wrap","wrap","justify-content","center","margin-top","15px"],[2,"margin","0 auto"],["mat-button","","style","color: #1d9bbb","matTooltipPosition","above","matTooltip","Voltar",3,"click",4,"ngIf"],["mat-raised-button","","matTooltipPosition","above","matTooltip","Notificar",2,"color","#1dbb3f",3,"click"],[1,"form-margin",3,"formGroup"],[1,"division",2,"display","flex"],[1,"block","m10",2,"margin","auto"],[1,"division"],[3,"responsavel"],[1,"raleway",2,"color","#0376bb"],[3,"paciente"],[3,"medicamento"],[1,"block","m6","s12"],[3,"administracao"],["hideRequiredMarker","false","floatLabel","always",1,"block","m12"],["matInput","","required","","formControlName","situacao","placeholder","Descreva com suas palavras qualquer sintoma ou efeito indesejado que considere ser causado pelo(s) medicamento(s).","cdkTextareaAutosize","","cdkAutosizeMinRows","2","cdkAutosizeMaxRows","3"],["style","font-size: 12px; color: #f44336;",4,"ngIf"],[2,"font-size","12px","color","#f44336"],["mat-button","","matTooltipPosition","above","matTooltip","Voltar",2,"color","#1d9bbb",3,"click"]],template:function(e,i){1&e&&(p.Bc(0,N,28,7,"form",0),p.Tb(1,"div",1),p.Tb(2,"div",2),p.Bc(3,j,5,0,"button",3),p.Tb(4,"button",4),p.ac("click",(function(){return i.next_stepper()})),p.Tb(5,"mat-icon"),p.Dc(6,"done_outline"),p.Sb(),p.Tb(7,"strong"),p.Dc(8,"Registrar Notifica\xe7\xe3o"),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&e&&(p.jc("ngIf",i.fb),p.Bb(3),p.jc("ngIf",null!=i.fb))},directives:[t.k,g.a,_.a,f.a,v.v,v.o,v.i,T.a,S.a,y.a,q,I.d,I.h,R.b,v.c,x.b,v.t,v.n,v.g,I.g],styles:[""]}),e})();const B=[{path:"",component:(()=>{class e{constructor(e,i,a,t,o){this.alert=e,this.service=i,this.log=a,this.sheet=t,this.sheetService=o,this._form=null}ngOnDestroy(){this.isLive=null,this.values=null,this.settings=null,this._form=null}ngAfterViewInit(){this.isLive=!0,this.settings=Object(l.a)({show_action:{search:!0,edit:!1,remove:!1,radio:!1,name:"",consulta_label:"Consultar",consulta_placeholder:"Digite aqui algo relacionado ao Paciente"}});const e=[];this.service.datas.filter(e=>e.administracao&&!e.notificacao).forEach(i=>{e.push([{displayed:"ID",placeholder:"ID",favorite:"0",name:"id_dispensacao",value:i.id_dispensacao,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do paciente",placeholder:"Id do paciente",favorite:"1",name:"id_paciente",value:i.patient.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do paciente",placeholder:"Nome do paciente",favorite:"2",name:"paciente",value:i.patient.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Registro Hospitalar",placeholder:"Registro Hospitalar",favorite:"3",name:"reg_hosp",value:i.patient.reg_hosp,validators:[],disabled:!0,hideRequired:!0},{displayed:"Imagem do perfil",placeholder:"Imagem do perfil",favorite:null,name:"img",value:i.patient.img,validators:[],disabled:!0,hideRequired:!0},{displayed:"Genero",placeholder:"Genero",favorite:null,name:"genero",value:i.patient.genero,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data de nascimento",placeholder:"Data de nascimento",favorite:null,name:"dt_nascimento",value:i.patient.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"CPF",placeholder:"CPF",favorite:null,name:"cpf",value:i.patient.cpf,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone",placeholder:"Telefone",favorite:null,name:"telefone",value:i.patient.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Endereco",placeholder:"Endereco",favorite:null,name:"endereco",value:i.patient.endereco,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do emitente",placeholder:"Id do emitente",favorite:null,name:"doctor_id",value:i.doctor.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do emitente",placeholder:"Nome do emitente",favorite:"4",name:"doctor_name",value:i.doctor.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma\xe7\xe3o do emitente",placeholder:"Forma\xe7\xe3o do emitente",favorite:null,name:"doctor_formacao",value:i.doctor.formacao,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nascimento do emitente",placeholder:"Nascimento do emitente",favorite:null,name:"doctor_dt_nascimento",value:i.doctor.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"Conselho do emitente",placeholder:"Conselho do emitente",favorite:null,name:"doctor_conselho",value:i.doctor.conselho,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone do emitente",placeholder:"Telefone do emitente",favorite:null,name:"doctor_telefone",value:i.doctor.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data e Hora",placeholder:"Data e Hora",favorite:"5",name:"time",value:`${i.hospital.data} - ${i.hospital.hora}`,validators:[],disabled:!0,hideRequired:!0},{displayed:"Hospital",placeholder:"Hospital",favorite:null,name:"nome_hospital",value:i.hospital.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Medicamento",placeholder:"Medicamento",favorite:"6",name:"medicine",value:"Biologico "+i.medicine,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma farmaceutica",placeholder:"Forma farmaceutica",favorite:null,name:"pharmaceutical_form",value:`Dose: ${i.pharmaceutical_form.dose}, Unidade de medida: ${i.pharmaceutical_form.unit}, Apresenta\xe7\xe3o: ${i.pharmaceutical_form.presentation} `,validators:[],disabled:!0,hideRequired:!0},{displayed:"Posologia",placeholder:"Posologia",favorite:null,name:"dosage",value:`Via de notifica\xe7\xe3o: ${i.dosage.route}, Intervalo: ${i.dosage.intervalo}, Dura\xe7\xe3o: ${i.dosage.duracao} `,validators:[],disabled:!0,hideRequired:!0},{displayed:"Diluir",placeholder:"Diluir",favorite:null,name:"dilute",value:i.dilute,validators:[],disabled:!0,hideRequired:!0}])}),this.values=Object(l.a)({push:e})}elementListEvent(e){e&&(e.view?this._form=this.service.datas.find(i=>e.view.id_dispensacao==i.id_dispensacao):e.filteredData?(this.sheetService.setInfo({desc1:`"${e.filteredData}" n\xe3o foi encontrado !`,desc2:"Por favor verifique se a informa\xe7\xe3o esta correta ! "}),this.sheet.open(c.c)):e.error&&this.alert.showToaster(u.a.LISTA_DE_CODIGOS_E_STATUS._1_INFORMATIVA))}formEvent(e){e&&e.back_stepper&&(this._form=null)}}return e.\u0275fac=function(i){return new(i||e)(p.Nb(m.a),p.Nb(d.a),p.Nb(u.a),p.Nb(b.b),p.Nb(c.d))},e.\u0275cmp=p.Hb({type:e,selectors:[["ng-component"]],decls:11,vars:7,consts:[[2,"position","relative","min-height","420px"],[1,"division",2,"padding","5px 5px 0 10px","margin-left","10%","margin-right","10%","margin-top","7px"],[1,"hraleway",2,"color","#0376bb!important"],[2,"position","relative"],[2,"font-size","28px","color","#0376bb","position","absolute","left","-28px","padding-top","3px"],[1,"container-margin"],[1,"division",2,"padding-bottom","17px"],[3,"settings","values","action"],[3,"forms","action"]],template:function(e,i){1&e&&(p.Tb(0,"div",0),p.Tb(1,"div",1),p.Tb(2,"h2",2),p.Tb(3,"span",3),p.Tb(4,"mat-icon",4),p.Dc(5," circle_notifications "),p.Sb(),p.Sb(),p.Dc(6," Notifica\xe7\xe3o de Eventos Adversos a Medicamentos Biol\xf3gicos "),p.Sb(),p.Sb(),p.Tb(7,"div",5),p.Tb(8,"div",6),p.Tb(9,"element-list",7),p.ac("action",(function(e){return i.elementListEvent(e)})),p.Sb(),p.Sb(),p.Tb(10,"notificacao-form",8),p.ac("action",(function(e){return i.formEvent(e)})),p.Sb(),p.Sb(),p.Sb()),2&e&&(p.Bb(8),p.Eb("hide",i._form),p.Bb(1),p.jc("settings",i.settings)("values",i.values),p.Bb(1),p.Eb("hide",!i._form),p.jc("forms",i._form))},directives:[f.a,h.a,k],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({factory:function(i){return new(i||e)},imports:[[s.d.forChild(B)],s.d]}),e})(),M=(()=>{class e{}return e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({factory:function(i){return new(i||e)},providers:[],imports:[[t.c,o.MaterialModule,s.d]]}),e})();var O=a("beWR"),A=a("ZwK7"),C=a("EMG7");let F=(()=>{class e{}return e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({factory:function(i){return new(i||e)},providers:[],imports:[[C.a,O.a,A.a,M,t.c,o.MaterialModule]]}),e})(),z=(()=>{class e{}return e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({factory:function(i){return new(i||e)},providers:[],imports:[[F,n.a,r.a,o.MaterialModule,t.c,E]]}),e})()}}]);