import { NUMBER_PATTERN_TYPE } from './form'

const regex = {
  input: {
    image: /^[\w\d-_.]+\.[\w\d]+$/,
    number: {
      [NUMBER_PATTERN_TYPE.ZERO_LEADING]: /^\d+$|^0$/,
      [NUMBER_PATTERN_TYPE.NON_ZERO_LEADING]: /^[1-9](\d+)?$|^0$/,
      [NUMBER_PATTERN_TYPE.NEGATIVE]: /^-?[1-9]+$|^-?0$|^-$/
    },
    phone: /^(\+\d{1,2}\s)?\(?\d{3}\)?\d{3}\d{4}$/,
    hex: /^#[0-9A-F]{6}$/,
    url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g
  }
}

export default regex
