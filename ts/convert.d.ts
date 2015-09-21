// Type definitions for ConvertModule
// Definitions: 

/**
The conversion module is part of the conversion processing pipeline.
These functions provide some basic path manipulation functions.

To use the conversion module as part of your own XQuery module, include the
following line in your XQuery prolog:

import module namespace cvt = "http://marklogic.com/cpf/convert"
         at "/MarkLogic/conversion/convert.xqy";
You will need to ensure that the conversion module is loaded into the same
modules database as the importing module.
The library namespace prefix cvt is not predefined in
the server.
**/

interface cvtFunctions {

    /** Return the base path of the URI, cutting off the filename. **/
  basepath(uri: string): Object;

    /** Return the filename part of the URI, cutting off any query strings or fragments. **/
  basename(uri: string): Object;

    /** Construct the destination URI from the source URI using the following rules: The path prefix of the destination URI is the same as the source URI's. The filename in the destination maps '.' to '_' and appends the given extension. **/
  destinationUri(uri: string, extension: string): Object;

    /** Construct the URI for the part using the following rules: The path prefix of the part URI is the same source URI's, followed by a subdirectory name. The subdirectory name is formed by mapping '.' to '_' in the source filename and appending '_parts' to it. The part's filename is unchanged, but any part path is removed. **/
  partUri(uri: string, part: string): Object;

    /** Save a set of converted documents, with appropriate links. If there is a main document, it must be the first listed in the manifest. The order in the manifest (as in xdmp:xxx-convert) must match the order of document nodes. Any cleaning or other preprocessing of the documents must already have been done. If certain parts should have been created in a certain state or with other initial properties, that must be done after the call to this function. **/
  saveConvertedDocuments(sourceUri: string, destinationUri: string, manifest: Node, docs: Node, destinationCollections?: string): Object;

}
declare var cvt:cvtFunctions
