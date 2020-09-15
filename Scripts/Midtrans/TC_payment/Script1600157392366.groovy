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

WebUI.verifyElementPresent(findTestObject('Midtrans/OR_navigateToURL/verify_element'), 0)

WebUI.click(findTestObject('Midtrans/OR_payment/btn_buyNow'))

WebUI.delay(2)

WebUI.click(findTestObject('Midtrans/OR_payment/btn_checkOut'))

WebUI.click(findTestObject('Midtrans/OR_payment/btn_continue'))

WebUI.click(findTestObject('Midtrans/OR_payment/btn_kartuKredit'))

WebUI.verifyElementPresent(findTestObject('Midtrans/OR_payment/txt_orderID'), 0)

WebUI.setText(findTestObject('Midtrans/OR_payment/txt_nomorKartu'), '4811 1111 1111 1114')

WebUI.setText(findTestObject('Midtrans/OR_payment/txt_masaBerlaku'), '0125')

WebUI.setText(findTestObject('Midtrans/OR_payment/txt_CVV'), '123')

WebUI.click(findTestObject('Midtrans/OR_payment/btn_bayarSekarang'))

WebUI.setText(findTestObject('Midtrans/OR_payment/txt_banksOTP'), '112233')

WebUI.click(findTestObject('Midtrans/OR_payment/btn_OK'))

