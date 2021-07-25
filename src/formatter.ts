import { InternalRuleItem, MessageVariables } from './interface';

export class Formatter {
  private messageVariables = {};

  setMessageVariables(vars: MessageVariables = {}) {
    this.messageVariables = vars;
  }

  format(
    template: ((rule?: InternalRuleItem) => string) | string,
    rule?: InternalRuleItem,
  ): string {
    if (typeof template === 'function') {
      return template.call(null, rule);
    }
    if (typeof template === 'string') {
      const vars = {
        ...rule,
        name: rule.field,
        enum: (rule.enum || []).join(', '),
        ...this.messageVariables,
      };

      let str = template.replace(/\$\{\w+\}/g, (str: string) => {
        const key = str.slice(2, -1);
        return vars[key];
      });
      return str;
    }

    return template;
  }
}
export const formatter = new Formatter();
