// Type definitions for StringBuiltins
// Definitions: 

/****/

interface fnFunctions {

    /** Returns true if the specified $input matches the specified $pattern, otherwise returns false. **/
  matches(input: string, pattern: string, flags?: string): boolean;

    /** Returns a string constructed by replacing the specified $pattern on the $input string with the specified $replacement string. **/
  replace(input: string, pattern: string, replacement: string, flags?: string): string;

    /** The result of the function is a new element node whose string value is the original string, but which contains markup to show which parts of the input match the regular expression. **/
  analyzeString(input: string, regex: string, flags?: string): MLNode<any>;

    /** Returns a sequence of strings contructed by breaking the specified input into substrings separated by the specified $pattern. The specified $pattern is not returned as part of the returned items. **/
  tokenize(input: string, pattern: string, flags?: string): string;

}
declare var fn:fnFunctions
