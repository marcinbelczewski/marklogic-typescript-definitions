// Type definitions for XSLTBuiltins
// Definitions: 

/**
The XSLT functions.  These functions are available in XSLT only.
They are defined in
XSL Transformations (XSLT) Version 2.0.
**/

declare module XSLTBuiltins {

  interface fn {

    /** Returns true if and only if there is a type whose name matches the value of the $type-name argument is present in the static context. This is an XSLT function, and it is available in both XSLT and in XQuery 1.0-ml. **/
    typeAvailable(typeName: String): Object;

    /** Returns true if and only if there is a function whose name and optionally arity matches the value of the $function-name and the optional $arity arguments. This is an XSLT function, and it is available in both XSLT, XQuery 1.0-ml, and JavaScript. **/
    functionAvailable(functionName: String, arity?: Number): Object;


  }
  interface xdmp {


  }
}
