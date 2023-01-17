<template>
  <h2>Day 1 — Languages</h2>
  <Warn
    >Be aware the queriess in this page can be quite large, the results may take
    some time to appear.</Warn
  >
  <p>This wikidata query fetches</p>
  <ul>
    <li>The name of a language</li>
    <li>Its linguistic typology</li>
    <li>The number of speakers of the language</li>
    <li>The language’s linguistic family</li>
  </ul>
  <p>
    All elements in this query are required to be non-null. By default, the
    bubble chart show shows the amount of speakers of each language.
  </p>
  <details>
    <summary>SparkQL query used</summary>
    <pre>
          <code>
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
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  ?item wdt:P4132 ?linguistic_typology;
    wdt:P1098 ?number_of_speakers__writers__or_signers;
    wdt:P279 ?subclass_of.
}</code>
        </pre>
  </details>
  <iframe
    style="width: 100%; height: 80vh; border: none"
    src="https://query.wikidata.org/embed.html#%23defaultView%3ABubbleChart%0ASELECT%20%0A%3FitemLabel%0A%3Fsubclass_of%0A%3Fsubclass_ofLabel%0A%3Flinguistic_typology%0A%3Flinguistic_typologyLabel%0A%3Fnumber_of_speakers__writers__or_signers%0AWHERE%20%7B%0A%20%20%3Fitem%20wdt%3AP31%20wd%3AQ34770.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fitem%20wdt%3AP4132%20%3Flinguistic_typology%3B%0A%20%20%20%20wdt%3AP1098%20%3Fnumber_of_speakers__writers__or_signers%3B%0A%20%20%20%20wdt%3AP279%20%3Fsubclass_of.%0A%7D"
    referrerpolicy="origin"
    sandbox="allow-scripts allow-same-origin allow-popups"
  ></iframe>
  <p>
    Below the same data is used to group languages by their linguistic typology,
    rendered with RAWGraphs.
  </p>
  <Info>Click on the image to open it in a new tab and zoom in.</Info>
  <ImageLink src="img/group-language-typology.svg" />

  <!-- <p class="center-text">
    <a href="img/group-language-typology.svg" target="_blank">
      <img src="/img/group-language-typology.svg" class="padded centered" />
    </a>
  </p> -->
</template>

<script lang="ts" setup>
import Info from "@/components/Info.vue";
import Warn from "@/components/Warn.vue";
import ImageLink from "@/components/ImageLink.vue";
</script>
