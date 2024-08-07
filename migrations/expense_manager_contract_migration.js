const expense_manager_contract_migration = artifacts.require(expense_manager_contract_migration)

module.exports = function(deployer) {
    deployer.deploy(ExpenseManagerContract);
};