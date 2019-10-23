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
                            <h4>Cadastre sua equipe!</h4>
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
                                    <label>Nome do colaborador</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-pencil text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-lg border-left-0"
                                            placeholder="Nome do colaborador">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Email do colaborador</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-email text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-lg border-left-0"
                                            placeholder="Email do colaborador">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Senha do colaborador</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-lock text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control form-control-lg border-left-0"
                                            placeholder="Senha do colaborador">
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <button type="reset" class="btn btn-block btn-primary btn-ls font-weight-medium auth-form-btn"
                                    href="/cadstro-equipe">Cadastrar mais colaboradores</button>

                                    <a class="btn btn-block btn-primary btn-ls font-weight-medium auth-form-btn"
                                        href="/escolhe-regiao">Finalizar cadastro</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 register-half-bg d-flex flex-row">
                        <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy;
                            ALFA COMPANY All rights reserved.</p>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
</template>