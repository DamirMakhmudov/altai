app.component('maincomponent', {
  // props: {
  //   custom: {
  //     type: String,
  //     required: true
  //   }
  // },
  props:['custom'],
  template:
    /*html*/
    `
    some text
    <p>{{title}}</p>
    1 {{custom}} 2
    `
  ,

  setup(props) {
    const title = ref('Title');
    console.log('run: maincomponent');
    return {
      title
    }
  }
})