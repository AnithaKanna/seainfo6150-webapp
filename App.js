import React, { Component } from 'react';
import Article from './Article';


class App extends Component {
  constructor(props) {
  super(props);
    this.state = { title: <q>The Statue of Liberty is torch heads to new museum</q>,
                   author: "Kate Farley",
                   date: "Novemeber 22,2018"};
  }
    render() {
      return (

        <div>

        <Article title={this.state.title} author={this.state.author} date={this.state.date}>

         <div id="text">
          <article>
          <p>The Statue of Liberty's original torch is getting a new home.</p>
          <p>Made of copper and gold so that it would shine bright, the first torch took a beating from the weather and was replaced by a replica in 1984.</p>
          <p>It's been stored in the statue's pedestal ever since.</p>
          <p>But visitors will be able to see the original 3,600-pound torch in all its glory at a new Statue of Liberty Museum, which will open on Liberty Island in May 2019.</p>
          <p>The torch was transported there by truck last week, along with a replica model of Lady Liberty's face.</p>
          <p> <q>Although it is not one of the most difficult things we have ever moved,</q> says Douglas Phelps, who oversaw the relocation of the torch, <q>it is certainly the most important.</q> </p>
          <p>Not only is the Statue of Liberty the symbol of New York City, she is also a UNESCO World Heritage site under the designation of <q>Outstanding Universal Value.</q></p>
          <p>Her full name is Liberty Enlightening the World, and she was designed by Frederic Auguste Bartholdi and built by Gustave Eiffel -- yes, the same guy who built Paris's Eiffel Tower.</p>
          <p>Lady Liberty was a gift from France to the United States to celebrate the centennial of their nation's independence -- although, somewhat awkwardly, she arrived a decade too late. Nevertheless, President Grover Cleveland formally unveiled her in 1886.</p>
          <p>Since then, the statue has served as a symbol of hope and possibility for many people who entered the United States as immigrants via neighboring Ellis Island.</p>
          <p><q>The original torch is a beautiful object of art and exemplifies the American ideals of freedom and democracy,</q>says John Piltzecker, superintendent of the Statue of Liberty National Monument. That symbolic spirit was bolstered by the decision to inscribe Emma Lazarus' poem<q>The New Colossus</q> on the statue's pedestal, which gave Lady Liberty one of her nicknames, <q>Mother of Exiles.</q></p>
          <p>The most famous lines in the poem are: <q>Give me your tired, your poor / Your huddled masses yearning to breathe free.</q></p>
          <p>In 2017, nearly 4.5 million people visited Liberty Island.</p>
          <p>When completed, the Statue of Liberty Museum will be 26,000 square feet of history, inspiration and deeper analysis of the statue's symbolism both in the US and around the world.</p>
          <p>The <q>inspiration gallery,</q> which is where the torch will live, will have floor-to-ceiling glass windows looking out at Lower Manhattan, including the World Trade Center. </p>
          </article>
         </div>
         </Article>

      </div>
    );
  }
}

export default App;
