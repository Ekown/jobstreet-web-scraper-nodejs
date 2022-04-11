const scraperObject = {
	url: 'https://www.jobstreet.com.ph/en/job-search/software-engineer-jobs/1/?createdAt=14d&job-type=full_time&salary=40000&salary-max=2147483647&specialization=508',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		
	}
}

module.exports = scraperObject;