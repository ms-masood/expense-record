export function fetchRecordsPass(payload){
	return{
		type: 'FETCH_RECORDS_PASS',
		payload
	}
}

export function fetchRecordsFail(payload){
	return{
		type: 'FETCH_RECORDS_FAIL',
		payload
	}
}

export function addRecordPass(payload){
	return{
		type: 'ADD_RECORD_PASS',
		payload
	}
}

export function addRecordPFail(payload){
	return{
		type: 'ADD_RECORD_FAIL',
		payload
	}
}