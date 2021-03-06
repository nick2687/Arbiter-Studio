/**
 * Created by dinos on 10/07/15.
 */
Blaze._allowJavascriptUrls();
/** Rendered Initialisation */
Template._defaultLayout.onRendered(function () {
	var tpl = this;
	// tpl.$(".fooJqueryPlugin").initialise()
	//INIT PAGES : API CALLS
	$('[data-pages="sidebar"]').sidebar();
	//Pages Progress Bar API
	$('[data-pages-progress="circle"]').each(function() {
		var $progress = $(this);
		$progress.circularProgress($progress.data())
	});
});


Template._defaultLayout.helpers({
	// Register template helpers with arguments {{foo "John" "Doe" title="President"}}
	// foo: function (first, last, keyword) { return keyword.hash.title + firstName + " " + lastName; }
	authInProcess: function() {
	    return Meteor.loggingIn();
	  },
	  canShow: function() {
	    return !!Meteor.user();
	  }


});


/** jQuery Events */

 /*
Template._defaultLayout.events({
	// Fires when 'accept' is clicked or focused, or a key is pressed
	// 'click .accept, focus .accept, keypress': function (event) { ... }

});
*/

/** Set-Up Subscriptions and Registrations */
 /*
Template._defaultLayout.onCreated(function () {
	var tpl = this;
	// set up subscriptions, local reactive variables, registrations
	// tpl.subscribe("notifications");
});
*/


/** De-Registrations */

 /*
Template._defaultLayout.onDestroyed(function () {
	var tpl = this;
	// de-registration

  });
*/
