import request from 'superagent'

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	case 'GET_MAKES':
		request
			.get('data/makes.json')
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
					type: 'GET_MAKES_RECEIVED',
					data
				})
			})
		break

	case 'GET_MODELS':
		request
			.get('data/models.json')
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
					type: 'GET_MODELS_RECEIVED',
					data
				})
			})
		break

	case 'GET_CAROFWEEK':
		request
			.get('data/carOfTheWeek.json')
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
					type: 'GET_CAR_OF_WEEK_RECEIVED',
					data
				})
			})
		break

	default:
		break
	}

};

export default dataService