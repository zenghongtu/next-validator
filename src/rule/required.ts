import { ExecuteRule } from '../interface';
import { isEmptyValue } from '../util';
import { formatter } from '../formatter';

const required: ExecuteRule = (rule, value, source, errors, options, type) => {
  if (
    rule.required &&
    (!source.hasOwnProperty(rule.field) ||
      isEmptyValue(value, type || rule.type))
  ) {
    errors.push(formatter.format(options.messages.required, rule));
  }
};

export default required;
