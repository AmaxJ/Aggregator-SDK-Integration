### Overview

This document outlines the process of integrating an exchange into the Rage aggregator. Each integration involves implementing various functions tailored to the specific requirements of the exchange. We'll first examine the configurations available for each exchange, followed by the functionalities that need to be implemented.

### Configurations

Configurations are defined within the return type of the function `getProtocolInfo`. This includes the following variables:

- **hasAgent**: Indicates whether an agent needs to be created before transactions can occur. For example, exchanges like Hyperliquid, Aevo, and Dydx require setting up different agents via APIs for transactions, whereas GMX does not necessitate this step.

- **hasAccount**: Indicates whether funds can be deposited into the protocol without any open position. This means deposit/withdrawal and open/close position are handled separately. For instance, in Hyperliquid/Dydx, this is true as you need to deposit funds into the account first and then execute trades separately. In GMX, funds transfer and position changes occur together.

- **hasOrderbook**: Indicates whether the protocol is orderbook based.

- **sizeDeltaInToken**: Indicates whether the protocol accepts size delta of position changes in token terms (True) or in dollar terms (False).

- **explicitFundingClaim**: Indicates whether funding needs to be claimed separately.

- **collateralDeltaInToken**: Indicates whether the protocol requires collateral delta/margin delta of position changes in token terms (True) or in dollar terms (False).

- **collateralUsesLimitPricing**: Indicates whether the collateral valuation uses limit price while opening limit orders (True) or mark price (False).

- **depositData**: Defined only for protocols where `hasAccount` is true. Describes the collateral tokens and chains from which deposits can be made.

Enhancing readability and clarity in documentation can greatly improve user experience and understanding. Let me know if you need further assistance refining any other sections!
