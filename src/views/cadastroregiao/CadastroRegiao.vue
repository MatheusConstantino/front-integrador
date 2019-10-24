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
                            <h4>Bem vindo $person</h4>
                            <h6 class="font-weight-light">Aqui você pode escolher sua região de atuação.</h6>
                            <form class="pt-3">

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="">
                                                Agro Econômica
                                            </label>
                                            <p class="mb-0 mt-2 "><b>Custo:</b> R$ 75.000.000,00</p>
                                            <p class="mb-0 mt-2 "><b>Pessoas por ERB:</b> 2.346</p>
                                        </div>
                                        <hr>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" checked>
                                                Turística
                                            </label>
                                            <p class="mb-0 mt-2 "><b>Custo:</b> R$ 80.000.000,00</p>
                                            <p class="mb-0 mt-2 "><b>Pessoas por ERB:</b> 1727</p>
                                        </div>
                                        <hr>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" checked>
                                                Industrializada
                                            </label>
                                            <p class="mb-0 mt-2 "><b>Custo:</b> R$ 120.000.000,00</p>
                                            <p class="mb-0 mt-2 "><b>Pessoas por ERB:</b> 1307</p>
                                        </div>
                                        <hr>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <a class="btn btn-block btn-primary btn-ls font-weight-medium auth-form-btn" href="/">Escolher região</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 register-half-bg d-flex flex-row">
                       <p class="text-white font-weight-medium text-center flex-grow align-self-end">- ALFA COMPANY -  &copy;
                            2019  All rights reserved.</p>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
</template>