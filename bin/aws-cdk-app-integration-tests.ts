#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { S3Stack } from "../lib/s3-stack";
import { SimpleStack } from "../lib/simple-stack";

const app = new cdk.App();
new S3Stack(app, "RealS3Stack", {});
new SimpleStack(app, "SimpleStack", {});
