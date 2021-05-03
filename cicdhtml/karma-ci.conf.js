module.exports = function(config) {
  config.set({
   frameworks: ["ui5"],
    // frameworks: ["ui5", "qunit", "sinon"],
//    frameworks: ["ui5", "qunit"],
//     ui5: {
//       url: "https://sapui5.hana.ondemand.com",
//       mode: "script",
//       config: {
//         async: true,
//         resourceRoots: {
//           "sap.ui.demo.todo": "/webapp"
//         }
//       },
//       tests: [
//         "sap/ui/demo/todo/test/unit/AllTests",
//         "sap/ui/demo/todo/test/integration/AllJourneys"
//       ]
//     },
    browsers:["ChromiumHeadless"],
    singleRun: true
  });
};