<template>
  <div>
    <section class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <img src="@/assets/logo.png" style="height:60px">
            <p class="subtitle has-text-white">Please login to proceed.</p>
            <div class="box">
              <form @submit.prevent="login" novalidate>
                <b-field
                  :type="{'is-danger': errors.has('email')}"
                  :message="errors.first('email')"
                >
                  <b-input
                    type="email"
                    v-model="item.email"
                    placeholder="Email"
                    name="email"
                    v-validate="'required|email'"
                    data-vv-validate-on="none"
                  ></b-input>
                </b-field>
                <b-field
                  :type="{'is-danger': errors.has('password')}"
                  :message="errors.first('password')"
                >
                  <b-input
                    type="password"
                    v-model="item.password"
                    placeholder="Password"
                    name="password"
                    v-validate="'required'"
                  ></b-input>
                </b-field>
                <button class="button login-button is-block is-primary is-medium is-fullwidth">Login</button>
                Do not have account?<a href="#" class="forgot-password"  @click.prevent="signUp()"> Sign up</a><br>
                <a href="#" class="forgot-password has-text-right"  @click.prevent="forgotPassword()">Forgot password?</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { AuthService } from '@/services';
import OneSignalService from '../services/onesignal.service';

export default {
  name: 'Login',
  data() {
    return {
      item: {}
    };
  },
  methods: {
    async login() {
      const valid = await this.$validator.validateAll();
      if (valid) {
        const result = await AuthService.login(this.item.email, this.item.password);
        if (result instanceof Error) {
          this.$toast.open({
            message: result.message,
            type: 'is-danger',
            position: 'is-top'
          });
        } else if (result) {
          const oneSignalService = new OneSignalService();
          oneSignalService.init();
          this.$router.push({ name: 'agendas' });
        }
      }
    },
    forgotPassword() {
      this.$router.push({ name: 'forgot-password' });
    },
    signUp() {
      this.$router.push({ name: 'register' });
    }
  }
};
</script>
<style scooped>
.forgot-password {
  color: #593c79 !important;
}
.login-button {
  margin-bottom: 30px;
}
</style>
