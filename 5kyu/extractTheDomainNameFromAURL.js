/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

// https://www.codewars.com/kata/514a024011ea4fb54200004b/
// https://www.codewars.com/kata/reviews/553a8bb91e0399d6f70001b9/groups/634ac433675bc30001fbea65/

const domainName = url => url.split("//").pop().replace("www.", "").split(".")[0];
