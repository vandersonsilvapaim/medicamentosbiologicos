'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Documentação</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdministracaoFormModule.html" data-type="entity-link">AdministracaoFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdministracaoFormModule-4fe4a8a17cf34f1f3c1f9c113724e779"' : 'data-target="#xs-components-links-module-AdministracaoFormModule-4fe4a8a17cf34f1f3c1f9c113724e779"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdministracaoFormModule-4fe4a8a17cf34f1f3c1f9c113724e779"' :
                                            'id="xs-components-links-module-AdministracaoFormModule-4fe4a8a17cf34f1f3c1f9c113724e779"' }>
                                            <li class="link">
                                                <a href="components/AdministracaoFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdministracaoFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdministracaoModule.html" data-type="entity-link">AdministracaoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdministracaoModule-34e919da2b5618d09ad1899aae2b4b2c"' : 'data-target="#xs-components-links-module-AdministracaoModule-34e919da2b5618d09ad1899aae2b4b2c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdministracaoModule-34e919da2b5618d09ad1899aae2b4b2c"' :
                                            'id="xs-components-links-module-AdministracaoModule-34e919da2b5618d09ad1899aae2b4b2c"' }>
                                            <li class="link">
                                                <a href="components/AdministracaoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdministracaoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdministracaoModule-34e919da2b5618d09ad1899aae2b4b2c"' : 'data-target="#xs-injectables-links-module-AdministracaoModule-34e919da2b5618d09ad1899aae2b4b2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdministracaoModule-34e919da2b5618d09ad1899aae2b4b2c"' :
                                        'id="xs-injectables-links-module-AdministracaoModule-34e919da2b5618d09ad1899aae2b4b2c"' }>
                                        <li class="link">
                                            <a href="injectables/PrescricaoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PrescricaoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdministracaoRoutingModule.html" data-type="entity-link">AdministracaoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1f6822c947547ad841ad319378ed7627"' : 'data-target="#xs-components-links-module-AppModule-1f6822c947547ad841ad319378ed7627"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1f6822c947547ad841ad319378ed7627"' :
                                            'id="xs-components-links-module-AppModule-1f6822c947547ad841ad319378ed7627"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link">AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthenticationModule-6669e2aacceaf0063f4b18ac8b546c4c"' : 'data-target="#xs-components-links-module-AuthenticationModule-6669e2aacceaf0063f4b18ac8b546c4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-6669e2aacceaf0063f4b18ac8b546c4c"' :
                                            'id="xs-components-links-module-AuthenticationModule-6669e2aacceaf0063f4b18ac8b546c4c"' }>
                                            <li class="link">
                                                <a href="components/AuthenticationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthenticationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link">AuthenticationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CadastromedModule.html" data-type="entity-link">CadastromedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CadastromedModule-fd9f1f4b634da112445ab02ce6ec43d0"' : 'data-target="#xs-components-links-module-CadastromedModule-fd9f1f4b634da112445ab02ce6ec43d0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CadastromedModule-fd9f1f4b634da112445ab02ce6ec43d0"' :
                                            'id="xs-components-links-module-CadastromedModule-fd9f1f4b634da112445ab02ce6ec43d0"' }>
                                            <li class="link">
                                                <a href="components/CadastromedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastromedComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CadastromedRoutingModule.html" data-type="entity-link">CadastromedRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DispensacaoFormModule.html" data-type="entity-link">DispensacaoFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DispensacaoFormModule-3c6c1f0cf1e703b6436fc0af460dea9e"' : 'data-target="#xs-components-links-module-DispensacaoFormModule-3c6c1f0cf1e703b6436fc0af460dea9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DispensacaoFormModule-3c6c1f0cf1e703b6436fc0af460dea9e"' :
                                            'id="xs-components-links-module-DispensacaoFormModule-3c6c1f0cf1e703b6436fc0af460dea9e"' }>
                                            <li class="link">
                                                <a href="components/DispensacaoFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DispensacaoFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DispensacaoModule.html" data-type="entity-link">DispensacaoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DispensacaoModule-18762b88a8fa8ca129a10a89fffe81e1"' : 'data-target="#xs-components-links-module-DispensacaoModule-18762b88a8fa8ca129a10a89fffe81e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DispensacaoModule-18762b88a8fa8ca129a10a89fffe81e1"' :
                                            'id="xs-components-links-module-DispensacaoModule-18762b88a8fa8ca129a10a89fffe81e1"' }>
                                            <li class="link">
                                                <a href="components/DispensacaoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DispensacaoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DispensacaoModule-18762b88a8fa8ca129a10a89fffe81e1"' : 'data-target="#xs-injectables-links-module-DispensacaoModule-18762b88a8fa8ca129a10a89fffe81e1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DispensacaoModule-18762b88a8fa8ca129a10a89fffe81e1"' :
                                        'id="xs-injectables-links-module-DispensacaoModule-18762b88a8fa8ca129a10a89fffe81e1"' }>
                                        <li class="link">
                                            <a href="injectables/PrescricaoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PrescricaoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DispensacaoRoutingModule.html" data-type="entity-link">DispensacaoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ElementListModule.html" data-type="entity-link">ElementListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ElementListModule-40fa8a6ef783e1e2f52956161de90693"' : 'data-target="#xs-components-links-module-ElementListModule-40fa8a6ef783e1e2f52956161de90693"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ElementListModule-40fa8a6ef783e1e2f52956161de90693"' :
                                            'id="xs-components-links-module-ElementListModule-40fa8a6ef783e1e2f52956161de90693"' }>
                                            <li class="link">
                                                <a href="components/ElementListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ElementListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link">FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterModule-5bc98aa3edff32e8ad584a31523deab7"' : 'data-target="#xs-components-links-module-FooterModule-5bc98aa3edff32e8ad584a31523deab7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-5bc98aa3edff32e8ad584a31523deab7"' :
                                            'id="xs-components-links-module-FooterModule-5bc98aa3edff32e8ad584a31523deab7"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-bfcd0bb379679522173406dddb7708f9"' : 'data-target="#xs-components-links-module-HomeModule-bfcd0bb379679522173406dddb7708f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-bfcd0bb379679522173406dddb7708f9"' :
                                            'id="xs-components-links-module-HomeModule-bfcd0bb379679522173406dddb7708f9"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InDevelopmentModule.html" data-type="entity-link">InDevelopmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InDevelopmentModule-87109b0a5dd8b03345cbdaa43533f1af"' : 'data-target="#xs-components-links-module-InDevelopmentModule-87109b0a5dd8b03345cbdaa43533f1af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InDevelopmentModule-87109b0a5dd8b03345cbdaa43533f1af"' :
                                            'id="xs-components-links-module-InDevelopmentModule-87109b0a5dd8b03345cbdaa43533f1af"' }>
                                            <li class="link">
                                                <a href="components/InDevelopmentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InDevelopmentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntercambialidadeModule.html" data-type="entity-link">IntercambialidadeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntercambialidadeModule-98675ac971cdb988080d584af113487c"' : 'data-target="#xs-components-links-module-IntercambialidadeModule-98675ac971cdb988080d584af113487c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntercambialidadeModule-98675ac971cdb988080d584af113487c"' :
                                            'id="xs-components-links-module-IntercambialidadeModule-98675ac971cdb988080d584af113487c"' }>
                                            <li class="link">
                                                <a href="components/IntercambialidadeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntercambialidadeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntercambialidadeDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntercambialidadeDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntercambialidadeRoutingModule.html" data-type="entity-link">IntercambialidadeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-LayoutModule-051278526f00fd90762e8b7bb4c25556"' : 'data-target="#xs-directives-links-module-LayoutModule-051278526f00fd90762e8b7bb4c25556"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LayoutModule-051278526f00fd90762e8b7bb4c25556"' :
                                        'id="xs-directives-links-module-LayoutModule-051278526f00fd90762e8b7bb4c25556"' }>
                                        <li class="link">
                                            <a href="directives/DisableControlDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DisableControlDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HighlightDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MaskPhoneDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaskPhoneDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-e93d890c901a3e10d148c7363b54a8b8"' : 'data-target="#xs-components-links-module-PageNotFoundModule-e93d890c901a3e10d148c7363b54a8b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-e93d890c901a3e10d148c7363b54a8b8"' :
                                            'id="xs-components-links-module-PageNotFoundModule-e93d890c901a3e10d148c7363b54a8b8"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link">PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrescricaoModule.html" data-type="entity-link">PrescricaoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrescricaoModule-cbe44d5b5d5394df3659b13d501027e5"' : 'data-target="#xs-components-links-module-PrescricaoModule-cbe44d5b5d5394df3659b13d501027e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrescricaoModule-cbe44d5b5d5394df3659b13d501027e5"' :
                                            'id="xs-components-links-module-PrescricaoModule-cbe44d5b5d5394df3659b13d501027e5"' }>
                                            <li class="link">
                                                <a href="components/PrescricaoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrescricaoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrescricaoModule-cbe44d5b5d5394df3659b13d501027e5"' : 'data-target="#xs-injectables-links-module-PrescricaoModule-cbe44d5b5d5394df3659b13d501027e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrescricaoModule-cbe44d5b5d5394df3659b13d501027e5"' :
                                        'id="xs-injectables-links-module-PrescricaoModule-cbe44d5b5d5394df3659b13d501027e5"' }>
                                        <li class="link">
                                            <a href="injectables/PrescricaoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PrescricaoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrescricaoRoutingModule.html" data-type="entity-link">PrescricaoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-0ba6584826ad743e6660c71c37599bec"' : 'data-target="#xs-components-links-module-ProfileModule-0ba6584826ad743e6660c71c37599bec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-0ba6584826ad743e6660c71c37599bec"' :
                                            'id="xs-components-links-module-ProfileModule-0ba6584826ad743e6660c71c37599bec"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link">ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RastreabilidadeModule.html" data-type="entity-link">RastreabilidadeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RastreabilidadeModule-ebd4dc5ac538d166d83468c994f7bf96"' : 'data-target="#xs-components-links-module-RastreabilidadeModule-ebd4dc5ac538d166d83468c994f7bf96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RastreabilidadeModule-ebd4dc5ac538d166d83468c994f7bf96"' :
                                            'id="xs-components-links-module-RastreabilidadeModule-ebd4dc5ac538d166d83468c994f7bf96"' }>
                                            <li class="link">
                                                <a href="components/RastreabilidadeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RastreabilidadeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RastreabilidadeRoutingModule.html" data-type="entity-link">RastreabilidadeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceModule.html" data-type="entity-link">ServiceModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServiceModule-7c14c74448eb0d5eb1eff7e857e6ef86"' : 'data-target="#xs-injectables-links-module-ServiceModule-7c14c74448eb0d5eb1eff7e857e6ef86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServiceModule-7c14c74448eb0d5eb1eff7e857e6ef86"' :
                                        'id="xs-injectables-links-module-ServiceModule-7c14c74448eb0d5eb1eff7e857e6ef86"' }>
                                        <li class="link">
                                            <a href="injectables/AlertService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AlertService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GeolocationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GeolocationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LogService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MessageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MockService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MockService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SheetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SheetService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpeechRecognitionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SpeechRecognitionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StyleService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StyleService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WindowService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WindowService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SheetModule.html" data-type="entity-link">SheetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SheetModule-5bd7453bb08f07e963093ccdd8de4d13"' : 'data-target="#xs-components-links-module-SheetModule-5bd7453bb08f07e963093ccdd8de4d13"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SheetModule-5bd7453bb08f07e963093ccdd8de4d13"' :
                                            'id="xs-components-links-module-SheetModule-5bd7453bb08f07e963093ccdd8de4d13"' }>
                                            <li class="link">
                                                <a href="components/SWSheetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SWSheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SheetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SheetModule-5bd7453bb08f07e963093ccdd8de4d13"' : 'data-target="#xs-injectables-links-module-SheetModule-5bd7453bb08f07e963093ccdd8de4d13"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SheetModule-5bd7453bb08f07e963093ccdd8de4d13"' :
                                        'id="xs-injectables-links-module-SheetModule-5bd7453bb08f07e963093ccdd8de4d13"' }>
                                        <li class="link">
                                            <a href="injectables/SheetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SheetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidnavHeaderModule.html" data-type="entity-link">SidnavHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidnavHeaderModule-e9ae36bd02fee698b4ce5b1212148914"' : 'data-target="#xs-components-links-module-SidnavHeaderModule-e9ae36bd02fee698b4ce5b1212148914"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidnavHeaderModule-e9ae36bd02fee698b4ce5b1212148914"' :
                                            'id="xs-components-links-module-SidnavHeaderModule-e9ae36bd02fee698b4ce5b1212148914"' }>
                                            <li class="link">
                                                <a href="components/SidenavHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToolbarHeaderModule.html" data-type="entity-link">ToolbarHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ToolbarHeaderModule-1b131b86cb3f4c135d4528bc08f874cb"' : 'data-target="#xs-components-links-module-ToolbarHeaderModule-1b131b86cb3f4c135d4528bc08f874cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToolbarHeaderModule-1b131b86cb3f4c135d4528bc08f874cb"' :
                                            'id="xs-components-links-module-ToolbarHeaderModule-1b131b86cb3f4c135d4528bc08f874cb"' }>
                                            <li class="link">
                                                <a href="components/ToolbarHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolbarHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/RastreabilidadeDialogComponent.html" data-type="entity-link">RastreabilidadeDialogComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Buildercrud.html" data-type="entity-link">Buildercrud</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConsultarCNPJ.html" data-type="entity-link">ConsultarCNPJ</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConsultarCNPJP2Response.html" data-type="entity-link">ConsultarCNPJP2Response</a>
                            </li>
                            <li class="link">
                                <a href="classes/ControlBuilder.html" data-type="entity-link">ControlBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/CpfCnpjValidator.html" data-type="entity-link">CpfCnpjValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/Paciente.html" data-type="entity-link">Paciente</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppDateAdapter.html" data-type="entity-link">AppDateAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link">ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link">FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatPaginatorIntlCro.html" data-type="entity-link">MatPaginatorIntlCro</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardChildService.html" data-type="entity-link">AuthGuardChildService</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Banco.html" data-type="entity-link">Banco</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoriaEntidade.html" data-type="entity-link">CategoriaEntidade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Classe.html" data-type="entity-link">Classe</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CodeDescription.html" data-type="entity-link">CodeDescription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link">Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link">Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Currencie.html" data-type="entity-link">Currencie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DadosGeraisEstabelecimentoSaudeModel.html" data-type="entity-link">DadosGeraisEstabelecimentoSaudeModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Divisao.html" data-type="entity-link">Divisao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ElementListEvents.html" data-type="entity-link">ElementListEvents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ElementListSettings.html" data-type="entity-link">ElementListSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ElementListValues.html" data-type="entity-link">ElementListValues</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Endereco.html" data-type="entity-link">Endereco</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Fone.html" data-type="entity-link">Fone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FonteIdentificacao.html" data-type="entity-link">FonteIdentificacao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FuncaoEntidadeAssociacao.html" data-type="entity-link">FuncaoEntidadeAssociacao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Genero.html" data-type="entity-link">Genero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocodingCopyright.html" data-type="entity-link">GeocodingCopyright</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocodingEndereco.html" data-type="entity-link">GeocodingEndereco</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocodingInfo.html" data-type="entity-link">GeocodingInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocodingLocation.html" data-type="entity-link">GeocodingLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocodingOptions.html" data-type="entity-link">GeocodingOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeocodingProvidedLocation.html" data-type="entity-link">GeocodingProvidedLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeolocationCidade.html" data-type="entity-link">GeolocationCidade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeolocationCoords.html" data-type="entity-link">GeolocationCoords</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeolocationEndereco.html" data-type="entity-link">GeolocationEndereco</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeolocationEstado.html" data-type="entity-link">GeolocationEstado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeolocationModel.html" data-type="entity-link">GeolocationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Grupo.html" data-type="entity-link">Grupo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWindow.html" data-type="entity-link">IWindow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Language.html" data-type="entity-link">Language</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Mesorregiao.html" data-type="entity-link">Mesorregiao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Microrregiao.html" data-type="entity-link">Microrregiao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Mock.html" data-type="entity-link">Mock</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Municipio.html" data-type="entity-link">Municipio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NameLink.html" data-type="entity-link">NameLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ocupacao.html" data-type="entity-link">Ocupacao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Regiao.html" data-type="entity-link">Regiao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Secao.html" data-type="entity-link">Secao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubClasse.html" data-type="entity-link">SubClasse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoAssociacao.html" data-type="entity-link">TipoAssociacao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoAssociacaoIndividuoLocalizacao.html" data-type="entity-link">TipoAssociacaoIndividuoLocalizacao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoCategoriaEntidade.html" data-type="entity-link">TipoCategoriaEntidade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoComunicacao.html" data-type="entity-link">TipoComunicacao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoLogradouro.html" data-type="entity-link">TipoLogradouro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoNumeroTelefoneFax.html" data-type="entity-link">TipoNumeroTelefoneFax</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Translations.html" data-type="entity-link">Translations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UF.html" data-type="entity-link">UF</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});