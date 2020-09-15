import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable



WebUI.click(findTestObject('Midtrans/OR_payment/btn_continue'))

WebUI.delay(2)

WebUI.click(findTestObject('Midtrans/OR_paymentATM/btn_ATM'))

WebUI.click(findTestObject('Midtrans/OR_paymentATM/btn_BCA'))

WebUI.verifyElementPresent(findTestObject('Midtrans/OR_paymentATM/verify_BCA ATM'), 0)

WebUI.click(findTestObject('Midtrans/OR_paymentATM/btn_seeAccountNumber'))

WebUI.verifyElementPresent(findTestObject('Midtrans/OR_paymentATM/verify_accountNumber'), 0)

WebUI.click(findTestObject('Midtrans/OR_paymentATM/btn_completePayment'))

WebUI.verifyElementPresent(findTestObject('Midtrans/OR_paymentATM/verify_complete'), 0)

