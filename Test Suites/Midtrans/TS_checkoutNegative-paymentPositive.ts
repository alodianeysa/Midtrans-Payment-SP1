<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS_checkoutNegative-paymentPositive</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>2aa91390-64a9-41b5-b79e-b038825ae04a</testSuiteGuid>
   <testCaseLink>
      <guid>085b73c1-4752-4002-9bd4-9a9cbe612bd9</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Midtrans/TC_navigateToURL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>ab009f9f-8f62-4014-b8e0-46f944920cd0</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Midtrans/TC_checkOutNegative</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>03a5077d-b764-4f61-b156-e19c55f4cbe3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Midtrans/TC_payment - Copy</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>7b75a52f-08fd-4f1f-9ad9-65ecf3232505</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-1</value>
         </iterationEntity>
         <testDataId>Data Files/Midtrans/Payment</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>7b75a52f-08fd-4f1f-9ad9-65ecf3232505</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>nomorKartu</value>
         <variableId>480dd462-d21f-4cf2-a4dd-974d998db711</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>7b75a52f-08fd-4f1f-9ad9-65ecf3232505</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>masaBerlaku</value>
         <variableId>66e5f6ca-27da-4b11-8400-4db5b59e0e65</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>7b75a52f-08fd-4f1f-9ad9-65ecf3232505</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>CVV</value>
         <variableId>3b514cfe-f484-4a77-b4e1-d09142dbef14</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
