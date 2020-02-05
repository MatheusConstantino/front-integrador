<template>
    <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
       <a class="navbar-brand brand-logo mr-5" ><img src="/src/assets/images/LogoJogo.png" class="mr-2" alt="logo" /></a>
        <a class="navbar-brand brand-logo-mini" ><img src="/src/assets/images/Game/LogoCut.png" alt="logo" /></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
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
              <a class="dropdown-item" href="./pages/fix/login.php">
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
                            <span class="menu-title">Posto de Atendimento</span>
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
                  <h3 class="font-weight-bold mb-0">ALFA COMPANY</h3><span> > Dashboard </span>
                </div>
                <div>
                  <h3 class="font-weight-bold mb-0">RODADA: {{company.company.currentRound}}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row">

            <div class="col-md-3 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-md-center text-xl-left">Região:<span style="color:#000"> {{ region.region.regionType }}</span></p>
                  <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center" style="text-align:center;">
                    <img :src="`${company.company.logoUrl}`" style="width:100%;">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-md-center text-xl-left">Capital da empresa</p>
                  <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0" style="font-size:10!important;">R$ {{ company.company.cashFlow.toFixed(2) }}</h3>
                    <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>
                  <p class="mb-0 mt-2 text-danger"> <span class="text-black ml-1"><small>Para gasto</small></span></p>
                </div>
              </div>
            </div>
            <div class="col-md-3 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-md-center text-xl-left">Equipe</p>
                  <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{ company.company.qttCompLogistics + company.company.qttCompCommercials + company.company.qttCompInfrastructure }}</h3>
                    <i class="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>
                  <!--<p class="mb-0 mt-2 text-danger"> <span class="text-black ml-1"><small>Funcionários restante</small></span></p>-->
                </div>
              </div>
            </div>
            <div class="col-md-3 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-md-center text-xl-left">Armazém</p>
                  <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{{company.company.qttStock}}</h3>
                    <i class="ti-package icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>
                  <!--<p class="mb-0 mt-2 text-success">50.00%<span class="text-black ml-1"><small>Disponível</small></span></p>-->
                </div>
              </div>
            </div>
            <!-- <div class="col-md-3 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-md-center text-xl-left">Compra</p>
                  <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">100</h3>
                    <i class="ti-truck icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>
                  <p class="mb-0 mt-2 text-success"><span class="text-black ml-1"><small>Unidades compradas na última compra</small></span></p>
                </div>
              </div>
            </div> -->
            <!-- <div class="col-md-3 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-md-center text-xl-left">Mercado</p>
                  <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 4,20</h3>
                    <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>
                  <p class="mb-0 mt-2 text-success"><span class="text-black ml-1"><small>Valor do dolar</small></span></p>
                </div>
              </div>
            </div> -->
            <!-- <div class="col-md-3 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title text-md-center text-xl-left">Produtos vendidos</p>
                  <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                    <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">1000</h3>
                    <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                  </div>
                </div>
              </div>
            </div> -->

          </div>
        </div>

        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © {{ new Date().getFullYear() }}. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Feito por ALFA COMPANY</span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
  //depois quando houver integração importar os mapstate e actionstate
  import { mapState, mapActions } from 'vuex'

  export default {
    
    computed: {
        ...mapState({
            region : state => state.region,
            auth  : state => state.auth,
            company: state => state.company,
            pa: state => state.pa
        })
    },
    mounted () {
      const { leaderId } = this.company.company;
      this.onLoadCompany({ leaderId });
      const { idRegion } = this.company.company;
      this.onLoadRegion({ regionId: idRegion });
    },

    methods: {
      ...mapActions('company', ['SEARCH_COMPANY_LEADER_ID']),
      ...mapActions('region', ['SEARCH_REGION']),
      ...mapActions('pa', ['LIST_PAS']),

        onLoadCompany: function ({leaderId}) {
          this.SEARCH_COMPANY_LEADER_ID({ id: leaderId});
          this.LIST_PAS();
        },     
        onLoadRegion: function ({regionId}) {
          this.SEARCH_REGION({id: regionId});
        },     
    }
  
  }
  
</script>

