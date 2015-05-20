// Type definitions for ThesaurusModule
// Definitions: 

/**
  The thesaurus functions are designed to help you manage thesaurus 
  documents and then use those thesaurus documents to lookup synonyms 
  for words used in queries. The thesaurus function module is installed as 
  the following file:
  install_dir/Modules/MarkLogic/thesaurus.xqy
  where install_dir is the directory in which 
  MarkLogic Server is installed.
  To use the thesaurus.xqy module in your own XQuery modules, 
  include the following line in your XQuery prolog:
  import module namespace 
     thsr="http://marklogic.com/xdmp/thesaurus" at "/MarkLogic/thesaurus.xqy";
  **/

declare module ThesaurusModule {

  interface thsr {

    /** Load the file specified in $path to the thesaurus at $uri. Exisiting documents at $uri are overwritten. **/
    load(path: String, uri: String):  empty-sequence() ;

    /** Load the entries in $thsr into the thesaurus at $uri. If there is no document at $uri a new one will be created. If there is a document at $uri it will be overwritten. **/
    insert(uri: String, thsr: Thesaurus)):  empty-sequence() ;

    /** Adds the entry $entry to the thesaurus at $uri. **/
    setEntry(uri: String, entry: Entry)):  empty-sequence() ;

    /** Removes all entries with term $term from the thesaurus document(s) at $uri. **/
    removeTerm(uri: String, term: String):  empty-sequence() ;

    /** Removes all entries that exactly match $entry from the thesaurus documents(s) at $uri. **/
    removeEntry(uri: String, entry: Entry)):  empty-sequence() ;

    /** Adds a synonym to the specified thesaurus entry. **/
    addSynonym(entry: Entry), synonym: Synonym)):  empty-sequence() ;

    /** Removes synonym $synonym from thesaurus entry $entry. **/
    removeSynonym(entry: Entry), synonym: Synonym)):  empty-sequence() ;

    /** Returns all entries for term $term in the thesaurus document(s) at $uri. **/
    lookup(uri: String, term: String): Entry);

    /** Returns a sequence of all entries that are found by looking up terms in the query and/or subqueries of $query in the thesaurus document(s) at $uri. **/
    queryLookup(uri: String, query: Query): Entry);

    /** Returns a query that searches for all the query strings specified in $query and their synonyms as found in $entries. **/
    expand(query: Query, entries: Entry), newWeight: Number, minWeight: Number, filter: Node): Query ;


  }
}
