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

                            <div class="alert alert-dismissible fade show" :class="`${alert.type}`" role="alert" v-if="alert.message">
                                <strong>{{ alert.message }} !</strong>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <form class="pt-3"  @submit.prevent="handleSubmit" style="text-align: center;">
                                <div class="form-group">
                                    <label>Nome da empresa</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-id-badge text-primary"></i>
                                            </span>
                                        </div>
                                        <input type="text" v-model="name" name="name" class="form-control form-control-lg border-left-0"
                                            id="exampleInputPassword" placeholder="Nome da empresa">
                                        <div v-show="submitted && !name" class="invalid-feedback">Company name is required</div>
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
                                        <input type="text" v-model="motivo" name="motivo" class="form-control form-control-lg border-left-0"
                                            placeholder="Por que esse nome?">
                                        <div v-show="submitted && !motivo" class="invalid-feedback">Reason is required</div>
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
                                        <input type="text" v-model="missao" name="missao" class="form-control form-control-lg border-left-0"
                                            placeholder="Qual é a missão da empresa?">
                                         <div v-show="submitted && !missao" class="invalid-feedback">Mission is required</div>
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
                                        <input type="text" v-model="vision" name="vision" class="form-control form-control-lg border-left-0"
                                            placeholder="Qual é a visão da empresa?">
                                         <div v-show="submitted && !vision" class="invalid-feedback">Vision is required</div>
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
                                        <input type="text" v-model="valores" name="valores" class="form-control form-control-lg border-left-0"
                                            placeholder="Qual é o valor da empresa?">
                                         <div v-show="submitted && !valores" class="invalid-feedback">Values is required</div>
                                    </div>
                                </div>

                                <div class="form-group">
                                        <label>Logo da empresa</label>
                                        <div class="input-group">
                                         <div class="input-group-prepend bg-transparent">
                                            <span class="input-group-text bg-transparent border-right-0">
                                                <i class="ti-check-box text-primary"></i>
                                            </span>
                                        </div>
                                           <!--  <input @change="previewImage" type="file" name="photo" accept="image/*" class="form-control form-control-lg">
                                            <img :src="logo" class="image" style="max-heigth=50px; max-width=50px;"> -->
                                            <input v-model="logo" name="logo" class="form-control form-control-lg border-left-0" placeholder="URL IMAGEM">
                                            <div v-show="submitted && !logo" class="invalid-feedback">Logo is required</div>
                                        </div>
                                    </div>
                                <div class="mt-3">
                                    <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" :aria-hidden="true" :disabled="company.isRegistering" v-show="!company.isRegistering">Cadastrar Empresa</button>
                                    <img v-show="company.isRegistering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
        name        : '',
        motivo      : '',
        missao      : '',
        vision      : '',
        valores     : '',
        logo        : '',
        submitted   : false
      }
    },

    create: {
        
    },

    computed: {
        ...mapState({
            alert   : state => state.alert,
            company : state => state.company
        })
    },

    methods: {
        
        ...mapActions('company', ['REGISTER_COMPANY']),

        handleSubmit (e) {
            this.submitted = true;

            const { name, motivo, missao, vision, valores, logo } = this;
            
            if (name && motivo && missao && vision && valores && logo) {
                
                this.REGISTER_COMPANY({ name, motivo, missao, vision, valores, logo })
                    .then((resolve) => this.clear())
            }
        },

        clear() {
            this.name     = '',
            this.email    = '',
            this.username = '',
            this.password = '',
            this.submitted= false
        },

         previewImage: function(event) {

            var input = event.target;

            if (input.files && input.files[0]) {

                var reader = new FileReader();

                reader.onload = (e) => {
                    this.logo = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    }
};
</script>