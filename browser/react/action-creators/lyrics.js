import {SET_LYRICS} from '../constants.js';

export function setLyrics(text){

	return (
		{
			type: SET_LYRICS,
			lyric: text
		}
	)

}

export const fetchLyrics = function (artist, song){
	return function (dispatch, getState){
		axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
            .then(response => {
              const setLyricsAction = setLyrics(response.data.lyric);
              store.dispatch(setLyricsAction);           
            });
	}
}
