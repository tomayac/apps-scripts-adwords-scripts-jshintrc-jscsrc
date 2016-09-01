function main(){
  var report = AdWordsApp.report('SELECT CampaignName, Clicks, Impressions, Cost FROM CAMPAIGN_PERFORMANCE_REPORT WHERE Impressions < 10 DURING LAST_30_DAYS');

  var rows = report.rows();
  while(rows.hasNext()) {
    row =  rows.next();
    var campaign_name = row['CampaignName']
    var clicks = row['Clicks'];
    var impressions = row.Impressions
    var cost = row['Cost'];
    Logger.log(campaignName +',' + clicks + ',' + impressions + ',' + cost);
  }
}