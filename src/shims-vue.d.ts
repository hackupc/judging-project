/* eslint-disable */
import { Vue } from "vue-class-component";

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import DataTable from "@andresouzaabreu/vue-data-table";

  Vue.component("data-table", DataTable);
  const component: DefineComponent<{}, {}, any>
  export default component
}
