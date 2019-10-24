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
                <h4>Olá!</h4>
                <h6 class="font-weight-light">Faça Login para continuar</h6>

                <div class="alert alert-dismissible fade show"  :class ="`${alert.type}`" role="alert" v-if="alert.message">
                  <strong>{{ alert.message }} !</strong>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
               
                <form class="pt-3" @submit.prevent="handleSubmit" style="text-align: center;">
                  <div class="form-group">
                    <label for="exampleInputEmail">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="ti-user text-primary"></i>
                        </span>
                      </div>
                      <input type="text" v-model="username" name="username" class="form-control form-control-lg border-left-0" />
                      <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>                  
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="ti-lock text-primary"></i>
                        </span>
                      </div>
                      <input type="password" v-model="password" name="password" class="form-control form-control-lg border-left-0" />
                      <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>                   
                    </div>
                  </div>

                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input">
                        Mantenha-me logado
                      </label>
                    </div>
                    <a href="#" class="auth-link text-black">Esqueceu sua senha?</a>
                  </div>
                
                  <div class="my-3">
                    <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" :aria-hidden="true" :disabled="auth.userRequestLogin" v-show="!auth.userRequestLogin">LOGIN</button>
                    <img v-show="auth.userRequestLogin" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  </div>
                </form>
              </div>
            </div>
          
            <div class="col-lg-6 login-half-bg d-flex flex-row">
              <p class="text-white font-weight-medium text-center flex-grow align-self-end">- ALFA COMPANY -  &copy;
                            2019  All rights reserved.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

export default {
    data () {
      return {
        username : '',
        password : '',
        submitted: false
      }
    },

    computed: {
        ...mapState({
            alert : state => state.alert,
            auth  : state => state.auth
        })
    },

    methods: {
        ...mapActions('auth', ['LOGIN']),
        handleSubmit (e) {
            this.submitted = true;
            const { username, password } = this;
            if (username && password) {
                this.LOGIN({ username, password })
            }
        }
    }
};
</script>