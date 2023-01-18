import{_ as l,o as a,c as t,a as i,r as u,d as _,b as s,w as o,F as c,e as d,f as r}from"./index-295d2762.js";import{I as g}from"./ImageLink-eda71f14.js";const p={},m={class:"info"};function f(e,n){return a(),t("div",m,[i("p",null,[u(e.$slots,"default")])])}const b=l(p,[["render",f]]),h={},w={class:"warning"};function y(e,n){return a(),t("div",w,[i("p",null,[u(e.$slots,"default")])])}const A=l(h,[["render",y]]),k=i("h2",null,"Day 1 — Languages",-1),E=d(`<p>This wikidata query fetches</p><ul><li>The name of a language</li><li>Its linguistic typology</li><li>The number of speakers of the language</li><li>The language’s linguistic family</li></ul><p> All elements in this query are required to be non-null. By default, the bubble chart show shows the amount of speakers of each language. </p><details><summary>SparkQL query used</summary><pre>          <code>
#defaultView:BubbleChart
SELECT
?itemLabel
?subclass_of
?subclass_ofLabel
?linguistic_typology
?linguistic_typologyLabel
?number_of_speakers__writers__or_signers
WHERE {
  ?item wdt:P31 wd:Q34770.
  SERVICE wikibase:label { bd:serviceParam wikibase:language &quot;[AUTO_LANGUAGE],en&quot;. }
  ?item wdt:P4132 ?linguistic_typology;
    wdt:P1098 ?number_of_speakers__writers__or_signers;
    wdt:P279 ?subclass_of.
}</code>
        </pre></details><iframe style="width:100%;height:80vh;border:none;" src="https://query.wikidata.org/embed.html#%23defaultView%3ABubbleChart%0ASELECT%20%0A%3FitemLabel%0A%3Fsubclass_of%0A%3Fsubclass_ofLabel%0A%3Flinguistic_typology%0A%3Flinguistic_typologyLabel%0A%3Fnumber_of_speakers__writers__or_signers%0AWHERE%20%7B%0A%20%20%3Fitem%20wdt%3AP31%20wd%3AQ34770.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP4132%20%3Flinguistic_typology%3B%0A%20%20%20%20wdt%3AP1098%20%3Fnumber_of_speakers__writers__or_signers%3B%0A%20%20%20%20wdt%3AP279%20%3Fsubclass_of.%0A%7D" referrerpolicy="origin" sandbox="allow-scripts allow-same-origin allow-popups"></iframe><p> Below the same data is used to group languages by their linguistic typology, rendered with RAWGraphs. </p>`,6),C=_({__name:"Day1",setup(e){return(n,B)=>(a(),t(c,null,[k,s(A,null,{default:o(()=>[r("Be aware the queries in this page can be quite large, the results may take some time to appear.")]),_:1}),E,s(b,null,{default:o(()=>[r("Click on the image to open it in a new tab and zoom in.")]),_:1}),s(g,{src:"img/group-language-typology.svg"})],64))}});export{C as default};
