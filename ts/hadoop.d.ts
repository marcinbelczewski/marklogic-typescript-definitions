// Type definitions for HadoopModule
// Definitions: 

/**
    This module provides helper functions for creating advanced mode
     input and split queries for the MarkLogic Connector for Hadoop. For
     details, see the MarkLogic Connector for Hadoop Developer's Guide.
    
    The Hadoop function module is installed as the following file:
    install_dir/Modules/MarkLogic/hadoop.xqy
    where install_dir is the directory in which 
	    MarkLogic Server is installed.
    To use the hadoop.xqy module in your own XQuery modules, 
     include the following line in your XQuery prolog:
    
import module namespace hadoop="http://marklogic.com/xdmp/hadoop" 
	    at "/MarkLogic/hadoop.xqy";
  **/

interface hadoopFunctions {

    /** This function returns (forest_id, record_count, host_name) tuples usable with the MarkLogic Connector for Hadoop to generate input splits in advanced input mode. **/
  getSplits(nsbindings: string, docSelector: string, query: string): string;

}
declare var hadoop:hadoopFunctions
