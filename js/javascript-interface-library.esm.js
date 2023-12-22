//----------------------------------------------------------------------------//
//                        JavaScript Interface Library                        //
//----------------------------------------------------------------------------//
/**** get a reference to the "global" object ****/
var global = /*#__PURE__*/ Function('return this')();
// see https://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
//------------------------------------------------------------------------------
//--                             Object Functions                             --
//------------------------------------------------------------------------------
// allow methods from Object.prototype to be applied to "vanilla" objects
/**** Object_hasOwnProperty ****/
function Object_hasOwnProperty(Value, PropertyName) {
    return ((Value == null) || // let this method crash like its original
        ('hasOwnProperty' in Value) && (typeof Value.hasOwnProperty === 'function')
        ? Value.hasOwnProperty(PropertyName)
        : Object.prototype.hasOwnProperty.call(Value, PropertyName));
}
/**** Object_isPrototypeOf ****/
function Object_isPrototypeOf(Value, Candidate) {
    return ((Value == null) || // let this method crash like its original
        ('isPrototypeOf' in Value) && (typeof Value.isPrototypeOf === 'function')
        ? Value.isPrototypeOf(Candidate)
        : Object.prototype.isPrototypeOf.call(Value, Candidate));
}
/**** Object_propertyIsEnumerable ****/
function Object_propertyIsEnumerable(Value, PropertyName) {
    return ((Value == null) || // let this method crash like its original
        ('propertyIsEnumerable' in Value) && (typeof Value.propertyIsEnumerable === 'function')
        ? Value.propertyIsEnumerable(PropertyName)
        : Object.prototype.propertyIsEnumerable.call(Value, PropertyName));
}
/**** Object_toString ****/
function Object_toString(Value) {
    return ((Value == null) || // let this method crash like its original
        ('toString' in Value) && (typeof Value.toString === 'function')
        ? Value.toString()
        : Object.prototype.toString.call(Value));
}
/**** Object_toLocaleString ****/
function Object_toLocaleString(Value) {
    return ((Value == null) || // let this method crash like its original
        ('toLocaleString' in Value) && (typeof Value.toLocaleString === 'function')
        ? Value.toLocaleString()
        : Object.prototype.toString.call(Value)); // a missing "toLocaleString" method will crash Object.prototype.toLocaleString
}
/**** Object_valueOf ****/
function Object_valueOf(Value) {
    return ((Value == null) || // let this method crash like its original
        ('valueOf' in Value) && (typeof Value.valueOf === 'function')
        ? Value.valueOf()
        : Object.prototype.valueOf.call(Value));
}
/**** ObjectMergedWith ****/
function ObjectMergedWith(TargetObject) {
    var otherObjectList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherObjectList[_i - 1] = arguments[_i];
    }
    for (var i = 0, l = otherObjectList.length; i < l; i++) {
        var otherObject = otherObjectList[i];
        if (otherObject == null) {
            continue;
        }
        if (typeof otherObject === 'object') {
            for (var Key in otherObject) {
                var Descriptor = Object.getOwnPropertyDescriptor(otherObject, Key);
                if (Descriptor != null) {
                    Object.defineProperty(TargetObject, Key, Descriptor);
                }
            }
        }
        else {
            throwError('InvalidArgument: argument #' + (i + 1) + ' is not an object');
        }
    }
    return TargetObject;
}
/**** throwError - simplifies construction of named errors ****/
function throwError(Message) {
    var Match = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(Message);
    if (Match == null) {
        throw new Error(Message);
    }
    else {
        var namedError = new Error(Match[2]);
        namedError.name = Match[1];
        throw namedError;
    }
}
//------------------------------------------------------------------------------
//--                      Value Classification Functions                      --
//------------------------------------------------------------------------------
/**** ValueExists ****/
function ValueExists(Value) {
    return (Value != null);
}
/**** ValueIsMissing ****/
function ValueIsMissing(Value) {
    return (Value == null);
}
/**** ValueIsBoolean ****/
function ValueIsBoolean(Value) {
    return (typeof Value === 'boolean') || (Value instanceof Boolean);
}
/**** ValueIsNumber ****/
function ValueIsNumber(Value) {
    return (typeof Value === 'number') || (Value instanceof Number);
}
/**** ValueIsFiniteNumber (pure "isFinite" breaks on objects) ****/
function ValueIsFiniteNumber(Value) {
    return ((typeof Value === 'number') || (Value instanceof Number)) && isFinite(Value.valueOf());
}
/**** ValueIsNaN (numeric, but NaN - this differs from pure "isNaN") ****/
function ValueIsNaN(Value) {
    return ((typeof Value === 'number') || (Value instanceof Number)) && isNaN(Value.valueOf());
}
/**** ValueIsNumberInRange ****/
function ValueIsNumberInRange(Value, minValue, maxValue, withMin, withMax) {
    if (withMin === void 0) { withMin = true; }
    if (withMax === void 0) { withMax = true; }
    if (!ValueIsNumber(Value) || isNaN(Value)) {
        return false;
    }
    if (ValueIsFiniteNumber(minValue)) { // more robust than "isFinite" alone
        if (ValueIsFiniteNumber(maxValue)) { // more robust than "isFinite" alone
            if ((Value < minValue) || (!withMin && (Value === minValue)) ||
                (Value > maxValue) || (!withMax && (Value === maxValue))) {
                return false;
            }
        }
        else {
            if ((Value < minValue) || (!withMin && (Value === minValue))) {
                return false;
            }
        }
    }
    else {
        if (ValueIsFiniteNumber(maxValue)) { // more robust than "isFinite" alone
            if ((Value > maxValue) || (!withMax && (Value === maxValue))) {
                return false;
            }
        }
    }
    return true;
}
/**** ValueIsInteger ****/
function ValueIsInteger(Value) {
    if ((typeof Value !== 'number') && !(Value instanceof Number)) {
        return false;
    }
    Value = Value.valueOf();
    return isFinite(Value) && (Math.round(Value) === Value);
}
/**** ValueIsIntegerInRange ****/
function ValueIsIntegerInRange(Value, minValue, maxValue) {
    if (!ValueIsInteger(Value) || isNaN(Value)) {
        return false;
    }
    if (ValueIsFiniteNumber(minValue)) { // more robust than "isFinite" alone
        if (ValueIsFiniteNumber(maxValue)) { // more robust than "isFinite" alone
            if ((Value < minValue) || (Value > maxValue)) {
                return false;
            }
        }
        else {
            if (Value < minValue) {
                return false;
            }
        }
    }
    else {
        if (ValueIsFiniteNumber(maxValue)) { // more robust than "isFinite" alone
            if (Value > maxValue) {
                return false;
            }
        }
    }
    return true;
}
/**** ValueIsOrdinal ****/
function ValueIsOrdinal(Value) {
    if ((typeof Value !== 'number') && !(Value instanceof Number)) {
        return false;
    }
    Value = Value.valueOf();
    return isFinite(Value) && (Math.round(Value) === Value) && (Value >= 0);
}
/**** ValueIsCardinal ****/
function ValueIsCardinal(Value) {
    if ((typeof Value !== 'number') && !(Value instanceof Number)) {
        return false;
    }
    Value = Value.valueOf();
    return isFinite(Value) && (Math.round(Value) === Value) && (Value >= 1);
}
/**** ValueIsString ****/
function ValueIsString(Value) {
    return (typeof Value === 'string') || (Value instanceof String);
}
/**** ValueIs[Non]EmptyString ****/
var emptyStringPattern = /^\s*$/;
function ValueIsEmptyString(Value) {
    return ((typeof Value === 'string') || (Value instanceof String)) && emptyStringPattern.test(Value.valueOf());
}
function ValueIsNonEmptyString(Value) {
    return ((typeof Value === 'string') || (Value instanceof String)) && !emptyStringPattern.test(Value.valueOf());
}
/**** ValueIsStringMatching ****/
function ValueIsStringMatching(Value, Pattern) {
    return ((typeof Value === 'string') || (Value instanceof String)) && Pattern.test(Value.valueOf());
}
/**** ValueIsText ****/
var noCtrlCharsButCRLFPattern = /^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function ValueIsText(Value) {
    return ValueIsStringMatching(Value, noCtrlCharsButCRLFPattern);
}
/**** ValueIsTextline ****/
var noCtrlCharsPattern = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function ValueIsTextline(Value) {
    return ValueIsStringMatching(Value, noCtrlCharsPattern);
}
/**** ValueIsFunction ****/
function ValueIsFunction(Value) {
    return (typeof Value === 'function');
}
/**** ValueIsAnonymousFunction ****/
function ValueIsAnonymousFunction(Value) {
    return ((typeof Value === 'function') &&
        ((Value.name == null) || (Value.name === '')));
}
/**** ValueIsNamedFunction ****/
function ValueIsNamedFunction(Value) {
    return ((typeof Value === 'function') &&
        (Value.name != null) && (Value.name !== ''));
}
/**** ValueIsNativeFunction ****/
function ValueIsNativeFunction(Value) {
    return ((typeof Value === 'function') &&
        /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(Value.toString()));
}
/**** ValueIsScriptedFunction ****/
function ValueIsScriptedFunction(Value) {
    return ((typeof Value === 'function') &&
        !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(Value.toString()));
}
/**** ValueIsObject ****/
function ValueIsObject(Value) {
    return (Value != null) && (typeof Value === 'object');
}
/**** ValueIsPlainObject ****/
function ValueIsPlainObject(Value) {
    return ((Value != null) && (typeof Value === 'object') &&
        (Object.getPrototypeOf(Value) === Object.prototype));
}
/**** ValueIsVanillaObject ****/
function ValueIsVanillaObject(Value) {
    return ((Value != null) && (typeof Value === 'object') &&
        !(Value instanceof Object));
}
/**** ValueIsArray ****/
var ValueIsArray = Array.isArray;
/**** ValueIsList ("dense" array) ****/
function ValueIsList(Value, minLength, maxLength) {
    if (ValueIsArray(Value)) {
        for (var i = 0, l = Value.length; i < l; i++) {
            if (Value[i] === undefined) {
                return false;
            }
        }
        if (minLength != null) {
            if (Value.length < minLength) {
                return false;
            }
        }
        if (maxLength != null) {
            if (Value.length > maxLength) {
                return false;
            }
        }
        return true;
    }
    return false;
}
/**** ValueIsListSatisfying ****/
function ValueIsListSatisfying(Value, Validator, minLength, maxLength) {
    if (ValueIsArray(Value)) {
        try {
            for (var i = 0, l = Value.length; i < l; i++) {
                if (Validator(Value[i]) == false) {
                    return false;
                }
            }
            if (minLength != null) {
                if (Value.length < minLength) {
                    return false;
                }
            }
            if (maxLength != null) {
                if (Value.length > maxLength) {
                    return false;
                }
            }
            return true;
        }
        catch (Signal) { /* nop */ }
    }
    return false;
}
/**** ValueIsInstanceOf ****/
function ValueIsInstanceOf(Value, Constructor) {
    return (Value instanceof Constructor);
}
/**** ValueInheritsFrom ****/
function ValueInheritsFrom(Value, Prototype) {
    return Object_isPrototypeOf(Prototype, Value);
}
/**** ValueIsDate ****/
function ValueIsDate(Value) {
    return (Value instanceof Date);
}
/**** ValueIsError ****/
function ValueIsError(Value) {
    return (Value instanceof Error);
}
/**** ValueIsPromise ****/
function ValueIsPromise(Value) {
    return (Value != null) && (typeof Value.then === 'function');
}
// see https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise
/**** ValueIsRegExp ****/
function ValueIsRegExp(Value) {
    return (Value instanceof RegExp);
}
/**** ValueIsOneOf ****/
function ValueIsOneOf(Value, ValueList) {
    return (ValueList.indexOf(Value) >= 0);
} // no automatic unboxing of boxed values and vice-versa!
/**** ValueIsColor ****/
function ValueIsColor(Value) {
    return ValueIsString(Value) && (ColorSet.hasOwnProperty(Value) ||
        /^#[a-fA-F0-9]{6}$/.test(Value) ||
        /^#[a-fA-F0-9]{8}$/.test(Value) ||
        /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(Value) || // not perfect
        /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(Value) // dto.
    );
}
/**** ValueIsEMailAddress ****/
var EMailAddressPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
// see https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
function ValueIsEMailAddress(Value) {
    return ValueIsStringMatching(Value, EMailAddressPattern);
}
/**** ValueIsURL ****/
var noCtrlCharsOrWhitespacePattern = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function ValueIsURL(Value) {
    if (!ValueIsStringMatching(Value, noCtrlCharsOrWhitespacePattern) ||
        (Value === '')) {
        return false;
    }
    try {
        new URL(Value, 'file://');
        return true;
    }
    catch (Signal) {
        return false;
    }
}
//------------------------------------------------------------------------------
//--                      Argument Validation Functions                       --
//------------------------------------------------------------------------------
var rejectNil = false;
var acceptNil = true;
/**** validatedArgument ****/
function validatedArgument(Description, Argument, ValueIsValid, NilIsAcceptable, Expectation) {
    if (Argument == null) {
        if (NilIsAcceptable) {
            return Argument;
        }
        else {
            throwError("MissingArgument: no " + escaped(Description) + " given");
        }
    }
    else {
        if (ValueIsValid(Argument)) {
            switch (true) {
                case Argument instanceof Boolean:
                case Argument instanceof Number:
                case Argument instanceof String:
                    return Argument.valueOf(); // unboxes any primitives
                default:
                    return Argument;
            }
        }
        else {
            throwError("InvalidArgument: the given " + escaped(Description) + " is no valid " + escaped(Expectation));
        }
    }
}
/**** ValidatorForClassifier ****/
function ValidatorForClassifier(Classifier, NilIsAcceptable, Expectation) {
    var Validator = function (Description, Argument) {
        return validatedArgument(Description, Argument, Classifier, NilIsAcceptable, Expectation);
    };
    var ClassifierName = Classifier.name;
    if ((ClassifierName != null) && /^ValueIs/.test(ClassifierName)) {
        var ValidatorName = ClassifierName.replace(// derive name from validator
        /^ValueIs/, NilIsAcceptable ? 'allow' : 'expect');
        return FunctionWithName(Validator, ValidatorName);
    }
    else {
        return Validator; // without any specific name
    }
}
/**** FunctionWithName (works with older JS engines as well) ****/
function FunctionWithName(originalFunction, desiredName) {
    if (originalFunction == null) {
        throwError('MissingArgument: no function given');
    }
    if (typeof originalFunction !== 'function') {
        throwError('InvalidArgument: the given 1st Argument is not a JavaScript function');
    }
    if (desiredName == null) {
        throwError('MissingArgument: no desired name given');
    }
    if ((typeof desiredName !== 'string') && !(desiredName instanceof String)) {
        throwError('InvalidArgument: the given desired name is not a string');
    }
    if (originalFunction.name === desiredName) {
        return originalFunction;
    }
    try {
        Object.defineProperty(originalFunction, 'name', { value: desiredName });
        if (originalFunction.name === desiredName) {
            return originalFunction;
        }
    }
    catch (signal) { /* ok - let's take the hard way */ }
    var renamed = new Function('originalFunction', 'return function ' + desiredName + ' () {' +
        'return originalFunction.apply(this,Array.prototype.slice.apply(arguments))' +
        '}');
    return renamed(originalFunction);
} // also works with older JavaScript engines
/**** expect[ed]Value ****/
function expectValue(Description, Argument) {
    if (Argument == null) {
        throwError("MissingArgument: no " + escaped(Description) + " given");
    }
    else {
        return Argument.valueOf();
    }
}
var expectedValue = expectValue;
/**** allow/expect[ed]Boolean ****/
var allowBoolean = /*#__PURE__*/ ValidatorForClassifier(ValueIsBoolean, acceptNil, 'boolean value'), allowedBoolean = allowBoolean;
var expectBoolean = /*#__PURE__*/ ValidatorForClassifier(ValueIsBoolean, rejectNil, 'boolean value'), expectedBoolean = expectBoolean;
/**** allow/expect[ed]Number ****/
var allowNumber = /*#__PURE__*/ ValidatorForClassifier(ValueIsNumber, acceptNil, 'numeric value'), allowedNumber = allowNumber;
var expectNumber = /*#__PURE__*/ ValidatorForClassifier(ValueIsNumber, rejectNil, 'numeric value'), expectedNumber = expectNumber;
/**** allow/expect[ed]FiniteNumber ****/
var allowFiniteNumber = /*#__PURE__*/ ValidatorForClassifier(ValueIsFiniteNumber, acceptNil, 'finite numeric value'), allowedFiniteNumber = allowFiniteNumber;
var expectFiniteNumber = /*#__PURE__*/ ValidatorForClassifier(ValueIsFiniteNumber, rejectNil, 'finite numeric value'), expectedFiniteNumber = expectFiniteNumber;
/**** allow/expect[ed]NaN ****/
var allowNaN = /*#__PURE__*/ ValidatorForClassifier(ValueIsNaN, acceptNil, 'NaN value'), allowedNaN = allowNaN;
var expectNaN = /*#__PURE__*/ ValidatorForClassifier(ValueIsNaN, rejectNil, 'NaN value'), expectedNaN = expectNaN;
/**** allow[ed]NumberInRange ****/
function allowNumberInRange(Description, Argument, minValue, maxValue, withMin, withMax) {
    return (Argument == null
        ? Argument
        : expectedNumberInRange(Description, Argument, minValue, maxValue, withMin, withMax));
}
var allowedNumberInRange = allowNumberInRange;
/**** expect[ed]NumberInRange ****/
function expectNumberInRange(Description, Argument, minValue, maxValue, withMin, withMax) {
    expectNumber(Description, Argument);
    if (isNaN(Argument)) {
        throwError("InvalidArgument: the given " + escaped(Description) + " is not-a-number");
    }
    if (withMin == null) {
        withMin = true;
    }
    if (withMax == null) {
        withMax = true;
    }
    if ((minValue != null) && isFinite(minValue)) {
        if ((maxValue != null) && isFinite(maxValue)) {
            if ((Argument < minValue) || (!withMin && (Argument === minValue)) ||
                (Argument > maxValue) || (!withMax && (Argument === maxValue))) {
                throw new RangeError("the given " + escaped(Description) + " (" + Argument + ") is outside " +
                    ("the allowed range (" + minValue + "..." + maxValue + ")"));
            }
        }
        else {
            if ((Argument < minValue) || (!withMin && (Argument === minValue))) {
                throw new RangeError("the given " + escaped(Description) + " is below the allowed " +
                    ("minimum (" + Argument + " " + (withMin ? '<' : '<=') + " " + minValue + ")"));
            }
        }
    }
    else {
        if ((maxValue != null) && isFinite(maxValue)) {
            if ((Argument > maxValue) || (!withMax && (Argument === maxValue))) {
                throw new RangeError("the given " + escaped(Description) + " exceeds the allowed " +
                    ("maximum (" + Argument + " " + (withMax ? '>' : '>=') + " " + maxValue + ")"));
            }
        }
    }
    return Argument.valueOf();
}
var expectedNumberInRange = expectNumberInRange;
/**** allow/expect[ed]Integer ****/
var allowInteger = /*#__PURE__*/ ValidatorForClassifier(ValueIsInteger, acceptNil, 'integral numeric value'), allowedInteger = allowInteger;
var expectInteger = /*#__PURE__*/ ValidatorForClassifier(ValueIsInteger, rejectNil, 'integral numeric value'), expectedInteger = expectInteger;
/**** allow[ed]IntegerInRange ****/
function allowIntegerInRange(Description, Argument, minValue, maxValue) {
    return (Argument == null
        ? Argument
        : expectedIntegerInRange(Description, Argument, minValue, maxValue));
}
var allowedIntegerInRange = allowIntegerInRange;
/**** expect[ed]IntegerInRange ****/
function expectIntegerInRange(Description, Argument, minValue, maxValue) {
    expectInteger(Description, Argument);
    if (isNaN(Argument)) {
        throwError("InvalidArgument: the given " + escaped(Description) + " is not-a-number");
    }
    if ((minValue != null) && isFinite(minValue)) {
        if ((maxValue != null) && isFinite(maxValue)) {
            if ((Argument < minValue) || (Argument > maxValue)) {
                throw new RangeError("the given " + escaped(Description) + " (" + Argument + ") is outside " +
                    ("the allowed range (" + minValue + "..." + maxValue + ")"));
            }
        }
        else {
            if (Argument < minValue) {
                throw new RangeError("the given " + escaped(Description) + " is below the allowed " +
                    ("minimum (" + Argument + " < " + minValue + ")"));
            }
        }
    }
    else {
        if ((maxValue != null) && isFinite(maxValue)) {
            if (Argument > maxValue) {
                throw new RangeError("the given " + escaped(Description) + " exceeds the allowed " +
                    ("maximum (" + Argument + " > " + maxValue + ")"));
            }
        }
    }
    return Argument.valueOf();
}
var expectedIntegerInRange = expectIntegerInRange;
/**** allow/expect[ed]Ordinal ****/
var allowOrdinal = /*#__PURE__*/ ValidatorForClassifier(ValueIsOrdinal, acceptNil, 'ordinal number'), allowedOrdinal = allowOrdinal;
var expectOrdinal = /*#__PURE__*/ ValidatorForClassifier(ValueIsOrdinal, rejectNil, 'ordinal number'), expectedOrdinal = expectOrdinal;
/**** allow/expect[ed]Cardinal ****/
var allowCardinal = /*#__PURE__*/ ValidatorForClassifier(ValueIsCardinal, acceptNil, 'cardinal number'), allowedCardinal = allowCardinal;
var expectCardinal = /*#__PURE__*/ ValidatorForClassifier(ValueIsCardinal, rejectNil, 'cardinal number'), expectedCardinal = expectCardinal;
/**** allow/expect[ed]String ****/
var allowString = /*#__PURE__*/ ValidatorForClassifier(ValueIsString, acceptNil, 'literal string'), allowedString = allowString;
var expectString = /*#__PURE__*/ ValidatorForClassifier(ValueIsString, rejectNil, 'literal string'), expectedString = expectString;
/**** allow/expect[ed]NonEmptyString ****/
var allowNonEmptyString = /*#__PURE__*/ ValidatorForClassifier(ValueIsNonEmptyString, acceptNil, 'non-empty literal string'), allowedNonEmptyString = allowNonEmptyString;
var expectNonEmptyString = /*#__PURE__*/ ValidatorForClassifier(ValueIsNonEmptyString, rejectNil, 'non-empty literal string'), expectedNonEmptyString = expectNonEmptyString;
/**** allow[ed]StringMatching ****/
function allowStringMatching(Description, Argument, Pattern) {
    return (Argument == null
        ? Argument
        : expectedStringMatching(Description, Argument, Pattern));
}
var allowedStringMatching = allowStringMatching;
/**** expect[ed]StringMatching ****/
function expectStringMatching(Description, Argument, Pattern) {
    expectString(Description, Argument);
    if (Pattern.test(Argument)) {
        return Argument.valueOf();
    }
    else {
        throwError("InvalidArgument: the given " + escaped(Description) + " does not match the specified pattern");
    }
}
var expectedStringMatching = expectStringMatching;
/**** allow/expect[ed]Text ****/
var allowText = /*#__PURE__*/ ValidatorForClassifier(ValueIsText, acceptNil, 'literal text'), allowedText = allowText;
var expectText = /*#__PURE__*/ ValidatorForClassifier(ValueIsText, rejectNil, 'literal text'), expectedText = expectText;
/**** allow/expect[ed]Textline ****/
var allowTextline = /*#__PURE__*/ ValidatorForClassifier(ValueIsTextline, acceptNil, 'single line of text'), allowedTextline = allowTextline;
var expectTextline = /*#__PURE__*/ ValidatorForClassifier(ValueIsTextline, rejectNil, 'single line of text'), expectedTextline = expectTextline;
/**** allow/expect[ed]Function ****/
var allowFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsFunction, acceptNil, 'JavaScript function'), allowedFunction = allowFunction;
var expectFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsFunction, rejectNil, 'JavaScript function'), expectedFunction = expectFunction;
/**** allow/expect[ed]AnonymousFunction ****/
var allowAnonymousFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsAnonymousFunction, acceptNil, 'anonymous JavaScript function'), allowedAnonymousFunction = allowAnonymousFunction;
var expectAnonymousFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsAnonymousFunction, rejectNil, 'anonymous JavaScript function'), expectedAnonymousFunction = expectAnonymousFunction;
/**** allow/expect[ed]NamedFunction ****/
var allowNamedFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsNamedFunction, acceptNil, 'named JavaScript function'), allowedNamedFunction = allowNamedFunction;
var expectNamedFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsNamedFunction, rejectNil, 'named JavaScript function'), expectedNamedFunction = expectNamedFunction;
/**** allow/expect[ed]NativeFunction ****/
var allowNativeFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsNativeFunction, acceptNil, 'native JavaScript function'), allowedNativeFunction = allowNativeFunction;
var expectNativeFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsNativeFunction, rejectNil, 'native JavaScript function'), expectedNativeFunction = expectNativeFunction;
/**** allow/expect[ed]ScriptedFunction ****/
var allowScriptedFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsScriptedFunction, acceptNil, 'scripted JavaScript function'), allowedScriptedFunction = allowScriptedFunction;
var expectScriptedFunction = /*#__PURE__*/ ValidatorForClassifier(ValueIsScriptedFunction, rejectNil, 'scripted JavaScript function'), expectedScriptedFunction = expectScriptedFunction;
/**** allow/expect[ed]Object ****/
var allowObject = /*#__PURE__*/ ValidatorForClassifier(ValueIsObject, acceptNil, 'JavaScript object'), allowedObject = allowObject;
var expectObject = /*#__PURE__*/ ValidatorForClassifier(ValueIsObject, rejectNil, 'JavaScript object'), expectedObject = expectObject;
/**** allow/expect[ed]PlainObject ****/
var allowPlainObject = /*#__PURE__*/ ValidatorForClassifier(ValueIsPlainObject, acceptNil, '"plain" JavaScript object'), allowedPlainObject = allowPlainObject;
var expectPlainObject = /*#__PURE__*/ ValidatorForClassifier(ValueIsPlainObject, rejectNil, '"plain" JavaScript object'), expectedPlainObject = expectPlainObject;
/**** allow/expect[ed]VanillaObject ****/
var allowVanillaObject = /*#__PURE__*/ ValidatorForClassifier(ValueIsVanillaObject, acceptNil, '"vanilla" JavaScript object'), allowedVanillaObject = allowVanillaObject;
var expectVanillaObject = /*#__PURE__*/ ValidatorForClassifier(ValueIsVanillaObject, rejectNil, '"vanilla" JavaScript object'), expectedVanillaObject = expectVanillaObject;
/**** allow[ed]Array ****/
function allowArray(Description, Argument) {
    return (Argument == null
        ? Argument
        : expectedArray(Description, Argument));
}
var allowedArray = allowArray;
/**** expect[ed]Array ****/
function expectArray(Description, Argument) {
    if (Argument == null) {
        throwError("MissingArgument: no " + escaped(Description) + " given");
    }
    if (ValueIsArray(Argument)) {
        return Argument;
    }
    else {
        throwError("InvalidArgument: the given " + escaped(Description) + " is no JavaScript array");
    }
}
var expectedArray = expectArray;
/**** allow[ed]List ****/
function allowList(Description, Argument, Expectation, minLength, maxLength) {
    return (Argument == null
        ? Argument
        : expectedList(Description, Argument, Expectation, minLength, maxLength));
}
var allowedList = allowList;
/**** expect[ed]List ****/
function expectList(Description, Argument, Expectation, minLength, maxLength) {
    if (Argument == null) {
        throwError("MissingArgument: no " + escaped(Description) + " given");
    }
    if (ValueIsList(Argument, minLength, maxLength)) {
        return Argument;
    }
    else {
        throwError("InvalidArgument: the given " + escaped(Description) + " is " + (Expectation == null
            ? 'either not a list or contains an invalid number of elements'
            : 'no ' + escaped(Expectation)));
    }
}
var expectedList = expectList;
/**** allow[ed]ListSatisfying ****/
function allowListSatisfying(Description, Argument, Validator, Expectation, minLength, maxLength) {
    return (Argument == null
        ? Argument
        : expectedListSatisfying(Description, Argument, Validator, Expectation, minLength, maxLength));
}
var allowedListSatisfying = allowListSatisfying;
/**** expect[ed]ListSatisfying ****/
function expectListSatisfying(Description, Argument, Validator, Expectation, minLength, maxLength) {
    if (Argument == null) {
        throwError("MissingArgument: no " + escaped(Description) + " given");
    }
    if (ValueIsListSatisfying(Argument, Validator, minLength, maxLength)) {
        return Argument;
    }
    else {
        throwError("InvalidArgument: the given " + escaped(Description) + " is " + (Expectation == null
            ? 'either not a list or contains invalid elements'
            : 'no ' + escaped(Expectation)));
    }
}
var expectedListSatisfying = expectListSatisfying;
/**** allow[ed]InstanceOf ****/
function allowInstanceOf(Description, Argument, constructor, Expectation) {
    return (Argument == null
        ? Argument
        : expectedInstanceOf(Description, Argument, constructor, Expectation));
}
var allowedInstanceOf = allowInstanceOf;
/**** expect[ed]InstanceOf ****/
function expectInstanceOf(Description, Argument, constructor, Expectation) {
    if (Argument == null) {
        throwError("MissingArgument: no " + escaped(Description) + " given");
    }
    if (!(Argument instanceof constructor)) {
        throwError("InvalidArgument: the given " + escaped(Description) + " is no " + escaped(Expectation));
    }
    return Argument;
}
var expectedInstanceOf = expectInstanceOf;
/**** allow[ed]ValueInheritingFrom ****/
function allowValueInheritingFrom(Description, Argument, prototype, Expectation) {
    return (Argument == null
        ? Argument
        : expectedValueInheritingFrom(Description, Argument, prototype, Expectation));
}
var allowedValueInheritingFrom = allowValueInheritingFrom;
/**** expect[ed]ValueInheritingFrom ****/
function expectValueInheritingFrom(Description, Argument, prototype, Expectation) {
    if (Argument == null) {
        throwError("MissingArgument: no " + escaped(Description) + " given");
    }
    if (prototype.isPrototypeOf(Argument)) {
        return Argument;
    }
    else {
        throwError("InvalidArgument: the given " + escaped(Description) + " is no " + escaped(Expectation));
    }
}
var expectedValueInheritingFrom = expectValueInheritingFrom;
/**** allow/expect[ed]Date ****/
var allowDate = /*#__PURE__*/ ValidatorForClassifier(ValueIsDate, acceptNil, 'JavaScript Date object'), allowedDate = allowDate;
var expectDate = /*#__PURE__*/ ValidatorForClassifier(ValueIsDate, rejectNil, 'JavaScript Date object'), expectedDate = expectDate;
/**** allow/expect[ed]Error ****/
var allowError = /*#__PURE__*/ ValidatorForClassifier(ValueIsError, acceptNil, 'JavaScript Error object'), allowedError = allowError;
var expectError = /*#__PURE__*/ ValidatorForClassifier(ValueIsError, rejectNil, 'JavaScript Error object'), expectedError = expectError;
/**** allow/expect[ed]Promise ****/
var allowPromise = /*#__PURE__*/ ValidatorForClassifier(ValueIsPromise, acceptNil, 'JavaScript Promise (or "Thenable") object'), allowedPromise = allowPromise;
var expectPromise = /*#__PURE__*/ ValidatorForClassifier(ValueIsPromise, rejectNil, 'JavaScript Promise (or "Thenable") object'), expectedPromise = expectPromise;
/**** allow/expect[ed]RegExp ****/
var allowRegExp = /*#__PURE__*/ ValidatorForClassifier(ValueIsRegExp, acceptNil, 'JavaScript RegExp object'), allowedRegExp = allowRegExp;
var expectRegExp = /*#__PURE__*/ ValidatorForClassifier(ValueIsRegExp, rejectNil, 'JavaScript RegExp object'), expectedRegExp = expectRegExp;
/**** allow[ed]OneOf ****/
function allowOneOf(Description, Argument, ValueList) {
    return (Argument == null
        ? Argument
        : expectedOneOf(Description, Argument, ValueList));
}
var allowedOneOf = allowOneOf;
/**** expect[ed]OneOf ****/
function expectOneOf(Description, Argument, ValueList) {
    if (Argument == null) {
        throwError("MissingArgument: no " + escaped(Description) + " given");
    }
    if (ValueIsOneOf(Argument, ValueList)) {
        return ( // unboxes any primitives
        (Argument == null) || (typeof Argument.valueOf !== 'function')
            ? Argument
            : Argument.valueOf());
    }
    else {
        throwError("InvalidArgument: the given " + escaped(Description) + " is not among the supported values");
    }
}
var expectedOneOf = expectOneOf;
/**** allow/expect[ed]Color ****/
var allowColor = /*#__PURE__*/ ValidatorForClassifier(ValueIsColor, acceptNil, 'CSS color specification'), allowedColor = allowColor;
var expectColor = /*#__PURE__*/ ValidatorForClassifier(ValueIsColor, rejectNil, 'CSS color specification'), expectedColor = expectColor;
/**** allow/expect[ed]EMailAddress ****/
var allowEMailAddress = /*#__PURE__*/ ValidatorForClassifier(ValueIsEMailAddress, acceptNil, 'EMail address'), allowedEMailAddress = allowEMailAddress;
var expectEMailAddress = /*#__PURE__*/ ValidatorForClassifier(ValueIsEMailAddress, rejectNil, 'EMail address'), expectedEMailAddress = expectEMailAddress;
/**** allow/expect[ed]URL ****/
var allowURL = /*#__PURE__*/ ValidatorForClassifier(ValueIsURL, acceptNil, 'URL'), allowedURL = allowURL;
var expectURL = /*#__PURE__*/ ValidatorForClassifier(ValueIsURL, rejectNil, 'URL'), expectedURL = expectURL;
/**** escaped - escapes all control characters in a given string ****/
function escaped(Text) {
    var EscapeSequencePattern = /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g;
    var CtrlCharCodePattern = /[\x00-\x1f\x7f-\x9f]/g;
    return Text
        .replace(EscapeSequencePattern, function (Match) {
        return (Match === '\\' ? '\\\\' : Match);
    })
        .replace(CtrlCharCodePattern, function (Match) {
        switch (Match) {
            case '\0': return '\\0';
            case '\b': return '\\b';
            case '\f': return '\\f';
            case '\n': return '\\n';
            case '\r': return '\\r';
            case '\t': return '\\t';
            case '\v': return '\\v';
            default: {
                var HexCode = Match.charCodeAt(0).toString(16);
                return '\\x' + '00'.slice(HexCode.length) + HexCode;
            }
        }
    });
}
/**** unescaped - evaluates all escape sequences in a given string ****/
function unescaped(Text) {
    var EscapeSequencePattern = /\\[0bfnrtv'"\\\/]|\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}/g;
    return Text
        .replace(EscapeSequencePattern, function (Match) {
        switch (Match) {
            case '\\0': return '\0';
            case '\\b': return '\b';
            case '\\f': return '\f';
            case '\\n': return '\n';
            case '\\r': return '\r';
            case '\\t': return '\t';
            case '\\v': return '\v';
            case '\\\'': return "'";
            case '\\"': return '"';
            case '\\\\': return "\\";
            default: {
                var CharCode = parseInt(Match.slice(2), 16);
                return String.fromCharCode(CharCode);
            }
        }
    });
}
/**** quotable - makes a given string ready to be put in single/double quotes ****/
function quotable(Text, Quote) {
    if (Quote === void 0) { Quote = '"'; }
    var EscSeqOrSglQuotePattern = /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g;
    var EscSeqOrDblQuotePattern = /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g;
    var CtrlCharCodePattern = /[\x00-\x1f\x7f-\x9f]/g;
    return Text
        .replace(Quote === "'" ? EscSeqOrSglQuotePattern : EscSeqOrDblQuotePattern, function (Match) {
        switch (Match) {
            case "'": return "\\'";
            case '"': return '\\"';
            case '\\': return '\\\\';
            default: return Match;
        }
    })
        .replace(CtrlCharCodePattern, function (Match) {
        switch (Match) {
            case '\0': return '\\0';
            case '\b': return '\\b';
            case '\f': return '\\f';
            case '\n': return '\\n';
            case '\r': return '\\r';
            case '\t': return '\\t';
            case '\v': return '\\v';
            default: {
                var HexCode = Match.charCodeAt(0).toString(16);
                return '\\x' + '00'.slice(HexCode.length) + HexCode;
            }
        }
    });
}
/**** quoted ****/
function quoted(Text, Quote) {
    if (Quote === void 0) { Quote = '"'; }
    return Quote + quotable(Text, Quote) + Quote;
}
/**** HTMLsafe ****/
function HTMLsafe(Argument, EOLReplacement) {
    EOLReplacement = (EOLReplacement || '').trim() || '<br/>';
    return Argument.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g, function (Match) {
        switch (Match) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case "'": return '&apos;';
            case '\b': return '&#92;b';
            case '\f': return '&#92;f';
            case '\n': return EOLReplacement;
            case '\r': return '&#92;r';
            case '\t': return '&#92;t';
            case '\v': return '&#92;v';
            case '\\': return '&#92;';
            default:
                var Result = Match.charCodeAt(0).toString(16);
                return '&#x0000'.substring(3, 7 - Result.length) + Result + ';';
        }
    });
}
/**** MarkDownSafe ****/
function MarkDownSafe(Argument, EOLReplacement) {
    return HTMLsafe(Argument, EOLReplacement).replace(/:/g, '&#58;');
}
/**** ValuesDiffer ****/
function ValuesDiffer(thisValue, otherValue, Mode) {
    if (thisValue === otherValue) {
        return false;
    }
    var thisType = typeof thisValue;
    if (thisType !== typeof otherValue) {
        return true;
    }
    /**** ArraysDiffer ****/
    function ArraysDiffer(thisArray, otherArray, Mode) {
        if (!Array.isArray(otherArray)) {
            return true;
        }
        if (thisArray.length !== otherArray.length) {
            return true;
        }
        for (var i = 0, l = thisArray.length; i < l; i++) {
            if (ValuesDiffer(thisArray[i], otherArray[i], Mode)) {
                return true;
            }
        }
        return false;
    }
    /**** ObjectsDiffer ****/
    function ObjectsDiffer(thisObject, otherObject, Mode) {
        if (Object.getPrototypeOf(thisObject) !== Object.getPrototypeOf(otherObject)) {
            return true;
        }
        for (var key in thisObject) {
            if (!(key in otherObject)) {
                return true;
            }
        }
        for (var key in otherObject) {
            if (!(key in thisObject)) {
                return true;
            }
            if (ValuesDiffer(thisObject[key], otherObject[key], Mode)) {
                return true;
            }
        }
        return false;
    }
    switch (thisType) {
        case 'undefined':
        case 'boolean':
        case 'string':
        case 'function': return true; // most primitives are compared using "==="
        case 'number': return ((isNaN(thisValue) !== isNaN(otherValue)) ||
            (Math.abs(thisValue - otherValue) > Number.EPSILON));
        case 'object':
            if (thisValue == null) {
                return true;
            } // since "other_value" != null!
            if (otherValue == null) {
                return true;
            } // since "this_value" != null!
            if ((Mode === 'by-value') && ((thisValue instanceof Boolean) ||
                (thisValue instanceof Number) ||
                (thisValue instanceof String))) {
                return (thisValue.valueOf() !== otherValue.valueOf());
            }
            if (Array.isArray(thisValue)) {
                return ArraysDiffer(thisValue, otherValue, Mode);
            }
            return (Mode === 'by-reference'
                ? true // because (thisValue !== otherValue)
                : ObjectsDiffer(thisValue, otherValue, Mode));
        default: return true; // unsupported property type
    }
    return true;
}
/**** ValuesAreEqual ****/
function ValuesAreEqual(thisValue, otherValue, Mode) {
    return !ValuesDiffer(thisValue, otherValue, Mode);
}
/**** ObjectIsEmpty ****/
function ObjectIsEmpty(Candidate) {
    expectObject('candidate', Candidate);
    for (var Key in Candidate) {
        if (Object_hasOwnProperty(Candidate, Key)) {
            return false;
        }
    }
    return true;
}
/**** ObjectIsNotEmpty ****/
function ObjectIsNotEmpty(Candidate) {
    return !ObjectIsEmpty(Candidate);
}
/**** StringIsEmpty ****/
function StringIsEmpty(Candidate) {
    return /^\s*$/.test(Candidate);
}
/**** StringIsNotEmpty ****/
function StringIsNotEmpty(Candidate) {
    return !StringIsEmpty(Candidate);
}
/**** constrained ****/
function constrained(Value, Minimum, Maximum) {
    if (Minimum === void 0) { Minimum = -Infinity; }
    if (Maximum === void 0) { Maximum = Infinity; }
    return Math.max(Minimum, Math.min(Value, Maximum));
}
//------------------------------------------------------------------------------
//--                             Color Utilities                              --
//------------------------------------------------------------------------------
// built-in color names (see http://www.w3.org/TR/SVG/types.html#ColorKeywords) ----
var ColorSet = {
    transparent: 'rgba(0,0,0,0,0.0)',
    aliceblue: 'rgba(240,248,255,1.0)', lightpink: 'rgba(255,182,193,1.0)',
    antiquewhite: 'rgba(250,235,215,1.0)', lightsalmon: 'rgba(255,160,122,1.0)',
    aqua: 'rgba(0,255,255,1.0)', lightseagreen: 'rgba(32,178,170,1.0)',
    aquamarine: 'rgba(127,255,212,1.0)', lightskyblue: 'rgba(135,206,250,1.0)',
    azure: 'rgba(240,255,255,1.0)', lightslategray: 'rgba(119,136,153,1.0)',
    beige: 'rgba(245,245,220,1.0)', lightslategrey: 'rgba(119,136,153,1.0)',
    bisque: 'rgba(255,228,196,1.0)', lightsteelblue: 'rgba(176,196,222,1.0)',
    black: 'rgba(0,0,0,1.0)', lightyellow: 'rgba(255,255,224,1.0)',
    blanchedalmond: 'rgba(255,235,205,1.0)', lime: 'rgba(0,255,0,1.0)',
    blue: 'rgba(0,0,255,1.0)', limegreen: 'rgba(50,205,50,1.0)',
    blueviolet: 'rgba(138,43,226,1.0)', linen: 'rgba(250,240,230,1.0)',
    brown: 'rgba(165,42,42,1.0)', magenta: 'rgba(255,0,255,1.0)',
    burlywood: 'rgba(222,184,135,1.0)', maroon: 'rgba(128,0,0,1.0)',
    cadetblue: 'rgba(95,158,160,1.0)', mediumaquamarine: 'rgba(102,205,170,1.0)',
    chartreuse: 'rgba(127,255,0,1.0)', mediumblue: 'rgba(0,0,205,1.0)',
    chocolate: 'rgba(210,105,30,1.0)', mediumorchid: 'rgba(186,85,211,1.0)',
    coral: 'rgba(255,127,80,1.0)', mediumpurple: 'rgba(147,112,219,1.0)',
    cornflowerblue: 'rgba(100,149,237,1.0)', mediumseagreen: 'rgba(60,179,113,1.0)',
    cornsilk: 'rgba(255,248,220,1.0)', mediumslateblue: 'rgba(123,104,238,1.0)',
    crimson: 'rgba(220,20,60,1.0)', mediumspringgreen: 'rgba(0,250,154,1.0)',
    cyan: 'rgba(0,255,255,1.0)', mediumturquoise: 'rgba(72,209,204,1.0)',
    darkblue: 'rgba(0,0,139,1.0)', mediumvioletred: 'rgba(199,21,133,1.0)',
    darkcyan: 'rgba(0,139,139,1.0)', midnightblue: 'rgba(25,25,112,1.0)',
    darkgoldenrod: 'rgba(184,134,11,1.0)', mintcream: 'rgba(245,255,250,1.0)',
    darkgray: 'rgba(169,169,169,1.0)', mistyrose: 'rgba(255,228,225,1.0)',
    darkgreen: 'rgba(0,100,0,1.0)', moccasin: 'rgba(255,228,181,1.0)',
    darkgrey: 'rgba(169,169,169,1.0)', navajowhite: 'rgba(255,222,173,1.0)',
    darkkhaki: 'rgba(189,183,107,1.0)', navy: 'rgba(0,0,128,1.0)',
    darkmagenta: 'rgba(139,0,139,1.0)', oldlace: 'rgba(253,245,230,1.0)',
    darkolivegreen: 'rgba(85,107,47,1.0)', olive: 'rgba(128,128,0,1.0)',
    darkorange: 'rgba(255,140,0,1.0)', olivedrab: 'rgba(107,142,35,1.0)',
    darkorchid: 'rgba(153,50,204,1.0)', orange: 'rgba(255,165,0,1.0)',
    darkred: 'rgba(139,0,0,1.0)', orangered: 'rgba(255,69,0,1.0)',
    darksalmon: 'rgba(233,150,122,1.0)', orchid: 'rgba(218,112,214,1.0)',
    darkseagreen: 'rgba(143,188,143,1.0)', palegoldenrod: 'rgba(238,232,170,1.0)',
    darkslateblue: 'rgba(72,61,139,1.0)', palegreen: 'rgba(152,251,152,1.0)',
    darkslategray: 'rgba(47,79,79,1.0)', paleturquoise: 'rgba(175,238,238,1.0)',
    darkslategrey: 'rgba(47,79,79,1.0)', palevioletred: 'rgba(219,112,147,1.0)',
    darkturquoise: 'rgba(0,206,209,1.0)', papayawhip: 'rgba(255,239,213,1.0)',
    darkviolet: 'rgba(148,0,211,1.0)', peachpuff: 'rgba(255,218,185,1.0)',
    deeppink: 'rgba(255,20,147,1.0)', peru: 'rgba(205,133,63,1.0)',
    deepskyblue: 'rgba(0,191,255,1.0)', pink: 'rgba(255,192,203,1.0)',
    dimgray: 'rgba(105,105,105,1.0)', plum: 'rgba(221,160,221,1.0)',
    dimgrey: 'rgba(105,105,105,1.0)', powderblue: 'rgba(176,224,230,1.0)',
    dodgerblue: 'rgba(30,144,255,1.0)', purple: 'rgba(128,0,128,1.0)',
    firebrick: 'rgba(178,34,34,1.0)', red: 'rgba(255,0,0,1.0)',
    floralwhite: 'rgba(255,250,240,1.0)', rosybrown: 'rgba(188,143,143,1.0)',
    forestgreen: 'rgba(34,139,34,1.0)', royalblue: 'rgba(65,105,225,1.0)',
    fuchsia: 'rgba(255,0,255,1.0)', saddlebrown: 'rgba(139,69,19,1.0)',
    gainsboro: 'rgba(220,220,220,1.0)', salmon: 'rgba(250,128,114,1.0)',
    ghostwhite: 'rgba(248,248,255,1.0)', sandybrown: 'rgba(244,164,96,1.0)',
    gold: 'rgba(255,215,0,1.0)', seagreen: 'rgba(46,139,87,1.0)',
    goldenrod: 'rgba(218,165,32,1.0)', seashell: 'rgba(255,245,238,1.0)',
    gray: 'rgba(128,128,128,1.0)', sienna: 'rgba(160,82,45,1.0)',
    green: 'rgba(0,128,0,1.0)', silver: 'rgba(192,192,192,1.0)',
    greenyellow: 'rgba(173,255,47,1.0)', skyblue: 'rgba(135,206,235,1.0)',
    grey: 'rgba(128,128,128,1.0)', slateblue: 'rgba(106,90,205,1.0)',
    honeydew: 'rgba(240,255,240,1.0)', slategray: 'rgba(112,128,144,1.0)',
    hotpink: 'rgba(255,105,180,1.0)', slategrey: 'rgba(112,128,144,1.0)',
    indianred: 'rgba(205,92,92,1.0)', snow: 'rgba(255,250,250,1.0)',
    indigo: 'rgba(75,0,130,1.0)', springgreen: 'rgba(0,255,127,1.0)',
    ivory: 'rgba(255,255,240,1.0)', steelblue: 'rgba(70,130,180,1.0)',
    khaki: 'rgba(240,230,140,1.0)', tan: 'rgba(210,180,140,1.0)',
    lavender: 'rgba(230,230,250,1.0)', teal: 'rgba(0,128,128,1.0)',
    lavenderblush: 'rgba(255,240,245,1.0)', thistle: 'rgba(216,191,216,1.0)',
    lawngreen: 'rgba(124,252,0,1.0)', tomato: 'rgba(255,99,71,1.0)',
    lemonchiffon: 'rgba(255,250,205,1.0)', turquoise: 'rgba(64,224,208,1.0)',
    lightblue: 'rgba(173,216,230,1.0)', violet: 'rgba(238,130,238,1.0)',
    lightcoral: 'rgba(240,128,128,1.0)', wheat: 'rgba(245,222,179,1.0)',
    lightcyan: 'rgba(224,255,255,1.0)', white: 'rgba(255,255,255,1.0)',
    lightgoldenrodyellow: 'rgba(250,250,210,1.0)', whitesmoke: 'rgba(245,245,245,1.0)',
    lightgray: 'rgba(211,211,211,1.0)', yellow: 'rgba(255,255,0,1.0)',
    lightgreen: 'rgba(144,238,144,1.0)', yellowgreen: 'rgba(154,205,50,1.0)',
    lightgrey: 'rgba(211,211,211,1.0)',
};
/**** HexColor - converts a given color to #rrggbbaa ****/
function HexColor(Color) {
    var lowerColor = Color.toLowerCase();
    if (ColorSet.hasOwnProperty(lowerColor)) {
        // @ts-ignore TS dislikes indexing with literal keys
        Color = ColorSet[lowerColor];
    } // do not return here as color is now in RGBA format
    if (/^#[a-fA-F0-9]{6}$/.test(Color)) {
        return Color + 'FF';
    }
    if (/^#[a-fA-F0-9]{8}$/.test(Color)) {
        return Color;
    }
    var HexDigit = '0123456789ABCDEF';
    function dec2hex(Value) {
        if (Value > 255) {
            Value = 255;
        }
        return HexDigit[Math.trunc(Value / 16)] + HexDigit[Value % 16];
    }
    var RGBPattern = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i; // not perfect
    var Match = RGBPattern.exec(Color);
    if (Match != null) {
        return ('#' +
            dec2hex(parseInt(Match[1], 10)) +
            dec2hex(parseInt(Match[2], 10)) +
            dec2hex(parseInt(Match[3], 10)) + 'FF');
    }
    var RGBAPattern = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i; // not perfect
    Match = RGBAPattern.exec(Color);
    if (Match != null) {
        return ('#' +
            dec2hex(parseInt(Match[1], 10)) +
            dec2hex(parseInt(Match[2], 10)) +
            dec2hex(parseInt(Match[3], 10)) +
            dec2hex(parseFloat(Match[4]) * 255));
    }
    throwError('InvalidArgument: the given Value is not a valid CSS Color specification');
}
/**** RGBAColor - converts a given color to RGBA(r,g,b,a) ****/
function RGBAColor(Color) {
    var lowerColor = Color.toLowerCase();
    if (ColorSet.hasOwnProperty(lowerColor)) {
        // @ts-ignore TS dislikes indexing with literal keys
        return ColorSet[lowerColor]; // color is already in RGBA format
    }
    if (/^#[a-fA-F0-9]{6}$/.test(Color)) {
        return ('rgba(' +
            parseInt(Color.slice(1, 3), 16) + ',' +
            parseInt(Color.slice(3, 5), 16) + ',' +
            parseInt(Color.slice(5, 7), 16) + ', 1' +
            ')');
    }
    if (/^#[a-fA-F0-9]{8}$/.test(Color)) {
        return ('rgba(' +
            parseInt(Color.slice(1, 3), 16) + ',' +
            parseInt(Color.slice(3, 5), 16) + ',' +
            parseInt(Color.slice(5, 7), 16) + ',' +
            (parseInt(Color.slice(7), 16) / 255) +
            ')');
    }
    var RGBPattern = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i; //not perfect
    var Match = RGBPattern.exec(Color);
    if (Match != null) {
        return Color.slice(0, Color.length - 1) + ',1)';
    }
    var RGBAPattern = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i; // not perfect
    Match = RGBAPattern.exec(Color);
    if (Match != null) {
        return Color;
    }
    throwError('InvalidArgument: the given Value is not a valid CSS Color specification');
}
/**** shortHexColor - converts a given color into #RRGGBB ****/
function shortHexColor(Color) {
    return HexColor(Color).slice(0, 7);
}

export { ColorSet, FunctionWithName, HTMLsafe, HexColor, MarkDownSafe, ObjectIsEmpty, ObjectIsNotEmpty, ObjectMergedWith, Object_hasOwnProperty, Object_isPrototypeOf, Object_propertyIsEnumerable, Object_toLocaleString, Object_toString, Object_valueOf, RGBAColor, StringIsEmpty, StringIsNotEmpty, ValidatorForClassifier, ValueExists, ValueInheritsFrom, ValueIsAnonymousFunction, ValueIsArray, ValueIsBoolean, ValueIsCardinal, ValueIsColor, ValueIsDate, ValueIsEMailAddress, ValueIsEmptyString, ValueIsError, ValueIsFiniteNumber, ValueIsFunction, ValueIsInstanceOf, ValueIsInteger, ValueIsIntegerInRange, ValueIsList, ValueIsListSatisfying, ValueIsMissing, ValueIsNaN, ValueIsNamedFunction, ValueIsNativeFunction, ValueIsNonEmptyString, ValueIsNumber, ValueIsNumberInRange, ValueIsObject, ValueIsOneOf, ValueIsOrdinal, ValueIsPlainObject, ValueIsPromise, ValueIsRegExp, ValueIsScriptedFunction, ValueIsString, ValueIsStringMatching, ValueIsText, ValueIsTextline, ValueIsURL, ValueIsVanillaObject, ValuesAreEqual, ValuesDiffer, acceptNil, allowAnonymousFunction, allowArray, allowBoolean, allowCardinal, allowColor, allowDate, allowEMailAddress, allowError, allowFiniteNumber, allowFunction, allowInstanceOf, allowInteger, allowIntegerInRange, allowList, allowListSatisfying, allowNaN, allowNamedFunction, allowNativeFunction, allowNonEmptyString, allowNumber, allowNumberInRange, allowObject, allowOneOf, allowOrdinal, allowPlainObject, allowPromise, allowRegExp, allowScriptedFunction, allowString, allowStringMatching, allowText, allowTextline, allowURL, allowValueInheritingFrom, allowVanillaObject, allowedAnonymousFunction, allowedArray, allowedBoolean, allowedCardinal, allowedColor, allowedDate, allowedEMailAddress, allowedError, allowedFiniteNumber, allowedFunction, allowedInstanceOf, allowedInteger, allowedIntegerInRange, allowedList, allowedListSatisfying, allowedNaN, allowedNamedFunction, allowedNativeFunction, allowedNonEmptyString, allowedNumber, allowedNumberInRange, allowedObject, allowedOneOf, allowedOrdinal, allowedPlainObject, allowedPromise, allowedRegExp, allowedScriptedFunction, allowedString, allowedStringMatching, allowedText, allowedTextline, allowedURL, allowedValueInheritingFrom, allowedVanillaObject, constrained, escaped, expectAnonymousFunction, expectArray, expectBoolean, expectCardinal, expectColor, expectDate, expectEMailAddress, expectError, expectFiniteNumber, expectFunction, expectInstanceOf, expectInteger, expectIntegerInRange, expectList, expectListSatisfying, expectNaN, expectNamedFunction, expectNativeFunction, expectNonEmptyString, expectNumber, expectNumberInRange, expectObject, expectOneOf, expectOrdinal, expectPlainObject, expectPromise, expectRegExp, expectScriptedFunction, expectString, expectStringMatching, expectText, expectTextline, expectURL, expectValue, expectValueInheritingFrom, expectVanillaObject, expectedAnonymousFunction, expectedArray, expectedBoolean, expectedCardinal, expectedColor, expectedDate, expectedEMailAddress, expectedError, expectedFiniteNumber, expectedFunction, expectedInstanceOf, expectedInteger, expectedIntegerInRange, expectedList, expectedListSatisfying, expectedNaN, expectedNamedFunction, expectedNativeFunction, expectedNonEmptyString, expectedNumber, expectedNumberInRange, expectedObject, expectedOneOf, expectedOrdinal, expectedPlainObject, expectedPromise, expectedRegExp, expectedScriptedFunction, expectedString, expectedStringMatching, expectedText, expectedTextline, expectedURL, expectedValue, expectedValueInheritingFrom, expectedVanillaObject, global, quotable, quoted, rejectNil, shortHexColor, throwError, unescaped, validatedArgument };
//# sourceMappingURL=javascript-interface-library.esm.js.map
