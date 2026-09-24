;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="f2545b21-7dc6-2d02-b15e-d093266ca58f")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98883,e=>{"use strict";let t,r;var n=((t=n||{}).AUTHOR_ID="authorId",t.DATE_FROM="datumOd",t.DATE_TO="datumDo",t.CHANNEL="channel",t.ID="id",t.LIST="list",t.MORE="more",t.ONLY_IN_SHOWN_GROUPS="onlyInShownGroups",t.PAGE="page",t.PAGE_SIZE="pageSize",t.PERIOD_HOURS="periodHours",t.SECTION_ID="sectionId",t.SECTION_IDS="sectionIds",t.SIDPS="sidps",t.SORT="razeni",t.TAG_ID="tagId",t.TAG_IDS="tagIds",t),i=((r=i||{}).UTM_SOURCE="utm_source",r.UTM_MEDIUM="utm_medium",r.UTM_CAMPAIGN="utm_campaign",r.HANDLE="handle",r.P="p",r.S="s",r);let o={...n,...i};e.s(["BaseURLParams",0,o])},72421,e=>{"use strict";let t;var r=((t=r||{}).ct24="CT24Web",t.sport="SportWeb",t);e.s(["realmGQLMetadata",0,r])},79040,e=>{"use strict";var t,r,n,i,o,a,s,u,c,l=function(e,t){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function h(e,t){if(!e)throw Error(t)}let p=/\r\n|[\n\r]/g;function d(e,t){let r=0,n=1;for(let i of e.body.matchAll(p)){if("number"==typeof i.index||function(e){if(!e)throw Error("Unexpected invariant triggered.")}(!1),i.index>=t)break;r=i.index+i[0].length,n+=1}return{line:n,column:t+1-r}}function y(e,t){let r=e.locationOffset.column-1,n="".padStart(r)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,s=1===t.line?r:0,u=t.column+s,c=`${e.name}:${a}:${u}
`,l=n.split(/\r\n|[\n\r]/g),f=l[i];if(f.length>120){let e=Math.floor(u/80),t=[];for(let e=0;e<f.length;e+=80)t.push(f.slice(e,e+80));return c+m([[`${a} |`,t[0]],...t.slice(1,e+1).map(e=>["|",e]),["|","^".padStart(u%80)],["|",t[e+1]]])}return c+m([[`${a-1} |`,l[i-1]],[`${a} |`,f],["|","^".padStart(u)],[`${a+1} |`,l[i+1]]])}function m(e){let t=e.filter(([e,t])=>void 0!==t),r=Math.max(...t.map(([e])=>e.length));return t.map(([e,t])=>e.padStart(r)+(t?" "+t:"")).join(`
`)}class v extends Error{constructor(e,...t){var r,n,i;const{nodes:o,source:a,positions:s,path:u,originalError:c,extensions:l}=function(e){let t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=u??void 0,this.originalError=c??void 0,this.nodes=g(Array.isArray(o)?o:o?[o]:void 0);const f=g(null==(r=this.nodes)?void 0:r.map(e=>e.loc).filter(e=>null!=e));this.source=a??(null==f||null==(n=f[0])?void 0:n.source),this.positions=s??f?.map(e=>e.start),this.locations=s&&a?s.map(e=>d(a,e)):f?.map(e=>d(e.source,e.start));const h=!function(e){return"object"==typeof e&&null!==e}(c?.extensions)?void 0:c?.extensions;this.extensions=null!=(i=l??h)?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,v):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(let r of this.nodes){var t;r.loc&&(e+=`

`+y((t=r.loc).source,d(t.source,t.start)))}else if(this.source&&this.locations)for(let t of this.locations)e+=`

`+y(this.source,t);return e}toJSON(){let e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function g(e){return void 0===e||0===e.length?void 0:e}function b(e,t,r){return new v(`Syntax Error: ${r}`,{source:e,positions:[t]})}class _{constructor(e,t,r){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class E{constructor(e,t,r,n,i,o){this.kind=e,this.start=t,this.end=r,this.line=n,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}let O={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},T=new Set(Object.keys(O));function w(e){return 9===e||32===e}function S(e){return e>=48&&e<=57}function k(e){return e>=97&&e<=122||e>=65&&e<=90}function x(e){return k(e)||95===e}(t=a||(a={})).QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription",(r=s||(s={})).QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",(n=u||(u={})).NAME="Name",n.DOCUMENT="Document",n.OPERATION_DEFINITION="OperationDefinition",n.VARIABLE_DEFINITION="VariableDefinition",n.SELECTION_SET="SelectionSet",n.FIELD="Field",n.ARGUMENT="Argument",n.FRAGMENT_SPREAD="FragmentSpread",n.INLINE_FRAGMENT="InlineFragment",n.FRAGMENT_DEFINITION="FragmentDefinition",n.VARIABLE="Variable",n.INT="IntValue",n.FLOAT="FloatValue",n.STRING="StringValue",n.BOOLEAN="BooleanValue",n.NULL="NullValue",n.ENUM="EnumValue",n.LIST="ListValue",n.OBJECT="ObjectValue",n.OBJECT_FIELD="ObjectField",n.DIRECTIVE="Directive",n.NAMED_TYPE="NamedType",n.LIST_TYPE="ListType",n.NON_NULL_TYPE="NonNullType",n.SCHEMA_DEFINITION="SchemaDefinition",n.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",n.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",n.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",n.FIELD_DEFINITION="FieldDefinition",n.INPUT_VALUE_DEFINITION="InputValueDefinition",n.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",n.UNION_TYPE_DEFINITION="UnionTypeDefinition",n.ENUM_TYPE_DEFINITION="EnumTypeDefinition",n.ENUM_VALUE_DEFINITION="EnumValueDefinition",n.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",n.DIRECTIVE_DEFINITION="DirectiveDefinition",n.SCHEMA_EXTENSION="SchemaExtension",n.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",n.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",n.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",n.UNION_TYPE_EXTENSION="UnionTypeExtension",n.ENUM_TYPE_EXTENSION="EnumTypeExtension",n.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",n.TYPE_COORDINATE="TypeCoordinate",n.MEMBER_COORDINATE="MemberCoordinate",n.ARGUMENT_COORDINATE="ArgumentCoordinate",n.DIRECTIVE_COORDINATE="DirectiveCoordinate",n.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate",(i=c||(c={})).SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.DOT=".",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment";class I{constructor(e){const t=new E(c.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==c.EOF)do if(e.next)e=e.next;else{let t=function(e,t){let r=e.source.body,n=r.length,i=t;for(;i<n;){let t=r.charCodeAt(i);switch(t){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:10===r.charCodeAt(i+1)?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return function(e,t){let r=e.source.body,n=r.length,i=t+1;for(;i<n;){let e=r.charCodeAt(i);if(10===e||13===e)break;if(A(e))++i;else if(N(r,i))i+=2;else break}return R(e,c.COMMENT,t,i,r.slice(t+1,i))}(e,i);case 33:return R(e,c.BANG,i,i+1);case 36:return R(e,c.DOLLAR,i,i+1);case 38:return R(e,c.AMP,i,i+1);case 40:return R(e,c.PAREN_L,i,i+1);case 41:return R(e,c.PAREN_R,i,i+1);case 46:if(46===r.charCodeAt(i+1)&&46===r.charCodeAt(i+2))return R(e,c.SPREAD,i,i+3);break;case 58:return R(e,c.COLON,i,i+1);case 61:return R(e,c.EQUALS,i,i+1);case 64:return R(e,c.AT,i,i+1);case 91:return R(e,c.BRACKET_L,i,i+1);case 93:return R(e,c.BRACKET_R,i,i+1);case 123:return R(e,c.BRACE_L,i,i+1);case 124:return R(e,c.PIPE,i,i+1);case 125:return R(e,c.BRACE_R,i,i+1);case 34:return 34===r.charCodeAt(i+1)&&34===r.charCodeAt(i+2)?function(e,t){let r=e.source.body,n=r.length,i=e.lineStart,o=t+3,a=o,s="",u=[];for(;o<n;){let n=r.charCodeAt(o);if(34===n&&34===r.charCodeAt(o+1)&&34===r.charCodeAt(o+2)){s+=r.slice(a,o),u.push(s);let n=R(e,c.BLOCK_STRING,t,o+3,(function(e){var t,r;let n=Number.MAX_SAFE_INTEGER,i=null,o=-1;for(let t=0;t<e.length;++t){let a=e[t],s=function(e){let t=0;for(;t<e.length&&w(e.charCodeAt(t));)++t;return t}(a);s!==a.length&&(i=null!=(r=i)?r:t,o=t,0!==t&&s<n&&(n=s))}return e.map((e,t)=>0===t?e:e.slice(n)).slice(null!=(t=i)?t:0,o+1)})(u).join(`
`));return e.line+=u.length-1,e.lineStart=i,n}if(92===n&&34===r.charCodeAt(o+1)&&34===r.charCodeAt(o+2)&&34===r.charCodeAt(o+3)){s+=r.slice(a,o),a=o+1,o+=4;continue}if(10===n||13===n){s+=r.slice(a,o),u.push(s),13===n&&10===r.charCodeAt(o+1)?o+=2:++o,s="",a=o,i=o;continue}if(A(n))++o;else if(N(r,o))o+=2;else throw b(e.source,o,`Invalid character within String: ${F(e,o)}.`)}throw b(e.source,o,"Unterminated string.")}(e,i):function(e,t){let r=e.source.body,n=r.length,i=t+1,o=i,a="";for(;i<n;){let n=r.charCodeAt(i);if(34===n)return a+=r.slice(o,i),R(e,c.STRING,t,i+1,a);if(92===n){a+=r.slice(o,i);let t=117===r.charCodeAt(i+1)?123===r.charCodeAt(i+2)?function(e,t){let r=e.source.body,n=0,i=3;for(;i<12;){let e=r.charCodeAt(t+i++);if(125===e){if(i<5||!A(n))break;return{value:String.fromCodePoint(n),size:i}}if((n=n<<4|M(e))<0)break}throw b(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)}(e,i):function(e,t){let r=e.source.body,n=P(r,t+2);if(A(n))return{value:String.fromCodePoint(n),size:6};if(C(n)&&92===r.charCodeAt(t+6)&&117===r.charCodeAt(t+7)){let e=P(r,t+8);if(D(e))return{value:String.fromCodePoint(n,e),size:12}}throw b(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}(e,i):function(e,t){let r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw b(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}(e,i);a+=t.value,i+=t.size,o=i;continue}if(10===n||13===n)break;if(A(n))++i;else if(N(r,i))i+=2;else throw b(e.source,i,`Invalid character within String: ${F(e,i)}.`)}throw b(e.source,i,"Unterminated string.")}(e,i)}if(S(t)||45===t)return function(e,t,r){let n=e.source.body,i=t,o=r,a=!1;if(45===o&&(o=n.charCodeAt(++i)),48===o){if(S(o=n.charCodeAt(++i)))throw b(e.source,i,`Invalid number, unexpected digit after 0: ${F(e,i)}.`)}else i=L(e,i,o),o=n.charCodeAt(i);if(46===o&&(a=!0,o=n.charCodeAt(++i),i=L(e,i,o),o=n.charCodeAt(i)),(69===o||101===o)&&(a=!0,(43===(o=n.charCodeAt(++i))||45===o)&&(o=n.charCodeAt(++i)),i=L(e,i,o),o=n.charCodeAt(i)),46===o||x(o))throw b(e.source,i,`Invalid number, expected digit but got: ${F(e,i)}.`);return R(e,a?c.FLOAT:c.INT,t,i,n.slice(t,i))}(e,i,t);if(x(t))return function(e,t){let r=e.source.body,n=r.length,i=t+1;for(;i<n;){var o;if(k(o=r.charCodeAt(i))||S(o)||95===o)++i;else break}return R(e,c.NAME,t,i,r.slice(t,i))}(e,i);throw b(e.source,i,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":A(t)||N(r,i)?`Unexpected character: ${F(e,i)}.`:`Invalid character: ${F(e,i)}.`)}return R(e,c.EOF,n,n)}(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===c.COMMENT)return e}}function A(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function N(e,t){return C(e.charCodeAt(t))&&D(e.charCodeAt(t+1))}function C(e){return e>=55296&&e<=56319}function D(e){return e>=56320&&e<=57343}function F(e,t){let r=e.source.body.codePointAt(t);if(void 0===r)return c.EOF;if(r>=32&&r<=126){let e=String.fromCodePoint(r);return'"'===e?"'\"'":`"${e}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function R(e,t,r,n,i){let o=e.line,a=1+r-e.lineStart;return new E(t,r,n,o,a,i)}function L(e,t,r){if(!S(r))throw b(e.source,t,`Invalid number, expected digit but got: ${F(e,t)}.`);let n=e.source.body,i=t+1;for(;S(n.charCodeAt(i));)++i;return i}function P(e,t){return M(e.charCodeAt(t))<<12|M(e.charCodeAt(t+1))<<8|M(e.charCodeAt(t+2))<<4|M(e.charCodeAt(t+3))}function M(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function j(e){return function e(t,r){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return function(t,r){let n;if(null===t)return"null";if(r.includes(t))return"[Circular]";let i=[...r,t];if("function"==typeof t.toJSON){let r=t.toJSON();if(r!==t)return"string"==typeof r?r:e(r,i)}else if(Array.isArray(t)){var o,a,s=t,u=i;if(0===s.length)return"[]";if(u.length>2)return"[Array]";let r=Math.min(10,s.length),n=s.length-r,c=[];for(let t=0;t<r;++t)c.push(e(s[t],u));return 1===n?c.push("... 1 more item"):n>1&&c.push(`... ${n} more items`),"["+c.join(", ")+"]"}return o=t,a=i,0===(n=Object.entries(o)).length?"{}":a.length>2?"["+function(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){let t=e.constructor.name;if("string"==typeof t&&""!==t)return t}return t}(o)+"]":"{ "+n.map(([t,r])=>t+": "+e(r,a)).join(", ")+" }"}(t,r);default:return String(t)}}(e,[])}let q=function(e,t){if(e instanceof t)return!0;if("object"==typeof e&&null!==e){var r;let n=t.prototype[Symbol.toStringTag];if(n===(Symbol.toStringTag in e?e[Symbol.toStringTag]:null==(r=e.constructor)?void 0:r.name)){let t=j(e);throw Error(`Cannot use ${n} "${t}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class V{constructor(e,t="GraphQL request",r={line:1,column:1}){"string"==typeof e||h(!1,`Body must be a string. Received: ${j(e)}.`),this.body=e,this.name=t,this.locationOffset=r,this.locationOffset.line>0||h(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||h(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}class Q{constructor(e,t={}){const{lexer:r,...n}=t;if(r)this._lexer=r;else{const t=!function(e){return q(e,V)}(e)?new V(e):e;this._lexer=new I(t)}this._options=n,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let e=this.expectToken(c.NAME);return this.node(e,{kind:u.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:u.DOCUMENT,definitions:this.many(c.SOF,this.parseDefinition,c.EOF)})}parseDefinition(){if(this.peek(c.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(e&&t.kind===c.BRACE_L)throw b(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(t.kind===c.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(e)throw b(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");if("extend"===t.value)return this.parseTypeSystemExtension()}throw this.unexpected(t)}parseOperationDefinition(){let e,t=this._lexer.token;if(this.peek(c.BRACE_L))return this.node(t,{kind:u.OPERATION_DEFINITION,operation:a.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let r=this.parseDescription(),n=this.parseOperationType();return this.peek(c.NAME)&&(e=this.parseName()),this.node(t,{kind:u.OPERATION_DEFINITION,operation:n,description:r,name:e,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(c.NAME);switch(e.value){case"query":return a.QUERY;case"mutation":return a.MUTATION;case"subscription":return a.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(c.PAREN_L,this.parseVariableDefinition,c.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:u.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(c.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(c.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(c.DOLLAR),this.node(e,{kind:u.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:u.SELECTION_SET,selections:this.many(c.BRACE_L,this.parseSelection,c.BRACE_R)})}parseSelection(){return this.peek(c.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e,t,r=this._lexer.token,n=this.parseName();return this.expectOptionalToken(c.COLON)?(e=n,t=this.parseName()):t=n,this.node(r,{kind:u.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(c.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(c.PAREN_L,t,c.PAREN_R)}parseArgument(e=!1){let t=this._lexer.token,r=this.parseName();return this.expectToken(c.COLON),this.node(t,{kind:u.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let e=this._lexer.token;this.expectToken(c.SPREAD);let t=this.expectOptionalKeyword("on");return!t&&this.peek(c.NAME)?this.node(e,{kind:u.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:u.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let e=this._lexer.token,t=this.parseDescription();return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:u.FRAGMENT_DEFINITION,description:t,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:u.FRAGMENT_DEFINITION,description:t,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){let t=this._lexer.token;switch(t.kind){case c.BRACKET_L:return this.parseList(e);case c.BRACE_L:return this.parseObject(e);case c.INT:return this.advanceLexer(),this.node(t,{kind:u.INT,value:t.value});case c.FLOAT:return this.advanceLexer(),this.node(t,{kind:u.FLOAT,value:t.value});case c.STRING:case c.BLOCK_STRING:return this.parseStringLiteral();case c.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:u.BOOLEAN,value:!0});case"false":return this.node(t,{kind:u.BOOLEAN,value:!1});case"null":return this.node(t,{kind:u.NULL});default:return this.node(t,{kind:u.ENUM,value:t.value})}case c.DOLLAR:if(e)if(this.expectToken(c.DOLLAR),this._lexer.token.kind===c.NAME){let e=this._lexer.token.value;throw b(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:u.STRING,value:e.value,block:e.kind===c.BLOCK_STRING})}parseList(e){let t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:u.LIST,values:this.any(c.BRACKET_L,t,c.BRACKET_R)})}parseObject(e){let t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:u.OBJECT,fields:this.any(c.BRACE_L,t,c.BRACE_R)})}parseObjectField(e){let t=this._lexer.token,r=this.parseName();return this.expectToken(c.COLON),this.node(t,{kind:u.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){let t=[];for(;this.peek(c.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let t=this._lexer.token;return this.expectToken(c.AT),this.node(t,{kind:u.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e,t=this._lexer.token;if(this.expectOptionalToken(c.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(c.BRACKET_R),e=this.node(t,{kind:u.LIST_TYPE,type:r})}else e=this.parseNamedType();return this.expectOptionalToken(c.BANG)?this.node(t,{kind:u.NON_NULL_TYPE,type:e}):e}parseNamedType(){return this.node(this._lexer.token,{kind:u.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(c.STRING)||this.peek(c.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),n=this.many(c.BRACE_L,this.parseOperationTypeDefinition,c.BRACE_R);return this.node(e,{kind:u.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:n})}parseOperationTypeDefinition(){let e=this._lexer.token,t=this.parseOperationType();this.expectToken(c.COLON);let r=this.parseNamedType();return this.node(e,{kind:u.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),n=this.parseConstDirectives();return this.node(e,{kind:u.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:n})}parseObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:u.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(c.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(c.BRACE_L,this.parseFieldDefinition,c.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,t=this.parseDescription(),r=this.parseName(),n=this.parseArgumentDefs();this.expectToken(c.COLON);let i=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(e,{kind:u.FIELD_DEFINITION,description:t,name:r,arguments:n,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(c.PAREN_L,this.parseInputValueDef,c.PAREN_R)}parseInputValueDef(){let e,t=this._lexer.token,r=this.parseDescription(),n=this.parseName();this.expectToken(c.COLON);let i=this.parseTypeReference();this.expectOptionalToken(c.EQUALS)&&(e=this.parseConstValueLiteral());let o=this.parseConstDirectives();return this.node(t,{kind:u.INPUT_VALUE_DEFINITION,description:r,name:n,type:i,defaultValue:e,directives:o})}parseInterfaceTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:u.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:i,fields:o})}parseUnionTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:u.UNION_TYPE_DEFINITION,description:t,name:r,directives:n,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(c.EQUALS)?this.delimitedMany(c.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:u.ENUM_TYPE_DEFINITION,description:t,name:r,directives:n,values:i})}parseEnumValuesDefinition(){return this.optionalMany(c.BRACE_L,this.parseEnumValueDefinition,c.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(e,{kind:u.ENUM_VALUE_DEFINITION,description:t,name:r,directives:n})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw b(this._lexer.source,this._lexer.token.start,`${U(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:u.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:n,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(c.BRACE_L,this.parseInputValueDef,c.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===c.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let t=this.parseConstDirectives(),r=this.optionalMany(c.BRACE_L,this.parseOperationTypeDefinition,c.BRACE_R);if(0===t.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:u.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let t=this.parseName(),r=this.parseConstDirectives();if(0===r.length)throw this.unexpected();return this.node(e,{kind:u.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===r.length&&0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:u.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:i})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===r.length&&0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:u.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:i})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let t=this.parseName(),r=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:u.UNION_TYPE_EXTENSION,name:t,directives:r,types:n})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let t=this.parseName(),r=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:u.ENUM_TYPE_EXTENSION,name:t,directives:r,values:n})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let t=this.parseName(),r=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:u.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:n})}parseDirectiveDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(c.AT);let r=this.parseName(),n=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let o=this.parseDirectiveLocations();return this.node(e,{kind:u.DIRECTIVE_DEFINITION,description:t,name:r,arguments:n,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(c.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(s,t.value))return t;throw this.unexpected(e)}parseSchemaCoordinate(){let e,t,r=this._lexer.token,n=this.expectOptionalToken(c.AT),i=this.parseName();return!n&&this.expectOptionalToken(c.DOT)&&(e=this.parseName()),(n||e)&&this.expectOptionalToken(c.PAREN_L)&&(t=this.parseName(),this.expectToken(c.COLON),this.expectToken(c.PAREN_R)),n?t?this.node(r,{kind:u.DIRECTIVE_ARGUMENT_COORDINATE,name:i,argumentName:t}):this.node(r,{kind:u.DIRECTIVE_COORDINATE,name:i}):e?t?this.node(r,{kind:u.ARGUMENT_COORDINATE,name:i,fieldName:e,argumentName:t}):this.node(r,{kind:u.MEMBER_COORDINATE,name:i,memberName:e}):this.node(r,{kind:u.TYPE_COORDINATE,name:i})}node(e,t){return!0!==this._options.noLocation&&(t.loc=new _(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){let t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw b(this._lexer.source,t.start,`Expected ${B(e)}, found ${U(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){let t=this._lexer.token;if(t.kind===c.NAME&&t.value===e)this.advanceLexer();else throw b(this._lexer.source,t.start,`Expected "${e}", found ${U(t)}.`)}expectOptionalKeyword(e){let t=this._lexer.token;return t.kind===c.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){let t=e??this._lexer.token;return b(this._lexer.source,t.start,`Unexpected ${U(t)}.`)}any(e,t,r){this.expectToken(e);let n=[];for(;!this.expectOptionalToken(r);)n.push(t.call(this));return n}optionalMany(e,t,r){if(this.expectOptionalToken(e)){let e=[];do e.push(t.call(this));while(!this.expectOptionalToken(r))return e}return[]}many(e,t,r){this.expectToken(e);let n=[];do n.push(t.call(this));while(!this.expectOptionalToken(r))return n}delimitedMany(e,t){this.expectOptionalToken(e);let r=[];do r.push(t.call(this));while(this.expectOptionalToken(e))return r}advanceLexer(){let{maxTokens:e}=this._options,t=this._lexer.advance();if(t.kind!==c.EOF&&(++this._tokenCounter,void 0!==e&&this._tokenCounter>e))throw b(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function U(e){let t=e.value;return B(e.kind)+(null!=t?` "${t}"`:"")}function B(e){return e===c.BANG||e===c.DOLLAR||e===c.AMP||e===c.PAREN_L||e===c.PAREN_R||e===c.DOT||e===c.SPREAD||e===c.COLON||e===c.EQUALS||e===c.AT||e===c.BRACKET_L||e===c.BRACKET_R||e===c.BRACE_L||e===c.PIPE||e===c.BRACE_R?`"${e}"`:e}var z=new Map,K=new Map,$=!1;function W(e){return e.replace(/[\s,]+/g," ").trim()}function G(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var n=e[0];return t.forEach(function(t,r){t&&"Document"===t.kind?n+=t.loc.source.body:n+=t,n+=e[r+1]}),function(e){var t=W(e);if(!z.has(t)){let u,c;var r,n,i,o,a,s=(Object.defineProperty(c=(u=new Q(e,{experimentalFragmentVariables:$,allowLegacyFragmentVariables:$})).parseDocument(),"tokenCount",{enumerable:!1,value:u.tokenCount}),c);if(!s||"Document"!==s.kind)throw Error("Not a valid GraphQL document.");z.set(t,((o=new Set((r=new Set,n=[],s.definitions.forEach(function(e){if("FragmentDefinition"===e.kind){var t,i=e.name.value,o=W((t=e.loc).source.body.substring(t.start,t.end)),a=K.get(i);a&&!a.has(o)||a||K.set(i,a=new Set),a.add(o),r.has(o)||(r.add(o),n.push(e))}else n.push(e)}),i=f(f({},s),{definitions:n})).definitions)).forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(t){var r=e[t];r&&"object"==typeof r&&o.add(r)})}),(a=i.loc)&&(delete a.startToken,delete a.endToken),i))}return z.get(t)}(n)}var H=G;(o=G||(G={})).gql=H,o.resetCaches=function(){z.clear(),K.clear()},o.disableFragmentWarnings=function(){},o.enableExperimentalFragmentVariables=function(){$=!0},o.disableExperimentalFragmentVariables=function(){$=!1},G.default=G,e.s(["K",0,u,"Q",0,O,"_",0,function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},"a",0,j,"b",()=>f,"c",0,function(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},"d",0,h,"e",0,function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})},"f",0,function(e,t){var r,n,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(u){var c=[s,u];if(r)throw TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&c[0]?n.return:c[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,c[1])).done)return i;switch(n=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(6===c[0]&&o.label<i[1]){o.label=i[1],i=c;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(c);break}i[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],n=0}finally{r=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}},"g",0,G,"h",0,function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r},"i",0,function(e){let t=e?.kind;return"string"==typeof t&&T.has(t)},"p",0,function(e,t){let r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=1===n.length,o=n.length>1&&n.slice(1).every(e=>0===e.length||w(e.charCodeAt(0))),a=r.endsWith('\\"""'),s=e.endsWith('"')&&!a,u=e.endsWith("\\"),c=s||u,l=!i||e.length>70||c||o||a,f="",h=i&&w(e.charCodeAt(0));return(l&&!h||o)&&(f+=`
`),f+=r,(l||c)&&(f+=`
`),'"""'+f+'"""'}])},38423,e=>{"use strict";var t=e.i(79040);let r=t.g`
    fragment articleStripFragment on ArticleStrip_Out {
        title
        description
        showDatePublished
        target {
            type
            data {
                ... on TagRef_Out {
                    entity {
                        id
                        name
                        slug
                    }
                }
                ... on SectionRef_Out {
                    entity {
                        id
                        name
                        path
                        slug
                    }
                }
                ... on AuthorRef_Out {
                    entity {
                        id
                        surname
                        givenName
                    }
                }
            }
        }
    }
`;e.s(["articleStripFragment",0,r])},64576,95359,e=>{"use strict";var t=e.i(79040);let r=t.g`
    fragment eventHubComponentFragment  on EventHubComponent_Out {
        eventHub {
            ...eventHubFragment
        }
    }
`;e.s(["eventHubComponentFragment",0,r],64576);let n=t.g`
    fragment eventHubFragment on EventHub_Out {
        id
        title {
            main
            above
            sub
        }
        logo {
            default {
                src
                publication {
                    published
                }
            }
            alternative {
                src
                publication {
                    published
                }
            }
        }
        mainLink {
            ... on EventHubArticleLink_Out {
                dataType
                target
                article:entity {
                    id
                    slug
                    mainSection {
                        path
                    }
                }
            }
            ... on EventHubTextStreamLink_Out {
                dataType
                target
                textStream:entity {
                    id
                    slug
                }
            }
            ... on EventHubSectionLink_Out {
                dataType
                target
                section:entity {
                    id
                    path
                }
            }
            ... on EventHubTagLink_Out {
                dataType
                target
                tag:entity {
                    id
                    slug
                }
            }
            ... on EventHubUrlLink_Out {
                dataType
                target
                url
            }
        }
        links {
            ... on EventHubArticleLink_Out {
                dataType
                title
                target
                article:entity {
                    id
                    slug
                    mainSection {
                        path
                    }
                }
            }
            ... on EventHubTextStreamLink_Out {
                dataType
                title
                target
                textStream:entity {
                    id
                    slug
                }
            }
            ... on EventHubSectionLink_Out {
                dataType
                title
                target
                section:entity {
                    id
                    path
                }
            }
            ... on EventHubTagLink_Out {
                dataType
                title
                target
                tag:entity {
                    id
                    slug
                }
            }
            ... on EventHubUrlLink_Out {
                dataType
                title
                target
                url
            }
        }
    }
`;e.s(["eventHubFragment",0,n],95359)},58543,82004,13511,81221,434,23610,23770,e=>{"use strict";var t=e.i(79040);let r=t.g`
    fragment headingFragment on Heading_Out {
        alignment,
        headingText
    }
`;e.s(["headingFragment",0,r],58543);let n=t.g`
    fragment multilinkFragment on MultiLink_Out {
        content {
            type
            data {
                ...queueLinkFragment
            }
        }
    }
`;e.s(["multilinkFragment",0,n],82004);let i=t.g`
    fragment nestedContentFragment on NestedContentComponent_Out {
            height
            nestedContentComponent {
                id
                title
                publication {
                    published
                }
                content {
                    type
                    data {
                        ...contentFragment
                    }
                }
            }
        }
`;e.s(["nestedContentFragment",0,i],13511);let o=t.g`
    fragment nestedSectionComponentFragment on NestedSectionComponent_Out {
        nestedSection {
            content {
                type
                data {
                    ... queueContentNestedSectionFragment
                }
            }
        }
    }
`;e.s(["nestedSectionComponentFragment",0,o],81221);let a=t.g`
    fragment newsflixFragment on NewsflixComponent_Out {
        pinLive
        newsflixItems {
            ... on NewsflixItemSeries_Out {
                dataType
                seriesTarget: target {
                    ...seriesFragment
                }
              }
              ... on NewsflixItemVideoStrip_Out {
                dataType
                videoStripTarget: target {
                    id
                    title
                    slug
                    publication {
                        published
                    }
                    asSeries
                    squareImage {
                        ...photoFragment
                    }
                }
            }
        }
    }
`;e.s(["newsflixFragment",0,a],434);let s=t.g`
    fragment recommendedWatchFragment on RecommendationsToWatchList_Out {
        title
        videoAmount
        mode
        tags {
            id
            name
        }
        sections {
            id
            name
            publication {
                published
            }
        }
        programmeIds {
            sidp
            placeholderImage {
                ...photoListFragment
            }
        }
        channel
        videos {
            video {
                id
                type,
                title,
                programTitle
                previewImage {
                    ...photoListFragment
                }
                publication {
                    published
                }
                origin {
                    duration
                    indexes {
                        start
                        end
                        indexId
                    }
                    versionId
                }
                live {
                    channelId
                    from
                    to
                }
                authors {
                    givenName
                    surname
                },
                sources {
                    name
                },
                playableNow,
                live {
                    channelId
                    from
                    to
                    idec
                }
            }
        }
    }
`;e.s(["recommendedWatchFragment",0,s],23610);let u=t.g`
    fragment seoFragment on Seo_Out {
        follow
        index
        ogDescription
        ogImage {
            ... photoFragment
        }
        ogTitle
    }
`;e.s(["seoFragment",0,u],23770)},68877,e=>{"use strict";var t=e.i(79040);let r=t.g`
    fragment seriesFragment on SeriesResultItem {
        id
        title
        public
        sidp
        customMetadata {
            slug
            isProductRelated
        }
        image11
        description
        availableGroups {
            id
            presentedOrder
            shown
            title
        }
    }
`;e.s(["seriesFragment",0,r])},18759,97291,e=>{"use strict";var t=e.i(79040);let r=t.g`
    fragment subSectionListFragment on SubSectionList_Out {
        section {
            id
            name
            path
        }
        sectionTitle
        dropdownTitle
        saveAsDefault
    }
`;e.s(["subSectionListFragment",0,r],18759);let n=t.g`
    fragment superOpenerComponentFragment on SuperOpenerComponent_Out {
        superOpener {
            ...superOpenerFragment
        }
    }
`;e.s(["superOpenerComponentFragment",0,n],97291)},25271,e=>{"use strict";var t=e.i(79040);let r=t.g`
    fragment videoFragment on Video_Out {
        id
        slug
        title
        description
        programTitle
        type
        origin {
            versionId
            duration
            indexes {
                type
                title
                description
                indexId
                start
                end
            }
        }
        live {
            idec
            channelId
            indexDraftId
            from
            to
        }
        previewImage {
            ...photoFragment
        }
        sources {
            name
        }
        tags {
            id
            approved
            name
        }
        sections {
            id
            name
            publication {
                published
            }
        }
        publication {
            datePublished
            dateUpdated
            published
            deleted
            expired
        }
        playableNow
        authors {
            givenName
            surname
        }
    }
`;e.s(["videoFragment",0,r])},95217,e=>{"use strict";var t=e.i(79040);let r=t.g`
    fragment videoStripFragment on VideoStrip_Out {
        id
        mode
        tags {
            id
            approved
            name
        }
        title
        videoCount
        publication {
            published
        }
        asSeries
        description
        displayMode
        squareImage {
            ...photoFragment
        }
        button {
                text
                target {
                ... on ArticleVideoStripLink_Out {
                    article {
                        id
                        title {
                            main
                        }
                        previewImage {
                            src
                        }
                        slug
                        mainSection {
                            id
                            name
                            path
                            slug
                        }
                    }
                    dataType
                }
                ... on SectionVideoStripLink_Out {
                    section {
                        id
                        name
                        path
                        slug
                    }
                    dataType
                }
                ... on TagVideoStripLink_Out {
                    tag {
                        id
                        name
                        slug
                    }
                    dataType
                }
                ... on TextStreamVideoStripLink_Out {
                    textStream {
                        id
                        title
                        slug
                    }
                    dataType
                }
                ... on UrlVideoStripLink_Out {
                    url
                    dataType
                }
                }
            }
        backgroundImage {
            ...photoFragment
            publication {
            published
            deleted
            }
        }
        logo {
            ...photoFragment
        }
        theme
        channel
        sections {
            id
            publication {
                published
            }
        }
        series {
            placeholderImage {
                ...photoFragment
            }
            sidp
        }
        slug
        videos {
            ...videoFragment
        }
        asSeries
        squareImage {
            ...photoFragment
        }
    }
`;e.s(["videoStripFragment",0,r])},40351,e=>{"use strict";var t=e.i(79040);let r=t.g`
    fragment videoStripComponentFragment  on VideoStripComponent_Out {
        videoStrip {
            ...videoStripFragment
        }
    }
`;e.s(["videoStripComponentFragment",0,r])},81175,(e,t,r)=>{function n(){}t.exports=n,t.exports.HttpsAgent=n},14836,60899,33879,71596,95585,84936,59852,2716,87552,e=>{"use strict";let t;var r,n,i,o,a,s,u,c,l=e.i(35054),f=e.i(79753),h=e.i(57792),p=e.i(43866),d=((r={}).CANCEL="cancel",r.COMPLETE="complete",r.FAIL="fail",r.START="start",r);class y{data;cancelable;servicePrefix}class m extends f.EventEmitter{isActive;serviceKey;settings;constructor(e){super(),this.settings=e,this.isActive=!1,this.serviceKey=e.servicePrefix?e.servicePrefix+p.v4():p.v4()}fetch(){return this.emitEventType("start"),new Promise((e,t)=>{let r=Error("FETCH_METHOD_IS_NOT_IMPLEMENTED");this.emitEventType("fail",{error:r.message,serviceKey:this.serviceKey}),t(r)})}cancel(){return new Promise((e,t)=>{let r=Error("CANCEL_METHOD_IS_NOT_IMPLEMENTED");this.emitEventType("cancel",{error:r.message,serviceKey:this.serviceKey}),t(r)})}emitEventType(e,t){this.isActive="start"===e,this.emit(e,{...t})}}(0,l._)([h.observable],m.prototype,"isActive",void 0),(0,l._)([h.observable],m.prototype,"serviceKey",void 0),(0,l._)([h.observable],m.prototype,"settings",void 0),e.s(["BaseService",0,m,"BaseServiceModel",0,y,"Events",()=>d],14836);var v=e.i(36893),g=e.i(19675);class b extends m{abortController=new AbortController;fetch(){let{url:e}=this.settings,{action:t}=this.settings;t&&(e+=t);let{method:r,data:n,headers:i}=this.settings,o={},a={method:r,headers:{...i},signal:this.abortController.signal};return"GET"===r&&n?e+=`?${g.ObjectUtils.createURLParamsFromObject(n)}`:"POST"===r&&n||"PUT"===r&&n?a.body=JSON.stringify(n):o={...n},this.emitEventType(d.START),(0,v.default)(e,{...a,...o}).then(e=>e.json()).then(e=>(this.emitEventType(d.COMPLETE),e)).catch(e=>(this.emitEventType(d.FAIL,{error:e}),{error:e}))}cancel(){return new Promise(e=>{this.abortController.abort("request cancelled"),this.emitEventType(d.CANCEL),e({cancelled:!0})})}}e.s(["Service",0,b,"ServiceModel",0,class extends y{method;url;action;headers;static getDefault(){return{method:"GET"}}}],60899);var _=e.i(89280),E="Invariant Violation",O=Object.setPrototypeOf,T=void 0===O?function(e,t){return e.__proto__=t,e}:O,w=function(e){function t(r){void 0===r&&(r=E);var n=e.call(this,"number"==typeof r?E+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=E,T(n,t.prototype),n}return(0,_.__extends)(t,e),t}(Error);function S(e,t){if(!e)throw new w(t)}var k=["debug","log","warn","error","silent"],x=k.indexOf("log");function I(e){return function(){if(k.indexOf(e)>=x)return(console[e]||console.log).apply(console,arguments)}}(n=S||(S={})).debug=I("debug"),n.log=I("log"),n.warn=I("warn"),n.error=I("error");var A="3.13.9";function N(e){try{return e()}catch(e){}}let C=N(function(){return globalThis})||N(function(){return window})||N(function(){return self})||N(function(){return e.g})||N(function(){return N.constructor("return this")()});var D=new Map;function F(e){var t=D.get(e)||1;return D.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function R(e,t){void 0===t&&(t=0);var r=F("stringifyForDisplay");return JSON.stringify(e,function(e,t){return void 0===t?r:t},t).split(JSON.stringify(r)).join("<undefined>")}function L(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if("number"==typeof t){var i=t;(t=V(i))||(t=Q(i,r),r=[])}e.apply(void 0,[t].concat(r))}}var P=Object.assign(function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];e||S(e,V(t,r)||Q(t,r))},{debug:L(S.debug),log:L(S.log),warn:L(S.warn),error:L(S.error)});function M(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new w(V(e,t)||Q(e,t))}var j=Symbol.for("ApolloErrorMessageHandler_"+A);function q(e){if("string"==typeof e)return e;try{return R(e,2).slice(0,1e3)}catch(e){return"<non-serializable>"}}function V(e,t){if(void 0===t&&(t=[]),e)return C[j]&&C[j](e,t.map(q))}function Q(e,t){if(void 0===t&&(t=[]),e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:A,message:e,args:t.map(q)})))}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t,r){return t&&B(e.prototype,t),r&&B(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var K=function(){return"function"==typeof Symbol},$=function(e){return K()&&!!Symbol[e]},W=function(e){return $(e)?Symbol[e]:"@@"+e};K()&&!$("observable")&&(Symbol.observable=Symbol("observable"));var G=W("iterator"),H=W("observable"),Y=W("species");function J(e,t){var r=e[t];if(null!=r){if("function"!=typeof r)throw TypeError(r+" is not a function");return r}}function X(e){var t=e.constructor;return void 0!==t&&null===(t=t[Y])&&(t=void 0),void 0!==t?t:es}function Z(e){Z.log?Z.log(e):setTimeout(function(){throw e})}function ee(e){Promise.resolve().then(function(){try{e()}catch(e){Z(e)}})}function et(e){var t=e._cleanup;if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t();else{var r=J(t,"unsubscribe");r&&r.call(t)}}catch(e){Z(e)}}function er(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function en(e,t,r){e._state="running";var n=e._observer;try{var i=J(n,t);switch(t){case"next":i&&i.call(n,r);break;case"error":if(er(e),i)i.call(n,r);else throw r;break;case"complete":er(e),i&&i.call(n)}}catch(e){Z(e)}"closed"===e._state?et(e):"running"===e._state&&(e._state="ready")}function ei(e,t,r){if("closed"!==e._state){if("buffering"===e._state)return void e._queue.push({type:t,value:r});if("ready"!==e._state){e._state="buffering",e._queue=[{type:t,value:r}],ee(function(){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var r=0;r<t.length&&(en(e,t[r].type,t[r].value),"closed"!==e._state);++r);}});return}en(e,t,r)}}var eo=function(){function e(e,t){this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing";var r=new ea(this);try{this._cleanup=t.call(void 0,r)}catch(e){r.error(e)}"initializing"===this._state&&(this._state="ready")}return e.prototype.unsubscribe=function(){"closed"!==this._state&&(er(this),et(this))},z(e,[{key:"closed",get:function(){return"closed"===this._state}}]),e}(),ea=function(){function e(e){this._subscription=e}var t=e.prototype;return t.next=function(e){ei(this._subscription,"next",e)},t.error=function(e){ei(this._subscription,"error",e)},t.complete=function(){ei(this._subscription,"complete")},z(e,[{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),es=function(){function e(t){if(!(this instanceof e))throw TypeError("Observable cannot be called as a function");if("function"!=typeof t)throw TypeError("Observable initializer must be a function");this._subscriber=t}var t=e.prototype;return t.subscribe=function(e){return("object"!=typeof e||null===e)&&(e={next:e,error:arguments[1],complete:arguments[2]}),new eo(e,this._subscriber)},t.forEach=function(e){var t=this;return new Promise(function(r,n){if("function"!=typeof e)return void n(TypeError(e+" is not a function"));function i(){o.unsubscribe(),r()}var o=t.subscribe({next:function(t){try{e(t,i)}catch(e){n(e),o.unsubscribe()}},error:n,complete:r})})},t.map=function(e){var t=this;if("function"!=typeof e)throw TypeError(e+" is not a function");return new(X(this))(function(r){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})})},t.filter=function(e){var t=this;if("function"!=typeof e)throw TypeError(e+" is not a function");return new(X(this))(function(r){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})})},t.reduce=function(e){var t=this;if("function"!=typeof e)throw TypeError(e+" is not a function");var r=X(this),n=arguments.length>1,i=!1,o=arguments[1],a=o;return new r(function(r){return t.subscribe({next:function(t){var o=!i;if(i=!0,!o||n)try{a=e(a,t)}catch(e){return r.error(e)}else a=t},error:function(e){r.error(e)},complete:function(){if(!i&&!n)return r.error(TypeError("Cannot reduce an empty sequence"));r.next(a),r.complete()}})})},t.concat=function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=X(this);return new i(function(t){var n,o=0;return!function e(a){n=a.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===r.length?(n=void 0,t.complete()):e(i.from(r[o++]))}})}(e),function(){n&&(n.unsubscribe(),n=void 0)}})},t.flatMap=function(e){var t=this;if("function"!=typeof e)throw TypeError(e+" is not a function");var r=X(this);return new r(function(n){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return n.error(e)}var o=r.from(t).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:function(){var e=i.indexOf(o);e>=0&&i.splice(e,1),a()}});i.push(o)},error:function(e){n.error(e)},complete:function(){a()}});function a(){o.closed&&0===i.length&&n.complete()}return function(){i.forEach(function(e){return e.unsubscribe()}),o.unsubscribe()}})},t[H]=function(){return this},e.from=function(t){var r="function"==typeof this?this:e;if(null==t)throw TypeError(t+" is not an object");var n=J(t,H);if(n){var i=n.call(t);if(Object(i)!==i)throw TypeError(i+" is not an object");return i instanceof es&&i.constructor===r?i:new r(function(e){return i.subscribe(e)})}if($("iterator")&&(n=J(t,G)))return new r(function(e){ee(function(){if(!e.closed){for(var r,i=function(e){var t="u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e){if(e){if("string"==typeof e)return U(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,void 0)}}(e))){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n.call(t));!(r=i()).done;){var o=r.value;if(e.next(o),e.closed)return}e.complete()}})});if(Array.isArray(t))return new r(function(e){ee(function(){if(!e.closed){for(var r=0;r<t.length;++r)if(e.next(t[r]),e.closed)return;e.complete()}})});throw TypeError(t+" is not observable")},e.of=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return new("function"==typeof this?this:e)(function(e){ee(function(){if(!e.closed){for(var t=0;t<r.length;++t)if(e.next(r[t]),e.closed)return;e.complete()}})})},z(e,null,[{key:Y,get:function(){return this}}]),e}();function eu(e){return null!==e&&"object"==typeof e}K()&&Object.defineProperty(es,Symbol("extensions"),{value:{symbol:H,hostReportError:Z},configurable:!0});var ec=e.i(17405),el=e.i(28262),ef=e.i(42341),eh=e.i(6699);let ep=Object.freeze({});function ed(e,t,r=ef.QueryDocumentKeys){let n,i,o,a=new Map;for(let e of Object.values(eh.Kind))a.set(e,function(e,t){let r=e[t];return"object"==typeof r?r:"function"==typeof r?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}(t,e));let s=Array.isArray(e),u=[e],c=-1,l=[],f=e,h=[],p=[];do{var d,y,m;let e,v=++c===u.length,g=v&&0!==l.length;if(v){if(i=0===p.length?void 0:h[h.length-1],f=o,o=p.pop(),g)if(s){f=f.slice();let e=0;for(let[t,r]of l){let n=t-e;null===r?(f.splice(n,1),e++):f[n]=r}}else for(let[e,t]of(f={...f},l))f[e]=t;c=n.index,u=n.keys,l=n.edits,s=n.inArray,n=n.prev}else if(o){if(null==(f=o[i=s?c:u[c]]))continue;h.push(i)}if(!Array.isArray(f)){(0,ef.isNode)(f)||(0,ec.devAssert)(!1,`Invalid AST Node: ${(0,el.inspect)(f)}.`);let r=v?null==(d=a.get(f.kind))?void 0:d.leave:null==(y=a.get(f.kind))?void 0:y.enter;if((e=null==r?void 0:r.call(t,f,i,o,h,p))===ep)break;if(!1===e){if(!v){h.pop();continue}}else if(void 0!==e&&(l.push([i,e]),!v))if((0,ef.isNode)(e))f=e;else{h.pop();continue}}void 0===e&&g&&l.push([i,f]),v?h.pop():(n={inArray:s,index:c,keys:u,edits:l,prev:n},u=(s=Array.isArray(f))?f:null!=(m=r[f.kind])?m:[],c=-1,l=[],o&&p.push(o),o=f)}while(void 0!==n)return 0!==l.length?l[l.length-1][1]:e}function ey(e,t){var r=t,n=[];return e.definitions.forEach(function(e){if("OperationDefinition"===e.kind)throw M(85,e.operation,e.name?" named '".concat(e.name.value,"'"):"");"FragmentDefinition"===e.kind&&n.push(e)}),void 0===r&&(P(1===n.length,86,n.length),r=n[0].name.value),(0,_.__assign)((0,_.__assign)({},e),{definitions:(0,_.__spreadArray)([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],e.definitions,!0)})}function em(e){void 0===e&&(e=[]);var t={};return e.forEach(function(e){t[e.name.value]=e}),t}function ev(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":var r=e.name.value;if("function"==typeof t)return t(r);var n=t&&t[r];return P(n,87,r),n||null;default:return null}}function eg(){}let eb="u">typeof WeakRef?WeakRef:function(e){return{deref:()=>e}},e_="u">typeof WeakMap?WeakMap:Map,eE="u">typeof FinalizationRegistry?FinalizationRegistry:function(){return{register:eg,unregister:eg}};class eO{constructor(e=1/0,t=eg){this.max=e,this.dispose=t,this.map=new e_,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let e=this.unfinalizedNodes.values();for(let t=0;t<10024;t++){let t=e.next().value;if(!t)break;this.unfinalizedNodes.delete(t);let r=t.key;delete t.key,t.keyRef=new eb(r),this.registry.register(r,t,t)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new eE(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){let t=this.getNode(e);return t&&t.value}getNode(e){let t=this.map.get(e);if(t&&t!==this.newest){let{older:e,newer:r}=t;r&&(r.older=e),e&&(e.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t}set(e,t){let r=this.getNode(e);return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(e,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--;let t=e.key||e.keyRef&&e.keyRef.deref();this.dispose(e.value,t),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),t&&this.map.delete(t)}delete(e){let t=this.map.get(e);return!!t&&(this.deleteNode(t),!0)}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}function eT(){}class ew{constructor(e=1/0,t=eT){this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){let t=this.getNode(e);return t&&t.value}get size(){return this.map.size}getNode(e){let t=this.map.get(e);if(t&&t!==this.newest){let{older:e,newer:r}=t;r&&(r.older=e),e&&(e.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t}set(e,t){let r=this.getNode(e);return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){let t=this.map.get(e);return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)}}var eS=new WeakSet;function ek(e){!(e.size<=(e.max||-1))&&(eS.has(e)||(eS.add(e),setTimeout(function(){e.clean(),eS.delete(e)},100)))}var ex=function(e,t){var r=new eO(e,t);return r.set=function(e,t){var r=eO.prototype.set.call(this,e,t);return ek(this),r},r},eI=function(e,t){var r=new ew(e,t);return r.set=function(e,t){var r=ew.prototype.set.call(this,e,t);return ek(this),r},r},eA=Symbol.for("apollo.cacheSize"),eN=(0,_.__assign)({},C[eA]),eC={},eD=!1!==globalThis.__DEV__?function(){var e,t,r,n,i;if(!1===globalThis.__DEV__)throw Error("only supported in development mode");return{limits:Object.fromEntries(Object.entries({parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4}).map(function(e){var t=e[0],r=e[1];return[t,eN[t]||r]})),sizes:(0,_.__assign)({print:null==(e=eC.print)?void 0:e.call(eC),parser:null==(t=eC.parser)?void 0:t.call(eC),canonicalStringify:null==(r=eC.canonicalStringify)?void 0:r.call(eC),links:function e(t){var r;return t?(0,_.__spreadArray)((0,_.__spreadArray)([null==(r=null==t?void 0:t.getMemoryInternals)?void 0:r.call(t)],e(null==t?void 0:t.left),!0),e(null==t?void 0:t.right),!0).filter(eM):[]}(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:ej(this.queryManager.documentTransform)}},null==(i=(n=this.cache).getMemoryInternals)?void 0:i.call(n))}}:void 0,eF=!1!==globalThis.__DEV__?function(){var e=this.config.fragments;return(0,_.__assign)((0,_.__assign)({},eL.apply(this)),{addTypenameDocumentTransform:ej(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:eP(this.storeReader.executeSelectionSet),executeSubSelectedArray:eP(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:eP(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:eP(null==e?void 0:e.findFragmentSpreads),lookup:eP(null==e?void 0:e.lookup),transform:eP(null==e?void 0:e.transform)}})}:void 0,eR=!1!==globalThis.__DEV__?eL:void 0;function eL(){return{cache:{fragmentQueryDocuments:eP(this.getFragmentDoc)}}}function eP(e){return e&&"dirtyKey"in e?e.size:void 0}function eM(e){return null!=e}function ej(e){return(function e(t){return t?(0,_.__spreadArray)((0,_.__spreadArray)([eP(null==t?void 0:t.performWork)],e(null==t?void 0:t.left),!0),e(null==t?void 0:t.right),!0).filter(eM):[]})(e).map(function(e){return{cache:e}})}var eq=Object.assign(function(e){return JSON.stringify(e,eV)},{reset:function(){s=new eI(eN.canonicalStringify||1e3)}});function eV(e,t){if(t&&"object"==typeof t){var r=Object.getPrototypeOf(t);if(r===Object.prototype||null===r){var n=Object.keys(t);if(n.every(eQ))return t;var i=JSON.stringify(n),o=s.get(i);if(!o){n.sort();var a=JSON.stringify(n);o=s.get(a)||n,s.set(i,o),s.set(a,o)}var u=Object.create(r);return o.forEach(function(e){u[e]=t[e]}),u}}return t}function eQ(e,t,r){return 0===t||r[t-1]<=e}function eU(e){return{__ref:String(e)}}function eB(e){return!!(e&&"object"==typeof e&&"string"==typeof e.__ref)}function ez(e,t,r,n){if("IntValue"===r.kind||"FloatValue"===r.kind)e[t.value]=Number(r.value);else if("BooleanValue"===r.kind||"StringValue"===r.kind)e[t.value]=r.value;else if("ObjectValue"===r.kind){var i={};r.fields.map(function(e){return ez(i,e.name,e.value,n)}),e[t.value]=i}else if("Variable"===r.kind){var o=(n||{})[r.name.value];e[t.value]=o}else if("ListValue"===r.kind)e[t.value]=r.values.map(function(e){var r={};return ez(r,t,e,n),r[t.value]});else if("EnumValue"===r.kind)e[t.value]=r.value;else if("NullValue"===r.kind)e[t.value]=null;else throw M(96,t.value,r.kind)}!1!==globalThis.__DEV__&&(eC.canonicalStringify=function(){return s.size}),eq.reset();var eK=["connection","include","skip","client","rest","export","nonreactive"],e$=eq,eW=Object.assign(function(e,t,r){if(t&&r&&r.connection&&r.connection.key)if(!r.connection.filter||!(r.connection.filter.length>0))return r.connection.key;else{var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach(function(e){i[e]=t[e]}),"".concat(r.connection.key,"(").concat(e$(i),")")}var o=e;if(t){var a=e$(t);o+="(".concat(a,")")}return r&&Object.keys(r).forEach(function(e){-1===eK.indexOf(e)&&(r[e]&&Object.keys(r[e]).length?o+="@".concat(e,"(").concat(e$(r[e]),")"):o+="@".concat(e))}),o},{setStringify:function(e){var t=e$;return e$=e,t}});function eG(e,t){if(e.arguments&&e.arguments.length){var r={};return e.arguments.forEach(function(e){return ez(r,e.name,e.value,t)}),r}return null}function eH(e){return e.alias?e.alias.value:e.name.value}function eY(e,t,r){for(var n,i=0,o=t.selections;i<o.length;i++){var a=o[i];if(eJ(a)){if("__typename"===a.name.value)return e[eH(a)]}else n?n.push(a):n=[a]}if("string"==typeof e.__typename)return e.__typename;if(n)for(var s=0,u=n;s<u.length;s++){var a=u[s],c=eY(e,ev(a,r).selectionSet,r);if("string"==typeof c)return c}}function eJ(e){return"Field"===e.kind}function eX(e){P(e&&"Document"===e.kind,88);var t=e.definitions.filter(function(e){return"FragmentDefinition"!==e.kind}).map(function(e){if("OperationDefinition"!==e.kind)throw M(89,e.kind);return e});return P(t.length<=1,90,t.length),e}function eZ(e){return eX(e),e.definitions.filter(function(e){return"OperationDefinition"===e.kind})[0]}function e0(e){return e.definitions.filter(function(e){return"OperationDefinition"===e.kind&&!!e.name}).map(function(e){return e.name.value})[0]||null}function e1(e){return e.definitions.filter(function(e){return"FragmentDefinition"===e.kind})}function e2(e){var t=eZ(e);return P(t&&"query"===t.operation,91),t}function e5(e){P("Document"===e.kind,92),P(e.definitions.length<=1,93);var t=e.definitions[0];return P("FragmentDefinition"===t.kind,94),t}function e8(e){eX(e);for(var t,r=0,n=e.definitions;r<n.length;r++){var i=n[r];if("OperationDefinition"===i.kind){var o=i.operation;if("query"===o||"mutation"===o||"subscription"===o)return i}"FragmentDefinition"!==i.kind||t||(t=i)}if(t)return t;throw M(95)}function e3(e){var t=Object.create(null),r=e&&e.variableDefinitions;return r&&r.length&&r.forEach(function(e){e.defaultValue&&ez(t,e.variable.name,e.defaultValue)}),t}function e6(e,t){return t?t(e):es.of()}function e4(e){return"function"==typeof e?new e7(e):e}function e9(e){return e.request.length<=1}var e7=function(){function e(e){e&&(this.request=e)}return e.empty=function(){return new e(function(){return es.of()})},e.from=function(t){return 0===t.length?e.empty():t.map(e4).reduce(function(e,t){return e.concat(t)})},e.split=function(t,r,n){var i=e4(r),o=e4(n||new e(e6));return Object.assign(new e(e9(i)&&e9(o)?function(e){return t(e)?i.request(e)||es.of():o.request(e)||es.of()}:function(e,r){return t(e)?i.request(e,r)||es.of():o.request(e,r)||es.of()}),{left:i,right:o})},e.execute=function(e,t){var r,n,i,o,a;return e.request((i=t.context,(n={variables:(r=function(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];if(0>t.indexOf(i))throw M(46,i)}return e}(t)).variables||{},extensions:r.extensions||{},operationName:r.operationName,query:r.query}).operationName||(n.operationName="string"!=typeof n.query?e0(n.query)||void 0:""),o=n,a=(0,_.__assign)({},i),Object.defineProperty(o,"setContext",{enumerable:!1,value:function(e){a="function"==typeof e?(0,_.__assign)((0,_.__assign)({},a),e(a)):(0,_.__assign)((0,_.__assign)({},a),e)}}),Object.defineProperty(o,"getContext",{enumerable:!1,value:function(){return(0,_.__assign)({},a)}}),o))||es.of()},e.concat=function(t,r){var n=e4(t);if(e9(n))return!1!==globalThis.__DEV__&&P.warn(38,n),n;var i=e4(r);return Object.assign(new e(e9(i)?function(e){return n.request(e,function(e){return i.request(e)||es.of()})||es.of()}:function(e,t){return n.request(e,function(e){return i.request(e,t)||es.of()})||es.of()}),{left:n,right:i})},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e(e6)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(e,t){throw M(39)},e.prototype.onError=function(e,t){if(t&&t.error)return t.error(e),!1;throw e},e.prototype.setOnError=function(e){return this.onError=e,this},e}(),te=e7.execute;function tt(e,t){var r,n,i=e.directives;return!i||!i.length||(n=[],(r=i)&&r.length&&r.forEach(function(e){if("skip"===(t=e.name.value)||"include"===t){var t,r=e.arguments,i=e.name.value;P(r&&1===r.length,79,i);var o=r[0];P(o.name&&"if"===o.name.value,80,i);var a=o.value;P(a&&("Variable"===a.kind||"BooleanValue"===a.kind),81,i),n.push({directive:e,ifArgument:o})}}),n).every(function(e){var r=e.directive,n=e.ifArgument,i=!1;return"Variable"===n.value.kind?P(void 0!==(i=t&&t[n.value.name.value]),78,r.name.value):i=n.value.value,"skip"===r.name.value?!i:i})}function tr(e,t,r){var n=new Set(e),i=n.size;return ed(t,{Directive:function(e){if(n.delete(e.name.value)&&(!r||!n.size))return ep}}),r?!n.size:n.size<i}var tn=function(e,t){var r;try{r=JSON.stringify(e)}catch(e){var n=M(42,t,e.message);throw n.parseError=e,n}return r},ti=function(e,t){var r=e.getContext().uri;return r||("function"==typeof t?t(e):t||"/graphql")},to="ReactNative"==N(function(){return navigator.product}),ta="function"==typeof WeakMap&&!(to&&!e.g.HermesInternal),ts="function"==typeof WeakSet,tu="function"==typeof Symbol&&"function"==typeof Symbol.for,tc=tu&&Symbol.asyncIterator;function tl(e){var t={next:function(){return e.read()}};return tc&&(t[Symbol.asyncIterator]=function(){return this}),t}N(function(){return window.document.createElement}),N(function(){return navigator.userAgent.indexOf("jsdom")>=0});var tf=function(e,t,r){var n=Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n},th=Symbol();function tp(e){return!!e.extensions&&Array.isArray(e.extensions[th])}function td(e){return e.hasOwnProperty("graphQLErrors")}var ty=function(e){var t=(0,_.__spreadArray)((0,_.__spreadArray)((0,_.__spreadArray)([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(e){return eu(e)&&e.message||"Error message not found."}).join("\n")},tm=function(e){function t(r){var n=r.graphQLErrors,i=r.protocolErrors,o=r.clientErrors,a=r.networkError,s=r.errorMessage,u=r.extraInfo,c=e.call(this,s)||this;return c.name="ApolloError",c.graphQLErrors=n||[],c.protocolErrors=i||[],c.clientErrors=o||[],c.networkError=a||null,c.message=s||ty(c),c.extraInfo=u,c.cause=(0,_.__spreadArray)((0,_.__spreadArray)((0,_.__spreadArray)([a],n||[],!0),i||[],!0),o||[],!0).find(function(e){return!!e})||null,c.__proto__=t.prototype,c}return(0,_.__extends)(t,e),t}(Error);e.s(["ApolloError",0,tm,"PROTOCOL_ERRORS_SYMBOL",0,th,"graphQLResultHasProtocolErrors",0,tp,"isApolloError",0,td],33879);var tv=Array.isArray;function tg(e){return Array.isArray(e)&&e.length>0}var tb=Object.prototype.hasOwnProperty;function t_(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return tE(e)}function tE(e){var t=e[0]||{},r=e.length;if(r>1)for(var n=new tT,i=1;i<r;++i)t=n.merge(t,e[i]);return t}var tO=function(e,t,r){return this.merge(e[r],t[r])},tT=function(){function e(e){void 0===e&&(e=tO),this.reconciler=e,this.isObject=eu,this.pastCopies=new Set}return e.prototype.merge=function(e,t){for(var r=this,n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];return eu(t)&&eu(e)?(Object.keys(t).forEach(function(i){if(tb.call(e,i)){var o=e[i];if(t[i]!==o){var a=r.reconciler.apply(r,(0,_.__spreadArray)([e,t,i],n,!1));a!==o&&((e=r.shallowCopyForMerge(e))[i]=a)}}else(e=r.shallowCopyForMerge(e))[i]=t[i]}),e):t},e.prototype.shallowCopyForMerge=function(e){return eu(e)&&!this.pastCopies.has(e)&&(e=Array.isArray(e)?e.slice(0):(0,_.__assign)({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e)),e},e}();function tw(e){return"incremental"in e}function tS(e,t){var r=e,n=new tT;return tw(t)&&tg(t.incremental)&&t.incremental.forEach(function(e){for(var t=e.data,i=e.path,o=i.length-1;o>=0;--o){var a=i[o],s=isNaN(+a)?{}:[];s[a]=t,t=s}r=n.merge(r,t)}),r}var tk=Object.prototype.hasOwnProperty;function tx(e,t){e.status>=300&&tf(e,function(){try{return JSON.parse(t)}catch(e){return t}}(),"Response not successful: Received status code ".concat(e.status));try{return JSON.parse(t)}catch(r){throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}var tI=function(e){if(!e&&"u"<typeof fetch)throw M(40)},tA=e.i(67757);let tN=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function tC(e){return tD[e.charCodeAt(0)]}let tD=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],tF={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>tR(e.definitions,"\n\n")},OperationDefinition:{leave(e){let t=tj(e.variableDefinitions)?tP("(\n",tR(e.variableDefinitions,"\n"),"\n)"):tP("(",tR(e.variableDefinitions,", "),")"),r=tP("",e.description,"\n")+tR([e.operation,tR([e.name,t]),tR(e.directives," ")]," ");return("query"===r?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n,description:i})=>tP("",i,"\n")+e+": "+t+tP(" = ",r)+tP(" ",tR(n," "))},SelectionSet:{leave:({selections:e})=>tL(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:i}){let o=tP("",e,": ")+t,a=o+tP("(",tR(r,", "),")");return a.length>80&&(a=o+tP("(\n",tM(tR(r,"\n")),"\n)")),tR([a,tR(n," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+tP(" ",tR(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>tR(["...",tP("on ",e),tR(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:i,description:o})=>tP("",o,"\n")+`fragment ${e}${tP("(",tR(r,", "),")")} `+`on ${t} ${tP("",tR(n," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?(0,tA.printBlockString)(e):`"${e.replace(tN,tC)}"`},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+tR(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+tR(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+tP("(",tR(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>tP("",e,"\n")+tR(["schema",tR(t," "),tL(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>tP("",e,"\n")+tR(["scalar",t,tR(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>tP("",e,"\n")+tR(["type",t,tP("implements ",tR(r," & ")),tR(n," "),tL(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:i})=>tP("",e,"\n")+t+(tj(r)?tP("(\n",tM(tR(r,"\n")),"\n)"):tP("(",tR(r,", "),")"))+": "+n+tP(" ",tR(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:i})=>tP("",e,"\n")+tR([t+": "+r,tP("= ",n),tR(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>tP("",e,"\n")+tR(["interface",t,tP("implements ",tR(r," & ")),tR(n," "),tL(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>tP("",e,"\n")+tR(["union",t,tR(r," "),tP("= ",tR(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>tP("",e,"\n")+tR(["enum",t,tR(r," "),tL(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>tP("",e,"\n")+tR([t,tR(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>tP("",e,"\n")+tR(["input",t,tR(r," "),tL(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,directives:n,repeatable:i,locations:o})=>tP("",e,"\n")+"directive @"+t+(tj(r)?tP("(\n",tM(tR(r,"\n")),"\n)"):tP("(",tR(r,", "),")"))+tP(" ",tR(n," "))+(i?" repeatable":"")+" on "+tR(o," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>tR(["extend schema",tR(e," "),tL(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>tR(["extend scalar",e,tR(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>tR(["extend type",e,tP("implements ",tR(t," & ")),tR(r," "),tL(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>tR(["extend interface",e,tP("implements ",tR(t," & ")),tR(r," "),tL(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>tR(["extend union",e,tR(t," "),tP("= ",tR(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>tR(["extend enum",e,tR(t," "),tL(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>tR(["extend input",e,tR(t," "),tL(r)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>tR(["extend directive @"+e,tR(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>tR([e,tP(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:r})=>tR([e,tP(".",t),tP("(",r,":)")])},DirectiveCoordinate:{leave:({name:e})=>tR(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>tR(["@",e,tP("(",t,":)")])}};function tR(e,t=""){var r;return null!=(r=null==e?void 0:e.filter(e=>e).join(t))?r:""}function tL(e){return tP("{\n",tM(tR(e,"\n")),"\n}")}function tP(e,t,r=""){return null!=t&&""!==t?e+t+r:""}function tM(e){return tP("  ",e.replace(/\n/g,"\n  "))}function tj(e){var t;return null!=(t=null==e?void 0:e.some(e=>e.includes("\n")))&&t}var tq=Object.assign(function(e){var t=u.get(e);return t||(t=ed(e,tF),u.set(e,t)),t},{reset:function(){u=new ex(eN.print||2e3)}});tq.reset(),!1!==globalThis.__DEV__&&(eC.print=function(){return u?u.size:0});var tV={http:{includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},tQ=function(e,t){return t(e)};function tU(e){return new es(function(t){t.error(e)})}var tB={kind:eh.Kind.FIELD,name:{kind:eh.Kind.NAME,value:"__typename"}};function tz(e){var t=new Map;return function(r){void 0===r&&(r=e);var n=t.get(r);return n||t.set(r,n={variables:new Set,fragmentSpreads:new Set}),n}}function tK(e,t){eX(t);for(var r,n,i,o=tz(""),a=tz(""),s=function(e){for(var t=0,r=void 0;t<e.length&&(r=e[t]);++t)if(!tv(r)){if(r.kind===eh.Kind.OPERATION_DEFINITION)return o(r.name&&r.name.value);if(r.kind===eh.Kind.FRAGMENT_DEFINITION)return a(r.name.value)}return!1!==globalThis.__DEV__&&P.error(97),null},u=0,c=t.definitions.length-1;c>=0;--c)t.definitions[c].kind===eh.Kind.OPERATION_DEFINITION&&++u;var l=(r=new Map,n=new Map,e.forEach(function(e){e&&(e.name?r.set(e.name,e):e.test&&n.set(e.test,e))}),function(e){var t=r.get(e.name.value);return!t&&n.size&&n.forEach(function(r,n){n(e)&&(t=r)}),t}),f=function(e){return tg(e)&&e.map(l).some(function(e){return e&&e.remove})},h=new Map,p=!1,d={enter:function(e){if(f(e.directives))return p=!0,null}},y=ed(t,{Field:d,InlineFragment:d,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(e,t,r,n,i){var o=s(i);o&&o.variables.add(e.name.value)}},FragmentSpread:{enter:function(e,t,r,n,i){if(f(e.directives))return p=!0,null;var o=s(i);o&&o.fragmentSpreads.add(e.name.value)}},FragmentDefinition:{enter:function(e,t,r,n){h.set(JSON.stringify(n),e)},leave:function(e,t,r,n){return e===h.get(JSON.stringify(n))?e:u>0&&e.selectionSet.selections.every(function(e){return e.kind===eh.Kind.FIELD&&"__typename"===e.name.value})?(a(e.name.value).removed=!0,p=!0,null):void 0}},Directive:{leave:function(e){if(l(e))return p=!0,null}}});if(!p)return t;var m=function(e){return!e.transitiveVars&&(e.transitiveVars=new Set(e.variables),e.removed||e.fragmentSpreads.forEach(function(t){m(a(t)).transitiveVars.forEach(function(t){e.transitiveVars.add(t)})})),e},v=new Set;y.definitions.forEach(function(e){e.kind===eh.Kind.OPERATION_DEFINITION?m(o(e.name&&e.name.value)).fragmentSpreads.forEach(function(e){v.add(e)}):e.kind!==eh.Kind.FRAGMENT_DEFINITION||0!==u||a(e.name.value).removed||v.add(e.name.value)}),v.forEach(function(e){m(a(e)).fragmentSpreads.forEach(function(e){v.add(e)})});var g={enter:function(e){var t;if(t=e.name.value,!v.has(t)||a(t).removed)return null}};return!function e(t,r){return!t||t.selectionSet.selections.every(function(t){return t.kind===eh.Kind.FRAGMENT_SPREAD&&e(r[t.name.value],r)})}(eZ(i=ed(y,{FragmentSpread:g,FragmentDefinition:g,OperationDefinition:{leave:function(e){if(e.variableDefinitions){var t=m(o(e.name&&e.name.value)).transitiveVars;if(t.size<e.variableDefinitions.length)return(0,_.__assign)((0,_.__assign)({},e),{variableDefinitions:e.variableDefinitions.filter(function(e){return t.has(e.variable.name.value)})})}}}}))||e5(i),em(e1(i)))?i:null}var t$=Object.assign(function(e){return ed(e,{SelectionSet:{enter:function(e,t,r){if(!r||r.kind!==eh.Kind.OPERATION_DEFINITION){var n=e.selections;if(!(!n||n.some(function(e){return eJ(e)&&("__typename"===e.name.value||0===e.name.value.lastIndexOf("__",0))}))&&!(eJ(r)&&r.directives&&r.directives.some(function(e){return"export"===e.name.value})))return(0,_.__assign)((0,_.__assign)({},e),{selections:(0,_.__spreadArray)((0,_.__spreadArray)([],n,!0),[tB],!1)})}}}})},{added:function(e){return e===tB}});function tW(e){return eX(e),tK([{test:function(e){return"client"===e.name.value},remove:!0}],e)}var tG=N(function(){return fetch}),tH=function(e){void 0===e&&(e={});var t=e.uri,r=void 0===t?"/graphql":t,n=e.fetch,i=e.print,o=void 0===i?tQ:i,a=e.includeExtensions,s=e.preserveHeaderCase,u=e.useGETForQueries,c=e.includeUnusedVariables,l=void 0!==c&&c,f=(0,_.__rest)(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);!1!==globalThis.__DEV__&&tI(n||tG);var h={http:{includeExtensions:a,preserveHeaderCase:s},options:f.fetchOptions,credentials:f.credentials,headers:f.headers};return new e7(function(e){var t,i,a,s,c,f,p=ti(e,r),d=e.getContext(),y={};if(d.clientAwareness){var m=d.clientAwareness,v=m.name,g=m.version;v&&(y["apollographql-client-name"]=v),g&&(y["apollographql-client-version"]=g)}var b=(0,_.__assign)((0,_.__assign)({},y),d.headers),E={http:d.http,options:d.fetchOptions,credentials:d.credentials,headers:b};if(tr(["client"],e.query)){var O=tW(e.query);if(!O)return tU(Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));e.query=O}var T=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},o={};r.forEach(function(e){i=(0,_.__assign)((0,_.__assign)((0,_.__assign)({},i),e.options),{headers:(0,_.__assign)((0,_.__assign)({},i.headers),e.headers)}),e.credentials&&(i.credentials=e.credentials),o=(0,_.__assign)((0,_.__assign)({},o),e.http)}),i.headers&&(i.headers=function(e,t){if(!t){var r={};return Object.keys(Object(e)).forEach(function(t){r[t.toLowerCase()]=e[t]}),r}var n={};Object.keys(Object(e)).forEach(function(t){n[t.toLowerCase()]={originalName:t,value:e[t]}});var i={};return Object.keys(n).forEach(function(e){i[n[e].originalName]=n[e].value}),i}(i.headers,o.preserveHeaderCase));var a=e.operationName,s=e.extensions,u=e.variables,c=e.query,l={operationName:a,variables:u};return o.includeExtensions&&(l.extensions=s),o.includeQuery&&(l.query=t(c,tq)),{options:i,body:l}}(e,o,tV,h,E),w=T.options,S=T.body;S.variables&&!l&&(t=S.variables,i=e.query,a=(0,_.__assign)({},t),s=new Set(Object.keys(t)),ed(i,{Variable:function(e,t,r){r&&"VariableDefinition"!==r.kind&&s.delete(e.name.value)}}),s.forEach(function(e){delete a[e]}),S.variables=a),!w.signal&&"u">typeof AbortController&&(w.signal=(f=new AbortController).signal);var k="OperationDefinition"===(c=e8(e.query)).kind&&"subscription"===c.operation,x=tr(["defer"],e.query);if(u&&!e.query.definitions.some(function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation})&&(w.method="GET"),x||k){w.headers=w.headers||{};var I="multipart/mixed;";k&&x&&!1!==globalThis.__DEV__&&P.warn(41),k?I+="boundary=graphql;subscriptionSpec=1.0,application/json":x&&(I+="deferSpec=20220824,application/json"),w.headers.accept=I}if("GET"===w.method){var A=function(e,t){var r=[],n=function(e,t){r.push("".concat(e,"=").concat(encodeURIComponent(t)))};if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var i=void 0;try{i=tn(t.variables,"Variables map")}catch(e){return{parseError:e}}n("variables",i)}if(t.extensions){var o=void 0;try{o=tn(t.extensions,"Extensions map")}catch(e){return{parseError:e}}n("extensions",o)}var a="",s=e,u=e.indexOf("#");-1!==u&&(a=e.substr(u),s=e.substr(0,u));var c=-1===s.indexOf("?")?"?":"&";return{newURI:s+c+r.join("&")+a}}(p,S),C=A.newURI,D=A.parseError;if(D)return tU(D);p=C}else try{w.body=tn(S,"Payload")}catch(e){return tU(e)}return new es(function(t){var r=n||N(function(){return fetch})||tG,i=t.next.bind(t);return r(p,w).then(function(t){e.setContext({response:t});var r,n=null==(r=t.headers)?void 0:r.get("content-type");return null!==n&&/^multipart\/mixed/i.test(n)?function(e,t){return(0,_.__awaiter)(this,void 0,void 0,function(){var r,n,i,o,a,s,u,c,l,f,h,p,d,y,m,v,g,b,E,O,T,w,S;return(0,_.__generator)(this,function(k){switch(k.label){case 0:if(void 0===TextDecoder)throw Error("TextDecoder must be defined in the environment: please import a polyfill.");r=new TextDecoder("utf-8"),n=null==(S=e.headers)?void 0:S.get("content-type"),i="boundary=",o=(null==n?void 0:n.includes(i))?null==n?void 0:n.substring((null==n?void 0:n.indexOf(i))+i.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",a="\r\n--".concat(o),s="",u=function(e){var t,r,n,i,o,a,s=e;if(e.body&&(s=e.body),t=s,tc&&t[Symbol.asyncIterator])return n=s[Symbol.asyncIterator](),(r={next:function(){return n.next()}})[Symbol.asyncIterator]=function(){return this},r;if(s.getReader)return tl(s.getReader());if(s.stream)return tl(s.stream().getReader());if(s.arrayBuffer)return i=s.arrayBuffer(),o=!1,a={next:function(){return o?Promise.resolve({value:void 0,done:!0}):(o=!0,new Promise(function(e,t){i.then(function(t){e({value:t,done:!1})}).catch(t)}))}},tc&&(a[Symbol.asyncIterator]=function(){return this}),a;if(s.pipe)return function(e){var t=null,r=null,n=!1,i=[],o=[];function a(e){if(!r){if(o.length){var t=o.shift();if(Array.isArray(t)&&t[0])return t[0]({value:e,done:!1})}i.push(e)}}function s(e){r=e,o.slice().forEach(function(t){t[1](e)}),t&&t()}function u(){n=!0,o.slice().forEach(function(e){e[0]({value:void 0,done:!0})}),t&&t()}t=function(){t=null,e.removeListener("data",a),e.removeListener("error",s),e.removeListener("end",u),e.removeListener("finish",u),e.removeListener("close",u)},e.on("data",a),e.on("error",s),e.on("end",u),e.on("finish",u),e.on("close",u);var c={next:function(){return new Promise(function(e,t){return r?t(r):i.length?e({value:i.shift(),done:!1}):n?e({value:void 0,done:!0}):void o.push([e,t])})}};return tc&&(c[Symbol.asyncIterator]=function(){return this}),c}(s);throw Error("Unknown body type for responseIterator. Please pass a streamable response.")}(e),c=!0,k.label=1;case 1:if(!c)return[3,3];return[4,u.next()];case 2:for(f=(l=k.sent()).value,h=l.done,p="string"==typeof f?f:r.decode(f),d=s.length-a.length+1,c=!h,s+=p,y=s.indexOf(a,d);y>-1;){if(m=void 0,m=(T=[s.slice(0,y),s.slice(y+a.length)])[0],s=T[1],v=m.indexOf("\r\n\r\n"),(g=function(e){var t={};return e.split("\n").forEach(function(e){var r=e.indexOf(":");if(r>-1){var n=e.slice(0,r).trim().toLowerCase(),i=e.slice(r+1).trim();t[n]=i}}),t}(m.slice(0,v))["content-type"])&&-1===g.toLowerCase().indexOf("application/json"))throw Error("Unsupported patch content type: application/json is required.");if(b=m.slice(v)){if(Object.keys(E=tx(e,b)).length>1||"data"in E||"incremental"in E||"errors"in E||"payload"in E)if(eu(E)&&"payload"in E){if(O={},"payload"in E){if(1===Object.keys(E).length&&null===E.payload)return[2];O=(0,_.__assign)({},E.payload)}"errors"in E&&(O=(0,_.__assign)((0,_.__assign)({},O),{extensions:(0,_.__assign)((0,_.__assign)({},"extensions"in O?O.extensions:null),((w={})[th]=E.errors,w))})),t(O)}else t(E);else if(1===Object.keys(E).length&&"hasNext"in E&&!E.hasNext)return[2]}y=s.indexOf(a)}return[3,1];case 3:return[2]}})})}(t,i):(function(t){return t.text().then(function(e){return tx(t,e)}).then(function(r){return Array.isArray(r)||tk.call(r,"data")||tk.call(r,"errors")||tf(t,r,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(e){return e.operationName}):e.operationName,"'.")),r})})(t).then(i)}).then(function(){f=void 0,t.complete()}).catch(function(e){f=void 0,e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}),function(){f&&f.abort()}})})},tY=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,tH(t).request)||this;return r.options=t,r}return(0,_.__extends)(t,e),t}(e7);e.s(["HttpLink",0,tY],71596);let{toString:tJ,hasOwnProperty:tX}=Object.prototype,tZ=Function.prototype.toString,t0=new Map;function t1(e,t){try{return function e(t,r){if(t===r)return!0;let n=tJ.call(t);if(n!==tJ.call(r))return!1;switch(n){case"[object Array]":if(t.length!==r.length)break;case"[object Object]":{if(t3(t,r))return!0;let n=t2(t),i=t2(r),o=n.length;if(o!==i.length)return!1;for(let e=0;e<o;++e)if(!tX.call(r,n[e]))return!1;for(let i=0;i<o;++i){let o=n[i];if(!e(t[o],r[o]))return!1}return!0}case"[object Error]":return t.name===r.name&&t.message===r.message;case"[object Number]":if(t!=t)return r!=r;case"[object Boolean]":case"[object Date]":return+t==+r;case"[object RegExp]":case"[object String]":return t==`${r}`;case"[object Map]":case"[object Set]":{if(t.size!==r.size)return!1;if(t3(t,r))return!0;let i=t.entries(),o="[object Map]"===n;for(;;){let t=i.next();if(t.done)break;let[n,a]=t.value;if(!r.has(n)||o&&!e(a,r.get(n)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":t=new Uint8Array(t),r=new Uint8Array(r);case"[object DataView]":{let e=t.byteLength;if(e===r.byteLength)for(;e--&&t[e]===r[e];);return -1===e}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{var i,o;let e,n=tZ.call(t);if(n!==tZ.call(r))return!1;return i=n,o=t8,!((e=i.length-o.length)>=0)||i.indexOf(o,e)!==e}}return!1}(e,t)}finally{t0.clear()}}function t2(e){return Object.keys(e).filter(t5,e)}function t5(e){return void 0!==this[e]}let t8="{ [native code] }";function t3(e,t){let r=t0.get(e);if(r){if(r.has(t))return!0}else t0.set(e,r=new Set);return r.add(t),!1}function t6(e){var t=tg(e.errors)?e.errors.slice(0):[];return tw(e)&&tg(e.incremental)&&e.incremental.forEach(function(e){e.errors&&t.push.apply(t,e.errors)}),t}function t4(e,t,r){return new es(function(n){var i={then:function(e){return new Promise(function(t){return t(e())})}};function o(e,t){return function(r){if(e){var o=function(){return n.closed?0:e(r)};i=i.then(o,o).then(function(e){return n.next(e)},function(e){return n.error(e)})}else n[t](r)}}var a={next:o(t,"next"),error:o(r,"error"),complete:function(){i.then(function(){return n.complete()})}},s=e.subscribe(a);return function(){return s.unsubscribe()}})}function t9(e,t,r){var n=[];e.forEach(function(e){return e[t]&&n.push(e)}),n.forEach(function(e){return e[t](r)})}function t7(e){function t(t){Object.defineProperty(e,t,{value:es})}return tu&&Symbol.species&&t(Symbol.species),t("@@species"),e}function re(e){return e&&"function"==typeof e.then}var rt=function(e){function t(t){var r=e.call(this,function(e){return r.addObserver(e),function(){return r.removeObserver(e)}})||this;return r.observers=new Set,r.promise=new Promise(function(e,t){r.resolve=e,r.reject=t}),r.handlers={next:function(e){null!==r.sub&&(r.latest=["next",e],r.notify("next",e),t9(r.observers,"next",e))},error:function(e){var t=r.sub;null!==t&&(t&&setTimeout(function(){return t.unsubscribe()}),r.sub=null,r.latest=["error",e],r.reject(e),r.notify("error",e),t9(r.observers,"error",e))},complete:function(){var e=r.sub,t=r.sources;if(null!==e){var n=(void 0===t?[]:t).shift();n?re(n)?n.then(function(e){return r.sub=e.subscribe(r.handlers)},r.handlers.error):r.sub=n.subscribe(r.handlers):(e&&setTimeout(function(){return e.unsubscribe()}),r.sub=null,r.latest&&"next"===r.latest[0]?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),t9(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(e){r.reject(e),r.sources=[],r.handlers.error(e)},r.promise.catch(function(e){}),"function"==typeof t&&(t=[new es(t)]),re(t)?t.then(function(e){return r.start(e)},r.handlers.error):r.start(t),r}return(0,_.__extends)(t,e),t.prototype.start=function(e){void 0===this.sub&&(this.sources=Array.from(e),this.handlers.complete())},t.prototype.deliverLastMessage=function(e){if(this.latest){var t=this.latest[0],r=e[t];r&&r.call(e,this.latest[1]),null===this.sub&&"next"===t&&e.complete&&e.complete()}},t.prototype.addObserver=function(e){this.observers.has(e)||(this.deliverLastMessage(e),this.observers.add(e))},t.prototype.removeObserver=function(e){this.observers.delete(e)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(e,t){var r=this.nextResultListeners;r.size&&(this.nextResultListeners=new Set,r.forEach(function(r){return r(e,t)}))},t.prototype.beforeNext=function(e){var t=!1;this.nextResultListeners.add(function(r,n){t||(t=!0,e(r,n))})},t}(es);t7(rt);let rr=()=>Object.create(null),{forEach:rn,slice:ri}=Array.prototype,{hasOwnProperty:ro}=Object.prototype;class ra{constructor(e=!0,t=rr){this.weakness=e,this.makeData=t}lookup(){return this.lookupArray(arguments)}lookupArray(e){let t=this;return rn.call(e,e=>t=t.getChildTrie(e)),ro.call(t,"data")?t.data:t.data=this.makeData(ri.call(e))}peek(){return this.peekArray(arguments)}peekArray(e){let t=this;for(let r=0,n=e.length;t&&r<n;++r){let n=t.mapFor(e[r],!1);t=n&&n.get(e[r])}return t&&t.data}remove(){return this.removeArray(arguments)}removeArray(e){let t;if(e.length){let r=e[0],n=this.mapFor(r,!1),i=n&&n.get(r);i&&(t=i.removeArray(ri.call(e,1)),i.data||i.weak||i.strong&&i.strong.size||n.delete(r))}else t=this.data,delete this.data;return t}getChildTrie(e){let t=this.mapFor(e,!0),r=t.get(e);return r||t.set(e,r=new ra(this.weakness,this.makeData)),r}mapFor(e,t){return this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}(e)?this.weak||(t?this.weak=new WeakMap:void 0):this.strong||(t?this.strong=new Map:void 0)}}let rs=()=>Object.create(null),{forEach:ru,slice:rc}=Array.prototype,{hasOwnProperty:rl}=Object.prototype;class rf{constructor(e=!0,t=rs){this.weakness=e,this.makeData=t}lookup(...e){return this.lookupArray(e)}lookupArray(e){let t=this;return ru.call(e,e=>t=t.getChildTrie(e)),rl.call(t,"data")?t.data:t.data=this.makeData(rc.call(e))}peek(...e){return this.peekArray(e)}peekArray(e){let t=this;for(let r=0,n=e.length;t&&r<n;++r){let n=this.weakness&&rh(e[r])?t.weak:t.strong;t=n&&n.get(e[r])}return t&&t.data}getChildTrie(e){let t=this.weakness&&rh(e)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map),r=t.get(e);return r||t.set(e,r=new rf(this.weakness,this.makeData)),r}}function rh(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}let rp=null,rd={},ry=1;function rm(e){try{return e()}catch(e){}}let rv="@wry/context:Slot",rg=rm(()=>globalThis)||rm(()=>e.g)||Object.create(null),rb=rg[rv]||Array[rv]||function(e){try{Object.defineProperty(rg,rv,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(class{constructor(){this.id=["slot",ry++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=rp;e;e=e.parent)if(this.id in e.slots){let t=e.slots[this.id];if(t===rd)break;return e!==rp&&(rp.slots[this.id]=t),!0}return rp&&(rp.slots[this.id]=rd),!1}getValue(){if(this.hasValue())return rp.slots[this.id]}withValue(e,t,r,n){let i={__proto__:null,[this.id]:e},o=rp;rp={parent:o,slots:i};try{return t.apply(n,r)}finally{rp=o}}static bind(e){let t=rp;return function(){let r=rp;try{return rp=t,e.apply(this,arguments)}finally{rp=r}}}static noContext(e,t,r){if(!rp)return e.apply(r,t);{let n=rp;try{return rp=null,e.apply(r,t)}finally{rp=n}}}}),{bind:r_,noContext:rE}=rb,rO=new rb,{hasOwnProperty:rT}=Object.prototype,rw=Array.from||function(e){let t=[];return e.forEach(e=>t.push(e)),t};function rS(e){let{unsubscribe:t}=e;"function"==typeof t&&(e.unsubscribe=void 0,t())}let rk=[];function rx(e,t){if(!e)throw Error(t||"assertion failure")}function rI(e,t){let r=e.length;return r>0&&r===t.length&&e[r-1]===t[r-1]}function rA(e){switch(e.length){case 0:throw Error("unknown value");case 1:return e[0];case 2:throw e[1]}}class rN{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++rN.count}peek(){if(1===this.value.length&&!rF(this))return rC(this),this.value[0]}recompute(e){var t,r,n;return rx(!this.recomputing,"already recomputing"),rC(this),rF(this)?(t=this,r=e,rj(t),rO.withValue(t,rD,[t,r]),function(e,t){if("function"==typeof e.subscribe)try{rS(e),e.unsubscribe=e.subscribe.apply(null,t)}catch(t){return e.setDirty(),!1}return!0}(t,r)&&((n=t).dirty=!1,rF(n)||function(e){rR(e,rP)}(n)),rA(t.value)):rA(this.value)}setDirty(){var e;this.dirty||(this.dirty=!0,e=this,rR(e,rL),rS(this))}dispose(){this.setDirty(),rj(this),rR(this,(e,t)=>{e.setDirty(),rq(e,this)})}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=rk.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(rw(this.deps).forEach(e=>e.delete(this)),this.deps.clear(),rk.push(this.deps),this.deps=null)}}function rC(e){let t=rO.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),rF(e)?rL(t,e):rP(t,e),t}function rD(e,t){let r;e.recomputing=!0;let{normalizeResult:n}=e;n&&1===e.value.length&&(r=e.value.slice(0)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!rI(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch(e){}}catch(t){e.value[1]=t}e.recomputing=!1}function rF(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}rN.count=0;function rR(e,t){let r=e.parents.size;if(r){let n=rw(e.parents);for(let i=0;i<r;++i)t(n[i],e)}}function rL(e,t){rx(e.childValues.has(t)),rx(rF(t));let r=!rF(e);if(e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=rk.pop()||new Set;e.dirtyChildren.add(t),r&&rR(e,rL)}function rP(e,t){rx(e.childValues.has(t)),rx(!rF(t));let r=e.childValues.get(t);0===r.length?e.childValues.set(t,t.value.slice(0)):rI(r,t.value)||e.setDirty(),rM(e,t),rF(e)||rR(e,rP)}function rM(e,t){let r=e.dirtyChildren;r&&(r.delete(t),0===r.size&&(rk.length<100&&rk.push(r),e.dirtyChildren=null))}function rj(e){e.childValues.size>0&&e.childValues.forEach((t,r)=>{rq(e,r)}),e.forgetDeps(),rx(null===e.dirtyChildren)}function rq(e,t){t.parents.delete(e),e.childValues.delete(t),rM(e,t)}let rV={setDirty:!0,dispose:!0,forget:!0};function rQ(e){let t=new Map,r=e&&e.subscribe;function n(e){let n=rO.getValue();if(n){let i=t.get(e);i||t.set(e,i=new Set),n.dependOn(i),"function"==typeof r&&(rS(i),i.unsubscribe=r(e))}}return n.dirty=function(e,r){let n=t.get(e);if(n){let i=r&&rT.call(rV,r)?r:"setDirty";rw(n).forEach(e=>e[i]()),t.delete(e),rS(n)}},n}function rU(...e){return(t||(t=new rf("function"==typeof WeakMap))).lookupArray(e)}let rB=new Set;function rz(e,{max:t=65536,keyArgs:r,makeCacheKey:n=rU,normalizeResult:i,subscribe:o,cache:a=ew}=Object.create(null)){let s="function"==typeof a?new a(t,e=>e.dispose()):a,u=function(){let t=n.apply(null,r?r.apply(null,arguments):arguments);if(void 0===t)return e.apply(null,arguments);let a=s.get(t);a||(s.set(t,a=new rN(e)),a.normalizeResult=i,a.subscribe=o,a.forget=()=>s.delete(t));let u=a.recompute(Array.prototype.slice.call(arguments));return s.set(t,a),rB.add(s),rO.hasValue()||(rB.forEach(e=>e.clean()),rB.clear()),u};function c(e){let t=e&&s.get(e);t&&t.setDirty()}function l(e){let t=e&&s.get(e);if(t)return t.peek()}function f(e){return!!e&&s.delete(e)}return Object.defineProperty(u,"size",{get:()=>s.size,configurable:!1,enumerable:!1}),Object.freeze(u.options={max:t,keyArgs:r,makeCacheKey:n,normalizeResult:i,subscribe:o,cache:s}),u.dirtyKey=c,u.dirty=function(){c(n.apply(null,arguments))},u.peekKey=l,u.peek=function(){return l(n.apply(null,arguments))},u.forgetKey=f,u.forget=function(){return f(n.apply(null,arguments))},u.makeCacheKey=n,u.getKey=r?function(){return n.apply(null,r.apply(null,arguments))}:n,Object.freeze(u)}function rK(e){return e}var r$=function(){function e(e,t){void 0===t&&(t=Object.create(null)),this.resultCache=ts?new WeakSet:new Set,this.transform=e,t.getCacheKey&&(this.getCacheKey=t.getCacheKey),this.cached=!1!==t.cache,this.resetCache()}return e.prototype.getCacheKey=function(e){return[e]},e.identity=function(){return new e(rK,{cache:!1})},e.split=function(t,r,n){return void 0===n&&(n=e.identity()),Object.assign(new e(function(e){return(t(e)?r:n).transformDocument(e)},{cache:!1}),{left:r,right:n})},e.prototype.resetCache=function(){var t=this;if(this.cached){var r=new ra(ta);this.performWork=rz(e.prototype.performWork.bind(this),{makeCacheKey:function(e){var n=t.getCacheKey(e);if(n)return P(Array.isArray(n),77),r.lookupArray(n)},max:eN["documentTransform.cache"],cache:eO})}},e.prototype.performWork=function(e){return eX(e),this.transform(e)},e.prototype.transformDocument=function(e){if(this.resultCache.has(e))return e;var t=this.performWork(e);return this.resultCache.add(t),t},e.prototype.concat=function(t){var r=this;return Object.assign(new e(function(e){return t.transformDocument(r.transformDocument(e))},{cache:!1}),{left:this,right:t})},e}();function rW(e){return!!e&&e<7}(i=c||(c={}))[i.loading=1]="loading",i[i.setVariables=2]="setVariables",i[i.fetchMore=3]="fetchMore",i[i.refetch=4]="refetch",i[i.poll=6]="poll",i[i.ready=7]="ready",i[i.error=8]="error";var rG=Object.prototype.toString;function rH(e,t){switch(rG.call(e)){case"[object Array]":if((t=t||new Map).has(e))return t.get(e);var r=e.slice(0);return t.set(e,r),r.forEach(function(e,n){r[n]=rH(e,t)}),r;case"[object Object]":if((t=t||new Map).has(e))return t.get(e);var n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(function(r){n[r]=rH(e[r],t)}),n;default:return e}}function rY(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object.create(null);return e.forEach(function(e){e&&Object.keys(e).forEach(function(t){var n=e[t];void 0!==n&&(r[t]=n)})}),r}function rJ(e,t,r,n){var i=t.data,o=(0,_.__rest)(t,["data"]),a=r.data;return t1(o,(0,_.__rest)(r,["data"]))&&function e(t,r,n,i){if(r===n)return!0;var o=new Set;return t.selections.every(function(t){if(o.has(t)||(o.add(t),!tt(t,i.variables)||rX(t)))return!0;if(eJ(t)){var a=eH(t),s=r&&r[a],u=n&&n[a],c=t.selectionSet;if(!c)return t1(s,u);var l=Array.isArray(s),f=Array.isArray(u);if(l!==f)return!1;if(l&&f){var h=s.length;if(u.length!==h)return!1;for(var p=0;p<h;++p)if(!e(c,s[p],u[p],i))return!1;return!0}return e(c,s,u,i)}var d=ev(t,i.fragmentMap);if(d)return!!rX(d)||e(d.selectionSet,r,n,i)})}(e8(e).selectionSet,i,a,{fragmentMap:em(e1(e)),variables:n})}function rX(e){return!!e.directives&&e.directives.some(rZ)}function rZ(e){return"nonreactive"===e.name.value}var r0=Object.assign,r1=Object.hasOwnProperty,r2=function(e){function t(r){var n=r.queryManager,i=r.queryInfo,o=r.options,a=this,s=t.inactiveOnCreation.getValue();(a=e.call(this,function(e){a._getOrCreateQuery();try{var t=e._subscription._observer;t&&!t.error&&(t.error=r5)}catch(e){}var r=!a.observers.size;a.observers.add(e);var n=a.last;return n&&n.error?e.error&&e.error(n.error):n&&n.result&&e.next&&e.next(a.maskResult(n.result)),r&&a.reobserve().catch(function(){}),function(){a.observers.delete(e)&&!a.observers.size&&a.tearDownQuery()}})||this).observers=new Set,a.subscriptions=new Set,a.dirty=!1,a._getOrCreateQuery=function(){return s&&(n.queries.set(a.queryId,i),s=!1),a.queryManager.getOrCreateQuery(a.queryId)},a.queryInfo=i,a.queryManager=n,a.waitForOwnResult=r3(o.fetchPolicy),a.isTornDown=!1,a.subscribeToMore=a.subscribeToMore.bind(a),a.maskResult=a.maskResult.bind(a);var u=n.defaultOptions.watchQuery,c=(void 0===u?{}:u).fetchPolicy,l=void 0===c?"cache-first":c,f=o.fetchPolicy,h=void 0===f?l:f,p=o.initialFetchPolicy,d=void 0===p?"standby"===h?l:h:p;a.options=(0,_.__assign)((0,_.__assign)({},o),{initialFetchPolicy:d,fetchPolicy:h}),a.queryId=i.queryId||n.generateQueryId();var y=eZ(a.query);return a.queryName=y&&y.name&&y.name.value,a}return(0,_.__extends)(t,e),Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var e=this;return new Promise(function(t,r){var n={next:function(r){t(r),e.observers.delete(n),e.observers.size||e.queryManager.removeQuery(e.queryId),setTimeout(function(){i.unsubscribe()},0)},error:r},i=e.subscribe(n)})},t.prototype.resetDiff=function(){this.queryInfo.resetDiff()},t.prototype.getCurrentFullResult=function(e){void 0===e&&(e=!0);var t=this.getLastResult(!0),r=this.queryInfo.networkStatus||t&&t.networkStatus||c.ready,n=(0,_.__assign)((0,_.__assign)({},t),{loading:rW(r),networkStatus:r}),i=this.options.fetchPolicy,o=void 0===i?"cache-first":i;if(r3(o)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);else if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var a=this.queryInfo.getDiff();(a.complete||this.options.returnPartialData)&&(n.data=a.result),t1(n.data,{})&&(n.data=void 0),a.complete?(delete n.partial,a.complete&&n.networkStatus===c.loading&&("cache-first"===o||"cache-only"===o)&&(n.networkStatus=c.ready,n.loading=!1)):n.partial=!0,n.networkStatus===c.ready&&(n.error||n.errors)&&(n.networkStatus=c.error),!1===globalThis.__DEV__||a.complete||this.options.partialRefetch||n.loading||n.data||n.error||r8(a.missing)}return e&&this.updateLastResult(n),n},t.prototype.getCurrentResult=function(e){return void 0===e&&(e=!0),this.maskResult(this.getCurrentFullResult(e))},t.prototype.isDifferentFromLastResult=function(e,t){if(!this.last)return!0;var r=this.queryManager.getDocumentInfo(this.query),n=this.queryManager.dataMasking,i=n?r.nonReactiveQuery:this.query;return(n||r.hasNonreactiveDirective?!rJ(i,this.last.result,e,this.variables):!t1(this.last.result,e))||t&&!t1(this.last.variables,t)},t.prototype.getLast=function(e,t){var r=this.last;if(r&&r[e]&&(!t||t1(r.variables,this.variables)))return r[e]},t.prototype.getLastResult=function(e){return this.getLast("result",e)},t.prototype.getLastError=function(e){return this.getLast("error",e)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(e){var t,r={pollInterval:0};if("no-cache"===this.options.fetchPolicy?r.fetchPolicy="no-cache":r.fetchPolicy="network-only",!1!==globalThis.__DEV__&&e&&r1.call(e,"variables")){var n=e2(this.query),i=n.variableDefinitions;i&&i.some(function(e){return"variables"===e.variable.name.value})||!1===globalThis.__DEV__||P.warn(21,e,(null==(t=n.name)?void 0:t.value)||n)}return e&&!t1(this.options.variables,e)&&(r.variables=this.options.variables=(0,_.__assign)((0,_.__assign)({},this.options.variables),e)),this.queryInfo.resetLastWrite(),this.reobserve(r,c.refetch)},t.prototype.fetchMore=function(e){var t=this,r=(0,_.__assign)((0,_.__assign)({},e.query?e:(0,_.__assign)((0,_.__assign)((0,_.__assign)((0,_.__assign)({},this.options),{query:this.options.query}),e),{variables:(0,_.__assign)((0,_.__assign)({},this.options.variables),e.variables)})),{fetchPolicy:"no-cache"});r.query=this.transformDocument(r.query);var n=this.queryManager.generateQueryId();this.lastQuery=e.query?this.transformDocument(this.options.query):r.query;var i=this.queryInfo,o=i.networkStatus;i.networkStatus=c.fetchMore,r.notifyOnNetworkStatusChange&&this.observe();var a=new Set,s=null==e?void 0:e.updateQuery,u="no-cache"!==this.options.fetchPolicy;return u||P(s,22),this.queryManager.fetchQuery(n,r,c.fetchMore).then(function(l){if(t.queryManager.removeQuery(n),i.networkStatus===c.fetchMore&&(i.networkStatus=o),u)t.queryManager.cache.batch({update:function(n){var i=e.updateQuery;i?n.updateQuery({query:t.query,variables:t.variables,returnPartialData:!0,optimistic:!1},function(e){return i(e,{fetchMoreResult:l.data,variables:r.variables})}):n.writeQuery({query:r.query,variables:r.variables,data:l.data})},onWatchUpdated:function(e){a.add(e.query)}});else{var f=t.getLast("result"),h=s(f.data,{fetchMoreResult:l.data,variables:r.variables});t.reportResult((0,_.__assign)((0,_.__assign)({},f),{networkStatus:o,loading:rW(o),data:h}),t.variables)}return t.maskResult(l)}).finally(function(){u&&!a.has(t.query)&&t.reobserveCacheFirst()})},t.prototype.subscribeToMore=function(e){var t=this,r=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:function(r){var n=e.updateQuery;n&&t.updateQuery(function(e,t){return n(e,(0,_.__assign)({subscriptionData:r},t))})},error:function(t){e.onError?e.onError(t):!1!==globalThis.__DEV__&&P.error(23,t)}});return this.subscriptions.add(r),function(){t.subscriptions.delete(r)&&r.unsubscribe()}},t.prototype.setOptions=function(e){return this.reobserve(e)},t.prototype.silentSetOptions=function(e){var t=rY(this.options,e||{});r0(this.options,t)},t.prototype.setVariables=function(e){return t1(this.variables,e)?this.observers.size?this.result():Promise.resolve():(this.options.variables=e,this.observers.size)?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},c.setVariables):Promise.resolve()},t.prototype.updateQuery=function(e){var t=this.queryManager,r=t.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}),n=r.result,i=r.complete,o=e(n,{variables:this.variables,complete:!!i,previousData:n});o&&(t.cache.writeQuery({query:this.options.query,data:o,variables:this.variables}),t.broadcastQueries())},t.prototype.startPolling=function(e){this.options.pollInterval=e,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(e,t){if(t.nextFetchPolicy){var r=t.fetchPolicy,n=void 0===r?"cache-first":r,i=t.initialFetchPolicy,o=void 0===i?n:i;"standby"===n||("function"==typeof t.nextFetchPolicy?t.fetchPolicy=t.nextFetchPolicy(n,{reason:e,options:t,observable:this,initialFetchPolicy:o}):"variables-changed"===e?t.fetchPolicy=o:t.fetchPolicy=t.nextFetchPolicy)}return t.fetchPolicy},t.prototype.fetch=function(e,t,r){var n=this._getOrCreateQuery();return n.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(n,e,t,r)},t.prototype.updatePolling=function(){var e=this;if(!this.queryManager.ssrMode){var t=this.pollingInfo,r=this.options.pollInterval;if(!r||!this.hasObservers()){t&&(clearTimeout(t.timeout),delete this.pollingInfo);return}if(!t||t.interval!==r){P(r,24),(t||(this.pollingInfo={})).interval=r;var n=function(){var t,r;e.pollingInfo&&(rW(e.queryInfo.networkStatus)||(null==(r=(t=e.options).skipPollAttempt)?void 0:r.call(t))?i():e.reobserve({fetchPolicy:"no-cache"===e.options.initialFetchPolicy?"no-cache":"network-only"},c.poll).then(i,i))},i=function(){var t=e.pollingInfo;t&&(clearTimeout(t.timeout),t.timeout=setTimeout(n,t.interval))};i()}}},t.prototype.updateLastResult=function(e,t){void 0===t&&(t=this.variables);var r=this.getLastError();return r&&this.last&&!t1(t,this.last.variables)&&(r=void 0),this.last=(0,_.__assign)({result:this.queryManager.assumeImmutableResults?e:rH(e),variables:t},r?{error:r}:null)},t.prototype.reobserveAsConcast=function(e,t){var r=this;this.isTornDown=!1;var n=t===c.refetch||t===c.fetchMore||t===c.poll,i=this.options.variables,o=this.options.fetchPolicy,a=rY(this.options,e||{}),s=n?a:r0(this.options,a),u=this.transformDocument(s.query);this.lastQuery=u,!n&&(this.updatePolling(),e&&e.variables&&!t1(e.variables,i)&&"standby"!==s.fetchPolicy&&(s.fetchPolicy===o||"function"==typeof s.nextFetchPolicy)&&(this.applyNextFetchPolicy("variables-changed",s),void 0===t&&(t=c.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=r3(s.fetchPolicy));var l=function(){r.concast===p&&(r.waitForOwnResult=!1)},f=s.variables&&(0,_.__assign)({},s.variables),h=this.fetch(s,t,u),p=h.concast,d=h.fromLink,y={next:function(e){t1(r.variables,f)&&(l(),r.reportResult(e,f))},error:function(e){t1(r.variables,f)&&(td(e)||(e=new tm({networkError:e})),l(),r.reportError(e,f))}};return n||!d&&this.concast||(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=p,this.observer=y),p.addObserver(y),p},t.prototype.reobserve=function(e,t){var r;return(r=this.reobserveAsConcast(e,t).promise.then(this.maskResult)).catch(function(){}),r},t.prototype.resubscribeAfterError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this.last;this.resetLastResults();var n=this.subscribe.apply(this,e);return this.last=r,n},t.prototype.observe=function(){this.reportResult(this.getCurrentFullResult(!1),this.variables)},t.prototype.reportResult=function(e,t){var r=this.getLastError(),n=this.isDifferentFromLastResult(e,t);(r||!e.partial||this.options.returnPartialData)&&this.updateLastResult(e,t),(r||n)&&t9(this.observers,"next",this.maskResult(e))},t.prototype.reportError=function(e,t){var r=(0,_.__assign)((0,_.__assign)({},this.getLastResult()),{error:e,errors:e.graphQLErrors,networkStatus:c.error,loading:!1});this.updateLastResult(r,t),t9(this.observers,"error",this.last.error=e)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(e){return e.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(e){return this.queryManager.transform(e)},t.prototype.maskResult=function(e){return e&&"data"in e?(0,_.__assign)((0,_.__assign)({},e),{data:this.queryManager.maskOperation({document:this.query,data:e.data,fetchPolicy:this.options.fetchPolicy,id:this.queryId})}):e},t.prototype.resetNotifications=function(){this.cancelNotifyTimeout(),this.dirty=!1},t.prototype.cancelNotifyTimeout=function(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0)},t.prototype.scheduleNotify=function(){var e=this;!this.dirty&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return e.notify()},0)))},t.prototype.notify=function(){this.cancelNotifyTimeout(),this.dirty&&("cache-only"==this.options.fetchPolicy||"cache-and-network"==this.options.fetchPolicy||!rW(this.queryInfo.networkStatus))&&(this.queryInfo.getDiff().fromOptimisticTransaction?this.observe():this.reobserveCacheFirst()),this.dirty=!1},t.prototype.reobserveCacheFirst=function(){var e=this.options,t=e.fetchPolicy,r=e.nextFetchPolicy;return"cache-and-network"===t||"network-only"===t?this.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(e,n){return(this.nextFetchPolicy=r,"function"==typeof this.nextFetchPolicy)?this.nextFetchPolicy(e,n):t}}):this.reobserve()},t.inactiveOnCreation=new rb,t}(es);function r5(e){!1!==globalThis.__DEV__&&P.error(25,e.message,e.stack)}function r8(e){!1!==globalThis.__DEV__&&e&&!1!==globalThis.__DEV__&&P.debug(26,e)}function r3(e){return"network-only"===e||"no-cache"===e||"standby"===e}t7(r2);var r6=new(ta?WeakMap:Map);function r4(e,t){var r=e[t];"function"==typeof r&&(e[t]=function(){return r6.set(e,(r6.get(e)+1)%1e15),r.apply(this,arguments)})}var r9=function(){function e(e,t){void 0===t&&(t=e.generateQueryId()),this.queryId=t,this.document=null,this.lastRequestId=1,this.stopped=!1,this.observableQuery=null;var r=this.cache=e.cache;r6.has(r)||(r6.set(r,0),r4(r,"evict"),r4(r,"modify"),r4(r,"reset"))}return e.prototype.init=function(e){var t=e.networkStatus||c.loading;return this.variables&&this.networkStatus!==c.loading&&!t1(this.variables,e.variables)&&(t=c.setVariables),t1(e.variables,this.variables)||(this.lastDiff=void 0,this.cancel()),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:t}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},e.prototype.resetDiff=function(){this.lastDiff=void 0},e.prototype.getDiff=function(){var e=this.getDiffOptions();if(this.lastDiff&&t1(e,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var t=this.observableQuery;if(t&&"no-cache"===t.options.fetchPolicy)return{complete:!1};var r=this.cache.diff(e);return this.updateLastDiff(r,e),r},e.prototype.updateLastDiff=function(e,t){this.lastDiff=e?{diff:e,options:t||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(e){var t;return void 0===e&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:null==(t=this.observableQuery)?void 0:t.options.canonizeResults}},e.prototype.setDiff=function(e){var t,r,n=this.lastDiff&&this.lastDiff.diff;!(e&&!e.complete&&(null==(t=this.observableQuery)?void 0:t.getLastError()))&&(this.updateLastDiff(e),t1(n&&n.result,e&&e.result)||null==(r=this.observableQuery)||r.scheduleNotify())},e.prototype.setObservableQuery=function(e){e!==this.observableQuery&&(this.observableQuery=e,e&&(e.queryInfo=this))},e.prototype.stop=function(){var e;if(!this.stopped){this.stopped=!0,null==(e=this.observableQuery)||e.resetNotifications(),this.cancel();var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){var e;null==(e=this.cancelWatch)||e.call(this),this.cancelWatch=void 0},e.prototype.updateWatch=function(e){var t=this;void 0===e&&(e=this.variables);var r=this.observableQuery;if(!r||"no-cache"!==r.options.fetchPolicy){var n=(0,_.__assign)((0,_.__assign)({},this.getDiffOptions(e)),{watcher:this,callback:function(e){return t.setDiff(e)}});this.lastWatch&&t1(n,this.lastWatch)||(this.cancel(),this.cancelWatch=this.cache.watch(this.lastWatch=n))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(e,t){var r=this.lastWrite;return!(r&&r.dmCount===r6.get(this.cache)&&t1(t,r.variables)&&t1(e.data,r.result.data))},e.prototype.markResult=function(e,t,r,n){var i,o=this,a=new tT,s=tg(e.errors)?e.errors.slice(0):[];if(null==(i=this.observableQuery)||i.resetNotifications(),"incremental"in e&&tg(e.incremental)){var u=tS(this.getDiff().result,e);e.data=u}else if("hasNext"in e&&e.hasNext){var c=this.getDiff();e.data=a.merge(c.result,e.data)}this.graphQLErrors=s,"no-cache"===r.fetchPolicy?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(r.variables)):0!==n&&(r7(e,r.errorPolicy)?this.cache.performTransaction(function(i){if(o.shouldWrite(e,r.variables))i.writeQuery({query:t,data:e.data,variables:r.variables,overwrite:1===n}),o.lastWrite={result:e,variables:r.variables,dmCount:r6.get(o.cache)};else if(o.lastDiff&&o.lastDiff.diff.complete){e.data=o.lastDiff.diff.result;return}var a=o.getDiffOptions(r.variables),s=i.diff(a);!o.stopped&&t1(o.variables,r.variables)&&o.updateWatch(r.variables),o.updateLastDiff(s,a),s.complete&&(e.data=s.result)}):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=c.ready},e.prototype.markError=function(e){var t;return this.networkStatus=c.error,this.lastWrite=void 0,null==(t=this.observableQuery)||t.resetNotifications(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},e}();function r7(e,t){void 0===t&&(t="none");var r="ignore"===t||"all"===t,n=!tg(t6(e));return!n&&r&&e.data&&(n=!0),n}var ne=ta?WeakMap:Map,nt=ts?WeakSet:Set,nr=new rb,nn=!1;function ni(){nn||(nn=!0,!1!==globalThis.__DEV__&&P.warn(52))}function no(e){var t;return!1!==globalThis.__DEV__&&(t=new Set([e])).forEach(function(e){eu(e)&&function(e){if(!1!==globalThis.__DEV__&&!Object.isFrozen(e))try{Object.freeze(e)}catch(e){if(e instanceof TypeError)return null;throw e}return e}(e)===e&&Object.getOwnPropertyNames(e).forEach(function(r){eu(e[r])&&t.add(e[r])})}),e}function na(e,t,r){return nr.withValue(!0,function(){var n=function e(t,r,n,i,o){var a,s=n.knownChanged,u=function(e,t){if(t.has(e))return t.get(e);var r=Array.isArray(e)?[]:Object.create(null);return t.set(e,r),r}(t,n.mutableTargets);if(Array.isArray(t)){for(var c=0,l=Array.from(t.entries());c<l.length;c++){var f=l[c],h=f[0],p=f[1];if(null===p){u[h]=null;continue}var d=e(p,r,n,i,!1!==globalThis.__DEV__?"".concat(o||"","[").concat(h,"]"):void 0);s.has(d)&&s.add(u),u[h]=d}return s.has(u)?u:t}for(var y=0,m=r.selections;y<m.length;y++){var v=m[y],g=void 0;if(i&&s.add(u),v.kind===eh.Kind.FIELD){var b=eH(v),_=v.selectionSet;if(void 0===(g=u[b]||t[b]))continue;if(_&&null!==g){var d=e(t[b],_,n,i,!1!==globalThis.__DEV__?"".concat(o||"",".").concat(b):void 0);s.has(d)&&(g=d)}!1===globalThis.__DEV__&&(u[b]=g),!1!==globalThis.__DEV__&&(!i||"__typename"===b||(null==(a=Object.getOwnPropertyDescriptor(u,b))?void 0:a.value)?(delete u[b],u[b]=g):Object.defineProperty(u,b,function(e,t,r,n,i){var o=function(){return nr.getValue()||(!1!==globalThis.__DEV__&&P.warn(48,n?"".concat(i," '").concat(n,"'"):"anonymous ".concat(i),"".concat(r,".").concat(e).replace(/^\./,"")),o=function(){return t}),t};return{get:function(){return o()},set:function(e){o=function(){return e}},enumerable:!0,configurable:!0}}(b,g,o||"",n.operationName,n.operationType)))}if(v.kind===eh.Kind.INLINE_FRAGMENT&&(!v.typeCondition||n.cache.fragmentMatches(v,t.__typename))&&(g=e(t,v.selectionSet,n,i,o)),v.kind===eh.Kind.FRAGMENT_SPREAD){var E=v.name.value,O=n.fragmentMap[E]||(n.fragmentMap[E]=n.cache.lookupFragment(E));P(O,47,E);var T=function(e){var t,r,n=null==(t=e.directives)?void 0:t.find(function(e){return"unmask"===e.name.value});if(!n)return"mask";var i=null==(r=n.arguments)?void 0:r.find(function(e){return"mode"===e.name.value});return(!1!==globalThis.__DEV__&&i&&(i.value.kind===eh.Kind.VARIABLE?!1!==globalThis.__DEV__&&P.warn(82):i.value.kind!==eh.Kind.STRING?!1!==globalThis.__DEV__&&P.warn(83):"migrate"!==i.value.value&&!1!==globalThis.__DEV__&&P.warn(84,i.value.value)),i&&"value"in i.value&&"migrate"===i.value.value)?"migrate":"unmask"}(v);"mask"!==T&&(g=e(t,O.selectionSet,n,"migrate"===T,o))}s.has(g)&&s.add(u)}return"__typename"in t&&!("__typename"in u)&&(u.__typename=t.__typename),Object.keys(u).length!==Object.keys(t).length&&s.add(u),s.has(u)?u:t}(e,t,r,!1);return Object.isFrozen(e)&&no(n),n})}function ns(e,t,r,n){if(!r.fragmentMatches)return!1!==globalThis.__DEV__&&ni(),e;var i=t.definitions.filter(function(e){return e.kind===eh.Kind.FRAGMENT_DEFINITION});void 0===n&&(P(1===i.length,49,i.length),n=i[0].name.value);var o=i.find(function(e){return e.name.value===n});return(P(!!o,50,n),null==e||t1(e,{}))?e:na(e,o.selectionSet,{operationType:"fragment",operationName:o.name.value,fragmentMap:em(e1(t)),cache:r,mutableTargets:new ne,knownChanged:new nt})}var nu=Object.prototype.hasOwnProperty,nc=Object.create(null),nl=function(){function e(e){var t=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new ex(eN["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new ra(!1),this.noCacheWarningsByQueryId=new Set;var r=new r$(function(e){return t.cache.transformDocument(e)},{cache:!1});this.cache=e.cache,this.link=e.link,this.defaultOptions=e.defaultOptions,this.queryDeduplication=e.queryDeduplication,this.clientAwareness=e.clientAwareness,this.localState=e.localState,this.ssrMode=e.ssrMode,this.assumeImmutableResults=e.assumeImmutableResults,this.dataMasking=e.dataMasking;var n=e.documentTransform;this.documentTransform=n?r.concat(n).concat(r):r,this.defaultContext=e.defaultContext||Object.create(null),(this.onBroadcast=e.onBroadcast)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var e=this;this.queries.forEach(function(t,r){e.stopQueryNoBroadcast(r)}),this.cancelPendingFetches(M(27))},e.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach(function(t){return t(e)}),this.fetchCancelFns.clear()},e.prototype.mutate=function(e){return(0,_.__awaiter)(this,arguments,void 0,function(e){var t,r,n,i,o,a,s,u=e.mutation,c=e.variables,l=e.optimisticResponse,f=e.updateQueries,h=e.refetchQueries,p=void 0===h?[]:h,d=e.awaitRefetchQueries,y=void 0!==d&&d,m=e.update,v=e.onQueryUpdated,g=e.fetchPolicy,b=void 0===g?(null==(a=this.defaultOptions.mutate)?void 0:a.fetchPolicy)||"network-only":g,E=e.errorPolicy,O=void 0===E?(null==(s=this.defaultOptions.mutate)?void 0:s.errorPolicy)||"none":E,T=e.keepRootFields,w=e.context;return(0,_.__generator)(this,function(e){switch(e.label){case 0:if(P(u,28),P("network-only"===b||"no-cache"===b,29),t=this.generateMutationId(),u=this.cache.transformForLink(this.transform(u)),r=this.getDocumentInfo(u).hasClientExports,c=this.getVariables(u,c),!r)return[3,2];return[4,this.localState.addExportedVariables(u,c,w)];case 1:c=e.sent(),e.label=2;case 2:return n=this.mutationStore&&(this.mutationStore[t]={mutation:u,variables:c,loading:!0,error:null}),i=l&&this.markMutationOptimistic(l,{mutationId:t,document:u,variables:c,fetchPolicy:b,errorPolicy:O,context:w,updateQueries:f,update:m,keepRootFields:T}),this.broadcastQueries(),o=this,[2,new Promise(function(e,r){return t4(o.getObservableFromLink(u,(0,_.__assign)((0,_.__assign)({},w),{optimisticResponse:i?l:void 0}),c,{},!1),function(e){if(tg(t6(e))&&"none"===O)throw new tm({graphQLErrors:t6(e)});n&&(n.loading=!1,n.error=null);var r=(0,_.__assign)({},e);return"function"==typeof p&&(p=p(r)),"ignore"===O&&tg(t6(r))&&delete r.errors,o.markMutationResult({mutationId:t,result:r,document:u,variables:c,fetchPolicy:b,errorPolicy:O,context:w,update:m,updateQueries:f,awaitRefetchQueries:y,refetchQueries:p,removeOptimistic:i?t:void 0,onQueryUpdated:v,keepRootFields:T})}).subscribe({next:function(r){o.broadcastQueries(),"hasNext"in r&&!1!==r.hasNext||e((0,_.__assign)((0,_.__assign)({},r),{data:o.maskOperation({document:u,data:r.data,fetchPolicy:b,id:t})}))},error:function(e){n&&(n.loading=!1,n.error=e),i&&o.cache.removeOptimistic(t),o.broadcastQueries(),r(e instanceof tm?e:new tm({networkError:e}))}})})]}})})},e.prototype.markMutationResult=function(e,t){var r=this;void 0===t&&(t=this.cache);var n=e.result,i=[],o="no-cache"===e.fetchPolicy;if(!o&&r7(n,e.errorPolicy)){if(tw(n)||i.push({result:n.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}),tw(n)&&tg(n.incremental)){var a=t.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0}),s=void 0;a.result&&(s=tS(a.result,n)),void 0!==s&&(n.data=s,i.push({result:s,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}))}var u=e.updateQueries;u&&this.queries.forEach(function(e,o){var a=e.observableQuery,s=a&&a.queryName;if(s&&nu.call(u,s)){var c=u[s],l=r.queries.get(o),f=l.document,h=l.variables,p=t.diff({query:f,variables:h,returnPartialData:!0,optimistic:!1}),d=p.result;if(p.complete&&d){var y=c(d,{mutationResult:n,queryName:f&&e0(f)||void 0,queryVariables:h});y&&i.push({result:y,dataId:"ROOT_QUERY",query:f,variables:h})}}})}if(i.length>0||(e.refetchQueries||"").length>0||e.update||e.onQueryUpdated||e.removeOptimistic){var c=[];if(this.refetchQueries({updateCache:function(t){o||i.forEach(function(e){return t.write(e)});var a,s=e.update,u=!(tw(a=n)||"hasNext"in a&&"data"in a)||tw(n)&&!n.hasNext;if(s){if(!o){var c=t.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0});c.complete&&("incremental"in(n=(0,_.__assign)((0,_.__assign)({},n),{data:c.result}))&&delete n.incremental,"hasNext"in n&&delete n.hasNext)}u&&s(t,n,{context:e.context,variables:e.variables})}o||e.keepRootFields||!u||t.modify({id:"ROOT_MUTATION",fields:function(e,t){var r=t.fieldName,n=t.DELETE;return"__typename"===r?e:n}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach(function(e){return c.push(e)}),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(c).then(function(){return n})}return Promise.resolve(n)},e.prototype.markMutationOptimistic=function(e,t){var r=this,n="function"==typeof e?e(t.variables,{IGNORE:nc}):e;return n!==nc&&(this.cache.recordOptimisticTransaction(function(e){try{r.markMutationResult((0,_.__assign)((0,_.__assign)({},t),{result:{data:n}}),e)}catch(e){!1!==globalThis.__DEV__&&P.error(e)}},t.mutationId),!0)},e.prototype.fetchQuery=function(e,t,r){return this.fetchConcastWithInfo(this.getOrCreateQuery(e),t,r).concast.promise},e.prototype.getQueryStore=function(){var e=Object.create(null);return this.queries.forEach(function(t,r){e[r]={variables:t.variables,networkStatus:t.networkStatus,networkError:t.networkError,graphQLErrors:t.graphQLErrors}}),e},e.prototype.resetErrors=function(e){var t=this.queries.get(e);t&&(t.networkError=void 0,t.graphQLErrors=[])},e.prototype.transform=function(e){return this.documentTransform.transformDocument(e)},e.prototype.getDocumentInfo=function(e){var t=this.transformCache;if(!t.has(e)){var r={hasClientExports:e&&tr(["client","export"],e,!0),hasForcedResolvers:this.localState.shouldForceResolvers(e),hasNonreactiveDirective:tr(["nonreactive"],e),nonReactiveQuery:(eX(e),ed(e,{FragmentSpread:function(e){var t;if(null==(t=e.directives)||!t.some(function(e){return"unmask"===e.name.value}))return(0,_.__assign)((0,_.__assign)({},e),{directives:(0,_.__spreadArray)((0,_.__spreadArray)([],e.directives||[],!0),[{kind:eh.Kind.DIRECTIVE,name:{kind:eh.Kind.NAME,value:"nonreactive"}}],!1)})}})),clientQuery:this.localState.clientQuery(e),serverQuery:tK([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],e),defaultVars:e3(eZ(e)),asQuery:(0,_.__assign)((0,_.__assign)({},e),{definitions:e.definitions.map(function(e){return"OperationDefinition"===e.kind&&"query"!==e.operation?(0,_.__assign)((0,_.__assign)({},e),{operation:"query"}):e})})};t.set(e,r)}return t.get(e)},e.prototype.getVariables=function(e,t){return(0,_.__assign)((0,_.__assign)({},this.getDocumentInfo(e).defaultVars),t)},e.prototype.watchQuery=function(e){var t=this.transform(e.query);void 0===(e=(0,_.__assign)((0,_.__assign)({},e),{variables:this.getVariables(t,e.variables)})).notifyOnNetworkStatusChange&&(e.notifyOnNetworkStatusChange=!1);var r=new r9(this),n=new r2({queryManager:this,queryInfo:r,options:e});return n.lastQuery=t,r2.inactiveOnCreation.getValue()||this.queries.set(n.queryId,r),r.init({document:t,observableQuery:n,variables:n.variables}),n},e.prototype.query=function(e,t){var r=this;void 0===t&&(t=this.generateQueryId()),P(e.query,30),P("Document"===e.query.kind,31),P(!e.returnPartialData,32),P(!e.pollInterval,33);var n=this.transform(e.query);return this.fetchQuery(t,(0,_.__assign)((0,_.__assign)({},e),{query:n})).then(function(i){return i&&(0,_.__assign)((0,_.__assign)({},i),{data:r.maskOperation({document:n,data:i.data,fetchPolicy:e.fetchPolicy,id:t})})}).finally(function(){return r.stopQuery(t)})},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(e){var t=this.queries.get(e);t&&t.stop()},e.prototype.clearStore=function(e){return void 0===e&&(e={discardWatches:!0}),this.cancelPendingFetches(M(34)),this.queries.forEach(function(e){e.observableQuery?e.networkStatus=c.loading:e.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},e.prototype.getObservableQueries=function(e){var t=this;void 0===e&&(e="active");var r=new Map,n=new Map,i=new Map,o=new Set;return Array.isArray(e)&&e.forEach(function(e){if("string"==typeof e)n.set(e,e),i.set(e,!1);else if(eu(e)&&"Document"===e.kind&&Array.isArray(e.definitions)){var r=tq(t.transform(e));n.set(r,e0(e)),i.set(r,!1)}else eu(e)&&e.query&&o.add(e)}),this.queries.forEach(function(t,n){var o=t.observableQuery,a=t.document;if(o){if("all"===e)return void r.set(n,o);var s=o.queryName;if("standby"===o.options.fetchPolicy||"active"===e&&!o.hasObservers())return;("active"===e||s&&i.has(s)||a&&i.has(tq(a)))&&(r.set(n,o),s&&i.set(s,!0),a&&i.set(tq(a),!0))}}),o.size&&o.forEach(function(e){var n=F("legacyOneTimeQuery"),i=t.getOrCreateQuery(n).init({document:e.query,variables:e.variables}),o=new r2({queryManager:t,queryInfo:i,options:(0,_.__assign)((0,_.__assign)({},e),{fetchPolicy:"network-only"})});P(o.queryId===n),i.setObservableQuery(o),r.set(n,o)}),!1!==globalThis.__DEV__&&i.size&&i.forEach(function(e,t){if(!e){var r=n.get(t);r?!1!==globalThis.__DEV__&&P.warn(35,r):!1!==globalThis.__DEV__&&P.warn(36)}}),r},e.prototype.reFetchObservableQueries=function(e){var t=this;void 0===e&&(e=!1);var r=[];return this.getObservableQueries(e?"all":"active").forEach(function(n,i){var o=n.options.fetchPolicy;n.resetLastResults(),(e||"standby"!==o&&"cache-only"!==o)&&r.push(n.refetch()),(t.queries.get(i)||n.queryInfo).setDiff(null)}),this.broadcastQueries(),Promise.all(r)},e.prototype.startGraphQLSubscription=function(e){var t=this,r=e.query,n=e.variables,i=e.fetchPolicy,o=e.errorPolicy,a=void 0===o?"none":o,s=e.context,u=void 0===s?{}:s,c=e.extensions,l=void 0===c?{}:c;r=this.transform(r),n=this.getVariables(r,n);var f=function(e){return t.getObservableFromLink(r,u,e,l).map(function(n){"no-cache"!==i&&(r7(n,a)&&t.cache.write({query:r,result:n.data,dataId:"ROOT_SUBSCRIPTION",variables:e}),t.broadcastQueries());var o=tg(t6(n)),s=tp(n);if(o||s){var u={};if(o&&(u.graphQLErrors=n.errors),s&&(u.protocolErrors=n.extensions[th]),"none"===a||s)throw new tm(u)}return"ignore"===a&&delete n.errors,n})};if(this.getDocumentInfo(r).hasClientExports){var h=this.localState.addExportedVariables(r,n,u).then(f);return new es(function(e){var t=null;return h.then(function(r){return t=r.subscribe(e)},e.error),function(){return t&&t.unsubscribe()}})}return f(n)},e.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},e.prototype.removeQuery=function(e){var t;this.fetchCancelFns.delete(e),this.queries.has(e)&&(null==(t=this.queries.get(e))||t.stop(),this.queries.delete(e))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(e){var t;return null==(t=e.observableQuery)?void 0:t.notify()})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(e,t,r,n,i){var o,a,s=this;void 0===i&&(i=null!=(o=null==t?void 0:t.queryDeduplication)?o:this.queryDeduplication);var u=this.getDocumentInfo(e),c=u.serverQuery,l=u.clientQuery;if(c){var f=this.inFlightLinkObservables,h=this.link,p={query:c,variables:r,operationName:e0(c)||void 0,context:this.prepareContext((0,_.__assign)((0,_.__assign)({},t),{forceFetch:!i})),extensions:n};if(t=p.context,i){var d=tq(c),y=eq(r),m=f.lookup(d,y);if(!(a=m.observable)){var v=new rt([te(h,p)]);a=m.observable=v,v.beforeNext(function e(t,r){"next"===t&&"hasNext"in r&&r.hasNext?v.beforeNext(e):f.remove(d,y)})}}else a=new rt([te(h,p)])}else a=new rt([es.of({data:{}})]),t=this.prepareContext(t);return l&&(a=t4(a,function(e){return s.localState.runResolvers({document:l,remoteResult:e,context:t,variables:r})})),a},e.prototype.getResultsFromLink=function(e,t,r){var n=e.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(r.query);return t4(this.getObservableFromLink(i,r.context,r.variables),function(o){var a=t6(o),s=a.length>0,u=r.errorPolicy;if(n>=e.lastRequestId){if(s&&"none"===u)throw e.markError(new tm({graphQLErrors:a}));e.markResult(o,i,r,t),e.markReady()}var l={data:o.data,loading:!1,networkStatus:c.ready};return s&&"none"===u&&(l.data=void 0),s&&"ignore"!==u&&(l.errors=a,l.networkStatus=c.error),l},function(t){var r=td(t)?t:new tm({networkError:t});throw n>=e.lastRequestId&&e.markError(r),r})},e.prototype.fetchConcastWithInfo=function(e,t,r,n){var i,o,a=this;void 0===r&&(r=c.loading),void 0===n&&(n=t.query);var s=this.getVariables(n,t.variables),u=this.defaultOptions.watchQuery,l=t.fetchPolicy,f=void 0===l?u&&u.fetchPolicy||"cache-first":l,h=t.errorPolicy,p=void 0===h?u&&u.errorPolicy||"none":h,d=t.returnPartialData,y=t.notifyOnNetworkStatusChange,m=t.context,v=Object.assign({},t,{query:n,variables:s,fetchPolicy:f,errorPolicy:p,returnPartialData:void 0!==d&&d,notifyOnNetworkStatusChange:void 0!==y&&y,context:void 0===m?{}:m}),g=function(n){v.variables=n;var i=a.fetchQueryByPolicy(e,v,r);return"standby"!==v.fetchPolicy&&i.sources.length>0&&e.observableQuery&&e.observableQuery.applyNextFetchPolicy("after-fetch",t),i},b=function(){return a.fetchCancelFns.delete(e.queryId)};if(this.fetchCancelFns.set(e.queryId,function(e){b(),setTimeout(function(){return i.cancel(e)})}),this.getDocumentInfo(v.query).hasClientExports)i=new rt(this.localState.addExportedVariables(v.query,v.variables,v.context).then(g).then(function(e){return e.sources})),o=!0;else{var _=g(v.variables);o=_.fromLink,i=new rt(_.sources)}return i.promise.then(b,b),{concast:i,fromLink:o}},e.prototype.refetchQueries=function(e){var t=this,r=e.updateCache,n=e.include,i=e.optimistic,o=void 0!==i&&i,a=e.removeOptimistic,s=void 0===a?o?F("refetchQueries"):void 0:a,u=e.onQueryUpdated,c=new Map;n&&this.getObservableQueries(n).forEach(function(e,r){c.set(r,{oq:e,lastDiff:(t.queries.get(r)||e.queryInfo).getDiff()})});var l=new Map;return r&&this.cache.batch({update:r,optimistic:o&&s||!1,removeOptimistic:s,onWatchUpdated:function(e,t,r){var n=e.watcher instanceof r9&&e.watcher.observableQuery;if(n){if(u){c.delete(n.queryId);var i=u(n,t,r);return!0===i&&(i=n.refetch()),!1!==i&&l.set(n,i),i}null!==u&&c.set(n.queryId,{oq:n,lastDiff:r,diff:t})}}}),c.size&&c.forEach(function(e,r){var n,i=e.oq,o=e.lastDiff,a=e.diff;u&&(a||(a=t.cache.diff(i.queryInfo.getDiffOptions())),n=u(i,a,o)),u&&!0!==n||(n=i.refetch()),!1!==n&&l.set(i,n),r.indexOf("legacyOneTimeQuery")>=0&&t.stopQueryNoBroadcast(r)}),s&&this.cache.removeOptimistic(s),l},e.prototype.maskOperation=function(e){var t,r,n,i=e.document,o=e.data;if(!1!==globalThis.__DEV__){var a,s=e.fetchPolicy,u=e.id,c=null==(t=eZ(i))?void 0:t.operation,l=(null!=(r=null==c?void 0:c[0])?r:"o")+u;!this.dataMasking||"no-cache"!==s||(a=!0,ed(i,{FragmentSpread:function(e){if(!(a=!!e.directives&&e.directives.some(function(e){return"unmask"===e.name.value})))return ep}}),a)||this.noCacheWarningsByQueryId.has(l)||(this.noCacheWarningsByQueryId.add(l),!1!==globalThis.__DEV__&&P.warn(37,null!=(n=e0(i))?n:"Unnamed ".concat(null!=c?c:"operation")))}return this.dataMasking?function(e,t,r){if(!r.fragmentMatches)return!1!==globalThis.__DEV__&&ni(),e;var n,i=eZ(t);return(P(i,51),null==e)?e:na(e,i.selectionSet,{operationType:i.operation,operationName:null==(n=i.name)?void 0:n.value,fragmentMap:em(e1(t)),cache:r,mutableTargets:new ne,knownChanged:new nt})}(o,i,this.cache):o},e.prototype.maskFragment=function(e){var t=e.data,r=e.fragment,n=e.fragmentName;return this.dataMasking?ns(t,r,this.cache,n):t},e.prototype.fetchQueryByPolicy=function(e,t,r){var n=this,i=t.query,o=t.variables,a=t.fetchPolicy,s=t.refetchWritePolicy,u=t.errorPolicy,l=t.returnPartialData,f=t.context,h=t.notifyOnNetworkStatusChange,p=e.networkStatus;e.init({document:i,variables:o,networkStatus:r});var d=function(){return e.getDiff()},y=function(t,r){void 0===r&&(r=e.networkStatus||c.loading);var a=t.result;!1===globalThis.__DEV__||l||t1(a,{})||r8(t.missing);var s=function(e){return es.of((0,_.__assign)({data:e,loading:rW(r),networkStatus:r},t.complete?null:{partial:!0}))};return a&&n.getDocumentInfo(i).hasForcedResolvers?n.localState.runResolvers({document:i,remoteResult:{data:a},context:f,variables:o,onlyRunForcedResolvers:!0}).then(function(e){return s(e.data||void 0)}):"none"===u&&r===c.refetch&&Array.isArray(t.missing)?s(void 0):s(a)},m="no-cache"===a?0:r===c.refetch&&"merge"!==s?1:2,v=function(){return n.getResultsFromLink(e,m,{query:i,variables:o,context:f,fetchPolicy:a,errorPolicy:u})},g=h&&"number"==typeof p&&p!==r&&rW(r);switch(a){default:case"cache-first":var b=d();if(b.complete)return{fromLink:!1,sources:[y(b,e.markReady())]};if(l||g)return{fromLink:!0,sources:[y(b),v()]};return{fromLink:!0,sources:[v()]};case"cache-and-network":var b=d();if(b.complete||l||g)return{fromLink:!0,sources:[y(b),v()]};return{fromLink:!0,sources:[v()]};case"cache-only":return{fromLink:!1,sources:[y(d(),e.markReady())]};case"network-only":if(g)return{fromLink:!0,sources:[y(d()),v()]};return{fromLink:!0,sources:[v()]};case"no-cache":if(g)return{fromLink:!0,sources:[y(e.getDiff()),v()]};return{fromLink:!0,sources:[v()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getOrCreateQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new r9(this,e)),this.queries.get(e)},e.prototype.prepareContext=function(e){void 0===e&&(e={});var t=this.localState.prepareContext(e);return(0,_.__assign)((0,_.__assign)((0,_.__assign)({},this.defaultContext),t),{clientAwareness:this.clientAwareness})},e}();function nf(e){return e.kind===eh.Kind.FIELD||e.kind===eh.Kind.FRAGMENT_SPREAD||e.kind===eh.Kind.INLINE_FRAGMENT}var nh=new rb,np=new WeakMap;function nd(e){var t=np.get(e);return t||np.set(e,t={vars:new Set,dep:rQ()}),t}function ny(e){nd(e).vars.forEach(function(t){return t.forgetCache(e)})}function nm(e){var t=new Set,r=new Set,n=function(o){if(arguments.length>0){if(e!==o){e=o,t.forEach(function(e){var t;nd(e).dep.dirty(n),(t=e).broadcastWatches&&t.broadcastWatches()});var a=Array.from(r);r.clear(),a.forEach(function(t){return t(e)})}}else{var s=nh.getValue();s&&(i(s),nd(s).dep(n))}return e};n.onNextChange=function(e){return r.add(e),function(){r.delete(e)}};var i=n.attachCache=function(e){return t.add(e),nd(e).vars.add(n),n};return n.forgetCache=function(e){return t.delete(e)},n}var nv=function(){function e(e){var t=e.cache,r=e.client,n=e.resolvers,i=e.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=t,r&&(this.client=r),n&&this.addResolvers(n),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(e){var t=this;this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach(function(e){t.resolvers=t_(t.resolvers,e)}):this.resolvers=t_(this.resolvers,e)},e.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(e){return(0,_.__awaiter)(this,arguments,void 0,function(e){var t=e.document,r=e.remoteResult,n=e.context,i=e.variables,o=e.onlyRunForcedResolvers,a=void 0!==o&&o;return(0,_.__generator)(this,function(e){return t?[2,this.resolveDocument(t,r.data,n,i,this.fragmentMatcher,a).then(function(e){return(0,_.__assign)((0,_.__assign)({},r),{data:e.result})})]:[2,r]})})},e.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(e){return tr(["client"],e)&&this.resolvers?e:null},e.prototype.serverQuery=function(e){return tW(e)},e.prototype.prepareContext=function(e){var t=this.cache;return(0,_.__assign)((0,_.__assign)({},e),{cache:t,getCacheKey:function(e){return t.identify(e)}})},e.prototype.addExportedVariables=function(e){return(0,_.__awaiter)(this,arguments,void 0,function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),(0,_.__generator)(this,function(n){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,t)||{},this.prepareContext(r),t).then(function(e){return(0,_.__assign)((0,_.__assign)({},t),e.exportedVariables)})]:[2,(0,_.__assign)({},t)]})})},e.prototype.shouldForceResolvers=function(e){var t=!1;return ed(e,{Directive:{enter:function(e){if("client"===e.name.value&&e.arguments&&(t=e.arguments.some(function(e){return"always"===e.name.value&&"BooleanValue"===e.value.kind&&!0===e.value.value})))return ep}}}),t},e.prototype.buildRootValueFromCache=function(e,t){return this.cache.diff({query:"query"===e8(e).operation?e:ed(e,{OperationDefinition:{enter:function(e){return(0,_.__assign)((0,_.__assign)({},e),{operation:"query"})}}}),variables:t,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(e,t){return(0,_.__awaiter)(this,arguments,void 0,function(e,t,r,n,i,o){var a,s,u,c,l,f,h,p,d;return void 0===r&&(r={}),void 0===n&&(n={}),void 0===i&&(i=function(){return!0}),void 0===o&&(o=!1),(0,_.__generator)(this,function(y){return a=e8(e),s=em(e1(e)),u=this.collectSelectionsToResolve(a,s),l=(c=a.operation)?c.charAt(0).toUpperCase()+c.slice(1):"Query",f=this,h=f.cache,p=f.client,d={fragmentMap:s,context:(0,_.__assign)((0,_.__assign)({},r),{cache:h,client:p}),variables:n,fragmentMatcher:i,defaultOperationType:l,exportedVariables:{},selectionsToResolve:u,onlyRunForcedResolvers:o},[2,this.resolveSelectionSet(a.selectionSet,!1,t,d).then(function(e){return{result:e,exportedVariables:d.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(e,t,r,n){return(0,_.__awaiter)(this,void 0,void 0,function(){var i,o,a,s,u,c=this;return(0,_.__generator)(this,function(l){return i=n.fragmentMap,o=n.context,a=n.variables,s=[r],u=function(e){return(0,_.__awaiter)(c,void 0,void 0,function(){var u,c;return(0,_.__generator)(this,function(l){return(t||n.selectionsToResolve.has(e))&&tt(e,a)?eJ(e)?[2,this.resolveField(e,t,r,n).then(function(t){var r;void 0!==t&&s.push(((r={})[eH(e)]=t,r))})]:("InlineFragment"===e.kind?u=e:P(u=i[e.name.value],19,e.name.value),u&&u.typeCondition&&(c=u.typeCondition.name.value,n.fragmentMatcher(r,c,o)))?[2,this.resolveSelectionSet(u.selectionSet,t,r,n).then(function(e){s.push(e)})]:[2]:[2]})})},[2,Promise.all(e.selections.map(u)).then(function(){return tE(s)})]})})},e.prototype.resolveField=function(e,t,r,n){return(0,_.__awaiter)(this,void 0,void 0,function(){var i,o,a,s,u,c,l,f,h,p=this;return(0,_.__generator)(this,function(d){return r?(i=n.variables,s=(o=e.name.value)!==(a=eH(e)),c=Promise.resolve(u=r[a]||r[o]),(!n.onlyRunForcedResolvers||this.shouldForceResolvers(e))&&(l=r.__typename||n.defaultOperationType,(f=this.resolvers&&this.resolvers[l])&&(h=f[s?o:a])&&(c=Promise.resolve(nh.withValue(this.cache,h,[r,eG(e,i),n.context,{field:e,fragmentMap:n.fragmentMap}])))),[2,c.then(function(r){if(void 0===r&&(r=u),e.directives&&e.directives.forEach(function(e){"export"===e.name.value&&e.arguments&&e.arguments.forEach(function(e){"as"===e.name.value&&"StringValue"===e.value.kind&&(n.exportedVariables[e.value.value]=r)})}),!e.selectionSet||null==r)return r;var i,o,a=null!=(o=null==(i=e.directives)?void 0:i.some(function(e){return"client"===e.name.value}))&&o;return Array.isArray(r)?p.resolveSubSelectedArray(e,t||a,r,n):e.selectionSet?p.resolveSelectionSet(e.selectionSet,t||a,r,n):void 0})]):[2,null]})})},e.prototype.resolveSubSelectedArray=function(e,t,r,n){var i=this;return Promise.all(r.map(function(r){return null===r?null:Array.isArray(r)?i.resolveSubSelectedArray(e,t,r,n):e.selectionSet?i.resolveSelectionSet(e.selectionSet,t,r,n):void 0}))},e.prototype.collectSelectionsToResolve=function(e,t){var r=function(e){return!Array.isArray(e)},n=this.selectionsToResolveCache;return function e(i){if(!n.has(i)){var o=new Set;n.set(i,o),ed(i,{Directive:function(e,t,n,i,a){"client"===e.name.value&&a.forEach(function(e){r(e)&&nf(e)&&o.add(e)})},FragmentSpread:function(n,i,a,s,u){var c=t[n.name.value];P(c,20,n.name.value);var l=e(c);l.size>0&&(u.forEach(function(e){r(e)&&nf(e)&&o.add(e)}),o.add(n),l.forEach(function(e){o.add(e)}))}})}return n.get(i)}(e)},e}();function ng(e,t){return rY(e,t,t.variables&&{variables:rY((0,_.__assign)((0,_.__assign)({},e&&e.variables),t.variables))})}var nb=!1,n_=function(){function e(e){var t,r=this;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!e.cache)throw M(16);var n=e.uri,i=e.credentials,o=e.headers,a=e.cache,s=e.documentTransform,u=e.ssrMode,c=void 0!==u&&u,l=e.ssrForceFetchDelay,f=void 0===l?0:l,h=e.connectToDevTools,p=e.queryDeduplication,d=void 0===p||p,y=e.defaultOptions,m=e.defaultContext,v=e.assumeImmutableResults,g=void 0===v?a.assumeImmutableResults:v,b=e.resolvers,E=e.typeDefs,O=e.fragmentMatcher,T=e.name,w=e.version,S=e.devtools,k=e.dataMasking,x=e.link;x||(x=n?new tY({uri:n,credentials:i,headers:o}):e7.empty()),this.link=x,this.cache=a,this.disableNetworkFetches=c||f>0,this.queryDeduplication=d,this.defaultOptions=y||Object.create(null),this.typeDefs=E,this.devtoolsConfig=(0,_.__assign)((0,_.__assign)({},S),{enabled:null!=(t=null==S?void 0:S.enabled)?t:h}),void 0===this.devtoolsConfig.enabled&&(this.devtoolsConfig.enabled=!1!==globalThis.__DEV__),f&&setTimeout(function(){return r.disableNetworkFetches=!1},f),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=A,this.localState=new nv({cache:a,client:this,resolvers:b,fragmentMatcher:O}),this.queryManager=new nl({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:m,documentTransform:s,queryDeduplication:d,ssrMode:c,dataMasking:!!k,clientAwareness:{name:T,version:w},localState:this.localState,assumeImmutableResults:g,onBroadcast:this.devtoolsConfig.enabled?function(){r.devToolsHookCb&&r.devToolsHookCb({action:{},state:{queries:r.queryManager.getQueryStore(),mutations:r.queryManager.mutationStore||{}},dataWithOptimisticResults:r.cache.extract(!0)})}:void 0}),this.devtoolsConfig.enabled&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if("u">typeof window){var e=window,t=Symbol.for("apollo.devtools");(e[t]=e[t]||[]).push(this),e.__APOLLO_CLIENT__=this,!nb&&!1!==globalThis.__DEV__&&(nb=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(function(){if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var e=window.navigator,t=e&&e.userAgent,r=void 0;"string"==typeof t&&(t.indexOf("Chrome/")>-1?r="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":t.indexOf("Firefox/")>-1&&(r="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),r&&!1!==globalThis.__DEV__&&P.log("Download the Apollo DevTools for a better development experience: %s",r)}},1e4))}},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=ng(this.defaultOptions.watchQuery,e)),this.disableNetworkFetches&&("network-only"===e.fetchPolicy||"cache-and-network"===e.fetchPolicy)&&(e=(0,_.__assign)((0,_.__assign)({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},e.prototype.query=function(e){return this.defaultOptions.query&&(e=ng(this.defaultOptions.query,e)),P("cache-and-network"!==e.fetchPolicy,17),this.disableNetworkFetches&&"network-only"===e.fetchPolicy&&(e=(0,_.__assign)((0,_.__assign)({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},e.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=ng(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},e.prototype.subscribe=function(e){var t=this,r=this.queryManager.generateQueryId();return this.queryManager.startGraphQLSubscription(e).map(function(n){return(0,_.__assign)((0,_.__assign)({},n),{data:t.queryManager.maskOperation({document:e.query,data:n.data,fetchPolicy:e.fetchPolicy,id:r})})})},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.cache.readQuery(e,t)},e.prototype.watchFragment=function(e){var t;return this.cache.watchFragment((0,_.__assign)((0,_.__assign)({},e),((t={})[Symbol.for("apollo.dataMasking")]=this.queryManager.dataMasking,t)))},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.cache.readFragment(e,t)},e.prototype.writeQuery=function(e){var t=this.cache.writeQuery(e);return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.writeFragment=function(e){var t=this.cache.writeFragment(e);return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},e.prototype.__requestRaw=function(e){return te(this.link,e)},e.prototype.resetStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(e.resetStoreCallbacks.map(function(e){return e()}))}).then(function(){return e.reFetchObservableQueries()})},e.prototype.clearStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(e.clearStoreCallbacks.map(function(e){return e()}))})},e.prototype.onResetStore=function(e){var t=this;return this.resetStoreCallbacks.push(e),function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter(function(t){return t!==e})}},e.prototype.onClearStore=function(e){var t=this;return this.clearStoreCallbacks.push(e),function(){t.clearStoreCallbacks=t.clearStoreCallbacks.filter(function(t){return t!==e})}},e.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},e.prototype.refetchQueries=function(e){var t=this.queryManager.refetchQueries(e),r=[],n=[];t.forEach(function(e,t){r.push(t),n.push(e)});var i=Promise.all(n);return i.queries=r,i.results=n,i.catch(function(e){!1!==globalThis.__DEV__&&P.debug(18,e)}),i},e.prototype.getObservableQueries=function(e){return void 0===e&&(e="active"),this.queryManager.getObservableQueries(e)},e.prototype.extract=function(e){return this.cache.extract(e)},e.prototype.restore=function(e){return this.cache.restore(e)},e.prototype.addResolvers=function(e){this.localState.addResolvers(e)},e.prototype.setResolvers=function(e){this.localState.setResolvers(e)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},e.prototype.setLink=function(e){this.link=this.queryManager.link=e},Object.defineProperty(e.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),e}();!1!==globalThis.__DEV__&&(n_.prototype.getMemoryInternals=eD),e.s(["ApolloClient",0,n_],95585);var nE=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=rz(ey,{max:eN["cache.fragmentQueryDocuments"]||1e3,cache:eO})}return e.prototype.lookupFragment=function(e){return null},e.prototype.batch=function(e){var t,r=this,n="string"==typeof e.optimistic?e.optimistic:!1===e.optimistic?null:void 0;return this.performTransaction(function(){return t=e.update(r)},n),t},e.prototype.recordOptimisticTransaction=function(e,t){this.performTransaction(e,t)},e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.identify=function(e){},e.prototype.gc=function(){return[]},e.prototype.modify=function(e){return!1},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read((0,_.__assign)((0,_.__assign)({},e),{rootId:e.id||"ROOT_QUERY",optimistic:t}))},e.prototype.watchFragment=function(e){var t,r=this,n=e.fragment,i=e.fragmentName,o=e.from,a=e.optimistic,s=(0,_.__rest)(e,["fragment","fragmentName","from","optimistic"]),u=this.getFragmentDoc(n,i),c=void 0===o||"string"==typeof o?o:this.identify(o),l=!!e[Symbol.for("apollo.dataMasking")];if(!1!==globalThis.__DEV__){var f=i||e5(n).name.value;c||!1===globalThis.__DEV__||P.warn(1,f)}var h=(0,_.__assign)((0,_.__assign)({},s),{returnPartialData:!0,id:c,query:u,optimistic:void 0===a||a});return new es(function(o){return r.watch((0,_.__assign)((0,_.__assign)({},h),{immediate:!0,callback:function(a){var s=l?ns(a.result,n,r,i):a.result;if(!(t&&rJ(u,{data:t.result},{data:s},e.variables))){var c={data:s,complete:!!a.complete};a.missing&&(c.missing=tE(a.missing.map(function(e){return e.missing}))),t=(0,_.__assign)((0,_.__assign)({},a),{result:s}),o.next(c)}}}))})},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read((0,_.__assign)((0,_.__assign)({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:t}))},e.prototype.writeQuery=function(e){var t=e.id,r=e.data,n=(0,_.__rest)(e,["id","data"]);return this.write(Object.assign(n,{dataId:t||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(e){var t=e.id,r=e.data,n=e.fragment,i=e.fragmentName,o=(0,_.__rest)(e,["id","data","fragment","fragmentName"]);return this.write(Object.assign(o,{query:this.getFragmentDoc(n,i),dataId:t,result:r}))},e.prototype.updateQuery=function(e,t){return this.batch({update:function(r){var n=r.readQuery(e),i=t(n);return null==i?n:(r.writeQuery((0,_.__assign)((0,_.__assign)({},e),{data:i})),i)}})},e.prototype.updateFragment=function(e,t){return this.batch({update:function(r){var n=r.readFragment(e),i=t(n);return null==i?n:(r.writeFragment((0,_.__assign)((0,_.__assign)({},e),{data:i})),i)}})},e}();!1!==globalThis.__DEV__&&(nE.prototype.getMemoryInternals=eR);var nO=function(e){function t(r,n,i,o){var a,s=e.call(this,r)||this;if(s.message=r,s.path=n,s.query=i,s.variables=o,Array.isArray(s.path)){s.missing=s.message;for(var u=s.path.length-1;u>=0;--u)(a={})[s.path[u]]=s.missing,s.missing=a}else s.missing=s.path;return s.__proto__=t.prototype,s}return(0,_.__extends)(t,e),t}(Error),nT=Object.prototype.hasOwnProperty;function nw(e){return null==e}function nS(e,t){var r=e.__typename,n=e.id,i=e._id;if("string"==typeof r&&(t&&(t.keyObject=nw(n)?nw(i)?void 0:{_id:i}:{id:n}),nw(n)&&!nw(i)&&(n=i),!nw(n)))return"".concat(r,":").concat("number"==typeof n||"string"==typeof n?n:JSON.stringify(n))}var nk={dataIdFromObject:nS,addTypename:!0,resultCaching:!0,canonizeResults:!1};function nx(e){var t=e.canonizeResults;return void 0===t?nk.canonizeResults:t}var nI=/^[_a-z][_0-9a-z]*/i;function nA(e){var t=e.match(nI);return t?t[0]:e}function nN(e){return eu(e)&&!eB(e)&&!tv(e)}function nC(e,t){var r=em(e1(e));return{fragmentMap:r,lookupFragment:function(e){var n=r[e];return!n&&t&&(n=t.lookup(e)),n||null}}}var nD=Object.create(null),nF=function(){return nD},nR=Object.create(null),nL=function(){function e(e,t){var r=this;this.policies=e,this.group=t,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(e,t){return no(eB(e)?r.get(e.__ref,t):e&&e[t])},this.canRead=function(e){return eB(e)?r.has(e.__ref):"object"==typeof e},this.toReference=function(e,t){if("string"==typeof e)return eU(e);if(eB(e))return e;var n=r.policies.identify(e)[0];if(n){var i=eU(n);return t&&r.merge(n,e),i}}}return e.prototype.toObject=function(){return(0,_.__assign)({},this.data)},e.prototype.has=function(e){return void 0!==this.lookup(e,!0)},e.prototype.get=function(e,t){if(this.group.depend(e,t),nT.call(this.data,e)){var r=this.data[e];if(r&&nT.call(r,t))return r[t]}return"__typename"===t&&nT.call(this.policies.rootTypenamesById,e)?this.policies.rootTypenamesById[e]:this instanceof nj?this.parent.get(e,t):void 0},e.prototype.lookup=function(e,t){return(t&&this.group.depend(e,"__exists"),nT.call(this.data,e))?this.data[e]:this instanceof nj?this.parent.lookup(e,t):this.policies.rootTypenamesById[e]?Object.create(null):void 0},e.prototype.merge=function(e,t){var r,n=this;eB(e)&&(e=e.__ref),eB(t)&&(t=t.__ref);var i="string"==typeof e?this.lookup(r=e):e,o="string"==typeof t?this.lookup(r=t):t;if(o){P("string"==typeof r,2);var a=new tT(nV).merge(i,o);if(this.data[r]=a,a!==i&&(delete this.refs[r],this.group.caching)){var s=Object.create(null);i||(s.__exists=1),Object.keys(o).forEach(function(e){if(!i||i[e]!==a[e]){s[e]=1;var t=nA(e);t===e||n.policies.hasKeyArgs(a.__typename,t)||(s[t]=1),void 0!==a[e]||n instanceof nj||delete a[e]}}),s.__typename&&!(i&&i.__typename)&&this.policies.rootTypenamesById[r]===a.__typename&&delete s.__typename,Object.keys(s).forEach(function(e){return n.group.dirty(r,e)})}}},e.prototype.modify=function(e,t){var r=this,n=this.lookup(e);if(n){var i=Object.create(null),o=!1,a=!0,s={DELETE:nD,INVALIDATE:nR,isReference:eB,toReference:this.toReference,canRead:this.canRead,readField:function(t,n){return r.policies.readField("string"==typeof t?{fieldName:t,from:n||eU(e)}:t,{store:r})}};if(Object.keys(n).forEach(function(u){var c=nA(u),l=n[u];if(void 0!==l){var f="function"==typeof t?t:t[u]||t[c];if(f){var h=f===nF?nD:f(no(l),(0,_.__assign)((0,_.__assign)({},s),{fieldName:c,storeFieldName:u,storage:r.getStorage(e,u)}));if(h===nR)r.group.dirty(e,u);else if(h===nD&&(h=void 0),h!==l&&(i[u]=h,o=!0,l=h,!1!==globalThis.__DEV__)){var p=function(e){if(void 0===r.lookup(e.__ref))return!1!==globalThis.__DEV__&&P.warn(3,e),!0};if(eB(h))p(h);else if(Array.isArray(h))for(var d=!1,y=void 0,m=0,v=h;m<v.length;m++){var g=v[m];if(eB(g)){if(d=!0,p(g))break}else"object"==typeof g&&g&&r.policies.identify(g)[0]&&(y=g);if(d&&void 0!==y){!1!==globalThis.__DEV__&&P.warn(4,y);break}}}}void 0!==l&&(a=!1)}}),o)return this.merge(e,i),a&&(this instanceof nj?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},e.prototype.delete=function(e,t,r){var n,i=this.lookup(e);if(i){var o=this.getFieldValue(i,"__typename"),a=t&&r?this.policies.getStoreFieldName({typename:o,fieldName:t,args:r}):t;return this.modify(e,a?((n={})[a]=nF,n):nF)}return!1},e.prototype.evict=function(e,t){var r=!1;return e.id&&(nT.call(this.data,e.id)&&(r=this.delete(e.id,e.fieldName,e.args)),this instanceof nj&&this!==t&&(r=this.parent.evict(e,t)||r),(e.fieldName||r)&&this.group.dirty(e.id,e.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var e=this,t=this.toObject(),r=[];return this.getRootIdSet().forEach(function(t){nT.call(e.policies.rootTypenamesById,t)||r.push(t)}),r.length&&(t.__META={extraRootIds:r.sort()}),t},e.prototype.replace=function(e){var t=this;if(Object.keys(this.data).forEach(function(r){e&&nT.call(e,r)||t.delete(r)}),e){var r=e.__META,n=(0,_.__rest)(e,["__META"]);Object.keys(n).forEach(function(e){t.merge(e,n[e])}),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},e.prototype.release=function(e){if(this.rootIds[e]>0){var t=--this.rootIds[e];return t||delete this.rootIds[e],t}return 0},e.prototype.getRootIdSet=function(e){return void 0===e&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof nj?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},e.prototype.gc=function(){var e=this,t=this.getRootIdSet(),r=this.toObject();t.forEach(function(n){nT.call(r,n)&&(Object.keys(e.findChildRefIds(n)).forEach(t.add,t),delete r[n])});var n=Object.keys(r);if(n.length){for(var i=this;i instanceof nj;)i=i.parent;n.forEach(function(e){return i.delete(e)})}return n},e.prototype.findChildRefIds=function(e){if(!nT.call(this.refs,e)){var t=this.refs[e]=Object.create(null),r=this.data[e];if(!r)return t;var n=new Set([r]);n.forEach(function(e){eB(e)&&(t[e.__ref]=!0),eu(e)&&Object.keys(e).forEach(function(t){var r=e[t];eu(r)&&n.add(r)})})}return this.refs[e]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),nP=function(){function e(e,t){void 0===t&&(t=null),this.caching=e,this.parent=t,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?rQ():null,this.keyMaker=new ra(ta)},e.prototype.depend=function(e,t){if(this.d){this.d(t+"#"+e);var r=nA(t);r!==t&&this.d(r+"#"+e),this.parent&&this.parent.depend(e,t)}},e.prototype.dirty=function(e,t){this.d&&this.d.dirty(t+"#"+e,"__exists"===t?"forget":"setDirty")},e}();function nM(e,t){nQ(e)&&e.group.depend(t,"__exists")}a=function(e){function t(t){var r=t.policies,n=t.resultCaching,i=t.seed,o=e.call(this,r,new nP(void 0===n||n))||this;return o.stump=new nq(o),o.storageTrie=new ra(ta),i&&o.replace(i),o}return(0,_.__extends)(t,e),t.prototype.addLayer=function(e,t){return this.stump.addLayer(e,t)},t.prototype.removeLayer=function(){return this},t.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},t}(o=nL||(nL={})),o.Root=a;var nj=function(e){function t(t,r,n,i){var o=e.call(this,r.policies,i)||this;return o.id=t,o.parent=r,o.replay=n,o.group=i,n(o),o}return(0,_.__extends)(t,e),t.prototype.addLayer=function(e,r){return new t(e,this,r,this.group)},t.prototype.removeLayer=function(e){var t=this,r=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(e){var n=t.data[e],i=r.lookup(e);i?n?n!==i&&Object.keys(n).forEach(function(r){t1(n[r],i[r])||t.group.dirty(e,r)}):(t.group.dirty(e,"__exists"),Object.keys(i).forEach(function(r){t.group.dirty(e,r)})):t.delete(e)}),r):r===this.parent?this:r.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return(0,_.__assign)((0,_.__assign)({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(t){var r=this.parent.findChildRefIds(t);return nT.call(this.data,t)?(0,_.__assign)((0,_.__assign)({},r),e.prototype.findChildRefIds.call(this,t)):r},t.prototype.getStorage=function(){for(var e=this.parent;e.parent;)e=e.parent;return e.getStorage.apply(e,arguments)},t}(nL),nq=function(e){function t(t){return e.call(this,"EntityStore.Stump",t,function(){},new nP(t.group.caching,t.group))||this}return(0,_.__extends)(t,e),t.prototype.removeLayer=function(){return this},t.prototype.merge=function(e,t){return this.parent.merge(e,t)},t}(nj);function nV(e,t,r){var n=e[r],i=t[r];return t1(n,i)?n:i}function nQ(e){return!!(e instanceof nL&&e.group.caching)}var nU=function(){function e(){this.known=new(ts?WeakSet:Set),this.pool=new ra(ta),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(e){return eu(e)&&this.known.has(e)},e.prototype.pass=function(e){if(eu(e)){var t=eu(e)?tv(e)?e.slice(0):(0,_.__assign)({__proto__:Object.getPrototypeOf(e)},e):e;return this.passes.set(t,e),t}return e},e.prototype.admit=function(e){var t=this;if(eu(e)){var r=this.passes.get(e);if(r)return r;switch(Object.getPrototypeOf(e)){case Array.prototype:if(this.known.has(e))break;var n=e.map(this.admit,this),i=this.pool.lookupArray(n);return i.array||(this.known.add(i.array=n),!1!==globalThis.__DEV__&&Object.freeze(n)),i.array;case null:case Object.prototype:if(this.known.has(e))break;var o=Object.getPrototypeOf(e),a=[o],s=this.sortedKeys(e);a.push(s.json);var u=a.length;s.sorted.forEach(function(r){a.push(t.admit(e[r]))});var i=this.pool.lookupArray(a);if(!i.object){var c=i.object=Object.create(o);this.known.add(c),s.sorted.forEach(function(e,t){c[e]=a[u+t]}),!1!==globalThis.__DEV__&&Object.freeze(c)}return i.object}}return e},e.prototype.sortedKeys=function(e){var t=Object.keys(e),r=this.pool.lookupArray(t);if(!r.keys){t.sort();var n=JSON.stringify(t);(r.keys=this.keysByJSON.get(n))||this.keysByJSON.set(n,r.keys={sorted:t,json:n})}return r.keys},e}();function nB(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var nz=function(){function e(e){var t=this;this.knownResults=new(ta?WeakMap:Map),this.config=rY(e,{addTypename:!1!==e.addTypename,canonizeResults:nx(e)}),this.canon=e.canon||new nU,this.executeSelectionSet=rz(function(e){var r,n=e.context.canonizeResults,i=nB(e);i[3]=!n;var o=(r=t.executeSelectionSet).peek.apply(r,i);return o?n?(0,_.__assign)((0,_.__assign)({},o),{result:t.canon.admit(o.result)}):o:(nM(e.context.store,e.enclosingRef.__ref),t.execSelectionSetImpl(e))},{max:this.config.resultCacheMaxSize||eN["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:nB,makeCacheKey:function(e,t,r,n){if(nQ(r.store))return r.store.makeCacheKey(e,eB(t)?t.__ref:t,r.varString,n)}}),this.executeSubSelectedArray=rz(function(e){return nM(e.context.store,e.enclosingRef.__ref),t.execSubSelectedArrayImpl(e)},{max:this.config.resultCacheMaxSize||eN["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(e){var t=e.field,r=e.array,n=e.context;if(nQ(n.store))return n.store.makeCacheKey(t,r,n.varString)}})}return e.prototype.resetCanon=function(){this.canon=new nU},e.prototype.diffQueryAgainstStore=function(e){var t,r=e.store,n=e.query,i=e.rootId,o=e.variables,a=e.returnPartialData,s=e.canonizeResults,u=void 0===s?this.config.canonizeResults:s,c=this.config.cache.policies;o=(0,_.__assign)((0,_.__assign)({},e3(e2(n))),o);var l=eU(void 0===i?"ROOT_QUERY":i),f=this.executeSelectionSet({selectionSet:e8(n).selectionSet,objectOrReference:l,enclosingRef:l,context:(0,_.__assign)({store:r,query:n,policies:c,variables:o,varString:eq(o),canonizeResults:u},nC(n,this.config.fragments))});if(f.missing&&(t=[new nO(function(e){try{JSON.stringify(e,function(e,t){if("string"==typeof t)throw t;return t})}catch(e){return e}}(f.missing),f.missing,n,o)],!(void 0===a||a)))throw t[0];return{result:f.result,complete:!t,missing:t}},e.prototype.isFresh=function(e,t,r,n){if(nQ(n.store)&&this.knownResults.get(e)===r){var i=this.executeSelectionSet.peek(r,t,n,this.canon.isKnown(e));if(i&&e===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(e){var t,r=this,n=e.selectionSet,i=e.objectOrReference,o=e.enclosingRef,a=e.context;if(eB(i)&&!a.policies.rootTypenamesById[i.__ref]&&!a.store.has(i.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(i.__ref," object")};var s=a.variables,u=a.policies,c=a.store.getFieldValue(i,"__typename"),l=[],f=new tT;function h(e,r){var n;return e.missing&&(t=f.merge(t,((n={})[r]=e.missing,n))),e.result}this.config.addTypename&&"string"==typeof c&&!u.rootIdsByTypename[c]&&l.push({__typename:c});var p=new Set(n.selections);p.forEach(function(e){var n,d;if(tt(e,s))if(eJ(e)){var y=u.readField({fieldName:e.name.value,field:e,variables:a.variables,from:i},a),m=eH(e);void 0===y?t$.added(e)||(t=f.merge(t,((n={})[m]="Can't find field '".concat(e.name.value,"' on ").concat(eB(i)?i.__ref+" object":"object "+JSON.stringify(i,null,2)),n))):tv(y)?y.length>0&&(y=h(r.executeSubSelectedArray({field:e,array:y,enclosingRef:o,context:a}),m)):e.selectionSet?null!=y&&(y=h(r.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:y,enclosingRef:eB(y)?y:o,context:a}),m)):a.canonizeResults&&(y=r.canon.pass(y)),void 0!==y&&l.push(((d={})[m]=y,d))}else{var v=ev(e,a.lookupFragment);if(!v&&e.kind===eh.Kind.FRAGMENT_SPREAD)throw M(10,e.name.value);v&&u.fragmentMatches(v,c)&&v.selectionSet.selections.forEach(p.add,p)}});var d={result:tE(l),missing:t},y=a.canonizeResults?this.canon.admit(d):no(d);return y.result&&this.knownResults.set(y.result,n),y},e.prototype.execSubSelectedArrayImpl=function(e){var t,r=this,n=e.field,i=e.array,o=e.enclosingRef,a=e.context,s=new tT;function u(e,r){var n;return e.missing&&(t=s.merge(t,((n={})[r]=e.missing,n))),e.result}return n.selectionSet&&(i=i.filter(a.store.canRead)),i=i.map(function(e,t){return null===e?null:tv(e)?u(r.executeSubSelectedArray({field:n,array:e,enclosingRef:o,context:a}),t):n.selectionSet?u(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:e,enclosingRef:eB(e)?e:o,context:a}),t):(!1!==globalThis.__DEV__&&function(e,t,r){if(!t.selectionSet){var n=new Set([r]);n.forEach(function(r){eu(r)&&(P(!eB(r),11,eB(r)?e.get(r.__ref,"__typename"):r&&r.__typename,t.name.value),Object.values(r).forEach(n.add,n))})}}(a.store,n,e),e)}),{result:a.canonizeResults?this.canon.admit(i):i,missing:t}},e}(),nK=Object.create(null);function n$(e){var t=JSON.stringify(e);return nK[t]||(nK[t]=Object.create(null))}function nW(e){var t=n$(e);return t.keyFieldsFn||(t.keyFieldsFn=function(t,r){var n=function(e,t){return r.readField(t,e)},i=r.keyObject=nH(e,function(e){var i=nJ(r.storeObject,e,n);return void 0===i&&t!==r.storeObject&&nT.call(t,e[0])&&(i=nJ(t,e,nY)),P(void 0!==i,5,e.join("."),t),i});return"".concat(r.typename,":").concat(JSON.stringify(i))})}function nG(e){var t=n$(e);return t.keyArgsFn||(t.keyArgsFn=function(t,r){var n=r.field,i=r.variables,o=r.fieldName,a=JSON.stringify(nH(e,function(e){var r=e[0],o=r.charAt(0);if("@"===o){if(n&&tg(n.directives)){var a=r.slice(1),s=n.directives.find(function(e){return e.name.value===a}),u=s&&eG(s,i);return u&&nJ(u,e.slice(1))}return}if("$"===o){var c=r.slice(1);if(i&&nT.call(i,c)){var l=e.slice(0);return l[0]=c,nJ(i,l)}return}if(t)return nJ(t,e)}));return(t||"{}"!==a)&&(o+=":"+a),o})}function nH(e,t){var r=new tT;return(function e(t){var r=n$(t);if(!r.paths){var n=r.paths=[],i=[];t.forEach(function(r,o){tv(r)?(e(r).forEach(function(e){return n.push(i.concat(e))}),i.length=0):(i.push(r),tv(t[o+1])||(n.push(i.slice(0)),i.length=0))})}return r.paths})(e).reduce(function(e,n){var i,o=t(n);if(void 0!==o){for(var a=n.length-1;a>=0;--a)(i={})[n[a]]=o,o=i;e=r.merge(e,o)}return e},Object.create(null))}function nY(e,t){return e[t]}function nJ(e,t,r){return r=r||nY,function e(t){return eu(t)?tv(t)?t.map(e):nH(Object.keys(t).sort(),function(e){return nJ(t,e)}):t}(t.reduce(function e(t,n){return tv(t)?t.map(function(t){return e(t,n)}):t&&r(t,n)},e))}function nX(e){return void 0!==e.args?e.args:e.field?eG(e.field,e.variables):null}var nZ=function(){},n0=function(e,t){return t.fieldName},n1=function(e,t,r){return(0,r.mergeObjects)(e,t)},n2=function(e,t){return t},n5=function(){function e(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=(0,_.__assign)({dataIdFromObject:nS},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return e.prototype.identify=function(e,t){var r,n,i=this,o=t&&(t.typename||(null==(r=t.storeObject)?void 0:r.__typename))||e.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];var a=t&&t.storeObject||e,s=(0,_.__assign)((0,_.__assign)({},t),{typename:o,storeObject:a,readField:t&&t.readField||function(){var e=n3(arguments,a);return i.readField(e,{store:i.cache.data,variables:e.variables})}}),u=o&&this.getTypePolicy(o),c=u&&u.keyFn||this.config.dataIdFromObject;return nr.withValue(!0,function(){for(;c;){var t=c((0,_.__assign)((0,_.__assign)({},e),a),s);if(tv(t))c=nW(t);else{n=t;break}}}),n=n?String(n):void 0,s.keyObject?[n,s.keyObject]:[n]},e.prototype.addTypePolicies=function(e){var t=this;Object.keys(e).forEach(function(r){var n=e[r],i=n.queryType,o=n.mutationType,a=n.subscriptionType,s=(0,_.__rest)(n,["queryType","mutationType","subscriptionType"]);i&&t.setRootTypename("Query",r),o&&t.setRootTypename("Mutation",r),a&&t.setRootTypename("Subscription",r),nT.call(t.toBeAdded,r)?t.toBeAdded[r].push(s):t.toBeAdded[r]=[s]})},e.prototype.updateTypePolicy=function(e,t){var r=this,n=this.getTypePolicy(e),i=t.keyFields,o=t.fields;function a(e,t){e.merge="function"==typeof t?t:!0===t?n1:!1===t?n2:e.merge}a(n,t.merge),n.keyFn=!1===i?nZ:tv(i)?nW(i):"function"==typeof i?i:n.keyFn,o&&Object.keys(o).forEach(function(t){var n=r.getFieldPolicy(e,t,!0),i=o[t];if("function"==typeof i)n.read=i;else{var s=i.keyArgs,u=i.read,c=i.merge;n.keyFn=!1===s?n0:tv(s)?nG(s):"function"==typeof s?s:n.keyFn,"function"==typeof u&&(n.read=u),a(n,c)}n.read&&n.merge&&(n.keyFn=n.keyFn||n0)})},e.prototype.setRootTypename=function(e,t){void 0===t&&(t=e);var r="ROOT_"+e.toUpperCase(),n=this.rootTypenamesById[r];t!==n&&(P(!n||n===e,6,e),n&&delete this.rootIdsByTypename[n],this.rootIdsByTypename[t]=r,this.rootTypenamesById[r]=t)},e.prototype.addPossibleTypes=function(e){var t=this;this.usingPossibleTypes=!0,Object.keys(e).forEach(function(r){t.getSupertypeSet(r,!0),e[r].forEach(function(e){t.getSupertypeSet(e,!0).add(r);var n=e.match(nI);n&&n[0]===e||t.fuzzySubtypes.set(e,new RegExp(e))})})},e.prototype.getTypePolicy=function(e){var t=this;if(!nT.call(this.typePolicies,e)){var r=this.typePolicies[e]=Object.create(null);r.fields=Object.create(null);var n=this.supertypeMap.get(e);!n&&this.fuzzySubtypes.size&&(n=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach(function(r,i){if(r.test(e)){var o=t.supertypeMap.get(i);o&&o.forEach(function(e){return n.add(e)})}})),n&&n.size&&n.forEach(function(e){var n=t.getTypePolicy(e),i=n.fields;Object.assign(r,(0,_.__rest)(n,["fields"])),Object.assign(r.fields,i)})}var i=this.toBeAdded[e];return i&&i.length&&i.splice(0).forEach(function(r){t.updateTypePolicy(e,r)}),this.typePolicies[e]},e.prototype.getFieldPolicy=function(e,t,r){if(e){var n=this.getTypePolicy(e).fields;return n[t]||r&&(n[t]=Object.create(null))}},e.prototype.getSupertypeSet=function(e,t){var r=this.supertypeMap.get(e);return!r&&t&&this.supertypeMap.set(e,r=new Set),r},e.prototype.fragmentMatches=function(e,t,r,n){var i=this;if(!e.typeCondition)return!0;if(!t)return!1;var o=e.typeCondition.name.value;if(t===o)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(o))for(var a=this.getSupertypeSet(t,!0),s=[a],u=function(e){var t=i.getSupertypeSet(e,!1);t&&t.size&&0>s.indexOf(t)&&s.push(t)},c=!!(r&&this.fuzzySubtypes.size),l=!1,f=0;f<s.length;++f){var h=s[f];if(h.has(o))return a.has(o)||(l&&!1!==globalThis.__DEV__&&P.warn(7,t,o),a.add(o)),!0;h.forEach(u),c&&f===s.length-1&&function e(t,r,n){return!!eu(r)&&(tv(r)?r.every(function(r){return e(t,r,n)}):t.selections.every(function(t){if(eJ(t)&&tt(t,n)){var i=eH(t);return nT.call(r,i)&&(!t.selectionSet||e(t.selectionSet,r[i],n))}return!0}))}(e.selectionSet,r,n)&&(c=!1,l=!0,this.fuzzySubtypes.forEach(function(e,r){var n=t.match(e);n&&n[0]===t&&u(r)}))}return!1},e.prototype.hasKeyArgs=function(e,t){var r=this.getFieldPolicy(e,t,!1);return!!(r&&r.keyFn)},e.prototype.getStoreFieldName=function(e){var t,r,n,i,o,a=e.typename,s=e.fieldName,u=this.getFieldPolicy(a,s,!1),c=u&&u.keyFn;if(c&&a)for(var l={typename:a,fieldName:s,field:e.field||null,variables:e.variables},f=nX(e);c;){var h=c(f,l);if(tv(h))c=nG(h);else{o=h||s;break}}return(void 0===o&&(o=e.field?(t=e.field,r=e.variables,n=null,t.directives&&(n={},t.directives.forEach(function(e){n[e.name.value]={},e.arguments&&e.arguments.forEach(function(t){var i=t.name,o=t.value;return ez(n[e.name.value],i,o,r)})})),i=null,t.arguments&&t.arguments.length&&(i={},t.arguments.forEach(function(e){var t=e.name,n=e.value;return ez(i,t,n,r)})),eW(t.name.value,i,n)):eW(s,nX(e))),!1===o)?s:s===nA(o)?o:s+":"+o},e.prototype.readField=function(e,t){var r=e.from;if(r&&(e.field||e.fieldName)){if(void 0===e.typename){var n=t.store.getFieldValue(r,"__typename");n&&(e.typename=n)}var i=this.getStoreFieldName(e),o=nA(i),a=t.store.getFieldValue(r,i),s=this.getFieldPolicy(e.typename,o,!1),u=s&&s.read;if(u){var c=n8(this,r,e,t,t.store.getStorage(eB(r)?r.__ref:r,i));return nh.withValue(this.cache,u,[a,c])}return a}},e.prototype.getReadFunction=function(e,t){var r=this.getFieldPolicy(e,t,!1);return r&&r.read},e.prototype.getMergeFunction=function(e,t,r){var n=this.getFieldPolicy(e,t,!1),i=n&&n.merge;return!i&&r&&(i=(n=this.getTypePolicy(r))&&n.merge),i},e.prototype.runMergeFunction=function(e,t,r,n,i){var o=r.field,a=r.typename,s=r.merge;return s===n1?n6(n.store)(e,t):s===n2?t:(n.overwrite&&(e=void 0),s(e,t,n8(this,void 0,{typename:a,fieldName:o.name.value,field:o,variables:n.variables},n,i||Object.create(null))))},e}();function n8(e,t,r,n,i){var o=e.getStoreFieldName(r),a=nA(o),s=r.variables||n.variables,u=n.store,c=u.toReference,l=u.canRead;return{args:nX(r),field:r.field||null,fieldName:a,storeFieldName:o,variables:s,isReference:eB,toReference:c,storage:i,cache:e.cache,canRead:l,readField:function(){return e.readField(n3(arguments,t,s),n)},mergeObjects:n6(n.store)}}function n3(e,t,r){var n,i=e[0],o=e[1],a=e.length;return"string"==typeof i?n={fieldName:i,from:a>1?o:t}:(n=(0,_.__assign)({},i),nT.call(n,"from")||(n.from=t)),!1!==globalThis.__DEV__&&void 0===n.from&&!1!==globalThis.__DEV__&&P.warn(8,R(Array.from(e))),void 0===n.variables&&(n.variables=r),n}function n6(e){return function(t,r){if(tv(t)||tv(r))throw M(9);if(eu(t)&&eu(r)){var n=e.getFieldValue(t,"__typename"),i=e.getFieldValue(r,"__typename");if(n&&i&&n!==i)return r;if(eB(t)&&nN(r))return e.merge(t.__ref,r),t;if(nN(t)&&eB(r))return e.merge(t,r.__ref),r;if(nN(t)&&nN(r))return(0,_.__assign)((0,_.__assign)({},t),r)}return r}}function n4(e,t,r){var n="".concat(t).concat(r),i=e.flavors.get(n);return i||e.flavors.set(n,i=e.clientOnly===t&&e.deferred===r?e:(0,_.__assign)((0,_.__assign)({},e),{clientOnly:t,deferred:r})),i}var n9=function(){function e(e,t,r){this.cache=e,this.reader=t,this.fragments=r}return e.prototype.writeToStore=function(e,t){var r=this,n=t.query,i=t.result,o=t.dataId,a=t.variables,s=t.overwrite,u=eZ(n),c=new tT;a=(0,_.__assign)((0,_.__assign)({},e3(u)),a);var l=(0,_.__assign)((0,_.__assign)({store:e,written:Object.create(null),merge:function(e,t){return c.merge(e,t)},variables:a,varString:eq(a)},nC(n,this.fragments)),{overwrite:!!s,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),f=this.processSelectionSet({result:i||Object.create(null),dataId:o,selectionSet:u.selectionSet,mergeTree:{map:new Map},context:l});if(!eB(f))throw M(12,i);return l.incomingById.forEach(function(t,n){var i=t.storeObject,o=t.mergeTree,a=t.fieldNodeSet,s=eU(n);if(o&&o.map.size){var u=r.applyMerges(o,s,i,l);if(eB(u))return;i=u}if(!1!==globalThis.__DEV__&&!l.overwrite){var c=Object.create(null);a.forEach(function(e){e.selectionSet&&(c[e.name.value]=!0)});var f=function(e){var t=o&&o.map.get(e);return!!(t&&t.info&&t.info.merge)};Object.keys(i).forEach(function(e){!0!==c[nA(e)]||f(e)||function(e,t,r,n){var i=function(e){var t=n.getFieldValue(e,r);return"object"==typeof t&&t},o=i(e);if(o){var a=i(t);if(!(!a||eB(o)||t1(o,a)||Object.keys(o).every(function(e){return void 0!==n.getFieldValue(a,e)}))){var s=n.getFieldValue(e,"__typename")||n.getFieldValue(t,"__typename"),u=nA(r),c="".concat(s,".").concat(u);if(!ii.has(c)){ii.add(c);var l=[];tv(o)||tv(a)||[o,a].forEach(function(e){var t=n.getFieldValue(e,"__typename");"string"!=typeof t||l.includes(t)||l.push(t)}),!1!==globalThis.__DEV__&&P.warn(15,u,s,l.length?"either ensure all objects of type "+l.join(" and ")+" have an ID or a custom merge function, or ":"",c,(0,_.__assign)({},o),(0,_.__assign)({},a))}}}}(s,i,e,l.store)})}e.merge(n,i)}),e.retain(f.__ref),f},e.prototype.processSelectionSet=function(e){var t=this,r=e.dataId,n=e.result,i=e.selectionSet,o=e.context,a=e.mergeTree,s=this.cache.policies,u=Object.create(null),c=r&&s.rootTypenamesById[r]||eY(n,i,o.fragmentMap)||r&&o.store.get(r,"__typename");"string"==typeof c&&(u.__typename=c);var l=function(){var e=n3(arguments,u,o.variables);if(eB(e.from)){var t=o.incomingById.get(e.from.__ref);if(t){var r=s.readField((0,_.__assign)((0,_.__assign)({},e),{from:t.storeObject}),o);if(void 0!==r)return r}}return s.readField(e,o)},f=new Set;this.flattenFields(i,n,o,c).forEach(function(e,r){var i,o=n[eH(r)];if(f.add(r),void 0!==o){var h=s.getStoreFieldName({typename:c,fieldName:r.name.value,field:r,variables:e.variables}),p=ie(a,h),d=t.processFieldValue(o,r,r.selectionSet?n4(e,!1,!1):e,p),y=void 0;r.selectionSet&&(eB(d)||nN(d))&&(y=l("__typename",d));var m=s.getMergeFunction(c,r.name.value,y);m?p.info={field:r,typename:c,merge:m}:ir(a,h),u=e.merge(u,((i={})[h]=d,i))}else!1===globalThis.__DEV__||e.clientOnly||e.deferred||t$.added(r)||s.getReadFunction(c,r.name.value)||!1===globalThis.__DEV__||P.error(13,eH(r),n)});try{var h=s.identify(n,{typename:c,selectionSet:i,fragmentMap:o.fragmentMap,storeObject:u,readField:l}),p=h[0],d=h[1];r=r||p,d&&(u=o.merge(u,d))}catch(e){if(!r)throw e}if("string"==typeof r){var y=eU(r),m=o.written[r]||(o.written[r]=[]);if(m.indexOf(i)>=0||(m.push(i),this.reader&&this.reader.isFresh(n,y,i,o)))return y;var v=o.incomingById.get(r);return v?(v.storeObject=o.merge(v.storeObject,u),v.mergeTree=function e(t,r){if(t===r||!r||it(r))return t;if(!t||it(t))return r;var n=t.info&&r.info?(0,_.__assign)((0,_.__assign)({},t.info),r.info):t.info||r.info,i=t.map.size&&r.map.size,o={info:n,map:i?new Map:t.map.size?t.map:r.map};if(i){var a=new Set(r.map.keys());t.map.forEach(function(t,n){o.map.set(n,e(t,r.map.get(n))),a.delete(n)}),a.forEach(function(n){o.map.set(n,e(r.map.get(n),t.map.get(n)))})}return o}(v.mergeTree,a),f.forEach(function(e){return v.fieldNodeSet.add(e)})):o.incomingById.set(r,{storeObject:u,mergeTree:it(a)?void 0:a,fieldNodeSet:f}),y}return u},e.prototype.processFieldValue=function(e,t,r,n){var i=this;return t.selectionSet&&null!==e?tv(e)?e.map(function(e,o){var a=i.processFieldValue(e,t,r,ie(n,o));return ir(n,o),a}):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:r,mergeTree:n}):!1!==globalThis.__DEV__?rH(e):e},e.prototype.flattenFields=function(e,t,r,n){void 0===n&&(n=eY(t,e,r.fragmentMap));var i=new Map,o=this.cache.policies,a=new ra(!1);return!function e(s,u){var c=a.lookup(s,u.clientOnly,u.deferred);c.visited||(c.visited=!0,s.selections.forEach(function(a){if(tt(a,r.variables)){var s=u.clientOnly,c=u.deferred;if(!(s&&c)&&tg(a.directives)&&a.directives.forEach(function(e){var t=e.name.value;if("client"===t&&(s=!0),"defer"===t){var n=eG(e,r.variables);n&&!1===n.if||(c=!0)}}),eJ(a)){var l=i.get(a);l&&(s=s&&l.clientOnly,c=c&&l.deferred),i.set(a,n4(r,s,c))}else{var f=ev(a,r.lookupFragment);if(!f&&a.kind===eh.Kind.FRAGMENT_SPREAD)throw M(14,a.name.value);f&&o.fragmentMatches(f,n,t,r.variables)&&e(f.selectionSet,n4(r,s,c))}}}))}(e,r),i},e.prototype.applyMerges=function(e,t,r,n,i){var o=this;if(e.map.size&&!eB(r)){var a,s,u=!tv(r)&&(eB(t)||nN(t))?t:void 0,c=r;u&&!i&&(i=[eB(u)?u.__ref:u]);var l=function(e,t){return tv(e)?"number"==typeof t?e[t]:void 0:n.store.getFieldValue(e,String(t))};e.map.forEach(function(e,t){var r=l(u,t),a=l(c,t);if(void 0!==a){i&&i.push(t);var f=o.applyMerges(e,r,a,n,i);f!==a&&(s=s||new Map).set(t,f),i&&P(i.pop()===t)}}),s&&(r=tv(c)?c.slice(0):(0,_.__assign)({},c),s.forEach(function(e,t){r[t]=e}))}return e.info?this.cache.policies.runMergeFunction(t,r,e.info,n,i&&(a=n.store).getStorage.apply(a,i)):r},e}(),n7=[];function ie(e,t){var r=e.map;return r.has(t)||r.set(t,n7.pop()||{map:new Map}),r.get(t)}function it(e){return!e||!(e.info||e.map.size)}function ir(e,t){var r=e.map,n=r.get(t);n&&it(n)&&(n7.push(n),r.delete(t))}var ii=new Set,io=function(e){function t(t){void 0===t&&(t={});var r=e.call(this)||this;return r.watches=new Set,r.addTypenameTransform=new r$(t$),r.assumeImmutableResults=!0,r.makeVar=nm,r.txCount=0,r.config=rY(nk,t),r.addTypename=!!r.config.addTypename,r.policies=new n5({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return(0,_.__extends)(t,e),t.prototype.init=function(){var e=this.data=new nL.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()},t.prototype.resetResultCache=function(e){var t=this,r=this.storeReader,n=this.config.fragments;this.storeWriter=new n9(this,this.storeReader=new nz({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:nx(this.config),canon:e?void 0:r&&r.canon,fragments:n}),n),this.maybeBroadcastWatch=rz(function(e,r){return t.broadcastWatch(e,r)},{max:this.config.resultCacheMaxSize||eN["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(e){var r=e.optimistic?t.optimisticData:t.data;if(nQ(r)){var n=e.optimistic,i=e.id,o=e.variables;return r.makeCacheKey(e.query,e.callback,eq({optimistic:n,id:i,variables:o}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(e){return e.resetCaching()})},t.prototype.restore=function(e){return this.init(),e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).extract()},t.prototype.read=function(e){var t=e.returnPartialData;try{return this.storeReader.diffQueryAgainstStore((0,_.__assign)((0,_.__assign)({},e),{store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:void 0!==t&&t})).result||null}catch(e){if(e instanceof nO)return null;throw e}},t.prototype.write=function(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.modify=function(e){if(nT.call(e,"id")&&!e.id)return!1;var t=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,t.modify(e.id||"ROOT_QUERY",e.fields)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.diff=function(e){return this.storeReader.diffQueryAgainstStore((0,_.__assign)((0,_.__assign)({},e),{store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(e){var t,r=this;return this.watches.size||(t=this,nd(t).vars.forEach(function(e){return e.attachCache(t)})),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),function(){r.watches.delete(e)&&!r.watches.size&&ny(r),r.maybeBroadcastWatch.forget(e)}},t.prototype.gc=function(e){eq.reset(),tq.reset(),this.addTypenameTransform.resetCache(),null==(t=this.config.fragments)||t.resetCaches();var t,r=this.optimisticData.gc();return e&&!this.txCount&&(e.resetResultCache?this.resetResultCache(e.resetResultIdentities):e.resetResultIdentities&&this.storeReader.resetCanon()),r},t.prototype.retain=function(e,t){return(t?this.optimisticData:this.data).retain(e)},t.prototype.release=function(e,t){return(t?this.optimisticData:this.data).release(e)},t.prototype.identify=function(e){if(eB(e))return e.__ref;try{return this.policies.identify(e)[0]}catch(e){!1!==globalThis.__DEV__&&P.warn(e)}},t.prototype.evict=function(e){if(!e.id){if(nT.call(e,"id"))return!1;e=(0,_.__assign)((0,_.__assign)({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.reset=function(e){var t=this;return this.init(),eq.reset(),e&&e.discardWatches?(this.watches.forEach(function(e){return t.maybeBroadcastWatch.forget(e)}),this.watches.clear(),ny(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){var t=this.optimisticData.removeLayer(e);t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())},t.prototype.batch=function(e){var t,r=this,n=e.update,i=e.optimistic,o=void 0===i||i,a=e.removeOptimistic,s=e.onWatchUpdated,u=function(e){var i=r.data,o=r.optimisticData;++r.txCount,e&&(r.data=r.optimisticData=e);try{return t=n(r)}finally{--r.txCount,r.data=i,r.optimisticData=o}},c=new Set;return s&&!this.txCount&&this.broadcastWatches((0,_.__assign)((0,_.__assign)({},e),{onWatchUpdated:function(e){return c.add(e),!1}})),"string"==typeof o?this.optimisticData=this.optimisticData.addLayer(o,u):!1===o?u(this.data):u(),"string"==typeof a&&(this.optimisticData=this.optimisticData.removeLayer(a)),s&&c.size?(this.broadcastWatches((0,_.__assign)((0,_.__assign)({},e),{onWatchUpdated:function(e,t){var r=s.call(this,e,t);return!1!==r&&c.delete(e),r}})),c.size&&c.forEach(function(e){return r.maybeBroadcastWatch.dirty(e)})):this.broadcastWatches(e),t},t.prototype.performTransaction=function(e,t){return this.batch({update:e,optimistic:t||null!==t})},t.prototype.transformDocument=function(e){return this.addTypenameToDocument(this.addFragmentsToDocument(e))},t.prototype.fragmentMatches=function(e,t){return this.policies.fragmentMatches(e,t)},t.prototype.lookupFragment=function(e){var t;return(null==(t=this.config.fragments)?void 0:t.lookup(e))||null},t.prototype.broadcastWatches=function(e){var t=this;this.txCount||this.watches.forEach(function(r){return t.maybeBroadcastWatch(r,e)})},t.prototype.addFragmentsToDocument=function(e){var t=this.config.fragments;return t?t.transform(e):e},t.prototype.addTypenameToDocument=function(e){return this.addTypename?this.addTypenameTransform.transformDocument(e):e},t.prototype.broadcastWatch=function(e,t){var r=e.lastDiff,n=this.diff(e);(!t||(e.optimistic&&"string"==typeof t.optimistic&&(n.fromOptimisticTransaction=!0),!t.onWatchUpdated||!1!==t.onWatchUpdated.call(this,e,n,r)))&&(r&&t1(r.result,n.result)||e.callback(e.lastDiff=n,r))},t}(nE);!1!==globalThis.__DEV__&&(io.prototype.getMemoryInternals=eF),e.s(["InMemoryCache",0,io],84936);var ia={disable:function(e){return e.meta.persistedQueryNotSupported},retry:function(e){var t=e.meta;return t.persistedQueryNotSupported||t.persistedQueryNotFound},useGETForHashedQueries:!1};e.s(["createPersistedQueryLink",0,function(e){function t(){r=void 0}P(e&&("function"==typeof e.sha256||"function"==typeof e.generateHash),43);var r,n=rY(ia,e),i=n.sha256,o=n.generateHash,a=void 0===o?function(e){return Promise.resolve(i(tq(e)))}:o,s=n.disable,u=n.retry,c=n.useGETForHashedQueries,l=!0,f=function(e){return new Promise(function(t){return t(a(e))})};return Object.assign(new e7(function(e,n){P(n,44);var i=e.query;return new es(function(o){var a,h,p=!1,d=!1,y=function(r,i){var o=r.response,c=r.networkError;if(!p&&(o&&o.errors||c)){p=!0;var f,y,v=[],g=o&&o.errors;tg(g)&&v.push.apply(v,g);var b=void 0;"string"!=typeof(null==c?void 0:c.result)&&(b=c&&c.result&&c.result.errors),tg(b)&&v.push.apply(v,b);var _={response:o,networkError:c,operation:e,graphQLErrors:tg(v)?v:void 0,meta:(f=Object.create(null),y=Object.create(null),tg(v)&&v.forEach(function(e){var t;f[e.message]=e,"string"==typeof(null==(t=e.extensions)?void 0:t.code)&&(y[e.extensions.code]=e)}),{persistedQueryNotSupported:!!(f.PersistedQueryNotSupported||y.PERSISTED_QUERY_NOT_SUPPORTED),persistedQueryNotFound:!!(f.PersistedQueryNotFound||y.PERSISTED_QUERY_NOT_FOUND)})};if((l=!s(_))||t(),u(_)){a&&a.unsubscribe(),e.setContext({http:{includeQuery:!0,includeExtensions:l},fetchOptions:{method:"POST"}}),d&&e.setContext({fetchOptions:h}),a=n(e).subscribe(m);return}}i()},m={next:function(e){y({response:e},function(){return o.next(e)})},error:function(e){y({networkError:e},function(){return o.error(e)})},complete:o.complete.bind(o)};return e.setContext({http:{includeQuery:!l,includeExtensions:l}}),c&&l&&!e.query.definitions.some(function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation})&&(e.setContext(function(e){var t=e.fetchOptions,r=void 0===t?{}:t;return h=r,{fetchOptions:(0,_.__assign)((0,_.__assign)({},r),{method:"GET"})}}),d=!0),l?(function(e){if(!e||"object"!=typeof e)return f(e);r||(r=new ex(eN["PersistedQueryLink.persistedQueryHashes"]||2e3));var t=r.get(e);return t||r.set(e,t=f(e)),t})(i).then(function(t){e.extensions.persistedQuery={version:1,sha256Hash:t},a=n(e).subscribe(m)}).catch(o.error.bind(o)):a=n(e).subscribe(m),function(){a&&a.unsubscribe()}})}),{resetHashCache:t},!1!==globalThis.__DEV__?{getMemoryInternals:function(){var e;return{PersistedQueryLink:{persistedQueryHashes:null!=(e=null==r?void 0:r.size)?e:0}}}}:{})}],59852);var is=e.i(21168);let iu="0123456789abcdef",ic=[];for(let e=0;e<256;e++)ic[e]=iu[e>>>4&15]+iu[15&e];let il=e=>async(t,{outputFormat:r="hex"}={})=>{let n=(e=>{if("string"==typeof e)return new globalThis.TextEncoder().encode(e).buffer;if(e instanceof ArrayBuffer)return e.slice();let t=void 0!==is.Buffer&&is.Buffer.isBuffer?.(e)?new Uint8Array(e):e;if(t instanceof DataView){let e=new ArrayBuffer(t.byteLength),r=new Uint8Array(e);for(let e=0;e<t.byteLength;e++)r[e]=t.getUint8(e);return e}return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)})(t),i=await globalThis.crypto.subtle.digest(e,n);return"hex"===r?(e=>{if(void 0!==is.Buffer&&"function"==typeof is.Buffer.from)return is.Buffer.from(e).toString("hex");let t=new Uint8Array(e),r="";for(let e=0;e<t.length;e++)r+=ic[t[e]];return r})(i):i};il("SHA-1");let ih=il("SHA-256");il("SHA-384"),il("SHA-512"),e.s(["sha256",0,ih],2716);var ip=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.registry=Object.create(null),this.resetCaches(),e.length&&this.register.apply(this,e)}return e.prototype.register=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=new Map;return t.forEach(function(e){e1(e).forEach(function(e){n.set(e.name.value,e)})}),n.forEach(function(t,r){t!==e.registry[r]&&(e.registry[r]=t,e.invalidate(r))}),this},e.prototype.invalidate=function(e){},e.prototype.resetCaches=function(){var t=e.prototype;this.invalidate=(this.lookup=rz(t.lookup.bind(this),{makeCacheKey:function(e){return e},max:eN["fragmentRegistry.lookup"]||1e3})).dirty,this.transform=rz(t.transform.bind(this),{cache:eO,max:eN["fragmentRegistry.transform"]||2e3}),this.findFragmentSpreads=rz(t.findFragmentSpreads.bind(this),{cache:eO,max:eN["fragmentRegistry.findFragmentSpreads"]||4e3})},e.prototype.lookup=function(e){return this.registry[e]||null},e.prototype.transform=function(e){var t=this,r=new Map;e1(e).forEach(function(e){r.set(e.name.value,e)});var n=new Set,i=function(e){r.has(e)||n.add(e)},o=function(e){return Object.keys(t.findFragmentSpreads(e)).forEach(i)};o(e);var a=[],s=Object.create(null);if(n.forEach(function(e){var n=r.get(e);if(n)o(s[e]=n);else{a.push(e);var i=t.lookup(e);i&&o(s[e]=i)}}),a.length){var u=[];a.forEach(function(e){var t=s[e];t&&u.push(t)}),u.length&&(e=(0,_.__assign)((0,_.__assign)({},e),{definitions:e.definitions.concat(u)}))}return e},e.prototype.findFragmentSpreads=function(e){var t=Object.create(null);return ed(e,{FragmentSpread:function(e){t[e.name.value]=e}}),t},e}();e.s(["createFragmentRegistry",0,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new(ip.bind.apply(ip,(0,_.__spreadArray)([void 0],e,!1)))}],87552)},79753,(e,t,r)=>{"use strict";var n,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};n=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var a=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}t.exports=s,t.exports.once=function(e,t){return new Promise(function(r,n){var i,o,a;function s(r){e.removeListener(t,u),n(r)}function u(){"function"==typeof e.removeListener&&e.removeListener("error",s),r([].slice.call(arguments))}v(e,t,u,{once:!0}),"error"!==t&&(i=e,o=s,a={once:!0},"function"==typeof i.on&&v(i,"error",o,a))})},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var u=10;function c(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function f(e,t,r,n){if(c(r),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),a=o[t]),void 0===a)a=o[t]=r,++e._eventsCount;else if("function"==typeof a?a=o[t]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),(i=l(e))>0&&a.length>i&&!a.warned){a.warned=!0;var i,o,a,s=Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=a.length,console&&console.warn&&console.warn(s)}return e}function h(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},i=h.bind(n);return i.listener=r,n.wrapFn=i,i}function d(e,t,r){var n=e._events;if(void 0===n)return[];var i=n[t];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(e){for(var t=Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(i):m(i,i.length)}function y(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function m(e,t){for(var r=Array(t),n=0;n<t;++n)r[n]=e[n];return r}function v(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else if("function"==typeof e.addEventListener)e.addEventListener(t,function i(o){n.once&&e.removeEventListener(t,i),r(o)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||a(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),s.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||a(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,i=this._events;if(void 0!==i)n=n&&void 0===i.error;else if(!n)return!1;if(n){if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var a,s=Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)o(u,this,t);else for(var c=u.length,l=m(u,c),r=0;r<c;++r)o(l[r],this,t);return!0},s.prototype.addListener=function(e,t){return f(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return f(this,e,t,!0)},s.prototype.once=function(e,t){return c(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var r,n,i,o,a;if(c(t),void 0===(n=this._events)||void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===t||r[o].listener===t){a=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,i),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,a||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0==arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},s.prototype.listeners=function(e){return d(this,e,!0)},s.prototype.rawListeners=function(e){return d(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):y.call(e,t)},s.prototype.listenerCount=y,s.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},36893,(e,t,r)=>{"use strict";t.exports=self.fetch.bind(self),t.exports.default=t.exports},21168,(e,t,r)=>{var n={872:function(e,t){"use strict";t.byteLength=function(e){var t=u(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,o=u(e),a=o[0],s=o[1],c=new i((a+s)*3/4-s),l=0,f=s>0?a-4:a;for(r=0;r<f;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[l++]=t>>16&255,c[l++]=t>>8&255,c[l++]=255&t;return 2===s&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[l++]=255&t),1===s&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[l++]=t>>8&255,c[l++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],a=0,s=n-i;a<s;a+=16383)o.push(function(e,t,n){for(var i,o=[],a=t;a<n;a+=3)i=(e[a]<<16&0xff0000)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(r[i>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===i?o.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===i&&o.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],n=[],i="u">typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)r[a]=o[a],n[o.charCodeAt(a)]=a;function u(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n[45]=62,n[95]=63},230:function(e,t,r){"use strict";var n=r(872),i=r(321),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return l(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e){var n=e,i=t;if(("string"!=typeof i||""===i)&&(i="utf8"),!s.isEncoding(i))throw TypeError("Unknown encoding: "+i);var o=0|p(n,i),u=a(o),c=u.write(n,i);return c!==o&&(u=u.slice(0,c)),u}if(ArrayBuffer.isView(e))return f(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(A(e,ArrayBuffer)||e&&A(e.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(A(e,SharedArrayBuffer)||e&&A(e.buffer,SharedArrayBuffer)))return function(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),n}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var l=e.valueOf&&e.valueOf();if(null!=l&&l!==e)return s.from(l,t,r);var d=function(e){if(s.isBuffer(e)){var t=0|h(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?a(0):f(e):"Buffer"===e.type&&Array.isArray(e.data)?f(e.data):void 0}(e);if(d)return d;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function l(e){return c(e),a(e<0?0:0|h(e))}function f(e){for(var t=e.length<0?0:0|h(e.length),r=a(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}t.Buffer=s,t.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=0x7fffffff,s.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),!s.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},s.allocUnsafe=function(e){return l(e)},s.allocUnsafeSlow=function(e){return l(e)};function h(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||A(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return S(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return x(e).length;default:if(i)return n?-1:S(e).length;t=(""+t).toLowerCase(),i=!0}}function d(e,t,r){var i,o,a,s=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=N[e[o]];return i}(this,t,r);case"utf8":case"utf-8":return g(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return i=this,o=t,a=r,0===o&&a===i.length?n.fromByteArray(i):n.fromByteArray(i.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function y(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function m(e,t,r,n,i){var o;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(o=r*=1)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length)if(i)return -1;else r=e.length-1;else if(r<0)if(!i)return -1;else r=0;if("string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,i);if("number"==typeof t){if(t&=255,"function"==typeof Uint8Array.prototype.indexOf)if(i)return Uint8Array.prototype.indexOf.call(e,t,r);else return Uint8Array.prototype.lastIndexOf.call(e,t,r);return v(e,[t],r,n,i)}throw TypeError("val must be string, number or Buffer")}function v(e,t,r,n,i){var o,a=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,s/=2,u/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var l=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else -1!==l&&(o-=o-l),l=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){for(var f=!0,h=0;h<u;h++)if(c(e,o+h)!==c(t,h)){f=!1;break}if(f)return o}return -1}s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(A(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),A(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:+(n<r)},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=s.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(A(o,Uint8Array)&&(o=s.from(o)),!s.isBuffer(o))throw TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)y(this,t,t+1);return this},s.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2);return this},s.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4);return this},s.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?g(this,0,e):d.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(e,t,r,n,i){if(A(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var o=i-n,a=r-t,u=Math.min(o,a),c=this.slice(n,i),l=e.slice(t,r),f=0;f<u;++f)if(c[f]!==l[f]){o=c[f],a=l[f];break}return o<a?-1:+(a<o)},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)};function g(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o,a,s,u,c=e[i],l=null,f=c>239?4:c>223?3:c>191?2:1;if(i+f<=r)switch(f){case 1:c<128&&(l=c);break;case 2:(192&(o=e[i+1]))==128&&(u=(31&c)<<6|63&o)>127&&(l=u);break;case 3:o=e[i+1],a=e[i+2],(192&o)==128&&(192&a)==128&&(u=(15&c)<<12|(63&o)<<6|63&a)>2047&&(u<55296||u>57343)&&(l=u);break;case 4:o=e[i+1],a=e[i+2],s=e[i+3],(192&o)==128&&(192&a)==128&&(192&s)==128&&(u=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(l=u)}null===l?(l=65533,f=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),i+=f}var h=n,p=h.length;if(p<=4096)return String.fromCharCode.apply(String,h);for(var d="",y=0;y<p;)d+=String.fromCharCode.apply(String,h.slice(y,y+=4096));return d}function b(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function _(e,t,r,n,i,o){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function E(e,t,r,n,i,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function O(e,t,r,n,o){return t*=1,r>>>=0,o||E(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function T(e,t,r,n,o){return t*=1,r>>>=0,o||E(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}s.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,o,a,s,u,c,l,f,h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;n>o/2&&(n=o/2);for(var a=0;a<n;++a){var s,u=parseInt(t.substr(2*a,2),16);if((s=u)!=s)break;e[r+a]=u}return a}(this,e,t,r);case"utf8":case"utf-8":return i=t,o=r,I(S(e,this.length-i),this,i,o);case"ascii":return a=t,s=r,I(k(e),this,a,s);case"latin1":case"binary":return function(e,t,r,n){return I(k(t),e,r,n)}(this,e,t,r);case"base64":return u=t,c=r,I(x(e),this,u,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l=t,f=r,I(function(e,t){for(var r,n,i=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,this.length-l),this,l,f);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},s.prototype.readUInt8=function(e,t){return e>>>=0,t||b(e,1,this.length),this[e]},s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},s.prototype.readInt8=function(e,t){return(e>>>=0,t||b(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readFloatLE=function(e,t){return e>>>=0,t||b(e,4,this.length),i.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||b(e,4,this.length),i.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||b(e,8,this.length),i.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||b(e,8,this.length),i.read(this,e,!1,52,8)},s.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;_(this,e,t,r,i,0)}var o=1,a=0;for(this[t]=255&e;++a<r&&(o*=256);)this[t+a]=e/o&255;return t+r},s.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;_(this,e,t,r,i,0)}var o=r-1,a=1;for(this[t+o]=255&e;--o>=0&&(a*=256);)this[t+o]=e/a&255;return t+r},s.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){var i=Math.pow(2,8*r-1);_(this,e,t,r,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a|0)-s&255;return t+r},s.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){var i=Math.pow(2,8*r-1);_(this,e,t,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a|0)-s&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||_(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeFloatLE=function(e,t,r){return O(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return O(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return T(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return T(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,n){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,n);else if(this===e&&r<t&&t<n)for(var o=i-1;o>=0;--o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,n),t);return i},s.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,o=e.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(e=o)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=s.isBuffer(e)?e:s.from(e,n),u=a.length;if(0===u)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%u]}return this};var w=/[^+/0-9A-Za-z-_]/g;function S(e,t){t=t||1/0;for(var r,n=e.length,i=null,o=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319||a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function k(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function x(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(w,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function I(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function A(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var N=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}()},321:function(e,t){t.read=function(e,t,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?i-1:0,h=r?-1:1,p=e[t+f];for(f+=h,o=p&(1<<-l)-1,p>>=-l,l+=s;l>0;o=256*o+e[t+f],f+=h,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=n;l>0;a=256*a+e[t+f],f+=h,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=c}return(p?-1:1)*a*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,h=5960464477539062e-23*(23===i),p=n?0:o-1,d=n?1:-1,y=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(s=+!!isNaN(t),a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+f>=1?t+=h/u:t+=h*Math.pow(2,1-f),t*u>=2&&(a++,u/=2),a+f>=l?(s=0,a=l):a+f>=1?(s=(t*u-1)*Math.pow(2,i),a+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;e[r+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+p]=255&a,p+=d,a/=256,c-=8);e[r+p-d]|=128*y}}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}},a=!0;try{n[e](r,r.exports,o),a=!1}finally{a&&delete i[e]}return r.exports}o.ab="/ROOT/node_modules/next/dist/compiled/buffer/",t.exports=o(230)},44236,e=>{"use strict";var t=e.i(50461),r=e.i(90206);class n{API_URL=t.default.env.API_URL;API_URL_GRAPHQL=t.default.env.API_URL_GRAPHQL;CTFS_BASE_URL=t.default.env.CTFS_BASE_URL;FILESERVER_BASE_URL=t.default.env.FILESERVER_BASE_URL;IMAGE_PROXY_ENABLED="true"===t.default.env.IMAGE_PROXY_ENABLED;V_GRAPHQL=t.default.env.V_GRAPHQL;APP_VERSION=t.default.env.APP_VERSION}class i{realm="ct24";appendRealm=!0;graphqlConfig={customFragments:r.fragmentRegistry}}e.s(["Config",0,n,"ServiceConfig",0,i])},12321,e=>{"use strict";var t,r,n=e.i(98883),i=((t={}).ALL="all",t.AREA_ID="areaId",t.AREA_TYPE="areaType",t.AREA_TYPES="areaTypes",t.BALLOT_PARTY_ID="ballotPartyId",t.BATCH_ID="batchId",t.BASIC="basic",t.CANDIDATE_NUMBER="candidateNumber",t.COUNTY_ID="countyId",t.DISPLAYED_MESSAGES="displayedMessages",t.ELECTION_COUNTY_DB_ID="electionCountyDbId",t.ELECTION_ID="electionId",t.ELECTION_COUNTY_FILTER="electionCountyFilter",t.FIRST_PAGE_SIZE="firstPageSize",t.LAST="last",t.MAP_AREA_TYPE="mapAreaType",t.MOBILE="mobile",t.MUNICIPALITY_ID="municipalityId",t.NAME="name",t.ORDER="order",t.PAGE_SIZE="pageSize",t.PARENT_ID="parentId",t.PARTY_CODE="partyCode",t.PARTY_ID="partyId",t.POSITION="position",t.QUEUE_ID="queueId",t.SEARCH_STRING="searchString",t.START_INTERVAL="startInterval",t.STATE="state",t.STATES="states",t.STREAM_ID="streamId",t.STREAM_MODE="streamMode",t.AUTHOR_ID="authorId",t),o=((r={}).MUNICIPALITY="obec",r.ELECTION_COUNTY="volebni-obvod",r);let a={...n.BaseURLParams,...i,...o};e.s(["CustomURLParamsNotCached",()=>o,"URLParams",0,a])},13771,e=>{"use strict";var t=e.i(50461),r=e.i(35054),n=e.i(57792),i=e.i(19675),o=e.i(46078),a=e.i(44236),s=e.i(33879),u=e.i(72421);class c{static config=new a.Config;serviceManager=new o.ServiceManager;async callService(e,r){let n=r?i.ObjectUtils.merge(this.getDefaultServiceCallConfig(),r):this.getDefaultServiceCallConfig();return"gqlQuery"in e?this.serviceManager.callGraphQLService({...{url:`${c.config.API_URL_GRAPHQL}?client=${u.realmGQLMetadata.ct24}&version=${t.default.env.APP_VERSION||"local-development"}`},...i.ObjectUtils.merge({...n.appendRealm&&{variables:{realm:"ct24"}}},e)}).then(n=>n&&"error"in n&&n.error instanceof s.ApolloError&&n.error.message.includes("403")?(t.default.env.SERVER_API_TOKEN="",this.callService(e,r)):n):this.serviceManager.callService({...{url:c.config.API_URL},...i.ObjectUtils.merge({...n.appendRealm&&{variables:{realm:"ct24"}}},e)}).then(e=>e)}m(e,t){return i.ObjectUtils.createModelFromJSON(e,t)}mc(e,t){return i.ObjectUtils.createModelCollectionFromJSON(e,t)}getDefaultServiceCallConfig(){return{appendRealm:!0}}checkErrors=(e,t="Entity",r)=>e.find(e=>e.message.includes("404"))?null:e.length?{error:`${t} ${r} cannot be loaded.${e[0].message?` ${e[0].message}`:""}`}:{error:`${t} ${r} cannot be loaded.`}}(0,r._)([n.observable],c,"config",void 0),(0,r._)([n.observable],c.prototype,"serviceManager",void 0),e.s(["Logic",0,c])},46078,e=>{"use strict";var t=e.i(35054),r=e.i(57792),n=e.i(14836),i=e.i(60899),o=e.i(50461),a=i,s=e.i(95585),u=e.i(84936),c=e.i(59080),l=e.i(71596),f=e.i(59852),h=e.i(2716),p=e.i(81175),d=e.i(87552),y=e.i(90206);a.ServiceModel;class m extends a.Service{client;constructor(e){super(e);const{action:t,url:r,possibleTypes:n}=this.settings,i=t?`${r}${t}`:r,a=Number(o.default.env.HTTPS_AGENT_FREE_SOCKET_TIMEOUT)>0?Number(o.default.env.HTTPS_AGENT_FREE_SOCKET_TIMEOUT):3e4,c=Number(o.default.env.HTTPS_AGENT_KEEP_ALIVE_MSECS)>0?Number(o.default.env.HTTPS_AGENT_KEEP_ALIVE_MSECS):15e3,m=new l.HttpLink({uri:i,fetchOptions:{agent:new p.HttpsAgent({freeSocketTimeout:a,keepAliveMsecs:c})}}),v=(0,f.createPersistedQueryLink)({sha256:h.sha256,useGETForHashedQueries:!0}).concat(m);this.client=new s.ApolloClient({defaultOptions:{watchQuery:{errorPolicy:"all",fetchPolicy:"no-cache"},query:{errorPolicy:"all",fetchPolicy:"no-cache"}},link:v,cache:new u.InMemoryCache({...n&&{possibleTypes:n},fragments:(0,d.createFragmentRegistry)(y.fragmentRegistry)})})}fetch(){let{gqlQuery:e,variables:t,headers:r}=this.settings;return this.client.query({query:c.gql`
                    ${e}
                `,variables:t,context:{headers:r}}).then(e=>e.errors?{...e.data,errors:e.errors}:e.data).catch(e=>({error:e}))}}var v=e.i(39258);class g{activeRequests=new Map;logger=new v.Logger;get activeRequestsCount(){return this.activeRequests?this.activeRequests.size:0}addRequest(e){this.activeRequests.has(e.serviceKey)||this.activeRequests.set(e.serviceKey,e)}removeRequest(e){this.activeRequests.delete(e.serviceKey)}callService(e){return this.fetchService(i.Service,{...i.ServiceModel.getDefault(),...e})}callGraphQLService(e){return this.fetchService(m,{...e}).then(t=>(this.logger.getLogger(e,t),t))}fetchService(e,t){let r=new e(t);return r.settings.cancelable&&r.settings.servicePrefix&&this.cancelAllRequests(r.settings.servicePrefix),[n.Events.START,n.Events.COMPLETE,n.Events.CANCEL,n.Events.FAIL].forEach(e=>{r.on(e,()=>{e===n.Events.START?this.addRequest(r):this.removeRequest(r)})}),r.fetch()}cancelAllRequests(e){this.activeRequests.forEach((t,r)=>{e?r.startsWith(e)&&t.cancel():t.cancel()})}}(0,t._)([r.observable],g.prototype,"activeRequests",void 0),(0,t._)([r.observable],g.prototype,"logger",void 0),(0,t._)([r.computed],g.prototype,"activeRequestsCount",null),e.s(["ServiceManager",0,g],46078)},50624,6552,75255,67536,87027,87162,36850,97484,65278,85100,81284,30930,5937,78559,56334,60242,83114,e=>{"use strict";var t=e.i(59080);let r=`
    id
    sections {
        id
        path
        name
        publication {
            published
        }
    }
    mainSection {
        id
        path
        name
        publication {
            published
        }
    }
    title {
        main
        preview
        above
        prefix {
            titlePrefix {
                id
                text
                theme
            }
            expiration
            embargo
        }
    }
    content {
        type
        data {
            ...contentFragment
        }
    }
    perex {
        text
        content {
            type
            data {
                ...contentFragment
            }
        }
    }
    previewImage {
        ...photoFragment
    }
    tags {
        id
        name
        slug
        approved
    }
    sources {
        id
        name
    }
    authors {
        id
        givenName
        surname
        shortcut
    }
    curators {
        id
        givenName
        surname
        shortcut
    }
    seo {
        ogTitle
        ogDescription
        follow
        index
        ogImage {
            ...photoFragment
        }
    }
    slug
    publication {
        datePublished
        firstPublished
    }
    dateUpdated
    trendingArticlesTag {
        id
        name
    }
    eventHub {
        ...eventHubFragment
    }
`,n=t.gql`
    fragment articlePublishedFragment on ArticlePublished_Out {
        ${r}
    }
`,i=t.gql`
    fragment articleEmbeddedFragment on EmbeddedArticle_Out {
        ${r}
    }
`,o=`
    id
    mainSection {
        id
        path
    }
    title {
        main
        preview
        above
        prefix {
            titlePrefix {
                id
                text
                theme
            }
            expiration
            embargo
        }
    }
    perex {
        text
        content {
            type
        }
    }
    previewImage {
        ...photoListFragment
    }
    authors {
        id
        givenName
        surname
        shortcut
    }
    curators {
        id
        givenName
        surname
        shortcut
    }
    slug
    publication {
        datePublished
        firstPublished
    }
    dateUpdated
`,a=t.gql`
    fragment articleListFragment on Article_Out {
        ${o}
    }
`,s=t.gql`
    fragment articlePublishedListFragment on ArticlePublished_Out {
        ${o}
    }
`;e.s(["articleEmbeddedFragment",0,i,"articleListFragment",0,a,"articlePublishedFragment",0,n,"articlePublishedListFragment",0,s],50624);let u=t.gql`
    fragment attachmentFragment on Attachment_Out {
        id
        mimeType
        displayName
        downloadFilename
        publication {
            datePublished
            published
            deleted
        }
        realm
        src
        tags {
            id
            name
        }
        size
        type
}
`;e.s(["attachmentFragment",0,u],6552);let c={TagExtension_Out_Data:["TopicExtension_Out","InstitutionExtension_Out","PersonalityExtension_Out"]},l=t.gql`
    fragment tagExtensionFragment on TagExtension_Out_Data {
        ... on TopicExtension_Out {
            active
            facebookUrl
            instagramUrl
            longDescription
            topicName
            topicNameSecondCase
            topicNameSixthCase
            twitterUrl
            image {
                ...photoFragment
            }
        }
        ... on InstitutionExtension_Out {
            active
            name
            nameSecondCase
            nameSixthCase
            longDescription
            instagramUrl
            facebookUrl
            twitterUrl
            image {
                ...photoFragment
            }
        }

        ... on PersonalityExtension_Out {
            active
            firstName
            firstNameSecondCase
            firstNameSixthCase
            lastName
            longDescription
            gender
            function
            instagramUrl
            twitterUrl
            facebookUrl
            image {
                ...photoFragment
            }
        }
    }
`;e.s(["tagExtensionFragment",0,l,"tagPossibleTypes",0,c],75255);let f={ContentComponentMetadata_Out_Data:["Text_Out","Photo_Out","VideoComponent_Out","TextStreamComponent_Out","YouTube_Out","Spotify_Out","Instagram_Out","Flourish_Out","SoundCloud_Out","Twitter_Out","Facebook_Out","BlueSky_Out","PanelComponent_Out","Link_Out","QuoteComponent_Out","GalleryComponent_Out","EbuOutOfTheBox_Out","ElectionComponent_Out","AttachmentsComponent_Out","TrendingArticles_Out","EnetPulse_Out"],...c},h=t.gql`
    fragment contentFragment on ContentComponentMetadata_Out_Data {
        ... on Text_Out {
            html
        }
        ... on Photo_Out {
            title
            image {
                ...photoFragment
            }
        }
        ... on GalleryComponent_Out {
            gallery {
                ...galleryFragment
            }
        }
        ... on VideoComponent_Out {
            title
            video {
                ...videoFragment
            }
        }
        ... on TextStreamComponent_Out {
            height
            displayedMessages
            stream {
                ...textStreamListFragment
            }
        }
        ... on YouTube_Out {
            startTime
            youTubeId
        }
        ... on Spotify_Out {
            url
            size
        }
        ... on Instagram_Out {
            url
            caption
        }
        ... on Flourish_Out {
            url
        }
        ... on SoundCloud_Out {
            url
            theme
        }
        ... on Facebook_Out {
            url
            fullPost
        }
        ... on BlueSky_Out {
            url
        }
        ... on EnetPulse_Out {
            url
        }
        ... on EbuOutOfTheBox_Out {
            articleUrl
            countryCode
            countryName
            dataId
            language
            organisation
            version
        }
        ... on Twitter_Out {
            hideConversation
            theme
            url
        }
        ... on PanelComponent_Out {
            panel {
                title
                flag
                image {
                    ...photoFragment
                }
                content {
                    data {
                        html
                    }
                }
                publication {
                    published
                }
            }
            expanded
        }
        ... on Link_Out {
            linkDisplayMode
            title
            target
            href
            flag
            photo {
                ...photoFragment
            }
        }
        ... on QuoteComponent_Out {
            showImage
            quote {
                id
                realm
                quoteText
                date
                source
                author
                additionalText
                functionReference
                publication {
                    published
                }
                tag {
                    name
                    tagExtension {
                        data {
                            ...tagExtensionFragment
                        }
                        type
                    }
                }
                image {
                    ...photoFragment
                }
            }
        }
        ... on ElectionComponent_Out {
            preset {
                ...electionPresetFragment
            }
            component {
                ...electionComponentFragment
            }
            contentOptions
        }

        ... on AttachmentsComponent_Out {
            attachments {
                ...attachmentFragment
            }
        }

       ... on TrendingArticles_Out {
            layout
            rangeFirst
            rangeSecond
            source {
                type
                data {
                    section {
                        id
                        name
                    },
                    tag {
                        id
                        name
                    },
                    author {
                        id
                        givenName
                        surname
                    }
                }
            }
        }
    }
`;e.s(["contentFragment",0,h,"contentPossibleTypes",0,f],67536);let p=t.gql`
    fragment electionFragment on Election_Out {
        id
        name
        type
        startDate
        endDate
        round
        termStartDate
        termEndDate
        additionalInformation
    }
`;e.s(["electionFragment",0,p],87027);let d=t.gql`
    fragment electionComponentFragment on Component_Out {
        id
        description
        identifier
    }
`;e.s(["electionComponentFragment",0,d],87162);let y=t.gql`
    fragment electionPresetFragment on Preset_Out {
        id
        name
        election {
            ...electionFragment
        }
        electionSecondRound {
            ...electionFragment
        }
        autoRefresh
        options
    }
`;e.s(["electionPresetFragment",0,y],36850);let m=t.gql`
    fragment candidateFragment on Candidate_Out {
        id
        lastName
        firstName,
        candidateNumber,
        age,
        degreeBefore,
        degreeAfter,
        occupation,
        customOccupation,
        ballotParty {
            id
            abbreviation
            customAbbreviation
            drawnPartyNumber
            fullName
            longName
            customLongName
            note
            color
            textColor
            partyCode
            electionCounties {
                countyId
                drawnPartyNumber
                abbreviation
                longName
            }
        }
        affiliatingParty {
            abbreviation
            customAbbreviation
        }
        proposingParty {
            abbreviation
            customAbbreviation
        }
        # votes
        # votesPercent
        residency
        additionalInformation
        electionCounty {
            countyId
            name
        }
        validity
        image {
            ...photoListFragment
        }
    }
`;e.s(["candidateFragment",0,m],97484);let v=t.gql`
    fragment geoAreaFragment on GeographicalArea_Out {
        id
        additionalInformation
        officialName
        areaType
        note
        identifier {
            continentShortcut
            districtNutsCode
            foreignCountryShortcut
            municipalityCode
            regionNutsCode
        }
        parent {
            id
            name
        }
    }
`;e.s(["geoAreaFragment",0,v],65278);let g=t.gql`
    fragment photoFragment on Image_Out {
        id
        src
        title
        crops {
            name
            width
            height
            src
        }
        sources {
            name
        }
        publication {
            published
        }
}
`,b=t.gql`
    fragment photoListFragment on Image_Out {
        id
        src
        title
        crops {
            name
            width
            height
            src
            aspect
        }
        publication {
            published
        }
}
`;e.s(["photoFragment",0,g,"photoListFragment",0,b],85100);let _=t.gql`
    fragment queueColumnsContentFragment on QueueComponentMetadata_Out_Data {
        ... articleStripFragment
        ... headingFragment
        ... multilinkFragment
        ... nestedContentFragment
        ... subSectionListFragment
        ... eventHubComponentFragment

        ... on SimpleOpener_Out {
            layout,
            showDatePublished,
            showAuthors,
            articles {
                ...articleListFragment
            }
        }
        ... on ArticleList_Out {
            count,
            showDatePublished,
            showAuthors,
            articles {
                ...articleListFragment
            }
        }
        ... on ArticleFeed_Out {
            pageSize,
            showDatePublished,
            showAuthors
            articles {
                ...articleListFragment
            }
        }
    }
`;e.s(["queueColumnsContentFragment",0,_],81284);let E=["SimpleOpener_Out","Columns_Out","ColumnsPage_Out","Heading_Out","ArticleList_Out","ArticleFeed_Out","Opener_Out","MultiLink_Out","RecommendationsToWatchList_Out","NestedContentComponent_Out","ArticleStrip_Out","SubSectionList_Out","WideOpener_Out","SuperOpenerComponent_Out","VideoStripComponent_Out","NewsflixComponent_Out","EventHubComponent_Out"];({QueueComponentMetadata_Out_Data:[...E,"NestedSectionComponent_Out"],NestedSectionComponentMetadata_Out_Data:[...E],...f}),e.s(["queueContentFragment",0,e=>{let r="queueContentFragment on QueueComponentMetadata_Out_Data";return e?.nestedSection&&(r="queueContentNestedSectionFragment on NestedSectionComponentMetadata_Out_Data"),t.gql`
        fragment ${r}{
            ... queueColumnsContentFragment
            ... recommendedWatchFragment
            ... superOpenerComponentFragment
            ... videoStripComponentFragment
            ... newsflixFragment


            ... on WideOpener_Out {
                textBackground
                articles {
                    ...articleListFragment
                }
            }

            ... on Columns_Out {
                columnsLayout
                columns {
                    content {
                        type
                        data {
                            ... queueColumnsContentFragment
                        }
                    }
                }
            }

            ... on Opener_Out {
                content {
                type
                data {
                    ... on OpenerArticleLink_Out {
                    title
                    lead
                    buttonText
                    image {
                        ...photoListFragment
                    }
                    article {
                            id
                            title {
                                main
                                preview
                                above
                                prefix {
                                    titlePrefix {
                                        id
                                        text
                                        theme
                                    }
                                    expiration
                                    embargo
                                }
                            }
                            perex {
                                text
                                content {
                                    type
                                }
                            }
                            publication {
                                datePublished
                                published
                            }
                            previewImage {
                                id
                                title
                                src
                                crops {
                                    name
                                    src
                                }
                            }
                            mainSection {
                            path
                            }
                            slug
                    }
                    }
                    ... on OpenerSectionLink_Out {
                    title
                    lead
                    buttonText
                    image {
                        ...photoListFragment
                    }
                    section {
                        id
                        name
                        path
                    }
                    }
                    ... on OpenerTagLink_Out {
                    title
                    lead
                    buttonText
                    image {
                        ...photoListFragment
                        }
                    tag {
                        id
                        name
                        slug
                    }
                    }
                    ... on OpenerUrlLink_Out {
                    title
                    lead
                    buttonText
                    image {
                        ...photoListFragment
                        }
                    href
                    }
                }
                }
            }

            ... on VideoStripComponent_Out {
                videoStrip {
                    ...videoStripFragment
                }
            }

            ${e?.nestedSection?"":`
                ... nestedSectionComponentFragment
            `}
        }
    `}],30930);let O=t.gql`
    fragment queueLinkFragment  on  QueueComponentLinkMetadata_Out_Data {
        ... on ArticleLink_Out {
            articleLinkTitle: title
            articleLinkImage: image {
                ...photoListFragment
            }
            flag
            articleLinkEntity: entity {
                id
                title {
                    main
                    prefix {
                        titlePrefix {
                            id
                            text
                            theme
                        }
                        expiration
                        embargo
                    }
                }
                mainSection {
                    path
                }
                slug
                perex {
                    text
                    content {
                        type
                    }
                }
                previewImage {
                    ...photoListFragment
                }
            }
        }
            ... on SectionLink_Out {
            sectionLinkTitle: title
            sectionLinkImage: image {
                ...photoListFragment
            }
            flag
            sectionLinkEntity: entity {
                id
                name
                path
            }
        }
            ... on TagLink_Out {
            tagLinkTitle: title
            tagLinkImage: image {
                ...photoListFragment
            }
            flag
            tagLinkEntity: entity {
                id
                name
                slug
            }
        }
            ... on UrlLink_Out {
            urlLinkTitle: title
            urlLinkImage: image {
                ...photoListFragment
            }
            href
            flag
        }
    }
`;e.s(["queueLinkFragment",0,O],5937);let T=`
        id
        buttonText
        image {
            ...photoListFragment
            sources {
            name
            }
        }
        labels {
            id
            name
        }
        lead
        link {
            type
            data {
                ... on SuperOpenerArticleLink_Out {
                    article {
                        ...articleListFragment
                    }
                }
                ... on SuperOpenerSectionLink_Out {
                    section {
                        id
                        name
                        path
                    }
                }
                ... on SuperOpenerTagLink_Out {
                    tag {
                        id
                        name
                        slug
                    }
                }
                ... on SuperOpenerUrlLink_Out {
                    href
                }
            }
        }
        relatedArticles {
            ...articleListFragment
        }
        relatedArticlesTitle
        showAuthors
        showDatePublished
        textStream {
            id
            title
            mode
            note
            messageCount
            slug
            publication {
                datePublished
                published
                deleted
            }
            newestMessageTs
            oldestMessageTs
        }
        theme
        title
        video {
            id
            title
            type
            live {
                channelId
                from
                to
            }
            origin {
                versionId
                source
                duration
                indexes {
                    indexId
                }
            }
            playableNow
            upload {
                fileName
            }
            previewImage {
                ...photoListFragment
            }
            publication {
                published
            }
        }
        videoTitle
`,w=t.gql`
    fragment superOpenerFragment on SuperOpener_Out {
        ${T}
    }
`,S=t.gql`
    fragment superOpenerEmbeddedFragment on EmbeddedSuperOpener_Out {
        ${T}
    }
`;e.s(["superOpenerEmbeddedFragment",0,S,"superOpenerFragment",0,w],78559);let k=t.gql`
    fragment textStreamMessageFragment on Message_Out {
        id
        design
        stream
        shortText
        customDate
        pinned
        publication {
            embargo
            datePublished
            published
            deleted
        }
        content {
            type
            data {
                ...contentFragment
            }
        }
        icons {
            id
            src
            title
            publication {
                published
            }
        }
    }
`;e.s(["textStreamMessageFragment",0,k],56334);let x=t.gql`
    fragment weatherFragment on Forecast_Out {
        id
        updated
        area {
            name
            id
            identifier
            parent
            type
        }
        date
        parameters {
            rainProbability
            pressure {
                tendency
                value
            }
            bio {
                text
                value
            }
            cloudiness {
                day {
                    cover
                    icon
                    phenomenon
                    phenomenonIntensity
                }
                night {
                    cover
                    icon
                    phenomenon
                    phenomenonIntensity
                }
            }
            situation
            text {
                day
                night
            }
            sun {
                sunrise
                sunset
            }
            temperature {
                day {
                    feelsLike
                    max
                    min
                    water
                }
                night {
                    feelsLike
                    max
                    min
                    water
                }
            }
            wind {
                direction
                speed
                speedDescription
            }
            pollution {
                atmosphericConditions
                no2
                pm10
                pm2dot5
                so2
            }
        }
    }
`;e.s(["weatherFragment",0,x],60242);let I=t.gql`
    fragment galleryFragment on Gallery_Out {
        id
        title
        type
        showAuthor
        multimedia {
            type
            data {
                ... on GalleryImage_Out {
                    title
                    image {
                        ...photoFragment
                    }
                }
                ... on GalleryVideo_Out {
                    title
                    video {
                        ...videoFragment
                    }
                }
            }
        }
        publication {
            published
            deleted
            datePublished
        }
    }
`;e.s(["galleryFragment",0,I],83114)},90206,74778,e=>{"use strict";var t=e.i(59080),r=e.i(50624),n=e.i(6552),i=e.i(67536),o=e.i(87027),a=e.i(87162),s=e.i(36850),u=e.i(97484),c=e.i(65278),l=e.i(85100),f=e.i(81284),h=e.i(30930),p=e.i(5937),d=e.i(78559),y=e.i(75255),m=e.i(56334),v=e.i(60242),g=e.i(83114),b=e.i(38423),_=e.i(64576),E=e.i(95359),O=e.i(58543),T=e.i(82004),w=e.i(13511),S=e.i(81221),k=e.i(434),x=e.i(23610),I=e.i(23770),A=e.i(68877),N=e.i(18759),C=e.i(97291),D=e.i(25271),F=e.i(40351),R=e.i(95217);let L=t.gql`
    fragment textStreamFragment on TextStream_Out {
        id
        title
        mode
        note
        messageCount
        publication {
            datePublished
            published
            deleted
        }
        perex
        perexMedium {
            type
            data {
                ... on GalleryComponent_Out {
                    gallery {
                        ...galleryFragment
                    }
                }
                ... on Photo_Out {
                    title
                    image {
                        ...photoFragment
                    }
                }
                ... on VideoComponent_Out {
                    title
                    video {
                        ...videoFragment
                    }
                }
            }
        }
        slug
        seo {
            ogTitle
            ogDescription
            follow
            index
            ogImage {
                ...photoFragment
            }
        }
        authors {
            id
            givenName
            surname
            shortcut
        }
        newestMessageTs
        oldestMessageTs
    }
`,P=t.gql`
    fragment textStreamListFragment on TextStream_Out {
        id
        title
        mode
        note
        messageCount
        publication {
            datePublished
            published
            deleted
        }
        slug
        newestMessageTs
        oldestMessageTs
    }
`;e.s(["textStreamFragment",0,L,"textStreamListFragment",0,P],74778);let M=t.gql`
    ${r.articleEmbeddedFragment}
    ${r.articleListFragment}
    ${r.articlePublishedFragment}
    ${r.articlePublishedListFragment}
    ${b.articleStripFragment}
    ${n.attachmentFragment}
    ${u.candidateFragment}
    ${i.contentFragment}
    ${a.electionComponentFragment}
    ${o.electionFragment}
    ${s.electionPresetFragment}
    ${_.eventHubComponentFragment}
    ${E.eventHubFragment}
    ${g.galleryFragment}
    ${c.geoAreaFragment}
    ${O.headingFragment}
    ${T.multilinkFragment}
    ${w.nestedContentFragment}
    ${S.nestedSectionComponentFragment}
    ${k.newsflixFragment}
    ${l.photoFragment}
    ${l.photoListFragment}
    ${f.queueColumnsContentFragment}
    ${(0,h.queueContentFragment)()}
    ${(0,h.queueContentFragment)({nestedSection:!0})}
    ${p.queueLinkFragment}
    ${x.recommendedWatchFragment}
    ${I.seoFragment}
    ${A.seriesFragment}
    ${N.subSectionListFragment}
    ${C.superOpenerComponentFragment}
    ${d.superOpenerEmbeddedFragment}
    ${d.superOpenerFragment}
    ${y.tagExtensionFragment}
    ${L}
    ${P}
    ${m.textStreamMessageFragment}
    ${D.videoFragment}
    ${F.videoStripComponentFragment}
    ${R.videoStripFragment}
    ${v.weatherFragment}
`;e.s(["fragmentRegistry",0,M],90206)}]);

//# debugId=f2545b21-7dc6-2d02-b15e-d093266ca58f