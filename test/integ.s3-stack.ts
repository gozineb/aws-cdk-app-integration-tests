import { App } from "aws-cdk-lib";
import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { S3Stack } from "../lib/s3-stack";

const app = new App();
const failingStack = new S3Stack(app, "S3StackIntegTest");

new IntegTest(app, "IntegTest", {
  testCases: [failingStack],
});

app.synth();
