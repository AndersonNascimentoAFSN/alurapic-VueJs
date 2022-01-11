import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'O campo {_field_} é obrigatório'
});

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: 'O campo {_field_} deve possuir no mínimo {min} e no máximo {max} caracteres.'

});