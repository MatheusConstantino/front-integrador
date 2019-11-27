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
                                    <h3 class="font-weight-bold mb-0">ALFA COMPANY</h3><span> > Dashboard > Venda</span>
                                </div>
                                <!-- <div>
                                    <h4 class="font-weight-bold mb-0">SELECIONE PRODUTO:</h4>
                                    <p>
                                        <div class="form-group">
                                            <select class="form-control form-control-sm" id="exampleFormControlSelect3" @change="changeProduct">
                                                <option disabled selected> Selecione um Produto</option>
                                                <option v-for="(value, index) in product.products"  :key="index"> {{ index+1 }}</option>
                                            </select>
                                        </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- <div class="col-md-3 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p class="card-title text-md-center text-xl-left">Produto</p>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0" v-bind:selected="$index === 0 ? true : false">{{ produto.productType }}</h3>
                                        <i class="ti-mobile icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-12"></div> -->
                        <div class="col-md-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Vender produto</h4>
                                    <p class="card-description"></p>
                                    
                                    <form action="#" method="post">
                                        <div class ="row">
                                            <div class ="col-md-4">
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect2">Selecione um tipo de Produto</label>
                                                    <select class="form-control" id="exampleFormControlSelect3" @change="changeProduct">
                                                        <option disabled selected> Selecione um Produto</option>
                                                        <option :value="value.id" class="form-control" v-for="(value, index) in product.products"  :key="index"> {{ value.productType }}</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class = "col-md-4">
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect2">Quantidade do Produto</label>
                                                    <input type="text" class="form-control" placeholder="Valor" aria-label="valorVenda" v-model="quantidade">
                                                </div>
                                            </div>

                                            <div class = "col-md-4">
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect2">Valor da venda</label>
                                                    <input type="text" class="form-control" placeholder="Valor" aria-label="valorVenda" v-model="preco">
                                                </div>
                                            </div>
                                        </div>
                              
                                        <div class="my-3">
                                            <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" @click="registerProductSale($event)" :disabled="sales.isRegistering" v-show="!sales.isRegistering">VENDER</button>
                                            <img v-show="sales.isRegistering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> 

                        <div class = "col-md-12 grid-margin stretch-card">
                            <div class = "card">
                                <div class="card-body">
                                    <h4 class="card-title">Produtos à venda</h4>
                                    <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center" v-show = "!produtosVenda.length > 0">
                                        <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0" v-show = "!produtosVenda.length > 0">Não há registro de produtos a venda.</h3>
                                    </div>

                                     <table  class = "table" v-show = "produtosVenda.length > 0">
                                        <thead class = "btn-primary" style = "height: 60px !important;">
                                            <tr class = "text-center" style = "height: 60px !important;">
                                                <th> Produto            </th>
                                                <th> Quantidade         </th>
                                                <th> Preço              </th>
                                            </tr>
                                        </thead>
                                        <tbody  v-for="">
                                            <tr class = "text-center">
                                                <td> {{ }} </td>
                                                <td> {{ }} </td>
                                                <td> {{ }} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>                       

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

    import { mapState, mapActions } from 'vuex'

    export default {
        data () {
            return {
                quantidade: undefined,
                tipo: undefined,
                preco: undefined,
                produto: {},
                produtosVenda: [],
            }
        },

        computed: {
            ...mapState({
                alert   : state => state.alert,
                product : state => state.products,
                sales   : state => state.sales
            })
        },
        
        beforeCreate() {
            
            this.$store.dispatch('LIST_ALL_PRODUCTS')
        
        },
        
        methods: {

            ...mapActions('sales', ['CREATE_NEW_SALE']),

            changeProduct() {
                this.produto = this.product.products[event.target.value]
                this.tipo = event.target.value 
            },

            registerProductSale(event) {

                const { quantidade, tipo, preco } = this;
                debugger
                if (event) event.preventDefault()
                
                if(quantidade != undefined && tipo != undefined && preco != undefined) {

                    this.CREATE_NEW_SALE(quantidade, preco, tipo)
                    
                }
            }

           /*  addValue: function (event) {
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
            } */
        }
    }
</script>