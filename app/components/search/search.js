import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SearchSearchComponent extends Component {
constructor(...args){
    super(...args);
    this.userTerm = "";
}
  @action doSomething() {
    alert(this.userTerm);
  }
}
