declare type NetworkNames = 'MAINNET' | 'RINKEBY';
declare type NetworkIDs = '1' | '4';
declare const Networks: Record<NetworkNames, NetworkIDs>;
export { Networks };
export type { NetworkIDs };
