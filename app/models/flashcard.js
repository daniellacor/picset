import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  imgURL: attr('string'),
  shutterSpeed: attr('integer'),
  aperture: attr('integer'),
  score: attr('integer'),
  lesson: belongsTo('lesson')
});
