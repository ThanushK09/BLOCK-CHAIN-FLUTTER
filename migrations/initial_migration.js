const initial_migration = artifacts.require(initial_migration)

module.exports = function(deployer) {
    deployer.deploy(Migrations)
};