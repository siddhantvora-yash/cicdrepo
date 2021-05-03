module.exports = function(config) {
  config.set({
   frameworks: ["ui5"],
    
    browsers:["ChromiumHeadless"],
    singleRun: true
  });
};