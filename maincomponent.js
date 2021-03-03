app.component('maincomponent', {
  props: {
    // custom: String
    custom: {
      type: String,
      required: true
    }
  },
  
  template:
    /*html*/
    `
    <p>title: {{title}}</p>
    <p>custom: {{custom}}</p>
    <button v-on:click="doSome">doSome</button>
    
    `
    ,
    setup() {
      console.log('run: maincomponent');

      const title = ref('Title');

      function doSome(){
        console.log('doSome run');
        console.log(title.value)
      }

      return {
        title,
        doSome
      }
    }
}) 