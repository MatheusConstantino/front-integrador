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
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 0000,00</h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-danger">0.12% <span class="text-black ml-1"><small>(Ultimos
                                                30 dias)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Demanda mensal</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 0000,00</h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">50.0% <span class="text-black ml-1"><small>(Capacidade restante)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Inflação</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">00 %</h3>
                                        <i class="ti-bar-chart-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">64.00%<span
                                            class="text-black ml-1"><small>(Capacidade restante)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Cotação dólar</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">R$ 00,00</h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                    <!-- <p class="mb-0 mt-2 text-success">64.00%<span
                                            class="text-black ml-1"><small>(Capacidade restante)</small></span></p> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-12"></div>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Pesquisa Demanda Anual</h4>
                                    <p class="card-description">
                                    </p>
                                    <form action="#" method="post">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">$preco_da <span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="">PESQUISAR</button>
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
                                    <form action="#" method="post">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">$preco_dm <span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="">PESQUISAR</button>
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
                                    <form action="#" method="post">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">$preco_dm <span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="">PESQUISAR</button>
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
                                    <form action="#" method="post">
                                    <div class="input-group">
                                            <span class="text-black ml-1"><small>Preço da pesquisa: </small><p class="mb-0 mt-2 text-success">$preco_cd <span class="text-black ml-1"><small></small></span></p></span>
                                            </div>
                                            <div class="my-3">
                                                <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="">PESQUISAR</button>
                                            </div>  
                                    </form>
                                </div>
                            </div>
                        </div>

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
    <!-- container-scroller -->

</template>