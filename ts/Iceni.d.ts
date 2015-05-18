// Type definitions for PDFConvert
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/Iceni.xml

/**
  Includes the PDF convert functions using the Iceni technology.
**/

declare module PDFConvert {

  interface xdmp {

    /** Converts a PDF file to XHTML. Returns several nodes, including a parts node, the converted document xml node, and any other document parts (for example, css files and images). The first node is the parts node, which contains a manefest of all of the parts generated as result of the conversion. **/
    pdfConvert(doc: node(), filename: xs:string, options?: (element()|map:map)): node();


  }
}
