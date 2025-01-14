<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="text-center text-white">
      <form ref="form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
          <input type="hidden" name="oid" value="00D6g000003raMM">
          <input type="hidden" name="retURL" value="https://proptech.octopus.com.ar/thank-you">

          <!-- <input type="hidden" name="debug" value=1> -->

          <input
              id="first_name"
              maxlength="40"
              name="first_name"
              size="20"
              type="text"
              v-model="name"
              oninvalid="setCustomValidity('Completa este campo')"
              oninput="setCustomValidity('')"
              required
              autocomplete="off"
              placeholder="Nombre completo"/>
          <br>

          <select
            id="00N6g00000Qpt3M"
            name="00N6g00000Qpt3M"
            v-model="consortiums"
            oninvalid="setCustomValidity('Completa este campo')"
            oninput="setCustomValidity('')"
            required
            autocomplete="off"
          >
            <option value="" disabled selected>Cantidad de consorcios</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="+20">+20</option>
          </select>

          <!-- <input
              id="00N6g00000Qpt3M"
              name="00N6g00000Qpt3M"
              size="20"
              v-model="consortiums"
              oninvalid="setCustomValidity('Completa este campo')"
              oninput="setCustomValidity('')"
              type="number"
              min="1"
              required
              autocomplete="off"
              placeholder="Cantidad de consorcios"
          /><br> -->

          <input
              id="email"
              maxlength="80"
              name="email"
              v-model="email"
              oninvalid="setCustomValidity('Completa este campo')"
              oninput="setCustomValidity('')"
              size="20"
              type="text"
              required
              autocomplete="off"
              placeholder="Correo electronico"
          /><br>

          <input
              id="phone"
              maxlength="40"
              name="phone"
              v-model="phone"
              oninvalid="setCustomValidity('Completa este campo')"
              oninput="setCustomValidity('')"
              size="20"
              type="number"
              autocomplete="off"
              required
              placeholder="Telefono"
          /><br>

          <input
            id="00N6g00000Qpt3O"
            name="00N6g00000Qpt3O"
            maxlength="40"
            size="20"
            value="Octopus"
            type="hidden"
          />

          <input
            id="lead_source"
            maxlength="40"
            name="lead_source"
            size="20"
            value="Contacto Web"
            type="hidden"
          />

          <input
            id="company"
            maxlength="40"
            name="company"
            size="20"
            :value=name
            type="hidden"
          />

          <input
              id="00N6g00000Ux0Ls"
              maxlength="255"
              name="00N6g00000Ux0Ls"
              size="20"
              type="hidden"
              :value="utmSource"
              autocomplete="off"
              placeholder="UTM SOURCE"
          />

          <input
            id="00N6g00000Ux4la"
            maxlength="255"
            name="00N6g00000Ux4la"
            size="20"
            type="hidden"
            :value="utmMedium"
            autocomplete="off"
            placeholder="UTM MEDIUM"
          />

          <input
            id="00N6g00000Ux4lf"
            maxlength="255"
            name="00N6g00000Ux4lf"
            size="20"
            type="hidden"
            :value="utmCampaign"
            autocomplete="off"
            placeholder="UTM CAMPAIGN"
          />

          <input
            id="00N6g00000RXXwK"
            name="00N6g00000RXXwK"
            type="checkbox"
            value="true"
            checked="checked"
            style="display:none"
          />
      </form>

      <button class="bg-[#E85298]" @click="submitForm"><b>Accedé a tu demo gratis</b></button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'contact-form',
  data() {
    return {
      motivoContacto: 'Quiero más información',
      name: '',
      lastName: '',
      consortiums: '',
      email: '',
      phone: null,
      utmSource: null,
      utmCampaign: null,
      utmMedium: null,
    };
  },
  methods: {
    submitForm(event) {
      const utms = this.$route.query;
      this.utmSource = utms.utm_source;
      this.utmCampaign = utms.utm_campaign;
      this.utmMedium = utms.utm_medium;

      const inputs = Array.from(this.$refs.form.children);

      const invalidForm = inputs.some((input) => {
        if (input.required) {
          const valid = input.checkValidity();
          if (!valid) {
            input.reportValidity();
            return true;
          }
        }
        return false;
      });

      if (invalidForm) {
        event.preventDefault();
      } else {
        this.sendEmails();
      }
    },
    async sendEmails() {
      await axios.post('/send-email', {
        name: `${this.name} ${this.lastName}`,
        description: this.motivoContacto,
        consortiums: this.consortiums,
        phone: this.phone,
        email: this.email,
      });
    },
  },
};
</script>

<style scoped>
  select {
    background-color: white;
  }

  form input:focus, form select:focus {
      outline: none;
  }
  form input, form select {
      color: black;
      padding-left: 15px;
      border: 1px solid #696871;
  }
  form input.error, form select.error {
    border: 1px solid red;
  }

  form input::after, form select::after {
    content: 'click my input';
    color: black;
  }

  form input, button, select {
      width: 100%;
      height: 44px;
      border-radius: 5px;
      margin-bottom: 15px;
  }

  form button {
      background-color: #FC5867;
  }
</style>
