#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CloudWatchLogsBkupStack } from '../lib/cloud_watch_logs-bkup-stack';

const app = new cdk.App();
new CloudWatchLogsBkupStack(app, 'CloudWatchLogsBkupStack', {
});