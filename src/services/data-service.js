import request from 'superagent'

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	case 'GET_DATA':
        console.log('make request..')
		request
			.get('data/store.json')
			.end((err, res) => {
				if (err) {
					return next({
						type: 'GET_DATA_ERROR',
						err
					})
				}
				const data = JSON.parse(res.text)
				console.log(data)
				next({
					type: 'GET_DATA_RECEIVED',
					data
				})
			})
		break
	default:
		break
	}

};

export default dataService