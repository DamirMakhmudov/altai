app.component('expansion', {
  template:
  /*html*/
  `
  <h4>{{ title }}</h4>
  <div class="q-pa-md" style="max-width: auto">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Контакты"
        caption="John Doe"
      >
      <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: auto">
          <q-input v-model="name" label="Имя" />
          <q-input v-model="email" label="Email" />
        </div>
      </div>

        <!-- <q-card>
           <q-card-section>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
             commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
             eveniet doloribus ullam aliquid.
           </q-card-section> 
        </q-card> -->

      </q-expansion-item>

    </q-list>
  </div>
`
,
  props: {
    title: {
      type: String,
      required: false,
      value: 'ddd'
    }
  },
  setup(props) {
    return {} 
  }
})