import { ExecuteRule } from '../interface';
import { formatter } from '../formatter';

const ENUM = 'enum' as const;

const enumerable: ExecuteRule = (rule, value, source, errors, options) => {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(formatter.format(options.messages[ENUM], rule));
  }
};

export default enumerable;
