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
                </button>
                <ul class="navbar-nav mr-lg-2">
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
                                    <h3 class="font-weight-bold mb-0">ALFA COMPANY</h3><span> > Dashboard > Fornecedores</span>
                                </div>
                                <div>
                                    <h4 class="font-weight-bold mb-0">SELECIONE FORNECEDOR:</h4>
                                    <p>
                                        <div class="form-group">
                                            <select class="form-control form-control-sm" id="exampleFormControlSelect3"   v-bind:value="sale.provider" v-on:change="sale.provider = $event.target.value">
                                                <option>Nacional mais barato</option>
                                                <option>Nacional mais caro</option>
                                                <option>Internacional mais barato</option>
                                                <option>Internacional mais caro</option>
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
                                    <p class="card-title text-md-center text-xl-left">Fornecedor</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">Apple INC</h3>
                                        <i class="ti-truck icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Tipo produto</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">Celular</h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Quantidade</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0" name="estoque">1000</h3>
                                        <i class="ti-package icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 grid-margin stretch-card">
                    <!--         <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Valor por lote</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0" name="estoque">{{ sale.pricePack }}</h3>
                                        <i class="ti-money icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="col-md-6 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Comprar produtos</h4>
                                    <p class="card-description">
                                    </p>
                                    <form action="#" method="">
                                        <div class="form-group">
                    <label>Lotes</label>
                    <input type="text" class="form-control" placeholder="Quantidade" aria-label="Username"  v-model="sale.quantity">
                    </div>
                               <div class="form-group">
                                   <label for="exampleFormControlSelect2">Produto</label>
                                   <p>{{ sale.provider }}</p>

                                    <label for="exampleFormControlSelect2">Preço Individual do Produto</label>
                                   <p>{{ sale.price }}</p>

                                    <label for="exampleFormControlSelect2">Preço total do Lote</label>
                                   <p> R$ {{ sale.pricePack }}</p>
                            <!--         <input type="text" class="form-control" placeholder="Quantidade" aria-label="Username"  v-model="sale.product"> -->
    <!--                                <select class="form-control" id="exampleFormControlSelect2"  v-bind:value="sale.product" v-on:change="sale.product = $event.target.value">
                                   <option>SELECIONE</option>
                                    <option>Nacional mais barato</option>
                                     <option>Nacional mais caro</option>
                                    <option>Internacional mais</option>
                                   </select> -->
                               </div>
<!--                                 <div class="form-group">
                                   <label for="exampleFormControlSelect2">Fornecedor</label>
                                     <input type="text" class="form-control" placeholder="Quantidade" aria-label="Username"  v-model="sale.provider">
                                    <select class="form-control" id="exampleFormControlSelect2">
                                        <option>SELECIONE</option>
                                        <option>a</option>
                                        <option>b</option>
                                        <option>c</option>
                                   </select>
                               </div> -->
                                    </form>
                                    <div class="my-3">
                                        <button type="" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="" v-on:click="simulate()">SIMULAR PREÇO</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 grid-margin stretch-card">
                            <left>
                                <div class="card">
                                    <div class="card-body">
                                        <h3 class="card-title">Resumo da compra</h3>
                                        <p class="card-description">
                                            <h4> Quantidade </h4>
                                            {{ sale.quantity }}
                                            <br>
                                            <h4> Produto </h4>
                                            {{ sale.provider }}
                                            <br>
                                            <h4> Fornecedor </h4>
                                            {{ sale.provider }}
                                            <h4> Preço Total </h4>
                                            R$ {{ sale.pricePack }}
                                        </p>
                                    </div>
                                </div>
                                <div class="my-3">
                                    <button type="" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" placeholder="" href="" v-on:click="setSale()">COMPRAR</button>
                                </div>
                            </left>
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

<script>
  import { mapState, mapActions } from 'vuex'
  import swal from 'sweetalert'

export default {
    data () {
      return {
        sale: {
          quantity : '',
          provider : '',
          pricePack : '0.00',
          price : ''
        }
      }
    },
    methods: {
      simulate() {
        if (this.sale.provider === 'Nacional mais barato') {
            this.sale.price = 'R$ 850,00'
            this.sale.pricePack = (this.sale.quantity * 850)
        } else if (this.sale.provider === 'Nacional mais caro') {
            this.sale.price = '2.100,00'
            this.sale.pricePack = (this.sale.quantity * 2100)
        } else if (this.sale.provider === 'Internacional mais barato') {
            this.sale.price = '1.000,00'
            this.sale.pricePack = (this.sale.quantity * 1000)
        } else if (this.sale.provider === 'Internacional mais caro') {
            this.sale.price = '6.000,00'
            this.sale.pricePack = (this.sale.quantity * 6000)
        }
      },
      setSale() {
        this.sale.quantity = ''
        this.sale.provider = ''
        this.sale.pricePack = ''
        this.sale.price = ''

        return (swal({
          title: "Parabéns!",
          text: 'Compra efetuada com sucesso',
          icon: 'success',
          className: 'swal-footer'
        }))
      }
    }
}
</script>