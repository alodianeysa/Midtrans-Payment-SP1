<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS_checkoutNegative-paymentNegative</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>9f8efc34-73ea-4454-8717-4f5203c2a326</testSuiteGuid>
   <testCaseLink>
      <guid>806d1ebc-7004-4d39-bad0-32c224da4551</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Midtrans/TC_navigateToURL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>272411c1-95fa-4895-8a67-f24873769ab5</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Midtrans/TC_checkOutNegative</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>fec8ebba-692a-4f81-a82f-edc64441d37b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Midtrans/TC_paymentNegative</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>cfb74460-f640-4fcb-b8ed-ec8d61a1985b</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-1</value>
         </iterationEntity>
         <testDataId>Data Files/Midtrans/PaymentNegative</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>cfb74460-f640-4fcb-b8ed-ec8d61a1985b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>nomorKartu</value>
         <variableId>e229047e-d2ef-43c8-b6cd-904d97ca6646</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>cfb74460-f640-4fcb-b8ed-ec8d61a1985b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>masaBerlaku</value>
         <variableId>ad2f119c-86e5-4683-b572-b790f79a785b</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>cfb74460-f640-4fcb-b8ed-ec8d61a1985b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>CVV</value>
         <variableId>21a01a61-fba2-499c-87ba-bb523b123017</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>cfb74460-f640-4fcb-b8ed-ec8d61a1985b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>expectedResult</value>
         <variableId>a5f5caf4-02b9-4f2f-ab29-e8c2a24e999e</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
