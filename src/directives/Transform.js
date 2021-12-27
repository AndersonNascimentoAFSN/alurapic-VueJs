import Vue from 'vue';

Vue.directive('transform', {
  bind(el, binding, vnode) {
    let current = 0;
    el.addEventListener('dblclick',() => {

      // passando um objeto na diretiva:
      // let increment = binding.value.increment || 90;
      // let animation = binding.value.animation || false;

      let increment = binding.value || 90;
      // passando um modifiers:
      if (binding.modifiers.reverse) increment = -binding.value || -90;

      current += increment;
      el.style.transform = `rotate(${current}deg)`;

      // passando um modifiers:
      if (binding.modifiers.animation) el.style.transition = 'transform 0.5s';


      // passando um objeto na diretiva:
      // if (animation) el.style.transition = 'transform 0.5s';
    });
  }
});