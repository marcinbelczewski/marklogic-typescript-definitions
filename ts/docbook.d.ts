// Type definitions for DocBookModule
// Definitions: 

/**
The DocBook conversion module is part of the conversion processing pipeline.
These functions are used to manipulate DocBook as part
of conversion processing.

To use the DocBook module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace dbk = "http://marklogic.com/cpf/docbook"
         at "/MarkLogic/conversion/docbook.xqy";
You will need to ensure that the DocBook module is loaded into the same
modules database as the importing module.
The library namespace prefix dbk is not predefined in
the server.
**/

interface dbkFunctions {

    /** Convert XHTML to DocBook lite vocabulary, if possible. The section structuring depends on the presence of div elements with mlsection markers, as produced by xhtml:restructure. **/
  convert(doc: Node, options: Node): Object;

}
declare var dbk:dbkFunctions
