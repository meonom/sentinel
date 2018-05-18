webpackJsonp([5],{1516:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=n(77),i=l(r),c=n(3),a=l(c),o=n(2),u=n(1),d=n(4),m=n(8);e.exports=u.createClass({displayName:"EncryptedEventDialog",propTypes:{event:a.default.object.isRequired,onFinished:a.default.func.isRequired},getInitialState:function(){return{device:null}},componentWillMount:function(){var e=this;this._unmounted=!1;var t=m.get();this.refreshDevice().then(function(n){return n?n:t.downloadKeys([e.props.event.getSender()],!0).then(function(){return e.refreshDevice()})}).then(function(n){e._unmounted||(e.setState({device:n}),t.on("deviceVerificationChanged",e.onDeviceVerificationChanged))},function(e){console.log("Error downloading devices",e)})},componentWillUnmount:function(){this._unmounted=!0;var e=m.get();e&&e.removeListener("deviceVerificationChanged",this.onDeviceVerificationChanged)},refreshDevice:function(){return i.default.resolve(m.get().getEventSenderDeviceInfo(this.props.event))},onDeviceVerificationChanged:function(e,t){var n=this;e==this.props.event.getSender()&&this.refreshDevice().then(function(e){n.setState({device:e})})},onKeyDown:function(e){27===e.keyCode&&(e.stopPropagation(),e.preventDefault(),this.props.onFinished(!1))},_renderDeviceInfo:function(){var e=this.state.device;if(!e)return u.createElement("i",null,(0,o._t)("unknown device"));var t=u.createElement("b",null,(0,o._t)("NOT verified"));return e.isBlocked()?t=u.createElement("b",null,(0,o._t)("Blacklisted")):e.isVerified()&&(t=(0,o._t)("verified")),u.createElement("table",null,u.createElement("tbody",null,u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Name")),u.createElement("td",null,e.getDisplayName())),u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Device ID")),u.createElement("td",null,u.createElement("code",null,e.deviceId))),u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Verification")),u.createElement("td",null,t)),u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Ed25519 fingerprint")),u.createElement("td",null,u.createElement("code",null,e.getFingerprint())))))},_renderEventInfo:function(){var e=this.props.event;return u.createElement("table",null,u.createElement("tbody",null,u.createElement("tr",null,u.createElement("td",null,(0,o._t)("User ID")),u.createElement("td",null,e.getSender())),u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Curve25519 identity key")),u.createElement("td",null,u.createElement("code",null,e.getSenderKey()||u.createElement("i",null,(0,o._t)("none"))))),u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Claimed Ed25519 fingerprint key")),u.createElement("td",null,u.createElement("code",null,e.getKeysClaimed().ed25519||u.createElement("i",null,(0,o._t)("none"))))),u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Algorithm")),u.createElement("td",null,e.getWireContent().algorithm||u.createElement("i",null,(0,o._t)("unencrypted")))),"m.bad.encrypted"===e.getContent().msgtype?u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Decryption error")),u.createElement("td",null,e.getContent().body)):null,u.createElement("tr",null,u.createElement("td",null,(0,o._t)("Session ID")),u.createElement("td",null,u.createElement("code",null,e.getWireContent().session_id||u.createElement("i",null,(0,o._t)("none")))))))},render:function(){var e=d.getComponent("elements.DeviceVerifyButtons"),t=null;return this.state.device&&(t=u.createElement(e,{device:this.state.device,userId:this.props.event.getSender()})),u.createElement("div",{className:"mx_EncryptedEventDialog",onKeyDown:this.onKeyDown},u.createElement("div",{className:"mx_Dialog_title"},(0,o._t)("End-to-end encryption information")),u.createElement("div",{className:"mx_Dialog_content"},u.createElement("h4",null,(0,o._t)("Event information")),this._renderEventInfo(),u.createElement("h4",null,(0,o._t)("Sender device information")),this._renderDeviceInfo()),u.createElement("div",{className:"mx_Dialog_buttons"},u.createElement("button",{className:"mx_Dialog_primary",onClick:this.props.onFinished,autoFocus:!0},(0,o._t)("OK")),t))}})}});
//# sourceMappingURL=5.js.map