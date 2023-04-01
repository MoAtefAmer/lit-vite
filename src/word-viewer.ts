import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import style from './tailwind.global.css?inline';

const tailwindElement = unsafeCSS(style);

@customElement('word-viewer')
export class WordViewer extends LitElement {
  static styles = [tailwindElement];


// state gives it reacativity and triggers a rerender to show the changes on the html
 @state() private idx =0;
 @state() private playDirection =1;

  @property() word: string = '';

// since it doesnt have an effect on visuals it doesnt need reactivity
 private intervalTimer?:number

  override connectedCallback(): void {
      super.connectedCallback();
      this.intervalTimer = setInterval(this.tickToNextWord,1000)
  }



  render() {
    const classes = {
      'bg-violet-400':this.playDirection === -1,
      'text-white':this.playDirection === -1
    }

    const classString = classMap(classes)
    const splitWords = this.word.split('.')
    return html`
    <div class="text-violet-400 cursor-pointer p-3 block ">
      <p class=${classString} @click = ${this.switchPlayDirection} >  
       ${splitWords[((this.idx % splitWords.length) + splitWords.length) % splitWords.length]} </p>
      </div>
   
      
    
    `;
  }

  tickToNextWord = () => {this.idx+=this.playDirection}



  switchPlayDirection = () =>{
    this.playDirection*=-1
  }

}



declare global {
  interface HTMLElementTagNameMap {
    'word-viewer': WordViewer;
  }
}
