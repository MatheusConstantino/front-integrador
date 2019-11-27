<template>
   <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a class="navbar-brand brand-logo mr-5" href="/"><img src="/src/assets/images/LogoJogo.png" class="mr-2" alt="logo" /></a>
                <a class="navbar-brand brand-logo-mini" href="/"><img src="/src/assets/images/Game/LogoCut.png" alt="logo" /></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <!-- <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span class="ti-view-list"></span>
                </button> -->
                <!-- <ul class="navbar-nav mr-lg-2">
                    <li class="nav-item nav-search d-none d-lg-block">
                        <div class="input-group">
                            <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <span class="input-group-text" id="search">
                                    <i class="ti-search"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search">
                        </div>
                    </li>
                </ul> -->
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                            <img src="/src/assets/images/faces/user.png" alt="profile" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a class="dropdown-item">
                                <i class="ti-settings text-primary"></i>
                                Configurações
                            </a>
                            <a class="dropdown-item" href="/src/pages/fix/login.php">
                                <i class="ti-power-off text-primary"></i>
                                Sair
                            </a>
                        </div>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span class="ti-view-list"></span>
                </button>
            </div>
        </nav>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_sidebar.html -->
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <i class="ti-dashboard menu-icon"></i>
                            <span class="menu-title">Visão Geral</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/armazem">
                            <i class="ti-package menu-icon"></i>
                            <span class="menu-title">Armazem</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/produto">
                            <i class="ti-mobile menu-icon"></i>
                            <span class="menu-title">Produto</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/equipe">
                            <i class="ti-user menu-icon"></i>
                            <span class="menu-title">Equipe</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/erb">
                            <i class="ti-signal menu-icon"></i>
                            <span class="menu-title">ERB</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pa">
                            <i class="ti-signal menu-icon"></i>
                            <span class="menu-title">PA</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/fornecedor">
                            <i class="ti-truck menu-icon"></i>
                            <span class="menu-title">Fornecedor</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mercado">
                            <i class="ti-shopping-cart-full menu-icon"></i>
                            <span class="menu-title">Mercado</span>
                        </a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/venda">
                            <i class="ti-money menu-icon"></i>
                            <span class="menu-title">Venda</span>
                        </a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/emprestimo">
                            <i class="ti-credit-card menu-icon"></i>
                            <span class="menu-title">Emprestimo</span>
                        </a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/historico">
                            <i class="ti-receipt menu-icon"></i>
                            <span class="menu-title">Historico</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-12 grid-margin">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="font-weight-bold mb-0">ALFA COMPANY</h3><span> > Dashboard > Mercado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                         <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Demanda anual</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ market.demandYearly }}</h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
  <a onclick="demanda_anual()" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" style="color:#FFF;">PESQUISAR</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Demanda mensal</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ market.demandMonthly }}</h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                     <a onclick="demanda_mensal()" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" style="color:#FFF;">PESQUISAR</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Inflação</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ market.cotationInflation ? market.cotationInflation : 'X.X' }}%</h3>
                                        <i class="ti-bar-chart-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
 <a onclick="mercado()" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" style="color:#FFF;">PESQUISAR</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Cotação dólar</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ market.cotationDollar }}</h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
 <a onclick="dolar()" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" style="color:#FFF;">PESQUISAR</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-12"></div>
                        <!-- <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Pesquisa Demanda Anual</h4>
                                    <p class="card-description">
                                    </p>

                                    <form action="#" method="">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">{{ prices.priceSearchAnnualDemand }}<span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="" v-on:click="getPriceAnnualDemand()">PESQUISAR</button>
                                            </div>  
                                    </form>
                                </div>
                            </div>
                        </div>



                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Pesquisa Demanda Mensal</h4>
                                    <p class="card-description">
                                    </p>

                                    <form action="#" method="">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">{{ prices.priceSearchMonthlyDemand }}<span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="" v-on:click="getPriceMonthlyDemand()">PESQUISAR</button>
                                            </div>  
                                    </form>
                                </div>
                            </div>
                        </div>


                         <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Pesquisa Inflação do mercado</h4>
                                    <p class="card-description">
                                    </p>

                                    <form action="#" method="">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">{{ prices.priceSearchMonetaryInflation }}<span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="" v-on:click="getMonetaryInflation()">PESQUISAR</button>
                                            </div>  
                                    </form>
                                </div>
                            </div>
                        </div>
                 
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Pesquisa Cotação Dólar</h4>
                                    <p class="card-description">
                                    </p>

                                    <form action="#" method="">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">{{ prices.priceSearchDollarCotation }}<span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="" v-on:click="getDollarCotation()">PESQUISAR</button>
                                            </div>  
                                    </form>
                                </div>
                            </div>
                        </div>

                         <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Pesquisa Preço Médio dos Concorrentes</h4>
                                    <p class="card-description">
                                    </p>

                                    <form action="#" method="">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">{{ prices.priceSearchPriceConcurrent }}<span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="" v-on:click="getMediumPriceConcurrent()">PESQUISAR</button>
                                            </div>  
                                    </form>
                                </div>
                            </div>
                        </div> -->
 

                    </div>
                </div>
                <!-- content-wrapper ends -->
                <!-- partial:partials/_footer.html -->
                <footer class="footer">
                    <div class="d-sm-flex justify-content-center justify-content-sm-between">
                        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2019. All rights reserved.</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Feito por ALFA COMPANY</span>
                    </div>
                </footer>
                <!-- partial -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->

</template>

<script>


                    function demanda_anual() {
                        $("#da").toggle();
                    }
                    function demanda_mensal() {
                        $("#dm").toggle();
                    }
                    function mercado() {
                        $("#in").toggle();
                    }
                    function dolar() {
                        $("#cd").toggle();
                    }

//   import { mapState, mapActions } from 'vuex'
//   import swal from 'sweetalert'

// export default {
//     data () {
//       return {
//         prices: {
//           priceSearchAnnualDemand : 'R$ 15.000,00',
//           priceSearchMonthlyDemand : 'R$ 15.000,00',
//           priceSearchMonetaryInflation : 'R$ 7.500,00',
//           priceSearchDollarCotation :  'R$ 7.500,00',
//           priceSearchPriceConcurrent : 'R$ 19.000,00'
//         },
//         cards: {
//           annualDemand: 'R$ XXXX,XX',
//           monthlyDemand: 'R$ XXXXX,XX',
//           inflation: 'X.X %',
//           dollarCotation: 'R$ X.XX' 
//         }
//       }
//     },

//     async beforeCreate() {

//         Promise.all([
//             await this.$store.dispatch('market/COTATION_INFLATION'),
//             await this.$store.dispatch('market/COTATION_DOLLAR'),
//             await this.$store.dispatch('market/DEMAND_MONTHLY'),
//             await this.$store.dispatch('market/DEMAND_YEARLY')
//         ]);
//     },

//     computed: {
//         ...mapState({
//             alert   : state => state.alert,
//             market  : state => state.market,
//         })
//     },


//     methods: {
        
//         ...mapActions('market', ['COTATION_INFLATION', 'COTATION_DOLLAR', 'DEMAND_MONTHLY', 'DEMAND_YEARLY']),

//         getPriceAnnualDemand() {

//             this.DEMAND_YEARLY()

//             return ( swal ({
//                 title: "Valor da demanda anual",
//                 text: `R$ ${this.market.demandYearly}`,
//                 icon: 'success',
//                 className: 'swal-footer'
//             }))
//         },
        
//         getPriceMonthlyDemand() {
            
//             this.DEMAND_MONTHLY()
           
//             return (swal({
//             title: "Valor da demanda mensal",
//             text: `R$ ${this.market.demandMonthly}`,
//             icon: 'success',
//             className: 'swal-footer'
//             }))

//         },
        
//         getMonetaryInflation() {
            
//             this.COTATION_INFLATION()
            
//             return (swal({
//                 title: "Valor da inflação",
//                 text: this.market.cotationInflation.toString(),
//                 icon: 'success',
//                 dangerMode: true,
//                 className: 'swal-footer'
//             }))

//         },
        
//         getDollarCotation() {
        
//             this.COTATION_DOLLAR()
            
//             return (swal({
//                 title: "Valor da cotação do dólar",
//                 text: this.market.cotationDollar.toString(),
//                 icon: 'success',
//                 dangerMode: true,
//                 className: 'swal-footer'
//             }))
//         },

//         getMediumPriceConcurrent() {
//             return (swal({
//             title: "Valor do preço médio do concorrente",
//             text: "R$ 3.500",
//             icon: 'success',
//             className: 'swal-footer'
//             }))
//         }
//   }
// }
</script>