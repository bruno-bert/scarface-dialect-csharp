const Loader = require('./Loader');
const Dialect = Loader.load('Dialect');

class CSharpDialect extends Dialect {
  
  constructor() {
    super();
    this.name = 'csharp';
    this.fileExtension = '.cs';
    this._IDType = 'int';
    this.arrayImplementer = 'List<{0}>';
    this.capitalizeModelName = true;
    this.capitalizePropertyName = false;
  }

  // Private methods
  mapVerbs() {
    let items = new Map();
    items.set('GET', 'HttpGet');
    items.set('PUT', 'HttpPut');
    items.set('PATCH', 'HttpPatch');
    items.set('POST', 'HttpPost');
    items.set('DELETE', 'HttpDelete');
    return items;
  }

  mapTypes() {
    let items = new Map();
    items.set('integer', 'int');
    items.set('string', 'string');
    items.set('number', 'Number');
    items.set('boolean', 'bool');

    return items;
  }
  mapFormats() {
    let items = new Map();
    items.set('int16', 'Int16');
    items.set('int32', 'Int32');
    items.set('int64', 'Int64');
    items.set('float', 'float');
    items.set('double', 'double');
    items.set('date-time', 'DateTime');
    items.set('date', 'Date');
    items.set('byte', 'Byte');
    items.set('password', 'string');
    items.set('email', 'string');
    items.set('uuid', 'string');
    items.set('creditcard', 'string');
    items.set('binary', 'int');
    items.set('phone', 'string');
    items.set('url', 'string');
    return items;
  }

  mapParametersIn() {
    let items = new Map();
    items.set('route', 'FromRoute');
    items.set('form', 'FromForm');
    items.set('query', 'FromQuery');
    items.set('services', 'FromServices');
    items.set('header', 'FromHeader');
    items.set('body', 'FromBody');
    return items;
  }

  mapImplementedAnnotations() {
    let items = new Map();
    items.set('required', '[Required]');
    items.set('minLength', '[MinLength({0})]');
    items.set('maxLength', '[MaxLength({0})]');
    items.set('email', '[EmailAddress]');
    items.set('creditcard', '[CreditCard]');
    items.set('phone', '[Phone]');
    items.set('url', '[Url]');
    items.set('stringLength', '[StringLength({0})]');
    items.set('range', '[Range({0})]');
    items.set('pattern', '[RegularExpression({0})]');
    items.set('password', '[DataType(DataType.Password)]');
    return items;
  }
}

module.exports = CSharpDialect;
