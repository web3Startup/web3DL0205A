// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import '@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';

contract ETHx is Initializable, ERC20Upgradeable, PausableUpgradeable, AccessControlUpgradeable {
    event UpdatedStaderConfig(address indexed _staderConfig);

//    IStaderConfig public staderConfig;
    bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');
    bytes32 public constant BURNER_ROLE = keccak256('BURNER_ROLE');

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

//    function initialize(address _admin, address _staderConfig) external initializer {
//        UtilLib.checkNonZeroAddress(_admin);
//        UtilLib.checkNonZeroAddress(_staderConfig);
//
//        __ERC20_init('ETHx', 'ETHx');
//        __Pausable_init();
//        __AccessControl_init();
//
//        staderConfig = IStaderConfig(_staderConfig);
//        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
//        emit UpdatedStaderConfig(_staderConfig);
//    }
//
//    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) whenNotPaused {
//        _mint(to, amount);
//    }
//
//    function burnFrom(address account, uint256 amount) external onlyRole(BURNER_ROLE) whenNotPaused {
//        _burn(account, amount);
//    }
}
