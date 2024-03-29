import { ExpectedResult, InvocationType } from "@aws-cdk/integ-tests-alpha";
import { IntegTest } from "@aws-cdk/integ-tests-alpha";

export type AssertionTestInput = {
  integ: IntegTest;
};

export const testSimpleStack = ({ integ }: AssertionTestInput) => {
  const simpleLambdaInvocation = integ.assertions.invokeFunction({
    functionName: "simpleLambda",
    invocationType: InvocationType.REQUEST_RESPONE,
    payload: "",
  });

  simpleLambdaInvocation.expect(
    ExpectedResult.objectLike({
      StatusCode: 200,
      ExecutedVersion: "$LATEST",
      Payload: '"Hello, CDK!"',
    })
  );
};
