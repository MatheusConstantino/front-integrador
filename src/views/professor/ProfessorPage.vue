<template>
     <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a class="navbar-brand brand-logo mr-5" href="/src/index.php"><img src="/src/assets/images/LogoJogo.png" class="mr-2" alt="logo" /></a>
                <a class="navbar-brand brand-logo-mini" href="/src/index.php"><img src="/src/assets/images/Game/LogoCut.png" alt="logo" /></a>
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
                        <a class="nav-link" href="/dashboard-professor">
                            <i class="ti-flag-alt menu-icon"></i>
                            <span class="menu-title">Visão Geral</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/cadastro-lider">
                            <i class="ti-pencil-alt menu-icon"></i>
                            <span class="menu-title">Cadastrar Lider</span>
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
                                    <h3 class="font-weight-bold mb-0">ALFA COMPANY</h3><span> > Dashboard  </span>
                                </div>
                                <div>
                                    <h4 class="font-weight-bold mb-0">SELECIONE RODADA:</h4>
                                        <div class="form-group">
                                            <select class="form-control form-control-sm" id="exampleFormControlSelect3">
                                                <option selected>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div> 
                                </div>
                                 <div>
                                    <h4 class="font-weight-bold mb-0">SELECIONE A EMPRESA:</h4>
                                        <div class="form-group">
                                            <select class="form-control form-control-sm" id="exampleFormControlSelect3">
                                                <option selected>Alfa</option>
                                                <option>Optimus</option>
                                                <option>Fatec</option>
                                            </select>
                                        </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Rodada</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">X <span>Rodada</span> </h3>
                                        <i class="ti-bookmark icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-danger">0.12% <span class="text-black ml-1"><small>(Ultimos
                                                30 dias)</small></span></p> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Valor dólar</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 3,40 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <p class="mb-0 mt-2 text-success"> <span class="text-black ml-1"><small>Produtos vendidos</small></span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Inflação</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">3,47 %</h3>
                                        <i class="ti-bar-chart icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">Ao ano<span
                                            class="text-black ml-1"></span></p>  -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Preço médio</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 50000,00</h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30 days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Caixa</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ <span class="mb-o mt-2 text-danger">-45000,00</span></h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30 days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-12"></div>
                        <hr style="color: black; width: 95%; height: 15px;">
                                <div class="col-12"></div>
<br>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Produto</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">Nome Produto </h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30 days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Quantidade</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">1000</h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30 days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Venda individual</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 1000,00 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30  days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Venda total</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 1000,00 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>


                         <div class="col-12"></div>
                        <hr style="color: black; width: 95%; height: 15px;">
                                <div class="col-12"></div>
<br>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Produto</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">Nome Produto </h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Quantidade</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">1000</h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Venda individual</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 1000,00 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Venda total</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 1000,00 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>



 <div class="col-12"></div>
                        <hr style="color: black; width: 95%; height: 15px;">
                                <div class="col-12"></div>
<br>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Produto</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">Nome Produto </h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Quantidade</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">1000</h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Venda individual</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 1000,00 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Venda total</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 1000,00 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

<div class="col-12"></div>
                        <hr style="color: black; width: 95%; height: 15px;">
                                <div class="col-12"></div>
<br>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Produto</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">Nome Produto </h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Quantidade</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">1000</h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Venda individual</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 1000,00 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Venda total</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 1000,00 </h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">23.00%<span class="text-black ml-1"><small>(30
                                                    days)</small></span></p> -->
                                </div>
                            </div>
                        </div>




                       

                        <div class="col-12"></div>
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
export default {
    data: () => {
        return {
            selectedRemoveValue: 0,
            selectedAddValue: 0,
            selectedBuyValue: 0,
            totalCapacity: 1200,
            availableCapacity: 1000,
            usedCapacity: 200
        }
    },
    methods: {
        addValue: function (event) {
            if (event) event.preventDefault()
            this.totalCapacity = parseInt(this.totalCapacity) + parseInt(this.selectedAddValue)
            this.availableCapacity = parseInt(this.availableCapacity) + parseInt(this.selectedAddValue)
            this.usedCapacity = parseInt(this.totalCapacity) - parseInt(this.availableCapacity)
        },
        removeValue: function (event) {
            if (event) event.preventDefault()
            this.totalCapacity = parseInt(this.totalCapacity) - parseInt(this.selectedRemoveValue)
            this.availableCapacity = parseInt(this.availableCapacity) - parseInt(this.selectedRemoveValue)
            this.usedCapacity = parseInt(this.totalCapacity) - parseInt(this.availableCapacity)
        },
        fixDummyError: function (event) { 
            if (event) event.preventDefault()
        }
    }
}
</script>