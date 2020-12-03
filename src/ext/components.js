
import Vue from "vue"

// import Autolist from "@/components/Autolist"
// import Datepickerrange from "@/components/DatepickerRange"
// import DataTable from "@/components/DataTable"
// import DbInput from "@/components/DbInput"
// import DbSelect from "@/components/DbSelect"
// import DbGraphic from "@/components/DbGraphic"
import vueCountryRegionSelect from 'vue-country-region-select'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';


Vue.component('phone-number-input', VuePhoneNumberInput);

Vue.use(vueCountryRegionSelect)


// Vue.component('autolist', Autolist)
// Vue.component('datepickerrange', Datepickerrange)
// Vue.component('datatable', DataTable)
// Vue.component('db-input', DbInput)
// Vue.component('db-select', DbSelect)
// Vue.component('db-graphic', DbGraphic)
