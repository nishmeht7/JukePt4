import {SET_LYRICS} from '../constants.js';

export function setLyrics(text){

	return (
		{
			type: SET_LYRICS,
			lyric: text
		}
	)

}
