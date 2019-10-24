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
                                    <label>Nome do lider</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-pencil text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" v-model="nomeLider" name="nomeLider"  class="form-control form-control-lg border-left-0"
                                            placeholder="Nome do lider">
                                            <div v-show="submitted && !nomeLider" class="invalid-feedback">The name of leader is required</div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Email do lider</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-email text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" v-model="emailLider" name="emailLider"  class="form-control form-control-lg border-left-0"
                                            placeholder="Email do lider">
                                            <div v-show="submitted && !nomeLider" class="invalid-feedback">The email of leader is required</div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Senha do lider</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-lock text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" v-model="senhalider" name="senhaLider"  class="form-control form-control-lg border-left-0"
                                            placeholder="Senha do lider">
                                            <div v-show="submitted && !senhaLider" class="invalid-feedback">The password of leader is required</div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                   <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" :aria-hidden="true" :disabled="auth.userRequestLogin" v-show="!auth.userRequestLogin"> CADASTRAR LIDER</button>
                    <img v-show="auth.userRequestLogin" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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