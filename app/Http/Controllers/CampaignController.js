'use strict'

const Campaign = use('App/Model/Campaigns')

class CampaignController {

	* createCampaign (req, resp){
		const user  = request.authUser
		const input = req.only('title', 'description') 
		const campaign = yield Campaign.create(input)
		console.log(input)
		yield user.campaigns().save(campaign)
        return response.json(campaign);
	}

	

}

module.exports = CampaignController