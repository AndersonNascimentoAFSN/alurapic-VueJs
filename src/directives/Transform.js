export default {
  bind(el, binding, _vnode) {
    let current = 0;
    el.addEventListener('dblclick',() => {

      // passando um objeto na diretiva:
      // let increment = binding.value.increment || 90;
      // let animation = binding.value.animation || false;

      let increment = binding.value || 90;
      let effect;

      // args
      if (!binding.arg || binding.arg === 'rotate') {
        // passando um modifiers:
        if (binding.modifiers.reverse) increment = -binding.value || -90;
        current += increment;
        effect = `rotate(${current}deg)`
      } else if (binding.arg === 'scale') {
        effect = `scale(${increment})`
      }

      el.style.transform = effect;

      // passando um modifiers:
      if (binding.modifiers.animation) el.style.transition = 'transform 0.5s';


      // passando um objeto na diretiva:
      // if (animation) el.style.transition = 'transform 0.5s';
    });
    // console.log(vnode.context.propriedadeDoComponenteNoQualADiretivaFoiAssociada)
  }
};


// import Vue from 'vue';

// Vue.directive('transform', {
//   bind(el, binding, vnode) {
//     let current = 0;
//     el.addEventListener('dblclick',() => {

//       // passando um objeto na diretiva:
//       // let increment = binding.value.increment || 90;
//       // let animation = binding.value.animation || false;

//       let increment = binding.value || 90;
//       let effect;

//       // args
//       if (!binding.arg || binding.arg === 'rotate') {
//         // passando um modifiers:
//         if (binding.modifiers.reverse) increment = -binding.value || -90;
//         current += increment;
//         effect = `rotate(${current}deg)`
//       } else if (binding.arg === 'scale') {
//         effect = `scale(${increment})`
//       }

//       el.style.transform = effect;

//       // passando um modifiers:
//       if (binding.modifiers.animation) el.style.transition = 'transform 0.5s';


//       // passando um objeto na diretiva:
//       // if (animation) el.style.transition = 'transform 0.5s';
//     });
//     // console.log(vnode.context.propriedadeDoComponenteNoQualADiretivaFoiAssociada)
//   }
// });