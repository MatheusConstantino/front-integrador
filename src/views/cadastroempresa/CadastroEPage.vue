<template>
     <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                <div class="row flex-grow">
                    <div class="col-lg-6 d-flex align-items-center justify-content-center">
                        <div class="auth-form-transparent text-left p-3">
                            <div class="brand-logo">
                                <img src="/src/assets/images/LogoJogo.png" alt="logo">
                            </div>
                            <h4>Cadastre sua empresa!</h4>
                            <h6 class="font-weight-light">Informe os campos abaixo para cadastrar</h6>
                            <form class="pt-3">
                                <div class="form-group">
                                    <label>Nome da empresa</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-id-badge text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-lg border-left-0"
                                            id="exampleInputPassword" placeholder="Nome da empresa">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Motivo do nome</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-light-bulb text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-lg border-left-0"
                                            placeholder="Por que esse nome?">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Missão da empresa</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-check-box text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-lg border-left-0"
                                            placeholder="Qual é a missão da empresa?">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Visão da empresa</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-check-box text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-lg border-left-0"
                                            placeholder="Qual é a visão da empresa?">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Valores da emrpesa</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-check-box text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-lg border-left-0"
                                            placeholder="Qual é o valor da empresa?">
                                    </div>
                                </div>

                                <div class="form-group">
                                        <label>Logo da empresa</label>
                                        <div class="input-group">
                                            <input type="file" class="form-control form-control-lg">
                                        </div>
                                    </div>
                                <div class="mt-3">
                                    <i class="ti-chech text-primary"></i>
                                    <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                        href="/cadastro-equipe">Cadastrar empresa</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 register-half-bg d-flex flex-row">
                        <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy;
                            2018 All rights reserved.</p>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
</template>