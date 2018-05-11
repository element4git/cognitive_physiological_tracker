/**
 * Emotion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		emotion : {
			type:'string',
			enum: ['affection', 'lust','longing','cheerfulness','zest','contentment','pride','optimisim','enthrallment','relief','surprise','irritation','exasperation','rage','disgust','envy','torment','suffering','sadness','disappointment','shame','neglect','sympathy','horror','nervousness'],
    		unique: true,
			required:true
		},
		primary : {
			type:'string',
			enum: ['love','joy','surprise','anger','sadness','fear'],
			required:true
		}
	}
};