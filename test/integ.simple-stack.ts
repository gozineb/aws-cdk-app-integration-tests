import { App } from "aws-cdk-lib";
import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { SimpleStack } from "../lib/simple-stack";
import { testSimpleStack } from "./testsWithAssertions";

const app = new App();
const simpleStack = new SimpleStack(app, "SimpleStackIntegTest");

const integ = new IntegTest(app, "IntegTest", {
  testCases: [simpleStack],
});

testSimpleStack({ integ });

app.synth();
