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
                            <h4>Bem vindo, Lider!</h4>
                            <h6 class="font-weight-light">Aqui você pode escolher sua região de atuação.</h6>
                            <form @submit.prevent="setRegion" class="pt-3">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div v-for="(item,index) in regions" v-bind:key="index" class="form-check">
                                            <input class="form-check-input" v-model="region" v-bind:value="item" type="radio" name="optionsRadios" v-bind:id="`option-${index}`" >
                                            <label class="form-check-label" v-bind:for="`option-${index}`">
                                               {{item.description}}
                                            <p class="mb-0 mt-2 "><b>Custo:</b> R$ {{ item.allCost.toFixed(2)}}</p>
                                            <p class="mb-0 mt-2 "><b>Pessoas por ERB:</b> R$ {{ item.personCost.toFixed(2) }}</p>
                                            </label>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" :disabled="!region" >Escolher região</button>
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
    data(){
        return{
            region:undefined,
            regions:[
                { description : "Agro Econômica", allCost: 75000000, personCost : 2346, idRegion: 1},
                { description : "Turística", allCost: 80000000, personCost : 1727, idRegion: 2 },
                { description : "Industrializada", allCost: 120000000, personCost : 1307, idRegion: 3 }
            ]
        }
    },
    create: {
        
    },

    computed: {
        ...mapState({
            alert   : state => state.alert,
            region1 : state => state.region
        })
    },

    methods: {
        ...mapActions('region', ['REGISTER_COMP_REGION']),
        
        setRegion (e) {

            const { region } = this;
            if (region) {
                this.REGISTER_COMP_REGION({region})
            }
        }      
    }
}
</script>