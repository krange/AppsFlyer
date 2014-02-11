package org.apache.cordova.appsflyer;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.appsflyer.AppsFlyerLib;

import android.util.Log;

public class AppsFlyerPlugin extends CordovaPlugin {
	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if ("notifyAppID".equals(action)) 
		{
			notifyAppID(args);
			return true;
		} else if("setCurrencyId".equals(action))
		{
			setCurrencyId(args);
			return true;
		}
		else if("setCustomeUserId".equals(action))
		{
			setCustomeUserId(args);
			return true;
		}
		return false;
	}
	
	
	private void setCurrencyId(JSONArray parameters)
	{
		String currencyId=null;
		try
		{
			currencyId = parameters.getString(0);
		}
		catch (JSONException e) 
		{
			e.printStackTrace();
			return;
		}
		if(currencyId == null || currencyId.length()==0)
		{
			return;
		}
		AppsFlyerLib.setCurrencyCode(currencyId);
	
	}
	
	private void setCustomeUserId(JSONArray parameters)
	{
		String customeUserId=null;
		try
		{
			customeUserId = parameters.getString(0);
		}
		catch (JSONException e) 
		{
			e.printStackTrace();
			return;
		}
		if(customeUserId == null || customeUserId.length()==0)
		{
			return;
		}
		AppsFlyerLib.setAppUserId(customeUserId);
	
	}
	
	
	
	private void notifyAppID(JSONArray parameters) {	
		String appId = null;
		String devKey = null;
		String eventName = null;
		String eventValue = null;
		
		try {
			appId = parameters.getString(0);
		} catch (JSONException e) {
			e.printStackTrace();
			return;
		}
		
		try {
			devKey = parameters.getString(1);
		} catch (JSONException e) {
			e.printStackTrace();
			return;
		}

		try {
			if (parameters.length() > 2) {
				eventName = parameters.getString(2);
				eventValue = parameters.getString(3);
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		if (eventName != null && eventName != "null" && eventName.length() > 0) {
			AppsFlyerLib.sendTrackingWithEvent(this.cordova.getActivity().getApplicationContext(), devKey, eventName, eventValue);
		} else {
			AppsFlyerLib.sendTracking(this.cordova.getActivity().getApplicationContext(), devKey);
		}
	}
}
