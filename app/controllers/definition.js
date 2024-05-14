import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';


export default class DefinitionController extends Controller {
    queryParams = ['term'];
    @tracked term = null;
}
