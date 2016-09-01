# apps-scripts-adwords-scripts-jshintrc-jscsrc

A useful pair of [JSHint](http://jshint.com/docs/) and
[JSCS](http://jscs.info/) configurations for use with Google’s
[Apps Script](https://developers.google.com/apps-script/) and
[AdWords Scripts](https://developers.google.com/adwords/scripts/).

## Requirements

Install JSHint and JSCS with the ```npm``` command from your terminal.
This assumes that you have installed [Node.js](https://nodejs.org/en/download/).

```bash
$ npm install -g jshint
$ npm install -g jscs
```

## Usage

Copy the two configuration files ```.jshintrc``` for JSHint and ```.jscsrc``` for JSCS
into the same folder where your Apps Scripts or AdWords Scripts files live.
Then run…

```bash
$ jshint example_bad.js
```

…and…

```bash
$ jscs example_bad.js
```

…to find a lot of problems in ```example_bad.js```…

```javascript
/**
 * A bad example with errors
 */
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
```

…to eventually turn it into ```example_good.js```…

```javascript
/**
 * A good example without errors
 */
function main() {
  var report = AdWordsApp.report(
      'SELECT CampaignName, Clicks, Impressions, Cost ' +
      'FROM CAMPAIGN_PERFORMANCE_REPORT ' +
      'WHERE Impressions < 10 ' +
      'DURING LAST_30_DAYS');

  var rows = report.rows();
  while (rows.hasNext()) {
    var row =  rows.next();
    var campaignName = row.CampaignName;
    var clicks = row.Clicks;
    var impressions = row.Impressions;
    var cost = row.Cost;
    Logger.log(campaignName + ',' + clicks + ',' + impressions + ',' + cost);
  }
}

```

## License

Copyright 2016 Thomas Steiner (@tomac@google.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
