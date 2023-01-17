<template>
  <h2>Day 2 — Les Fleurs du Mal</h2>
  <p>
    On day two, I chose to analyze the text of Charles Baudelaire’s
    <i>Les Fleurs du Mal</i>, found on
    <a href="https://www.gutenberg.org/ebooks/6099">Gutenberg</a>.
  </p>
  <h3>Most Frequent Words</h3>
  <p>
    I went to
    <a href="https://www.online-utility.org/text/analyzer.jsp"
      >Online-Utility.org's text analyzer</a
    >
    to have a look at some frequency statistics. Unfortunately, the top words
    are stop words that don’t hold any real meaning. I therefore chose to first
    filter the text and remove all of its stop words as well as words shorter
    than three characters, based on a list provided by the
    <a href="http://members.unine.ch/jacques.savoy/clef/index.html"
      >Université de Neufchâtel</a
    >.
  </p>
  <p>
    I quickly wrote a program in Rust in order to filter out all these words,
    you can find the code below.
  </p>
  <details>
    <summary>Code used to simplify input text</summary>
    <highlightjs language="rust" :code="rustCode" />
  </details>
  <p>
    Considering the filtered output, these words are the thirty most frequent
    words the service could find:
  </p>
  <table class="centered">
    <thead>
      <tr>
        <th>Word</th>
        <th>Occurrences</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="line in wordData">
        <td v-for="data in line">{{ data }}</td>
      </tr>
    </tbody>
  </table>
  <h3>Themes Trends</h3>
  <p>
    Based on the previous results, we can extract the five most common words and
    see the evolution of their usage in Baudelaire’s work, here based on slicing
    it in twelve pieces.
    <a href="https://voyant-tools.org">voyant-tools</a> based on the text.
  </p>
  <iframe
    style="width: 100%; height: 500px"
    src="https://voyant-tools.org/tool/Trends/?stopList=keywords-160a56b523ce06d07a80f25c0c59ab07&query=coeur&query=yeux&query=ciel&query=ainsi&query=%C3%A2me&queryamour=&bins=12&mode=document&corpus=6cd79754e0498f746dcb100346e8d116"
  ></iframe>
  <p>
    We can see some changes in the themes in his poems, with the heart not
    playing immediately a major role, though very used during the middle of the
    text. The same goes for all the major themes actually. When taking a look at
    the actual text, I indeed discovered some 1637 words are not part of
    Baudelaire’s poems, but of the introduction to the book by another author.
  </p>
  <h3>Word Tree</h3>
  <p>
    Lastly, I found it interesting to see how some of the major themes were
    related to the text surrounding them. Below you can find what you can
    typically find leading up to the word “eyes”.
  </p>
  <ImageLink src="day2/word-tree.png" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

import ImageLink from "@/components/ImageLink.vue";

const wordData = ref([]);
const rustCode = ref("");

onMounted(async () => {
  try {
    const { data } = await axios.get("day2/word-frequency.csv");
    wordData.value = data
      .trim()
      .split("\n")
      .map((line: string) => {
        return line.split(",");
      });
  } catch (error) {
    console.debug(`Failed to retrieve CSV file: ${error}`);
  }

  try {
    const { data } = await axios.get("day2/filter.rs");
    rustCode.value = data;
  } catch (error) {
    console.debug(`Failed to retrieve Rust file: ${error}`);
  }
});
</script>
