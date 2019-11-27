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
                            <h4>Cadastre o líder!</h4>
                            <h6 class="font-weight-light">Informe os campos abaixo para cadastrar</h6>
                            
                            <div class="alert alert-dismissible fade show" :class="`${alert.type}`" role="alert" v-if="alert.message">
                                <strong>{{ alert.message }} !</strong>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <form class="pt-3" @submit.prevent="handleSubmit" style="text-align: center;">
                                <div class="form-group">
                                    <label>Nome do lider</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-pencil text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" v-model="name" name="name" class="form-control form-control-lg border-left-0"
                                            placeholder="Nome do colaborador">
                                        <div v-show="submitted && !name" class="invalid-feedback">Name is required</div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Username do lider</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-pencil text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" v-model="username" name="username" class="form-control form-control-lg border-left-0"
                                            placeholder="Username do colaborador">
                                        <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
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
                                        <input type="text" v-model="email" name="email" class="form-control form-control-lg border-left-0"
                                            placeholder="Email do colaborador">
                                        <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
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
                                        <input type="text" v-model="password" name="password" class="form-control form-control-lg border-left-0"
                                            placeholder="Senha do colaborador">
                                        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" :aria-hidden="true" :disabled="lider.isRegistering" v-show="!lider.isRegistering">Cadastrar Lider</button>
                                    <img v-show="lider.isRegistering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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

<script>
  import { mapState, mapActions } from 'vuex'

export default {
    data () {
      return {
        name     : '',
        email    : '',
        username : '',
        password : '',
        submitted: false
      }
    },

    computed: {
        ...mapState({
            alert : state => state.alert,
            lider : state => state.lider
        })
    },

    methods: {
        
        ...mapActions('lider', ['REGISTER_LIDER']),

        async handleSubmit (e) {
            this.submitted = true;

            const { username, name, email, password } = this;
            
            if (username && name && email && password) {
                await this.REGISTER_LIDER({ username, name, email, password })
                    .then((resolved) => this.clear())
            }
        },

        clear() {
            this.name     = '',
            this.email    = '',
            this.username = '',
            this.password = '',
            this.submitted= false
        }
    }
};
</script>