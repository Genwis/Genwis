/**
 * Created by iampamungkas on 7/24/17.
 */
import  Axios  from 'axios'
export const SELECT_DETAIL = 'SELECT_DETAIL'


export function selectDetail(detail) {
    return {
        type: SELECT_DETAIL,
        detail
    }
}

