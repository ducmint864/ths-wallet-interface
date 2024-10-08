import { WalletInfo } from "./core";

/**
 * Extends the WalletInfo interface to represent a wallet account data transfer object.
 */
export interface WalletAccountDTO extends WalletInfo {
	/**
	 * Unique identifier of the wallet account.
	 */
	walletAccountId?: string,

	/**
	 * Unique identifier of the user account associated with this wallet.
	 */
	userAccountId?: string,

	/**
	 * Order of the wallet in the user's wallet list.
	 * @optional
	 */
	walletOrder?: number,

	/**
	 * Nickname given to the wallet by the user (Only visible to the wallet owner)
	 * @optional
	 */
	nickname?: string,

	/**
	 * Indicates whether this wallet is the main wallet for the user.
	 * @optional
	 */
	isMainWallet?: boolean,
}