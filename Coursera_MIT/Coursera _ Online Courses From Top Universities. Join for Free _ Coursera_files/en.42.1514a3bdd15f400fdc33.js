webpackJsonp([42],{"0Qti":function(module,exports,t){"use strict";var e=t("5Cl+"),n=t("1CBJ");module.exports=function(t){var o=new n(t),r={fields:["description","offlineInstructions","contentPath"]};return o.getWithUserCourseItemId(e.descriptionsApi,r).then(function(t){return t.elements[0]})}},"1+TI":function(module,exports,t){"use strict";function _defaults(t,e){for(var n=Object.getOwnPropertyNames(e),o=0;o<n.length;o++){var r=n[o],a=Object.getOwnPropertyDescriptor(e,r);a&&a.configurable&&void 0===t[r]&&Object.defineProperty(t,r,a)}return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var e,n,o=t("S2Uf"),r=t("U7vG"),a=t("PofJ"),s=t("SQqX"),i=t("FQrE"),c=t("z8rw"),u=t("n7sr"),l=t("IthV"),p=t("8OiH"),f=t("hgxZ"),d=t("44dO"),h=t("p2kh"),m=t("AHB1"),b=(n=e=function(t){function NotebookWorkspaceItem(e){_classCallCheck(this,NotebookWorkspaceItem);var n=_possibleConstructorReturn(this,t.call(this,e));return n.state={descriptionData:null,ownsCourse:null},n}return _inherits(NotebookWorkspaceItem,t),NotebookWorkspaceItem.prototype.componentDidMount=function componentDidMount(){this.fetchData(),p.setMetatags({pageName:"title-and-description",context:{title:this.props.itemMetadata.getName(),description:this.props.itemMetadata.get("lesson.module.description")}})},NotebookWorkspaceItem.prototype.fetchData=function fetchData(){var t=this,e=this.props,n=e.courseId,r=e.itemMetadata;o.all([i({itemMetadata:r}),d(f.get().id,n)]).spread(function(e,n){t.setState({descriptionData:e,ownsCourse:n.get("owns")})}).done()},NotebookWorkspaceItem.prototype.render=function render(){var t=this.props.itemMetadata,e=this.state,n=e.descriptionData,o=e.ownsCourse;return r.createElement("div",{className:"rc-NotebookWorkspaceItem"},r.createElement(u,{itemMetadata:t,itemType:a.Notebook,isCard:!0},n?r.createElement(s,{itemMetadata:t,descriptionData:n,ownsCourse:o}):r.createElement(c,null)))},NotebookWorkspaceItem}(r.Component),e.propTypes={courseId:r.PropTypes.string.isRequired,itemMetadata:r.PropTypes.instanceOf(m).isRequired},n);module.exports=h(l(b),["CourseStore"],function(t){return{courseId:t.CourseStore.getCourseId()}})},"5Cl+":function(module,exports,t){"use strict";module.exports={descriptionsApi:"onDemandNotebookWorkspaceDescriptions.v1",launchesApi:"onDemandNotebookWorkspaceLaunches.v1"}},"6TXw":function(module,exports,t){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _=t("41m7"),e=t("jUn9"),n=function LaunchData(t){_classCallCheck(this,LaunchData),e(t,"LaunchData constructed with no arguments"),e(t.itemMetadata,"LaunchData given no metadata"),Object.assign(this,_(t).pick("id","itemId","courseId","authorizationId","useLegacySystem"))};module.exports=n},"9lNn":function(module,exports,t){"use strict";var e=t("S2Uf"),n=t("WKaP"),o=t("6TXw");module.exports=function(t){var e=t.userId,r=t.itemMetadata,a=r.get("course").get("id"),s=r.get("id");return n(r,a,s,e).then(function(t){return t.body.elements[0]}).then(function(e){return new o(Object.assign({},t,e))})}},FQrE:function(module,exports,t){"use strict";var e=t("S2Uf"),n=t("0Qti"),o=t("uQRo"),r=t("nmvT");module.exports=function(t){return r.get("authenticated")?n(t.itemMetadata).then(function(e){return new o(Object.assign({},t,e))}):e({})}},KGOy:function(module,exports,t){var e=t("Roe5");"string"==typeof e&&(e=[[module.i,e,""]]);var n,o={};o.transform=void 0;var r=t("MTIv")(e,o);e.locals&&(module.exports=e.locals)},Roe5:function(module,exports){},SQqX:function(module,exports,t){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _defaults(t,e){for(var n=Object.getOwnPropertyNames(e),o=0;o<n.length;o++){var r=n[o],a=Object.getOwnPropertyDescriptor(e,r);a&&a.configurable&&void 0===t[r]&&Object.defineProperty(t,r,a)}return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var e,n,o,r,a=t("HQkx"),s=_interopRequireDefault(a),_=t("41m7"),i=t("U7vG"),c=t("SfBx"),u=t("RmY2"),l=t("h/c7"),p=l.TrackedA,f=t("I8Ec"),d=t("USna"),h=t("p2kh"),m=t("9lNn"),b=t("n3uV");t("KGOy");var k={V0:"https://jupyterhub.coursera-notebooks.org/hub/coursera_login",V1:"https://hub.coursera-notebooks.org/hub/coursera_login"},y=(n=e=function(t){function OfflineInstructions(e){_classCallCheck(this,OfflineInstructions);var n=_possibleConstructorReturn(this,t.call(this,e));return n.show=function(){n.setState({showInstructions:!0})},n.hide=function(){n.setState({showInstructions:!1})},n.render=function(){var t=n.props.offlineInstructions;return i.createElement("div",{className:"launcher-offlineInstructions"},!n.state.showInstructions&&i.createElement("button",{className:"button-link",onClick:n.show},b("Show offline instructions")),n.state.showInstructions&&i.createElement("div",null,i.createElement(u,{assumeStringIsHtml:!1,content:t}),i.createElement("button",{className:"button-link",onClick:n.hide},b("Hide offline instructions"))))},n.state={showInstructions:!1},n}return _inherits(OfflineInstructions,t),OfflineInstructions}(i.Component),e.propTypes={offlineInstructions:i.PropTypes.object.isRequired},n),g=(r=o=function(t){function NotebookWorkspaceLauncher(e){_classCallCheck(this,NotebookWorkspaceLauncher);var n=_possibleConstructorReturn(this,t.call(this,e));return n.refreshLaunchData=function(){var t=n.props,e=t.itemMetadata,o=t.userId;m({itemMetadata:e,userId:o}).then(function(t){return n.setState({launchData:t})})},n.state={launchData:null},n.refreshLaunchData(),n}return _inherits(NotebookWorkspaceLauncher,t),NotebookWorkspaceLauncher.prototype.render=function render(){var t=this.props,e=t.itemMetadata,n=t.descriptionData,o=t.courseSlug,r=this.state.launchData,a=null;return r&&(a=new f(r.useLegacySystem?k.V0:k.V1),a.addQueryParam("token",r.authorizationId),n.contentPath&&a.addQueryParam("next",n.contentPath)),i.createElement("div",{className:"rc-NotebookWorkspaceLauncher"},i.createElement("h2",{className:"title"},e.getName()),i.createElement("div",{className:"launcher-description"},i.createElement(u,{assumeStringIsHtml:!1,content:n.description})),n.offlineInstructions&&i.createElement(y,{offlineInstructions:n.offlineInstructions}),i.createElement("hr",null),a&&!e.isPremiumGradingLocked()&&i.createElement(p,{trackingName:"open_notebook_button",className:"bt3-btn bt3-btn-primary",href:a.toString(),target:"_blank",onClick:this.refreshLaunchData},i.createElement(c,{name:"external-link"}),"  ",b("Open Notebook")),e.isPremiumGradingLocked()&&i.createElement(s.default,{itemMetadata:e}),!a&&!e.isPremiumGradingLocked()&&i.createElement("button",{className:"bt3-btn bt3-btn-primary",disabled:!0},i.createElement(c,{name:"spinner",spin:!0}),"  ",b("Open Notebook")))},NotebookWorkspaceLauncher}(i.Component),o.propTypes={itemMetadata:i.PropTypes.object.isRequired,courseSlug:i.PropTypes.string.isRequired,descriptionData:i.PropTypes.object.isRequired,userId:i.PropTypes.number},r);module.exports=_.compose(d(function(t){return{courseSlug:t.params.courseSlug}}),h(["ApplicationStore"],function(t){return{userId:t.ApplicationStore.getUserData().id}}))(g)},WJGf:function(module,exports,t){"use strict";exports.default={"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},WKaP:function(module,exports,t){"use strict";var e=t("5Cl+"),n=t("1CBJ");module.exports=function(t,o,r,a){var s=new n(t),i={learnerId:a,courseId:o,itemId:r},c={fields:["authorizationId","contentPath","useLegacySystem"]},u=!1;return s.create(e.launchesApi,i,c,!1)}},n3uV:function(module,exports,t){var e=t("WJGf"),n=e.default?e.default:{},o=t("L3lR"),r=o(n);r.getLocale=function(){return"en"},module.exports=r},uQRo:function(module,exports,t){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _=t("41m7"),e=t("jUn9"),n=function DescriptionData(t){_classCallCheck(this,DescriptionData),e(t,"DescriptionData constructed with no arguments"),e(t.itemMetadata,"DescriptionData given no metadata"),Object.assign(this,_(t).pick("id","itemId","courseId","description","offlineInstructions","contentPath"))};module.exports=n}});
//# sourceMappingURL=en.42.1514a3bdd15f400fdc33.js.map